// xrpl

import { fetchUSDPrice } from '@/lib/xrpl'
import React, { ReactNode, useState, useEffect, createContext } from 'react'
import { Client } from 'xrpl'

export type XrplContextProps = {
  xrpl: Client | undefined
  error: string | undefined
  xrpPrice: number | undefined
  method: 'xrpl'
}

const initialState: XrplContextProps = {
  xrpl: undefined,
  error: undefined,
  xrpPrice: undefined,
  method: 'xrpl',
}

const XrplContext = createContext(initialState)

type XrplProviderProps = {
  children: ReactNode
}

export function XrplProvider({ children }: XrplProviderProps) {
  const httpProvider = "wss://xrplcluster.com"
  const [client, setClient] = useState<Client | undefined>(undefined)
  const [xrpPrice, setXrpPrice] = useState<number>(undefined)
  const [error, setError] = useState<string | undefined>(undefined)

  useEffect(() => {
    const connectToNetwork = async () => {
      try {
        const xrpl = new Client(httpProvider)
        await xrpl.connect()
        // const price = await fetchUSDPrice(xrpl)
        setXrpPrice(1.47)
        setClient(xrpl)
      } catch(error: any) {
        console.log(error.message);
        setError(error.message)
      }
    }
    connectToNetwork()
  }, [httpProvider])

  if (!client) {
    return null
  }

  return (
    <XrplContext.Provider
      value={{
        method: 'xrpl',
        xrpl: client,
        error: error,
        xrpPrice: xrpPrice,
      }}
    >
      {children}
    </XrplContext.Provider>
  )
}

export const XrpConsumer = XrplContext.Consumer

export default XrplContext
