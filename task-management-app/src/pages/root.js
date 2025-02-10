import React from 'react'
import '../App.css'
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';

function RootComponent() {
  return (
    <main>
        <Sidebar/>
        <Outlet/>
    </main>
  )
}

export default RootComponent