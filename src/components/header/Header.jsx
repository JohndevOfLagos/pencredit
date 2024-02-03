import React from "react";
import "./header.scss";
import logoImage from "assets/Brand-Logo-White.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
export const Header = () => {
  const auth = JSON.parse(localStorage.getItem("token"));




  return (
    <header className="header__home">
      <div className="header__top">
        <Link className="image-block">
          <img src={logoImage} alt="White Brand Logo" />
        </Link>

        <nav className="header-nav__top">
          <ul>
            <li>
              <Link>Banking</Link>
            </li>
            <li>
              <Link>Credit Cards</Link>
            </li>
            <li>
              <Link>Retirements</Link>
            </li>
            <li>
              <Link>Insurance</Link>
            </li>
            <li>
              <Link>Investment &amp; Management</Link>
            </li>
            <li>
              <Link>Loans</Link>
            </li>
          </ul>
        </nav>

        <nav className="header-nav__auth">
          <ul>
            <li>
              <Link className="nav__auth-open">Open an Account</Link>
            </li>
            <li>
              <Link
                to={auth ? "/user/dashboard" : "/login"}
                className="nav-icon__link"
              >
                <Icon icon="solar:user-outline" />
                {auth ? <span>Your Dashboard</span> : <span>Sign in</span>}
              </Link>
            </li>
            <li>
              <Link className="nav__auth-bar">
                <Icon icon="humbleicons:bars" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__bottom">
        <nav className="header-nav__bottom">
          <ul>
            <li>
              <Link>
                <span className="icon-circular-bg">
                  <Icon icon="la:wallet" />
                </span>
                <span>Pay Bills</span>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <span className="icon-circular-bg">
                  <Icon icon="ion:log-out-outline" rotate={3} />
                </span>
                <span>Send Money</span>
              </Link>
            </li>
            <li>
              <Link>
                <span className="icon-circular-bg">
                  <Icon icon="streamline:interface-help-customer-support-human-1-customer-headphones-help-headset-person-profile-suuport" />
                </span>
                <span> Customer Service</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="search">
          <div className="search__block">
            <Icon icon="fluent:search-20-filled" />
            <input type="text" placeholder="How can we help you?" />
          </div>
        </div>
      </div>
    </header>
  );
};
