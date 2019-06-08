import React from 'react'

import { LoggingProvider, RouterProvider } from './index'

const ProviderComposer = ({ contexts, children }) => {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids
      }),
    children
  )
}

const ContextProvider = ({ children }) => (
  <ProviderComposer contexts={[<LoggingProvider />, <RouterProvider />]}>
    {children}
  </ProviderComposer>
)

export default ContextProvider
