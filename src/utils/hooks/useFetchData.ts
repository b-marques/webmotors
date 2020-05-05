import { useEffect, useState } from 'react'
import axios from 'axios'

import { Fetch } from 'src/utils/types/fetch'

export const useFetchData = (
  url: string,
  params: any,
  shouldFetch: boolean,
  processData: Function,
) => {
  const [result, setResult] = useState<Fetch>({
    status: 'init',
  })

  const queryString = Object.keys(params)
    .map(key => key + '=' + params[key])
    .join('&')

  useEffect(() => {
    let mounted = true
    if (shouldFetch) {
      if (mounted) setResult({ status: 'loading' })
      axios
        .get(`${url}?${queryString}`)
        .then((response: any) => {
          if (mounted) setResult({ status: 'loaded', payload: processData(response.data) })
        })
        .catch((error: any) => {
          if (mounted) setResult({ status: 'error', error })
        })
    }
    return () => {
      mounted = false
    }
  }, [shouldFetch, queryString, url, processData])

  return result
}
