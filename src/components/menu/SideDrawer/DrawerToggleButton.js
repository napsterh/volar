import React from "react"

import './DrawerToggleButton.css';

const drawerToggleButtoon = props =>{
    return(
    <button className="toggle-button">
        <div className="toggle-button_line"></div>
        <div className="toggle-button_line"></div>
        <div className="toggle-button_line"></div>
    </button>
    )
}
export default drawerToggleButtoon;