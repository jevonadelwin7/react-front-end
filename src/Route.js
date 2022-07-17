import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import DashboardLayout from './MainLayout/Dashboard'
import RegionView from './ViewSaga/Region'
import EmployeeView from './ViewSaga/Employee'



export default function Route() {
  return useRoutes([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            { path: 'region', element: <RegionView /> },
            { path: 'employee', element: <EmployeeView /> },
        ]
    },
    { path: '*', element: <Navigate to='/404' replace /> }
])
}
