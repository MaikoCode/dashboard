import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import DashboardEmployees from './Pages/DashboardEmployees/DashboardEmployees'
import DashboardFinance from './Pages/DashboardFinance/DashboardFinance'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import DashboardContextProvider from './context/DashboardContext'

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardFinance />,
  },

  {
    path: "/dashboardEmployees",
    element: <DashboardEmployees />,
  },

  {
    path: "/dashboardFinance",
    element: <DashboardFinance />,
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <DashboardContextProvider>
    <RouterProvider router={router} />
  </DashboardContextProvider>  
)
