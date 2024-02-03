import "./ctmgt.scss";
import { SidebarNavigations } from '../components/sidebar-navigations/SidebarNavigations';
import { Icon } from "@iconify/react"
// import brandLogoWhite from "../assets/Brand-Logo-White.png"
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Link } from "react-router-dom";
// import HeaderAlertMessage from "components/headerALertMessage/HeaderAlertMessage";
import WithdrawChoice from "../components/withdraw/WithdrawChoice.jsx"
import WidthdrawalForm from "../components/withdraw/WithdrawalForm";
import { Loading } from "components/loading/Loading";
import { useState } from "react";


const Dashboard = lazy(() => import("pages/dashboard/Dashboard"))

export const ContentManagement = () => {
    const [isSidebarOpen, setSideBarOpen] = useState(false)

    const toggleSidebar = () => {
        setSideBarOpen(!isSidebarOpen);
      };




  return (
     

    <div className="content-management">
        <div className="header-alert-message">
     </div>
      <header className='dashboard-header'>
                <div className='header-inner'>
                    {/* <Link to="/" className='pencredit-logo'>
                        <img src={brandLogoWhite} alt='' />
                    </Link> */}
                    <div className="header-greeting">
                            <h4>Welcome back, Obinna!</h4>
                    </div>
                    <div className='dashboard-header__right-item'>
                        <div className="userprofile">
                            <button>
                            <div className="user-icon">
                            <Icon icon="entypo:user" />
                            </div>
                            <span>
                                 Obinna ofe
                                 <Icon icon="basil:caret-down-outline" />
                            </span>
                            
                            </button>
                        </div>

                        <div className="user-mode">
                        <button type='button'>
                        <Icon icon="ic:baseline-dark-mode" />
                        </button>
                        </div>

                        <div className='notification'>
                            <button type='button'>
                                <span>
                                    <Icon icon="ph:bell-fill" />
                                    <span className='notification-count'>18</span>
                                </span>
                                <Icon icon="basil:caret-down-outline" />
                            </button>
                        </div>

                        <div className='user-actions'>
                            <button type='button'>
                            <Icon icon="streamline:interface-help-customer-support-human-1-customer-headphones-help-headset-person-profile-suuport" />
                                <Icon icon="basil:caret-down-outline" />
                            </button>
                        </div>
                        <div className='side-menu-toggle'>
                            <button onClick={toggleSidebar}>
                                <Icon icon="quill:hamburger" />
                                <span>{isSidebarOpen ? 'Close Menu' : 'Side Menu'}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <article className='content-management__layout'>
 
           <div className={`content-management__sidebar ${isSidebarOpen ? 'open' : ""}`}>
                <SidebarNavigations 
                isSidebarOpen={isSidebarOpen} 
                toggleSidebar={toggleSidebar}
                />
           </div>
                <div className='content-management__content'>
            
                <Suspense fallback={<Loading />}>
                        <Routes>
                            <Route path='dashboard' element={<Dashboard />}/>
                            <Route path='withdraw' element={<WithdrawChoice />}/>
                            <Route path="withdraw/form" element={<WidthdrawalForm/>} />
                        </Routes>
                    </Suspense>
                </div>
            </article>
              
           
    </div>
    
  )
}
