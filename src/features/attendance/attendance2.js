import React, {useState } from "react";
import "./../../css/specific/layout-attendance.css";
import { Leave } from "./children/leave";
import { Overtime } from "./children/overtime";

export const Attendance2 = () => {
    //array of tabs
    const [tabs, setTabs] = useState(['req-leave'])
    //active tab
    const [activeTab, setActiveTab] = useState(tabs[0])
    //active navigasi
    const [activeNav, setActiveNav] = useState(1)

    //fungsi bila tekan, dia akan tambah tab
    const addTab = (tabName)=>{
        if(!tabs.includes(tabName)){
            setTabs([...tabs, tabName])
            makeActivetab(tabName)
        }
    }

    //fungsi bila tekan dia remove
    const removeTab = (tabName)=>{
        setTabs(tabs.filter(tab => tab !== tabName))
        makeActivetab(tabs[0])
    }

    const makeActivetab = (tabName)=>{
        setActiveTab(tabName)
    }

    const makeActiveNav = (navName)=>{
        setActiveNav(navName)
    }

    return(

    <main id="main2">
    <div className="ft-att-attendancecontainer">
    
        <nav className="ft-att-sidebar">
            <h2>Menu</h2>
            <ul>
                <li>
                    <button className="ft-att-dropdown-btn" onClick={()=> makeActiveNav(1)}>Request</button>
                    <ul className={activeNav == 1 ? "ft-att-dropdown-content show" : "ft-att-dropdown-content"}>
                    <li><a onClick={()=> addTab('req-leave')}>Leave</a></li>
                    <li><a onClick={()=> addTab('req-overtime')}>Overtime</a></li>
                    <li><a onClick={() => addTab('req-manual log')}>Manual Log</a></li>
                    <li><a href="#">Training</a></li>
                    <li><a href="#">Change Schedule</a></li>
                    </ul>
                </li>
                <li>
                    <button className="ft-att-dropdown-btn" onClick={()=> makeActiveNav(2)}>Approval</button>
                    <ul className={activeNav == 2 ? "ft-att-dropdown-content show" : "ft-att-dropdown-content"}>
                    <li><a href="#">Leave</a></li>
                    <li><a href="#">Overtime</a></li>
                    <li><a href="#">Manual Log</a></li>
                    <li><a href="#">Training</a></li>
                    <li><a href="#">Change Schedule</a></li>
                    </ul>
                </li>
                <li>
                    <button className="ft-att-dropdown-btn" onClick={()=> makeActiveNav(3)}>Report</button>
                    <ul className={activeNav == 3 ? "ft-att-dropdown-content show" : "ft-att-dropdown-content"}>
                    <li><a href="#">Transaction</a></li>
                    <li><a href="#">Scheduled Log</a></li>
                    <li><a href="#">Total Time Card</a></li>
                    <li><a href="#">Employee Summary</a></li>
                    <li><a href="#">Multiple Transaction</a></li>
                    <li><a href="#">Multiple Break Time</a></li>
                    <li><a href="#">Time Card</a></li>
                    </ul>
                </li>
                <li><a href="#">Feedback</a></li>
            </ul>
        </nav>
     
        <div className="ft-att-content">
          <div className="ft-att-tab-header-container">
            {tabs.map((tab)=>{
                return(
                    <div key={tab} className="ft-att-tab-header">
                        <span onClick={()=> makeActivetab(tab)}>{tab}</span>
                        { tabs.length > 1 && <button onClick={()=> removeTab(tab)} className="ft-att-close-btn">X</button>}
                    </div>
                )
            })}
          </div>
          
          <div className="ft-att-tab-content">
            {activeTab == 'req-leave' && <Leave/>}
            {activeTab == 'req-overtime' && <Overtime/>}
            {activeTab == 'req-manual log' && <Overtime/>}
          </div>
        </div>
    </div>
</main>
       
       
    )
}