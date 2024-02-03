import React, { useEffect, useState } from "react";
import "./withdraw.scss";
import { Icon } from "@iconify/react";
import Card from "../card/Card";
import { Link } from "react-router-dom";
import { Loading } from "components/loading/Loading";
import Notify from "components/notify/Notify";

export default function WidthdrawalForm() {
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notify, setNotify] = useState(false);
  const [destination, setDestination] = useState("");
  const [password, setPassword] = useState("")
  const [purpose, setPurpose] = useState("");
  
  const allInputIsValid = amount >= 1000 && password !== "" && purpose !== "" && destination !== ""
console.log( allInputIsValid)

  const withdrawHandler = () => {
   
    setLoading((prev) => !prev);
  };

  useEffect(() => {
    let timer;



    if (loading) {
      timer = setTimeout(() => {
        setLoading((prev) => !prev);
        setNotify((prev) => !prev);
      }, 10000);
    }

    return () => clearTimeout(timer);
  }, [loading]);

  

  return (
    <>
      <Card>
        <div className="withdraw-from-main_sroll">
          <div className="withdraw-form_container">
            <Link to="/user/withdraw" className="cancel-icon">
              <Icon icon="iconoir:cancel" />
            </Link>
            <div className="withdraw-form_heading">
              <h4>Withdraw to Bank</h4>
              <div className="withdraw-form_available-amount">
                Avalaible PenCredit balance is: <strong>$195,764.85</strong>
              </div>

            </div>

            <Link className="withdraw-form_auth">
              <div className="withdraw-form_auth-box">
                <span className="withdraw-form_auth_icon-key">
                  <Icon icon="icon-park-outline:key" />
                </span>
                <div>
                  <span className="withdraw-form_auth_heading">
                    2FA: Tap to Generate OTP!
                  </span>
                  <div className="withdraw-form_auth_p">
                    For even better security, 2FA is now required for sensitive
                    actions on your PenCredit. Please tap to generate OTP for
                    this withdrawal then come back to proceed
                  </div>
                </div>
              </div>
            </Link>

            <form className="form-withdraw_box">
              <div className="form-withdraw_amount">
                <div className="form__amount__input_form">
                <label htmlFor="amountInput">
                  Amount to withdraw from now <strong>(minimum:$1,000.00 - $50,000.00)</strong>
                </label>
                  <div className="form_amount_input__icon-block">
                    <Icon className="dollar-sign" icon="bx:dollar" />
                    <input
                      value={amount}
                      type="number"
                      name="amount"
                      className="withdraw_amount_input"
                      id="amountInput"
                      onChange={(e) => {
                        setAmount(e.target.value);
                      }}
                      // onBlur={handleBlur}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-withdraw_destination">
              <label>Select Destination</label>
                <div className="select-block">
                  <select
                    name="select"
                    className="withdraw_select-destination"
                    id="destination"
                    onChange={(e) => setDestination(e.target.value)}
                    required
                    value={destination}
                  >
                    <option value=""> </option>
                    <option value="Cash App">Cash App</option>
                    <option value="Zelle">Zelle</option>
                    <option value="Vemo">Vemo</option>
                    <option value="USAA">USAA</option>
                    <option value="Chase">Chase</option>
                    <option value="Wells Fargo">Wells Fargo</option>
                    <option value="Navy Federal Credit Union">
                      Navy Federal Credit Union
                    </option>
                  </select>
                  <div className="custom-destination_icons">
                    <span className="destination_input-line">
                      <Icon icon="ci:line-xl" />
                    </span>
                    <span className="destination_input-carat-down">
                      <Icon icon="basil:caret-down-solid" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-withdraw_destination form-select__two">
                <label>select what are you withdrawing for (optional)</label>
                <div className="select-block">
                  <select
                    name="select"
                    className="withdraw_select-destination"
                    id="destination2"
                    onChange={(e) => setPurpose(e.target.value)}
                    value={purpose}
                    required
                  >
                    <option value=""></option>
                    <option value="Educationv">Education</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Investment">Investment</option>
                    <option value="Others">Others</option>
                  </select>
                  <div className="custom-destination_icons">
                    <span className="destination_input-line">
                      <Icon icon="ci:line-xl" />
                    </span>
                    <span className="destination_input-carat-down">
                      <Icon icon="basil:caret-down-solid" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-withdraw_password">
                <div className="form__password__input_form">
                <label htmlFor="password">
                  Confirm your password to withdraw
                </label>
                    <input
                      value={password}
                      type="password"
                      name="password"
                      className="withdraw_amount_input"
                      id="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      // onBlur={handleBlur}
                      required
                    />
                 
                </div>
              </div>
              <button
              type="button"
              className={`${allInputIsValid ? "withdraw-form_button button-enabled" : "withdraw-form_button button-disabled"}`}
              onClick={withdrawHandler}
              // disabled={`${allInputIsValid.toString}`}
            >
              Withdraw
            </button>
            </form>
          </div>
        </div>
      </Card>
      {loading ? <Loading /> : null}
      <Notify amount={amount} setNotify={setNotify} notify={notify} />
    </>
  );
}
