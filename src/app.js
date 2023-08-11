import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
// import About from './components/About';
import Error from './components/Error';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantDetails from './components/RestaurantDetails';


const About = lazy(() => import('./components/About'));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

//creating router

const appRouter = createBrowserRouter([
  //it takes some configration.
  // it takes list of paths [array]
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element:
          <Suspense fallback={<h1>Loading</h1>}>
            <About />
          </Suspense>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantDetails />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter} />);

