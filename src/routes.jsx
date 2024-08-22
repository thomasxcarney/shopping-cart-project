import App from './App';
// import Home from './components/home';
import Shop from './components/shop';
import Page from './components/page';
import ShoppingCart from './components/shoppingCart';

const routes = [
  {
    path: '/',
    element: <App />
    // errorElement: <ErrorPage />
  },
  // {
  //   path: 'Home',
  //   element: <Home />
  // },
  // {
  //   path: 'Shop',
  //   element: <Shop />
  // },
  {
    path: 'page/:page',
    element: <Page />
  },
  {
    path: 'shop',
    element: <Shop />
  },
  { path: 'cart', element: <ShoppingCart /> }
];

export default routes;
