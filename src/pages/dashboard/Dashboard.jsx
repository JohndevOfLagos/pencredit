import React from "react";
import "./dashboard.scss";
import Card from "components/card/Card";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import DashboardCardImage from "../../assets/DashboardCardBg.jpeg";

const Dashboard = () => {
  return (
    <div className="dashboard-info">
      <ul className="balance__list_track_list  balance__list__flex">
        <li className="dashboard-info__item balance__usd">
          <Card
            backgroundImage={DashboardCardImage}
            cardBackgroundColor="rgba(0, 53, 151, 0.92)"
          >
            <div className="dashboard-info__card">
              <div className="icon-block__dashboard-info">
                <Icon icon="streamline:money-cash-coins-stack-accounting-billing-payment-stack-cash-coins-currency-money-finance" />
              </div>
              <div className="dashboard-info__card__features">
                <div className="text">USD Balance</div>
                <div className="num">
                  $<span>195,764.85</span>
                </div>
              </div>
            </div>
          </Card>
        </li>
        <li className="dashboard-info__item">
          <Card
            backgroundImage={DashboardCardImage}
            cardBackgroundColor="rgba(81, 0, 180, 0.92)"
          >
            <div className="dashboard-info__card">
              <div className="icon-block__dashboard-info">
                <Icon icon="clarity:coin-bag-solid" />
              </div>
              <div className="dashboard-info__card__features">
                <div className="text">EUR Balance</div>
                <div className="num">
                  €<span>2,349.35</span>
                </div>
              </div>
            </div>
          </Card>
        </li>
        <li className="dashboard-info__item">
          <Card
            backgroundImage={DashboardCardImage}
            cardBackgroundColor="rgba(0, 0, 0, 0.88)"
          >
            <div className="dashboard-info__card">
              <div className="icon-block__dashboard-info">
                <Icon icon="solar:wallet-linear" />
              </div>
              <div className="dashboard-info__card__features">
                <div className="text">INR Balance</div>
                <div className="num">
                  ₹<span>40,349.35</span>
                </div>
              </div>
            </div>
          </Card>
        </li>
      </ul>

      <ul className="balance__list_track_list track__list__flex ">
        <li className="dashboard-info__item_2">
          <Card>
            <div className="card-hd-flex">
              <span className="card-hd card-hd-red">Active Loans</span>
              <span className="card-num">0</span>
            </div>
            <Link>
              <Icon icon="mdi:eye" />
              <span className="btn-view">view</span>
            </Link>
          </Card>
        </li>
        <li className="dashboard-info__item_2">
          <Card>
            <div className="card-hd-flex ">
              <span className="card-hd card-hd-blue">Payment Request</span>
              <span className="card-num">43</span>
            </div>
            <Link>
              <Icon icon="mdi:eye" />
              <span className="btn-view">view</span>
            </Link>
          </Card>
        </li>

        <li className="dashboard-info__item_2">
          <Card>
            <div className="card-hd-flex">
              <span className="card-hd card-hd-green">
                Active Fixed Deposit
              </span>
              <span className="card-num">12</span>
            </div>
            <Link>
              <Icon icon="mdi:eye" rotate={2} hFlip={true} vFlip={true} />
              <span className="btn-view">View</span>
            </Link>
          </Card>
        </li>

        <li className="dashboard-info__item_2">
          <Card>
            <div className="card-hd-flex">
              <span className="card-hd card-hd-purple">Active Tickets</span>
              <span className="card-num">7</span>
            </div>
            <Link>
              <Icon icon="mdi:eye" rotate={2} hFlip={true} vFlip={true} />
              <span className="btn-view">View</span>
            </Link>
          </Card>
        </li>
      </ul>
      <div className="Recent__transaction_track">
        <Card hasBorderBottom={true}>
          <h3 className="table-label">Recent Transactions</h3>
        </Card>
        <Card>
          <div className="table_scroll">
            <table className="table">
              <thead>
                <tr id="table-header-2">
                  <th>Dates</th>
                  <th>Currency</th>
                  <th>Amount</th>
                  <th>Charge</th>
                  <th>Grand Total</th>
                  <th>DR/CR</th>
                  <th>Type</th>
                  <th>Method</th>
                  <th>Status</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div>23/06/2023</div>
                    <div>08:00</div>
                  </td>
                  <td>USD</td>
                  <td>$34,783.62</td>
                  <td>
                    <span className="plus">+</span>
                    <span>$10:00</span>
                  </td>
                  <td>
                    <span>-</span>
                    <span className="red">$34,793.62</span>
                  </td>
                  <td>DR</td>
                  <td>Wire Transfer</td>
                  <td>Online</td>
                  <td>
                    <span className="complete-green">Completed</span>
                  </td>
                  <td>
                    <Link>view</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>23/06/2023</div>
                    <div>08:36</div>
                  </td>
                  <td>USD</td>
                  <td>$1,000.00</td>
                  <td>
                    <span>-</span>
                    <span>$00.00</span>
                  </td>
                  <td>
                    <span className="plus">-</span>
                    <span className="green">$1,000.00</span>
                  </td>
                  <td>CR</td>
                  <td>Deposit</td>
                  <td>Manual</td>
                  <td>
                    <span className="complete-green">Completed</span>
                  </td>
                  <td>
                    <Link>view</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>25/06/2023</div>
                    <div>22:48</div>
                  </td>
                  <td>USD</td>
                  <td>$1,010.00</td>
                  <td>
                    <span className="plus">-</span>
                    <span>$10.00</span>
                  </td>
                  <td>
                    <span className="plus">+</span>
                    <span className="green">$1,010.00</span>
                  </td>
                  <td>CR</td>
                  <td>Deposit</td>
                  <td>Fluterwave</td>
                  <td>
                    <span className="Pending-yellow">Pending</span>
                  </td>
                  <td>
                    <Link>view</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>22/06/2023</div>
                    <div>05:32</div>
                  </td>
                  <td>USD</td>
                  <td>$300.00</td>
                  <td>
                    <span>+</span>
                    <span>$3.00</span>
                  </td>
                  <td>
                    <span>-</span>
                    <span className="red">$303.00</span>
                  </td>
                  <td>DR</td>
                  <td>Wire Transfer</td>
                  <td>Manual</td>
                  <td>
                    <span className="complete-green">Completed</span>
                  </td>
                  <td>
                    <Link>view</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>22/06/2023</div>
                    <div>03:05</div>
                  </td>
                  <td>EURO</td>
                  <td>₹1409.42</td>
                  <td>
                    <span>+</span>
                    <span>$0.00</span>
                  </td>
                  <td>
                    <span>-</span>
                    <span className="red">₹1409.42</span>
                  </td>
                  <td>DR</td>
                  <td>Transfer</td>
                  <td>Online</td>
                  <td>
                    <span className="complete-green">Completed</span>
                  </td>
                  <td>
                    <Link>view</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>22/06/2023</div>
                    <div>07:24</div>
                  </td>
                  <td>EURO</td>
                  <td>₹1409.42</td>
                  <td>
                    <span>+</span>
                    <span>$0.00</span>
                  </td>
                  <td>
                    <span>-</span>
                    <span className="red">₹1409.42</span>
                  </td>
                  <td>DR</td>
                  <td>Transfer</td>
                  <td>Online</td>
                  <td>
                    <span className="complete-green">Completed</span>
                  </td>
                  <td>
                    <Link>view</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>20/06/2023</div>
                    <div>13:35</div>
                  </td>
                  <td>USD</td>
                  <td>$101.00</td>
                  <td>
                    <span>-</span>
                    <span>$1.00</span>
                  </td>
                  <td>
                    <span>+</span>
                    <span>101.00</span>
                  </td>
                  <td>CR</td>
                  <td>Deposit</td>
                  <td>Paystack</td>
                  <td>
                    <span className="complete-green">Completed</span>
                  </td>
                  <td>
                    <Link>view</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>19/06/2023</div>
                    <div>12:34</div>
                  </td>
                  <td>USD</td>
                  <td>$155.00</td>
                  <td>
                    <span>+</span>
                    <span>$1.55</span>
                  </td>
                  <td>
                    <span>-</span>
                    <span>$156.55</span>
                  </td>
                  <td>DR</td>
                  <td>Wire Transfer</td>
                  <td>Manual</td>
                  <td>
                    <span className="complete-green">Completed</span>
                  </td>
                  <td>
                    <Link>view</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>19/06/2023</div>
                    <div>8:34</div>
                  </td>
                  <td>USD</td>
                  <td>$150.00</td>
                  <td>
                    <span>+</span>
                    <span>$1.00</span>
                  </td>
                  <td>
                    <span>-</span>
                    <span className="red">$151.00</span>
                  </td>
                  <td>DR</td>
                  <td>Exchange</td>
                  <td>Online</td>
                  <td>
                    <span className="complete-green">Completed</span>
                  </td>
                  <td>
                    <Link>view</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>13/06/2023</div>
                    <div>6:14</div>
                  </td>
                  <td>EURO</td>
                  <td>€250.00</td>
                  <td>
                    <span>+</span>
                    <span>€1.00</span>
                  </td>
                  <td>
                    <span>-</span>
                    <span className="red">€251.00</span>
                  </td>
                  <td>CR</td>
                  <td>Transfer</td>
                  <td>Online</td>
                  <td>
                    <span className="complete-green">Completed</span>
                  </td>
                  <td>
                    <Link>view</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
