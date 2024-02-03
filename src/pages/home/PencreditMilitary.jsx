import React from 'react';
import "./pencredit-military.scss";
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import militaryLady from "assets/pencredit-us-army.jpeg"

export const PencreditMilitary = () => {
    return (
        <div className='army__content'>
            <div className='army__background-image'>
                <img src={militaryLady} alt='' />
            </div>
            <div className='army__text'>
                <div className="papper">
                    <h1>

                        Here&apos;s how&nbsp;<span>PenCredit</span>&nbsp;
                        is different.
                    </h1>

                    <ul className='paper-list'>
                        <li>
                            <div className='icon-block'>
                                <Icon icon="la:medal" />
                            </div>
                            <div className='text-block'>
                                <h4>We are military focused.</h4>
                                <p>
                                    Our services do not include all - we serve the military community. We understand their unique needs and create products and services made just fot them.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='icon-block'>
                                <Icon icon="ic:outline-contact-support" />
                            </div>
                            <div className='text-block'>
                                <h4>Our Support, and Help is 24/7.</h4>
                                <p>
                                    In all we do our customers come first - we are help to help no matter where you are in life. Whether you looking to get free advice or <Link>Open an account</Link> we have got you.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='icon-block'>
                                <Icon icon="gis:earth-euro-africa" />
                            </div>
                            <div className='text-block'>
                                <h4>Globally PenCredit gives back </h4>
                                <p>
                                    Our services do not include all - we serve the military community. We understand their unique needs and create products and services made just fot them.
                                </p>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </div>

    )
}

