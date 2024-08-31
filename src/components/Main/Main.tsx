import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Facility, Home, Room } from '../../pages'

const Main = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={<Home />}
            />
            <Route
               path='room'
               element={<Room/>} 
            />
             <Route
               path='facility'
               element={<Facility/>} 
            />
        </Routes>
    )
}

export default Main