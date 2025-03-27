import React from 'react'
import {Outlet} from 'react-router-dom'
import {DashboardHeader} from './dashboardHeader'

export const Dashboard = () => {
  return (<>
    <DashboardHeader/>
    <div>
        <Outlet/>
    </div>
    </>
  )
}