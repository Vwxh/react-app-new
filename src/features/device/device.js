import React, { useState } from "react";
import { DeviceCommand } from "./children/devicecommand";
import { Public } from "./children/public";
import { Private } from "./children/private";
import { Employee } from "./children/employee";
import { WorkCode } from "./children/workcode";
import { Biotemplate } from "./children/biotemplate";
import { Biophoto } from "./children/biophoto";
import { Transaction } from "./children/transaction";
import { OperationLog } from "./children/operationlog";
import { Errorlog} from "./children/errorlog";
import { Upload } from "./children/upload";
import { Commandlog} from "./children/commandlog";
import { Accounts } from "./children/accounts";
import { Announcement } from "./children/annoucement";  // Fixed typo
import { Notice } from "./children/notice";
import { Locationsetup } from "./children/locationsetup";
import { EmployeeSetUp } from "./children/employeesetup";
import { Departmentsetup } from "./children/departmentsetup";
import { Configurations } from "./children/configurations";


import './../../css/specific/ft-device.css'
import { MobileOperationLog } from "./children/mobileoperationlog";

export const Device = () => {
    //few variable
const [tabs, setTabs] = useState(["Device Command"]);
const [activeTab, setActiveTab] = useState("Device Command"); 
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
    <ul>
        {/* 1. Device */}
        <li>
            <button className="ft-att-dropdown-btn" onClick={() => makeActiveNav(1)}>Device</button>
            <ul className={activeNav === 1 ? "ft-att-dropdown-content show" : "ft-att-dropdown-content"}>
                <li><a onClick={() => addTab('Device Command')}>Device Command</a></li>
            </ul>
        </li>

        {/* 2. Message */}
        <li>
            <button className="ft-att-dropdown-btn" onClick={() => makeActiveNav(2)}>Message</button>
            <ul className={activeNav === 2 ? "ft-att-dropdown-content show" : "ft-att-dropdown-content"}>
                <li><a onClick={() => addTab('Announcement')}>Announcement</a></li>
                <li><a onClick={() => addTab('Notice')}>Notice</a></li>
            </ul>
        </li>

        {/* 3. Data */}
        <li>
            <button className="ft-att-dropdown-btn" onClick={() => makeActiveNav(3)}>Data</button>
            <ul className={activeNav === 3 ? "ft-att-dropdown-content show" : "ft-att-dropdown-content"}>
                <li><a onClick={() => addTab('Employee SetUp')}>Employee Setup</a></li>
                <li><a onClick={() => addTab('Work Code')}>Work Code</a></li>
                <li><a onClick={() => addTab('Bio Template')}>Bio Template</a></li>
                <li><a onClick={() => addTab('Bio Photo')}>Bio Photo</a></li>
                <li><a onClick={() => addTab('Transaction')}>Transaction</a></li>
            </ul>
        </li>

        {/* 4. Log */}
        <li>
            <button className="ft-att-dropdown-btn" onClick={() => makeActiveNav(4)}>Log</button>
            <ul className={activeNav === 4 ? "ft-att-dropdown-content show" : "ft-att-dropdown-content"}>
                <li><a onClick={() => addTab('Operation Log')}>Operation Log</a></li>
                <li><a onClick={() => addTab('Error Log')}>Error Log</a></li>
                <li><a onClick={() => addTab('Upload')}>Upload</a></li>
                <li><a onClick={() => addTab('Command Log')}>Command Log</a></li>
            </ul>
        </li>

      {/* 5. Mobile App */}
<li>
    <button className="ft-att-dropdown-btn" onClick={() => makeActiveNav(5)}>Mobile App</button>
    <ul className={activeNav === 5 ? "ft-att-dropdown-content show" : "ft-att-dropdown-content"}>
        <li><a onClick={() => addTab('Accounts')}>Accounts</a></li>
        <li><a onClick={() => addTab('Announcement')}>Announcement</a></li>
        <li><a onClick={() => addTab('Notice')}>Notice</a></li>
        <li><a onClick={() => addTab('Operation Log')}>Operation Log</a></li>
    </ul>
</li>

        {/* 6. Geo-fence */}
        <li>
            <button className="ft-att-dropdown-btn" onClick={() => makeActiveNav(6)}>Geo-fence</button>
            <ul className={activeNav === 6 ? "ft-att-dropdown-content show" : "ft-att-dropdown-content"}>
                <li><a onClick={() => addTab('Location Setup')}>Location Setup</a></li>
                <li><a onClick={() => addTab('Employee Setup')}>Employee Setup</a></li>
                <li><a onClick={() => addTab('Department Setup')}>Department Setup</a></li>
            </ul>
        </li>

        {/* 7. Configuration */}
        <li>
            <button className="ft-att-dropdown-btn" onClick={() => makeActiveNav(7)}>Configuration</button>
            <ul className={activeNav === 7 ? "ft-att-dropdown-content show" : "ft-att-dropdown-content"}>
                <li><a onClick={() => addTab('Configurations')}>Configurations</a></li>
            </ul>
        </li>
    </ul>
</nav>

     
        <div className="ft-att-content">
          <div className="ft-att-tab-header-container">
            {/*Array of something. for each array will make tab header*/
         tabs.map((tab) => (
                <div key={tab} className="ft-att-tab-header">
                    <span onClick={() => makeActiveTab(tab)}>{tab}</span>
                    {tabs.length > 1 && <button onClick={() => removeTab(tab)} className="ft-att-close-btn">X</button>}
                </div>
            ))}
          </div>
          
          <div className="ft-att-tab-content">
          { activeTab === 'Operation log ' && <MobileOperationLog/>}           
{ activeTab === 'Device Command' && <DeviceCommand/>} 
{ activeTab === 'Public' && <Public/>} 
{ activeTab === 'Private' && <Private/>} 
{ activeTab === 'Employee' && <Employee/>} 
{ activeTab === 'Work Code' && <WorkCode/>} 
{ activeTab === 'Bio Template' && <Biotemplate/>} 
{ activeTab === 'Bio Photo' && <Biophoto/>} 
{ activeTab === 'Transaction' && <Transaction/>} 
{ activeTab === 'Operation Log' && <OperationLog/>} 
{ activeTab === 'Error Log' && <Errorlog/>} 
{ activeTab === 'Upload' && <Upload/>} 
{ activeTab === 'Command Log' && <Commandlog/>} 
{ activeTab === 'Accounts' && <Accounts/>} 
{ activeTab === 'Announcement' && <Announcement/>} 
{ activeTab === 'Notice' && <Notice/>} 
{ activeTab === 'Location Setup' && <Locationsetup/>} 
{ activeTab === 'Employee Setup' && <EmployeeSetUp/>} 
{ activeTab === 'Department Setup' && <Departmentsetup/>} 
{ activeTab === 'Configurations' && <Configurations/>} 

          
          </div>
        </div>
    </div>
</main>
       
       
    )
}