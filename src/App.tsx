import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { store } from '@/store/_store'
import RouteMain from './components/routes/main'
import 'normalize.css'
import './utils/style/index.css'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RouteMain />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
