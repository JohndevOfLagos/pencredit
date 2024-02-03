import React from "react";
import "./services.scss";

export const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <header className="services-header">
          <h2>Banking with Ease</h2>
          <div>
            <span>
              The less time you spend in a bank, the more time you have for
              yourself.
            </span>
            <span>
              Choose from a variety of easy and secure ways to manage your money
              on-the-go.
            </span>
          </div>
        </header>
        <ul className="services-list">
          <li>
            <div>
              <div>
                <label>Retirement Made Easy</label>
                <h3>Transition to a Purposeful Retirement</h3>

                <p>Manage your money, plan for retirement. </p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div>
                <label>Internet Banking</label>
                <h3>PayBills, Transfer, Deposits, and more</h3>

                <p>Your transaction aims are super flexible.</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div>
                <label>Mobile Banking</label>
                <h3>Mobile check deposit</h3>

                <p>Your transaction aims are super flexible.</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div>
                <label>Financing</label>
                <h3>Loan amounts in minutes</h3>

                <p>Get rid of debt faster. Cover unexpected expenses.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
