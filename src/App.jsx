import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: < Home />
    },
    {
      path: '/products',
      element: < Products />
    }
  ]);

  return (
    <>
      < RouterProvider router={router}/>
    </>
  )
}

export default App
