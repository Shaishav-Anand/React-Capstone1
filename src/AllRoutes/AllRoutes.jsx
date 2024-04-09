import React from 'react'
import Genre from '../pages/Genre/Genre'
import Registration from '../pages/registration/Registration'
import PageNotFound from '../pages/PageNotFound'
import { Route ,Routes } from 'react-router-dom'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Registration />} />
        <Route path='genre' element={<Genre />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
