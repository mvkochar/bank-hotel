import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Room } from '../../pages'

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
        </Routes>
    )
}

export default Main