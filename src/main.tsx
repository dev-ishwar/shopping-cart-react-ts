import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ProductsProvider } from './context/ProductsProvider.tsx'
import { CartContextProvider } from './context/CartProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductsProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductsProvider>
  </StrictMode>,
)
