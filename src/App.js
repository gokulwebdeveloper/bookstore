import React from 'react';
import ReactDOM from "react-dom/client";
import Body from './components/Body';
import Login from './components/Login';
import AppLayout from './components/AppLayout';
import Adminpanel from './components/Adminpanel';
import ErrorBoundary from './components/Error';
import { BookContext } from './store/context';
import { BookReducer, BookInitalState } from './store/reducer';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const MainPage  = () => {
  const [BookState, dispatch] = React.useReducer(BookReducer,BookInitalState);
  return (
    <BookContext.Provider value={{BookState,dispatch}}>
      <AppLayout />
    </BookContext.Provider>   
  );
};
const appRouteRef = createBrowserRouter([{
  path:'/',
  element:<MainPage />,
  children:[{
    path:'/',
    element: <Body />
  },{
    path:'/login',
    element:<Login />
  },{
    path:'/adminpanel',
    element:<Adminpanel />
  }],
  errorElement: <ErrorBoundary />
}]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouteRef}  />);