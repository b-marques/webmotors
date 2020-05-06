import { useEffect } from 'react'
import debounce from 'lodash/debounce'

export const useScroll = (handleScroll: () => void) => {
  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll, 1000))
    return () => window.removeEventListener('scroll', debounce(handleScroll, 1000))
  }, [handleScroll])
}
