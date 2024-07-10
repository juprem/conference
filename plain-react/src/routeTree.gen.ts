/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UseStateImport } from './routes/use-state'
import { Route as UseEffectImport } from './routes/use-effect'
import { Route as SingleResponsibilityImport } from './routes/single-responsibility'
import { Route as LocalizedStateImport } from './routes/localized-state'
import { Route as UseStateRefactoredUseStateImport } from './routes/use-state.refactored-use-state'
import { Route as UseStateImpossibleUseStateImport } from './routes/use-state.impossible-use-state'
import { Route as UseEffectResetWithoutKeyImport } from './routes/use-effect.reset-without-key'
import { Route as UseEffectResetWithKeyImport } from './routes/use-effect.reset-with-key'
import { Route as LocalizedStateNoneLocalizedStateImport } from './routes/localized-state.none-localized-state'
import { Route as LocalizedStateCorrectLocalizedStateImport } from './routes/localized-state.correct-localized-state'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const UseStateRoute = UseStateImport.update({
  path: '/use-state',
  getParentRoute: () => rootRoute,
} as any)

const UseEffectRoute = UseEffectImport.update({
  path: '/use-effect',
  getParentRoute: () => rootRoute,
} as any)

const SingleResponsibilityRoute = SingleResponsibilityImport.update({
  path: '/single-responsibility',
  getParentRoute: () => rootRoute,
} as any)

const LocalizedStateRoute = LocalizedStateImport.update({
  path: '/localized-state',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const UseStateRefactoredUseStateRoute = UseStateRefactoredUseStateImport.update(
  {
    path: '/refactored-use-state',
    getParentRoute: () => UseStateRoute,
  } as any,
)

const UseStateImpossibleUseStateRoute = UseStateImpossibleUseStateImport.update(
  {
    path: '/impossible-use-state',
    getParentRoute: () => UseStateRoute,
  } as any,
)

const UseEffectResetWithoutKeyRoute = UseEffectResetWithoutKeyImport.update({
  path: '/reset-without-key',
  getParentRoute: () => UseEffectRoute,
} as any)

const UseEffectResetWithKeyRoute = UseEffectResetWithKeyImport.update({
  path: '/reset-with-key',
  getParentRoute: () => UseEffectRoute,
} as any)

const LocalizedStateNoneLocalizedStateRoute =
  LocalizedStateNoneLocalizedStateImport.update({
    path: '/none-localized-state',
    getParentRoute: () => LocalizedStateRoute,
  } as any)

const LocalizedStateCorrectLocalizedStateRoute =
  LocalizedStateCorrectLocalizedStateImport.update({
    path: '/correct-localized-state',
    getParentRoute: () => LocalizedStateRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/localized-state': {
      id: '/localized-state'
      path: '/localized-state'
      fullPath: '/localized-state'
      preLoaderRoute: typeof LocalizedStateImport
      parentRoute: typeof rootRoute
    }
    '/single-responsibility': {
      id: '/single-responsibility'
      path: '/single-responsibility'
      fullPath: '/single-responsibility'
      preLoaderRoute: typeof SingleResponsibilityImport
      parentRoute: typeof rootRoute
    }
    '/use-effect': {
      id: '/use-effect'
      path: '/use-effect'
      fullPath: '/use-effect'
      preLoaderRoute: typeof UseEffectImport
      parentRoute: typeof rootRoute
    }
    '/use-state': {
      id: '/use-state'
      path: '/use-state'
      fullPath: '/use-state'
      preLoaderRoute: typeof UseStateImport
      parentRoute: typeof rootRoute
    }
    '/localized-state/correct-localized-state': {
      id: '/localized-state/correct-localized-state'
      path: '/correct-localized-state'
      fullPath: '/localized-state/correct-localized-state'
      preLoaderRoute: typeof LocalizedStateCorrectLocalizedStateImport
      parentRoute: typeof LocalizedStateImport
    }
    '/localized-state/none-localized-state': {
      id: '/localized-state/none-localized-state'
      path: '/none-localized-state'
      fullPath: '/localized-state/none-localized-state'
      preLoaderRoute: typeof LocalizedStateNoneLocalizedStateImport
      parentRoute: typeof LocalizedStateImport
    }
    '/use-effect/reset-with-key': {
      id: '/use-effect/reset-with-key'
      path: '/reset-with-key'
      fullPath: '/use-effect/reset-with-key'
      preLoaderRoute: typeof UseEffectResetWithKeyImport
      parentRoute: typeof UseEffectImport
    }
    '/use-effect/reset-without-key': {
      id: '/use-effect/reset-without-key'
      path: '/reset-without-key'
      fullPath: '/use-effect/reset-without-key'
      preLoaderRoute: typeof UseEffectResetWithoutKeyImport
      parentRoute: typeof UseEffectImport
    }
    '/use-state/impossible-use-state': {
      id: '/use-state/impossible-use-state'
      path: '/impossible-use-state'
      fullPath: '/use-state/impossible-use-state'
      preLoaderRoute: typeof UseStateImpossibleUseStateImport
      parentRoute: typeof UseStateImport
    }
    '/use-state/refactored-use-state': {
      id: '/use-state/refactored-use-state'
      path: '/refactored-use-state'
      fullPath: '/use-state/refactored-use-state'
      preLoaderRoute: typeof UseStateRefactoredUseStateImport
      parentRoute: typeof UseStateImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  LocalizedStateRoute: LocalizedStateRoute.addChildren({
    LocalizedStateCorrectLocalizedStateRoute,
    LocalizedStateNoneLocalizedStateRoute,
  }),
  SingleResponsibilityRoute,
  UseEffectRoute: UseEffectRoute.addChildren({
    UseEffectResetWithKeyRoute,
    UseEffectResetWithoutKeyRoute,
  }),
  UseStateRoute: UseStateRoute.addChildren({
    UseStateImpossibleUseStateRoute,
    UseStateRefactoredUseStateRoute,
  }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/localized-state",
        "/single-responsibility",
        "/use-effect",
        "/use-state"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/localized-state": {
      "filePath": "localized-state.tsx",
      "children": [
        "/localized-state/correct-localized-state",
        "/localized-state/none-localized-state"
      ]
    },
    "/single-responsibility": {
      "filePath": "single-responsibility.tsx"
    },
    "/use-effect": {
      "filePath": "use-effect.tsx",
      "children": [
        "/use-effect/reset-with-key",
        "/use-effect/reset-without-key"
      ]
    },
    "/use-state": {
      "filePath": "use-state.tsx",
      "children": [
        "/use-state/impossible-use-state",
        "/use-state/refactored-use-state"
      ]
    },
    "/localized-state/correct-localized-state": {
      "filePath": "localized-state.correct-localized-state.tsx",
      "parent": "/localized-state"
    },
    "/localized-state/none-localized-state": {
      "filePath": "localized-state.none-localized-state.tsx",
      "parent": "/localized-state"
    },
    "/use-effect/reset-with-key": {
      "filePath": "use-effect.reset-with-key.tsx",
      "parent": "/use-effect"
    },
    "/use-effect/reset-without-key": {
      "filePath": "use-effect.reset-without-key.tsx",
      "parent": "/use-effect"
    },
    "/use-state/impossible-use-state": {
      "filePath": "use-state.impossible-use-state.tsx",
      "parent": "/use-state"
    },
    "/use-state/refactored-use-state": {
      "filePath": "use-state.refactored-use-state.tsx",
      "parent": "/use-state"
    }
  }
}
ROUTE_MANIFEST_END */
