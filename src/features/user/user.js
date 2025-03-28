import React, { useState } from "react";
import { Department } from "./children/department";
import { Position } from "./children/position";
import { Area } from "./children/area";
import { Employee } from "./children/employee";
import { Resign } from "./children/resign";
import { WorkflowRole } from "./children/workflow-role";
import { WorkflowBuilder } from "./children/workflow-builder";
import { Document } from "./children/document";
import { CustomAttribute } from "./children/custom-attribute";
import { Configuration } from "./children/configuration";

import './../../css/specific/ft-att-attendance.css';
export const User = () => {
    //few variable
const [tabs, setTabs] = useState(["Department"]);
const [activeTab, setActiveTab] = useState("Department"); 
const [activeNav,setActiveNav]=useState(1);

    // 3 functions - addTab, removeTab, makeActiveTab, makeActiveNav

    const addTab = (tabName) => {
        if (tabs.length >= 5) {
            alert("You can only have up to 5 active tabs! Clear the previous unused tab to proceed!");
            return; // Stop execution if there are already 5 tabs
        }
    

        if (!tabs.includes(tabName)) {
            setTabs([...tabs, tabName]);
            makeActiveTab(tabName);
        }

        makeActiveTab(tabName)
    };

   
    const removeTab=(tabName)=> {
        const updatedTabs = tabs.filter(tab => tab !== tabName );
        setTabs(updatedTabs);
        makeActiveTab(updatedTabs[updatedTabs.length - 1]);
    }

  const makeActiveTab = (tabName) => {
    setActiveTab(tabName);
  };
    
  //nav close and open//

  //request button//
  const makeActiveNav =(navName) =>{
    setActiveNav(activeNav === navName ? null :navName)
  };

//close all but keep newest button//
const closeAllExceptLast = () => {
    if (tabs.length <= 1) return; // Do nothing if only 1 tab exists
    
    const lastTab = tabs[tabs.length - 1]; // Get the last tab
    setTabs([lastTab]); // Keep only the last tab
    setActiveTab(lastTab); // Focus on it
  };
  //Approval//
  
  return(

    <main id="ft-att-main2">
    <div className="ft-att-attendancecontainer">
    
    <nav className="ft-att-sidebar">
    <ul>
        {/* 1. Organization */}
        <li>
            <button className="ft-att-dropdown-btn" onClick={() => makeActiveNav(1)}>Organization</button>
            <ul className={activeNav === 1 ? "ft-att-dropdown-content show" : "ft-att-dropdown-content"}>
                <li><a onClick={() => addTab('Department')}>Department</a></li>
                <li><a onClick={() => addTab('Position')}>Position</a></li>
                <li><a onClick={() => addTab('Area')}>Area</a></li>
            </ul>
        </li>

        {/* 2. Employee */}
        <li>
            <button className="ft-att-dropdown-btn" onClick={() => makeActiveNav(2)}>Employee</button>
            <ul className={activeNav === 2 ? "ft-att-dropdown-content show" : "ft-att-dropdown-content"}>
                <li><a onClick={() => addTab('Employee')}>Employee</a></li>
                <li><a onClick={() => addTab('Resign')}>Resign</a></li>
            </ul>
        </li>

        {/* 3. Workflow */}
        <li>
            <button className="ft-att-dropdown-btn" onClick={() => makeActiveNav(3)}>Workflow</button>
            <ul className={activeNav === 3 ? "ft-att-dropdown-content show" : "ft-att-dropdown-content"}>
                <li><a onClick={() => addTab('Workflow Role')}>Workflow Role</a></li>
                <li><a onClick={() => addTab('Workflow Builder')}>Workflow Builder</a></li>
            </ul>
        </li>

        {/* 4. Configurations */}
        <li>
            <button className="ft-att-dropdown-btn" onClick={() => makeActiveNav(4)}>Configurations</button>
            <ul className={activeNav === 4 ? "ft-att-dropdown-content show" : "ft-att-dropdown-content"}>
                <li><a onClick={() => addTab('Document')}>Document</a></li>
                <li><a onClick={() => addTab('Custom Attribute')}>Custom Attribute</a></li>
                <li><a onClick={() => addTab('Configuration')}>Configuration</a></li>
            </ul>
        </li>
    </ul>
</nav>

     
        <div className="ft-att-content">
        <div className="ft-att-tab-header-container">
  {/* Existing tabs */}
  {tabs.map((tab) => (
    <div key={tab} className="ft-att-tab-header">
      <span onClick={() => makeActiveTab(tab)}>{tab}</span>
      {tabs.length > 1 && (
        <button onClick={() => removeTab(tab)} className="ft-att-close-btn">
          X
        </button>
      )}
    </div>
  ))}

  {/* NEW: "Close Others" button (only shows when 2+ tabs open) */}
  {tabs.length >= 2 && (
    <button 
      onClick={closeAllExceptLast}
      className="ft-att-close-others-btn"
    >
      Close previous tabs
    </button>
  )}
</div>
          
          <div className="ft-att-tab-content">
          { activeTab === 'Department' && <Department/> }
{ activeTab === 'Position' && <Position/> }
{ activeTab === 'Area' && <Area/> }
{ activeTab === 'Employee' && <Employee/> }
{ activeTab === 'Resign' && <Resign/> }
{ activeTab === 'Workflow Role' && <WorkflowRole/> }
{ activeTab === 'Workflow Builder' && <WorkflowBuilder/> }
{ activeTab === 'Document' && <Document/> }
{ activeTab === 'Custom Attribute' && <CustomAttribute/> }
{ activeTab === 'Configuration' && <Configuration/> }



          
          </div>
        </div>
    </div>
</main>
       
       
    )
}