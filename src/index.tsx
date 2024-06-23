import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import {App} from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Book } from './components/book/book';
// import { Book } from './components/book/book';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "book/:id",
    element: <Book />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<RouterProvider router={router} />)
