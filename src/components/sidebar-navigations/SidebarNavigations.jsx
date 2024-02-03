import React from "react";
import "./sidebar-navs.scss";
import Card from "components/card/Card";
import BankLogo from "../../assets/Brank-Logo-Primary-blue.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export const SidebarNavigations = () => {
  return (
    <Card>
      <div className="sidebar-main">
        <div className="bankLogo">
          <img src={BankLogo} alt="" />
        </div>
        <div className="sidebar__line-devide"></div>
        <div className="Navigations">Navigations</div>
        <ul className="sidebar-menu">
          <Link to="/user/dashboard">
            <li className="sidebar-menu_list">
              <span className="sidebar-menu_list_body">
                <Icon icon="ic:sharp-dashboard" />
                <span>DashBoard</span>
              </span>
            </li>
          </Link>

          <Link>
            <li className="sidebar-menu_list">
              <span className="sidebar-menu_list_body">
                <Icon icon="mdi:navigation-variant" />
                <span>Send Money</span>
              </span>
            </li>
          </Link>

          <Link>
            <li className="sidebar-menu_list">
              <span className="sidebar-menu_list_body">
                <Icon icon="mingcute:transfer-3-fill" />
                <span>Exchange Money</span>
              </span>
            </li>
          </Link>

          <Link>
            <li className="sidebar-menu_list">
              <span className="sidebar-menu_list_body">
                <Icon icon="fa6-solid:user" />
                <span>Account</span>
              </span>
            </li>
          </Link>
          <Link>
            <li className="sidebar-menu_list">
              <span className="sidebar-menu_list_body">
                <Icon icon="el:plus-sign" rotate={2} vFlip={true} />
                <span>Deposit Money</span>
                <Icon
                  className="sidebar-menu_list_flex"
                  icon="mdi:caret"
                  rotate={1}
                />
              </span>
            </li>
          </Link>
          <Link to="/user/withdraw">
            <li className="sidebar-menu_list">
              <span className="sidebar-menu_list_body">
                <Icon icon="el:minus-sign" rotate={2} vFlip={true} />
                <span>Withdraw Money</span>
              </span>
            </li>
          </Link>
          <Link>
            <li className="sidebar-menu_list">
              <span className="sidebar-menu_list_body">
                <Icon icon="fa:bank" />
                <span>Wire Transfer</span>
              </span>
            </li>
          </Link>
          <Link>
            <li className="sidebar-menu_list">
              <span className="sidebar-menu_list_body">
                <Icon icon="fluent:payment-16-filled" rotate={2} vFlip={true} />
                <span>Payment Request</span>
                <Icon
                  className="sidebar-menu_list_flex"
                  icon="mdi:caret"
                  rotate={1}
                />
              </span>
            </li>
          </Link>

          <Link>
            <li className="sidebar-menu_list">
              <span className="sidebar-menu_list_body">
                <Icon icon="emojione-monotone:dollar-banknote" />
                <span>Loan</span>
                <Icon
                  className="sidebar-menu_list_flex"
                  icon="mdi:caret"
                  rotate={1}
                />
              </span>
            </li>
          </Link>
          <Link>
            <li className="sidebar-menu_list">
              <span className="sidebar-menu_list_body">
                <Icon
                  icon="solar:money-bag-bold"
                  rotate={2}
                  hFlip={true}
                  vFlip={true}
                />
                <span>Fixed Deposit</span>
                <Icon
                  className="sidebar-menu_list_flex"
                  icon="mdi:caret"
                  rotate={1}
                />
              </span>
            </li>
          </Link>
          <Link>
            <li className="sidebar-menu_list">
              <span className="sidebar-menu_list_body">
                <Icon
                  icon="healthicons:money-bag"
                  rotate={2}
                  hFlip={true}
                  vFlip={true}
                />
                <span>DPS Scheme</span>
                <Icon
                  className="sidebar-menu_list_flex"
                  icon="mdi:caret"
                  rotate={1}
                />
              </span>
            </li>
          </Link>
          <Link>
            <li className="sidebar-menu_list">
              <span className="sidebar-menu_list_body">
                <Icon icon="streamline:interface-help-customer-support-human-1-customer-headphones-help-headset-person-profile-suuport" />
                <span>Support Tickets</span>
                <Icon
                  className="sidebar-menu_list_flex"
                  icon="mdi:caret"
                  rotate={1}
                />
              </span>
            </li>
          </Link>
          <Link>
            <li className="sidebar-menu_list">
              <span className="sidebar-menu_list_body">
                <Icon icon="dashicons:update" />
                <span>Transactions Report</span>
              </span>
            </li>
          </Link>

          <button>
            <Icon icon="ri:logout-circle-line" rotate={1} />
            <span>Logout</span>
          </button>
          <div className="App-version">
            <span>v.26</span>
          </div>
        </ul>
      </div>
    </Card>
  );
};
