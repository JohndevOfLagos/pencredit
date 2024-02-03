import React from 'react'
import { Icon } from '@iconify/react';

const HeaderAlertMessage = () => {
  return (
    <div className="headerAlertMessage">
    <div>
     Encounting any issues?<span>Click here to have a chat with our team</span>
    </div>
    <Icon icon="iconoir:cancel" />
 </div>
  )
}

export default HeaderAlertMessage