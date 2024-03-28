import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { store } from '@/store/_store'
import { Provider } from 'react-redux'

function App() {
  const router = createBrowserRouter([
    // {
    //   path: '/',
    //   element: <PageMain />
    // }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
