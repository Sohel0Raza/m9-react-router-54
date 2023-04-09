import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Friends from './components/Friends/Friends';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Posts from './components/Posts/Posts';
import PostDetail from './components/PostDetail/PostDetail';
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App></App>
//   },
  
//   {
//     path: '/about',
//     element: <div>this is about</div>
//   },
//   {
//     path: '/contact',
//     element: <div>this is contact</div>
//   },


// ])
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'friends',
        element:<Friends></Friends>,
        loader:() => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'friend/:FriendId',
        element:<FriendDetail></FriendDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.FriendId}`)
      },
      {
        path:'posts',
        element:<Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path:'post/:postId',
        element:<PostDetail></PostDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
      {
        path: '*',
        element: <div>404</div>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header></Header> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
