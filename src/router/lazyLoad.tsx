// router/lazyLoad.tsx
import React, { Suspense } from 'react'
import Loading from '@/components/Loading'

const lazyLoad = (Component: React.LazyExoticComponent<() => JSX.Element>) => {
  return (
    <Suspense fallback={<Loading/>}>
      <Component />
    </Suspense>
  )
}

export default lazyLoad
