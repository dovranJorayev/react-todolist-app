import React from 'react'
import { Route, Routes } from 'react-router-dom'
const Home = React.lazy(() => import("@/pages/home"));
const NotFound = React.lazy(() => import("@/pages/NotFound"));

// NOTE: Routing can be omitted here as we have only one page
// NOTE: As Suspense fallback would be better to use some kind of loader or other more meaningful fallback
const RouterProvider = () => {
  return (
    <Routes>
      <Route
        path="*"
        caseSensitive
        element={
          <React.Suspense fallback={<p/>}>
            <NotFound />
          </React.Suspense>
        }
      />
      <Route
        path="/"
        caseSensitive
        element={
          <React.Suspense fallback={<p/>}>
            <Home />
          </React.Suspense>
        }
      />
    </Routes>
  )
}

export default RouterProvider