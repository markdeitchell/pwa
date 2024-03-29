import { createRoot } from 'react-dom/client'
import App from './App'
// import * as serviceWorkerRegistration from './serviceWorkerRegistration'

const root = createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <App />
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register()

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../firebase-messaging-sw.js')
    .then((registration) => {
      console.log('Registration successful, scope is:', registration.scope)
    })
    .catch((err) => {
      console.log('Service worker registration failed, error:', err)
    })
}
