// router/lazyLoad.tsx
import React, { Suspense } from 'react'

const lazyLoad = (Component: React.LazyExoticComponent<() => JSX.Element>): React.ReactNode => {
  return (
    <Suspense fallback={'loading'}>
      <Component />
    </Suspense>
  )
}

export default lazyLoad
