import React from 'react'
import PropTypes from 'prop-types'
import { makeMediaListener, mediaSizeLessThan, sizes } from '../media'

export default ({ isOpen }) => {
  const [lastScrollTop, setLastScrollTop] = React.useState(0)

  const lock = React.useCallback(() => {
    setLastScrollTop(document.body.scrollTop)
    document.body.classList.add('locked-scroll')
  }, [typeof document === 'undefined' ? 0 : document.body.scrollTop])

  const unlock = React.useCallback(() => {
    document.body.scrollTop = lastScrollTop
    document.body.classList.remove('locked-scroll')
    setLastScrollTop(0)
  }, [lastScrollTop])

  React.useEffect(() => {
    if (isOpen) {
      lock()
    } else {
      unlock()
    }

    const resetListener = makeMediaListener(
      mediaSizeLessThan(sizes.md),
      () => {
        lock()
      },
      () => {
        unlock()
      }
    )

    return () => {
      unlock()
      resetListener()
    }
  }, [isOpen])

  return [lock, unlock]
}
