import React from 'react';
import "./Notify.scss" ;
import {Icon} from "@iconify/react"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Notify = ({amount, notify, setNotify}) => {
  const navigate = useNavigate();

  const closeNotifyHandler = () => {
    setNotify(prev =>!prev);
     navigate('/user/withdraw'); // Replace '/other-page' with the desired route you want to navigate to
  }
  
  

      

  return (
    <div className={`${notify ? 'notify opened' : 'notify closed'}`}>
      <div className='notify__content'>
        <div className="icon__block">
          <Icon icon="uiw:warning" />
        </div>
        <div className='notify__message'>
          <h3>Something went wrong!</h3>
          <p>{`Withdrawal amount of $${amount} cannot be processed at this moment`}</p>
        </div>
        <div className='notify___actions'>
          <button type='button' className='button--red' onClick={closeNotifyHandler}>
              Cancel
          </button>
          <Link to="#">Contact Support</Link>
        </div>
      </div>
    </div>
  )
}

export default Notify