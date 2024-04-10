import React from 'react'
import Genre from '../pages/Genre/Genre'
import Registration from '../pages/registration/Registration'
import PageNotFound from '../pages/PageNotFound'
import Page3 from '../pages/Page3/Page3'
import { Route ,Routes } from 'react-router-dom'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Registration />} />
        <Route path='genre' element={<Genre />} />
        <Route path ="/page3" element = { <Page3 />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
