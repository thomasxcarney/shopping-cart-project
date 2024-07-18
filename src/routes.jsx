import App from './App';
// import Home from './components/home';
import Shop from './components/shop';
import Page from './components/page';

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
    path: '/shop',
    element: <Shop />
  }
];

export default routes;
