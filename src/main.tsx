import ReactDOM from 'react-dom/client'
import { QueryProvider } from './components/QueryProvider.tsx'
import './index.css'
import { RouterProvider } from './router/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryProvider>
    <RouterProvider />
  </QueryProvider>
)
