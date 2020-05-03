/**
 * Credits to: https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
 */
import { useEffect, RefObject } from 'react'

export function useOutsideClick(ref: RefObject<HTMLElement>, setState: Function) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setState(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, setState])
}
