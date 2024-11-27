import { Client, dropsToXrp } from "xrpl";

export const fetchBalance = async (client: Client, address: string): Promise<number> => {
  const accountInfo = await client.request({
    command: "account_info",
    account: address,
  });
  const balance = dropsToXrp(accountInfo.result.account_data.Balance || "0");
  console.log(balance);
  
  // const ownerCount = accountInfo.result.account_data.OwnerCount || 0;
  return balance - 10;
};

export const fetchUSDPrice = async (client: Client): Promise<number> => {
  const accountInfo = await client.request({
    command: "get_aggregate_price",
    ledger_index: "current",
    base_asset: "XRP",
    quote_asset: "USD",
    trim: 20,
    oracles: [
      {
        account: "roosteri9aGNFRXZrJNYQKVBfxHiE5abg",
        oracle_document_id: 4,
      },
    ],
  });
  return Number(accountInfo.result.median || 0);
};
