import React, {useState } from "react";
import { Leave } from "./children/leave";
import { Manual } from "./children/manual-log";
import { Overtime } from "./children/overtime";
import { Training} from "./children/training";
import {ChangeSchedule} from "./children/changeschedule";
import { ApproveLeave } from "./children/Approveleave";
import { ApproveManual } from "./children/Approvemanual-log";
import { ApproveOvertime } from "./children/Approveovertime";
import { ApproveTraining} from "./children/Approvetraining";
import { ApproveChangeSchedule} from "./children/Approvechangeschedule ";
import {Transaction} from "./children/transaction";
import { ScheduledLog} from "./children/scheduledlog";
import { TotalTimeCard} from "./children/totaltimecard";
import { EmployeeSummary} from "./children/employeesummary";
import { MultipleTransaction} from "./children/multipletransaction";
import { MultipleBreakTime} from "./children/multiplebreaktime";
import {TimeCard} from "./children/timecard";

import './../../css/specific/ft-att-attendance.css'

export const Attendance = () => {
    //few variable
const [tabs, setTabs] = useState(["req-leave"]);
const [activeTab,setActiveTab]= useState([tabs[0]]);
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


  //Approval//
  
  return(

    <main id="ft-att-main2">
    <div className="ft-att-attendancecontainer">
    
        <nav className="ft-att-sidebar">
            <h2>Menu</h2>
            <ul>
                <li>
                    <button className="ft-att-dropdown-btn" onClick={() => makeActiveNav(1)}>Request</button>
                    <ul className={activeNav === 1 ? "ft-att-dropdown-content show" : "ft-att-dropdown-content"}>
                    <li><a onClick={()=> addTab('req-leave')} >Leave</a></li>
                    <li><a onClick={()=> addTab('req-overtime')}>Overtime</a></li>
                    <li><a onClick={()=> addTab('req-manual')}>Manual Log</a></li>
                    <li><a onClick={()=> addTab('req-training')}>Training</a></li>
                    <li><a onClick={()=> addTab('Change Schedule')}>Change Schedule</a></li>
                    </ul>
                </li>
                <li>
                    <button className="ft-att-dropdown-btn" onClick={() => makeActiveNav(2)}>Approval</button>
                    <ul className={activeNav === 2 ? "ft-att-dropdown-content show" : "ft-att-dropdown-content"}>
                    <li><a onClick={()=> addTab('leave')} >Leave</a></li>
                    <li><a onClick={()=> addTab('overtime')}>Overtime</a></li>
                    <li><a onClick={()=> addTab('manual')}>Manual Log</a></li>
                    <li><a onClick={()=> addTab('training')}>Training</a></li>
                    <li><a onClick={()=> addTab('Change Schedule ')}>Change Schedule</a></li>
                    </ul>
                </li>
                <li>
                    <button className="ft-att-dropdown-btn" onClick={() => makeActiveNav(3)} >Report</button>
                    <ul className={activeNav === 3 ? "ft-att-dropdown-content show" : "ft-att-dropdown-content"}>
                    <li><a onClick={()=> addTab('Transaction')}>Transaction</a></li>
                    <li><a onClick={()=> addTab('Scheduled Log')}>Scheduled Log</a></li>
                    <li><a onClick={()=> addTab('Total Time Card')}>Total Time Card</a></li>
                    <li><a onClick={()=> addTab('Employee Summary')}>Employee Summary</a></li>
                    <li><a onClick={()=> addTab('Multiple Transaction')}>Multiple Transaction</a></li>
                    <li><a onClick={()=> addTab('Multiple Break Time')}>Multiple Break Time</a></li>
                    <li><a onClick={()=> addTab('Time Card')}>Time Card</a></li>
                    </ul>
                </li>
        
            </ul>
        </nav>
     
        <div className="ft-att-content">
          <div className="ft-att-tab-header-container">
            {/*Array of something. for each array will make tab header*/
         tabs.map((tab) => (
                <div key={tab} className="ft-att-tab-tab-header">
                    <span onClick={() => makeActiveTab(tab)}>{tab}</span>
                    {tabs.length > 1 && <button onClick={() => removeTab(tab)} className="ft-att-close-btn">X</button>}
                </div>
            ))}
          </div>
          
          <div className="ft-att-tab-content">
            {/*Active jsx that will be call - base on the activeTab */
            activeTab === 'req-leave' && <Leave/>}

            
           { activeTab === 'req-overtime' && <Overtime/>} 

           { activeTab === 'req-manual' && <Manual/>} 

           { activeTab === 'req-training' && <Training/>} 
          
           { activeTab === 'Change Schedule' && <ChangeSchedule/>}

           {/* //Approval//  */
           
           activeTab === 'leave' && <ApproveLeave/>}

            
           { activeTab === 'overtime' && <ApproveOvertime/>} 

           { activeTab === 'manual' && <ApproveManual/>} 

           { activeTab === 'training' && <ApproveTraining/>} 
          
           { activeTab === 'Change Schedule ' && <ApproveChangeSchedule/>} 
          
          
           {activeTab === 'leave' && <ApproveLeave/>}

            
{ activeTab === 'Transaction' && <Transaction/>} 

{ activeTab === 'Scheduled Log' && <ScheduledLog/>} 

{ activeTab === 'Total Time Card' && <TotalTimeCard/>} 

{ activeTab === 'Employee Summary' && <EmployeeSummary/>} 
          
          
{ activeTab === 'Multiple Transaction' && <MultipleTransaction/>} 
          
{ activeTab === 'Multiple Break Time' && <MultipleBreakTime/>} 
       
{ activeTab === 'Time Card' && <TimeCard/>} 
  
          
          </div>
        </div>
    </div>
</main>
       
       
    )
}