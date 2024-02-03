import React from "react";
import "./HomeSideNavigation.scss";
import BankLogo from "../../assets/Brank-Logo-Primary-blue.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export const HomeSideNavigation = () => {
  return (
    <div className="HomeSideNavigation__Container">
      <div className="HomeSideNavigation">
      <ul className="pencredit-logo__handburger">
        <li>
        <button>
         Go back
        </button>
        </li>
        <li>
        <Link to="/">
          <img src={BankLogo} alt="" />
        </Link>
        </li>
      </ul>
      <main className="HomeSideNavigation-content">
        <div className="HomeSideNavigation__content-server">
            <Link to="/">
            <ul className="pencredit-hyperlink">
              <li>
                <Icon icon="ic:sharp-home" />
              </li>
              <li>Home</li>
              </ul>
            </Link>
        </div>
        <div className="Account__content-server">
          <h6>account</h6>
          <ul className="Account__content-server-list">
            <Link>
              <li>
                <Icon icon="bxs:bank" />

                <span>Open account</span>
              </li>
            </Link>
            <Link>
              <li>
                <Icon icon="uis:padlock" />

                <span>Sign in</span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="Resources__content-server">
          <h6>resources</h6>
          <ul className="Resources__content-server-list">
            <Link>
              <li>
                <Icon icon="iconamoon:discover-fill" />
                <span>Discover</span>
              </li>
            </Link>
            <Link>
              <li>
                <Icon icon="bi:credit-card-fill" />

                <span>Credit Cards</span>
              </li>
            </Link>
            <Link>
              <li>
                <Icon icon="mdi:accessible" />

                <span>Retirements</span>
              </li>
            </Link>
            <Link>
              <li>
                <Icon icon="icon-park-solid:protect" />

                <span>Insurance</span>
              </li>
            </Link>
            <Link>
              <li>
                <Icon icon="ic:sharp-bar-chart" />

                <span>Investment</span>
              </li>
            </Link>
            <Link>
              <li>
                <Icon icon="material-symbols:stress-management" />

                <span>Management</span>
              </li>
            </Link>
            <Link>
              <li>
                <Icon icon="healthicons:money-bag" />

                <span>Loans</span>
              </li>
            </Link>
            <Link>
              <li>
                <Icon icon="ic:sharp-help" />

                <span>Help centre</span>
              </li>
            </Link>
            <Link>
              <li>
                <Icon icon="fluent-mdl2:sync-status-solid" />

                <span>Status</span>
              </li>
            </Link>
          </ul>
        </div>
      </main>
    </div>
    </div>
  );
};
