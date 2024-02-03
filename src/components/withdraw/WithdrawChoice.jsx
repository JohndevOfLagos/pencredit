import React from 'react'
import Card from '../card/Card';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './withdraw.scss'
import BankLogo from 'assets/Brank-Logo-Primary-blue.png'

export default function WithdrawChoice() {
  return (

    <Card>
      <div className="widthraw-method_container">
        <ul className='withdraw-method_navbar'>
          <li className='withdraw-method_nav-left'>
            <Link to="/">
              <img
                className="withdraw-method_bank-logo"
                src={BankLogo} alt="" />
            </Link>
          </li>
          <li className="withdraw-method_nav-right">
            <span className='withdraw-method_max'>
              <Link>
                Max amount to Withdraw:($1,000.00 - $50,000.00)
              </Link>
            </span>
            <span className='withdraw-method_fee'>
              <Link>
                Withdraw Fee: ($0.00 + 1.00%)
              </Link>
            </span>

          </li>
        </ul>
        <div className="withdraw_select-menu">
          <div className='select-menu_heading'>Select a destination</div>
          <div className='select-menu_p'>Kindly select where you want to withdraw cash to</div>
        </div>

        <article className="withdraw-peer_flex-container">
          <Link className="withdraw-peer_Box">
            <span className='withdraw-peer_App'>
              <span className="withdraw-peer_icon">
                <Icon icon="fluent:wallet-credit-card-24-regular" />
              </span>
              <span className='withdraw-peer_info'>
                <span className='peer-to-peer_heading'>Withdraw to Wallet App<Icon className='icon-head' icon="material-symbols:electric-bolt-outline" /></span>
                <div className='peer-to-peer_list'>- Get Interest for spending.</div>
                <div className='peer-to-peer_list'>- Earn Pendcredit Points.</div>
                <div className='peer-to-peer_list'>- Recieve funds in a seconds.</div>
                <div className='peer-to-peer_list'>- Transfer Money to any bank anytime.</div>
              </span>
            </span>
          </Link>
          <Link to="/user/withdraw/form" className="withdraw-peer_Box">
            <span className='withdraw-peer_Bank'>
              <span className='withdraw-peer_icon icon-blue'>
                <Icon icon="icons8:bank-card" />
              </span>
              <span className='withdraw-peer_info'>
                <span className="peer-to-peer_heading">Withdraw to Bank</span>
                <div className='peer-to-peer_list'>- Recieve funds in a seconds or minutes</div>
              </span>
            </span>
          </Link>
        </article>
        <span className='cancel-button'>
          <Link to="/user/dashboard">
            <span>Cancel Withdraw</span>
          </Link>
        </span>
      </div>
    </Card>

  )
}
