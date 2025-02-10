import React from 'react'
import classes from './Sidebar.module.css'
import { FaTasks } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { MdOutlineTaskAlt } from "react-icons/md";
import { MdOutlinePendingActions } from "react-icons/md";
import { GrInProgress } from "react-icons/gr";
import { MdCloudDone } from "react-icons/md";
import { FaClock } from "react-icons/fa6";
import { MdOutlineAddTask } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
function Sidebar() {
  return (
    <aside>
        <div className={classes.Sidebar}>
            <div className={classes.SidebarTitle}>
                <p className={classes.icon}><FaTasks/></p>
                <p>Task Manager</p>
            </div>
            <div className={classes.navlink}>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'><span><MdDashboard/></span>  Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink><span><MdOutlineTaskAlt/></span>  Completed Tasks</NavLink>
                    </li>
                    <li>
                        <NavLink><span><MdOutlinePendingActions/></span>  Pending Tasks</NavLink>
                    </li>
                    <li>
                        <NavLink><span><GrInProgress/></span>  In Progress Tasks</NavLink>
                    </li>
                    <li>
                        <NavLink><span><MdCloudDone/></span>  Deployed Tasks</NavLink>
                    </li>
                    <li>
                        <NavLink><span><FaClock/></span>  Deferred Tasks</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Add-New-task'><span><MdOutlineAddTask/></span>  Add New Tasks</NavLink>
                    </li>
                    <li>
                        <NavLink><span><GiProgression/></span>  Task Stats</NavLink>
                    </li>
                </ul>
            </nav>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar