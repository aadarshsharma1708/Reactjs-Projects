import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './User/User.jsx'
import Github, { gitInfoLoader } from './components/Github/Github.jsx'



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//       {path:"",
//         element:<Home />
//       },
//       {
//         path : "about",
//         element : <About/>
//       },
//       {
//         path : "contact us",
//         element : <Contact />
//       }
//     ]
//   }
// ])

// another way to create a router

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact us" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route
        loader={gitInfoLoader}
        path="github"
        element={<Github />}
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
