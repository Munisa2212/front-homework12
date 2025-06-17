import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { pageRouteList } from '../hooks/roots'

function PageRoutes() {
  return (
    <Routes>
        {pageRouteList.map(item => <Route key={item.id} path={item.path} element={item.element}/>)}
    </Routes>
  )
}

export default PageRoutes