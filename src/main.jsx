import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import './index.css'
import Layout from './Layout.jsx'
import Home from './components/screens/Home.jsx'
import About from './components/screens/About.jsx'
import Contact from './components/screens/Contact.jsx'
import './index.css'

// const routes = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },

//       {
//         path: "about",
//         element: <About />
//       },

//       {
//         path: "contact",
//         element: <Contact />
//       },

//       // {
//       //   path: "user",
//       //   element: <User />
//       // },

//       // {
//       //   path: "github",
//       //   element: <Github />
//       // },
//     ]
//   }
// ])


const routes = createBrowserRouter([
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/user/:id' element={<Contact />} />
    </Route>
  )
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
)
