import axios from 'axios'
import { Client, dropsToXrp, rippleTimeToUnixTime } from 'xrpl'

export const fetchBalance = async (
  client: Client,
  address: string,
): Promise<number> => {
  const accountInfo = await client.request({
    command: 'account_info',
    account: address,
  })
  const balance = dropsToXrp(accountInfo.result.account_data.Balance || '0')
  // const ownerCount = accountInfo.result.account_data.OwnerCount || 0;
  return balance - 10
}

const memconfig = { accountMetaExpirationInSeconds: 60 }
class MemoryCache {
  private cache: Record<string, any> = {}

  async getOrCreate(
    key: string,
    creator: () => Promise<any>,
    expirationInSeconds: number,
  ) {
    if (this.cache[key]) {
      return this.cache[key]
    }

    const value = await creator()
    this.cache[key] = value

    setTimeout(() => {
      delete this.cache[key]
    }, expirationInSeconds * 1000)

    return value
  }
}

type ThirdPartyProfile = {
  source: string
  accountAlias: string
}
type XummProfile = {
  accountAlias: string
}
export type AccountMeta = {
  avatar: string
  account: string
  xummProfile: XummProfile
  thirdPartyProfiles: ThirdPartyProfile[]
}

const memoryCache = new MemoryCache()

export const getAccountMetaAsync = async (
  account: string,
): Promise<AccountMeta> => {
  try {
    const cacheEntry = await memoryCache.getOrCreate(
      `AM-${account}`,
      async () => {
        const response = await axios.get(
          `https://xumm.app/api/v1/platform/account-meta/${account}`,
        )
        return response.data
      },
      memconfig.accountMetaExpirationInSeconds,
    )
    return {
      ...cacheEntry,
    } as AccountMeta
  } catch (error: any) {
    console.error(`Failed to get account meta of account ${account}.`, error)
    return null
  }
}

export const fetchContributors = async (
  client: Client,
  address: string,
): Promise<any[]> => {
  const accountTxns = await client.request({
    command: 'account_tx',
    account: address,
    limit: 100,
  })

  const txns =
    accountTxns.result.transactions.map((tx: any) => tx.tx_json) || []
  const _txns = txns.filter(
    (tx: any) => tx.TransactionType === 'Payment' && Number(tx.DeliverMax) > 1,
  )
  const promises = _txns
    .sort((a: any, b: any) => b.date - a.date)
    .slice(0, 3)
    .map(async (tx: any) => {
      const accountProfile = await getAccountMetaAsync(tx.Account)
      return {
        account: accountProfile.account,
        avatar: accountProfile.avatar,
        name:
          accountProfile.thirdPartyProfiles.length > 0
            ? accountProfile.thirdPartyProfiles[0].accountAlias
            : 'Unknown',
        amount: dropsToXrp(tx.DeliverMax),
        timestamp: rippleTimeToUnixTime(tx.date),
      }
    })
  return Promise.all(promises)
}

export const fetchUSDPrice = async (client: Client): Promise<number> => {
  try {
    const accountInfo = await client.request({
      command: 'get_aggregate_price',
      ledger_index: 'current',
      base_asset: 'XRP',
      quote_asset: 'USDT',
      trim: 20,
      oracles: [
        {
          account: 'roosteri9aGNFRXZrJNYQKVBfxHiE5abg',
          oracle_document_id: 0,
        },
      ],
    })
    return Number(accountInfo.result.median || 1.48)
  } catch (error: any) {
    console.error('Failed to get USD price.', error)
    return 1.48
  }
}
