import React from 'react'

export function useRequest<T>(
  fetcher: () => Promise<T>,
  deps: unknown[] = [],
): {
  data: T | null
  loading: boolean
  error: Error | null
  refresh: () => void
} {
  const [data, setData] = React.useState<T | null>(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<Error | null>(null)

  const fetch = React.useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await fetcher()
      setData(result)
    } catch (e) {
      setError(e as Error)
    } finally {
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  React.useEffect(() => {
    fetch()
  }, [fetch])

  return { data, loading, error, refresh: fetch }
}
