import React from 'react';
import "./footer.scss"
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import BrandLogoBlue from "assets/Brank-Logo-Primary-blue.png";
import Member_FDIC_Logo from "assets/Member FDIC.png";
import EqualHousingOppurnity from "assets/Equal Housing Opportunity.png";

export const Footer = () => {
    return (
        <div className="Footer-container">
            <div className="About-Container">
                <div className="About-section">
                    <div className="Brands-SocialIcons">
                        <Link to="/">
                            <img
                                className='Brand-logo'
                                src={BrandLogoBlue} alt="" />
                        </Link>
                        <span>
                            <Link className='Brand-Social'><Icon icon="mdi:instagram" /></Link>
                            <Link className='Brand-Social'><Icon icon="ri:twitter-fill" /></Link>
                            <Link className='Brand-Social'><Icon icon="ri:facebook-fill" /></Link>
                            <Link className='Brand-Social'><Icon icon="akar-icons:linkedin-fill" /></Link>
                            <Link className='Brand-Social'><Icon icon="grommet-icons:youtube" /></Link>
                        </span>
                    </div>
                    <ul className='About-list'>
                        <li className='About-list-item'>
                            <h4>PRODUCTS</h4>
                            <span><Link>Credit Cards</Link></span>
                            <span><Link>Checking & Savings</Link></span>
                            <span><Link>Auto</Link></span>
                            <span><Link>Business</Link></span>
                            <span><Link>Commercial</Link></span>
                            <span><Link>PenCredit Shopping</Link></span>
                            <span><Link>CreditWise</Link></span>
                        </li>
                        <li className='About-list-item'>
                            <h4>GET TO KNOW US</h4>
                            <span><Link>About</Link></span>
                            <span><Link>Corporate Information</Link></span>
                            <span><Link>Newsroom</Link></span>
                            <span><Link>Technology</Link></span>
                            <span><Link>Investors</Link></span>
                            <span><Link>Careers & Jobs</Link></span>
                            <span><Link>Diversity & Inclusion</Link></span>
                            <span><Link>Canada</Link></span>
                            <span><Link>UK</Link></span>
                        </li>
                        <li className='About-list-item'>
                            <h4>ON THE GO</h4>
                            <span><Link>Locations & ATMs</Link></span>
                            <span><Link>PenCredit Travel</Link></span>
                            <span><Link>Mobile App</Link></span>
                            <span><Link>Meet Eno</Link></span>
                            <span><Link>Digital Payments</Link></span>
                        </li>
                        <li className='About-list-item'>
                            <h4>LEGAL</h4>
                            <span><Link>Privacy</Link></span>
                            <span><Link>Patriot Act Certification</Link></span>
                            <span><Link>Wolfsberg Questionnaire</Link></span>
                            <span><Link>Subpoena Policy</Link></span>
                            <span><Link>Additional Disclosures</Link></span>
                        </li>
                        <li className='About-list-item'>
                            <h4>SUPPORT</h4>
                            <span><Link>COVID-19</Link></span>
                            <span><Link>2019 Cyber Incident</Link></span>
                            <span><Link>Help Center</Link></span>
                            <span><Link>Learn & Grow</Link></span>
                            <span><Link>Resources for Military</Link></span>
                            <span><Link>Accessibility Assistance</Link></span>
                            <span><Link>Tweet @AskCapitalOne</Link></span>
                            <span><Link>Contact Us</Link></span>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="Footnotes-Container">
                <div className="Footnotes">
                    <div className='footer-hd'>
                        <h4>Footnotes</h4>
                        <div className='dashline'></div>
                    </div>
                    <div className="Footnotes-Discription">
                        <div className='footernotes-d'>Learn more about
                            <Link className='footernotes-d-link'>FDIC insurance coverage.</Link>
                        </div>
                        <div className='footernotes-d'>Mastercard® is a registered trademark, and the circles design is a trademark of Mastercard International Incorporated.</div>
                        <div className='footernotes-d'>The EMVCo Contactless Symbol and Contactless Indicator mark, consisting of four graduating arcs, are trademarks owned by and used with permission of EMVCo, LLC.</div>
                    </div>
                    <div className="Footernotes-Discription-2">
                        <div className='d-head'>
                            <span>1</span>
                            <span className='D-space-2'>
                                This product finder tool is informational and educational only and strictly meant to provide an overview of PenCredit product offerings based on self-selected user goals. Its results do not constitute financial or investment advice.
                            </span>
                        </div>
                        <div className="Footnotes-Discription">
                            <div className='footernotes-d'>Learn more about
                                <Link className='footernotes-d-link'>FDIC insurance coverage.</Link>
                            </div>
                            <div className='footernotes-d'>Mastercard® is a registered trademark, and the circles design is a trademark of Mastercard International Incorporated.</div>
                            <div className='footernotes-d'>The EMVCo Contactless Symbol and Contactless Indicator mark, consisting of four graduating arcs, are trademarks owned by and used with permission of EMVCo, LLC.</div>
                        </div>
                        <div className="Footernotes-Discription-2">
                            <div className='d-head'>
                                <span>1</span>
                                <span className='D-space-2'>
                                    This product finder tool is informational and educational only and strictly meant to provide an overview of Pencredit product offerings based on self-selected user goals. Its results do not constitute financial or investment advice.
                                </span>
                            </div>
                            <div className='d-head'>
                                <span>2</span>
                                <span className='D-space-2'>
                                    CreditWise availability will vary depending on ability to obtain your credit history from TransUnion®.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <ul className="Footer-buttom">
                    <li><Link className='footer-text-f'>©2023 PenCredit</Link></li>
                    <li className='foot-item-flex'>
                        <span>
                            <Link className='footer-item'>Privacy</Link>
                        </span>
                        <span><Icon className='iconsized' icon="vaadin:line-v" /></span>
                        <span>
                            <Link className='footer-item'>Security</Link>
                        </span>
                        <span><Icon className='iconsized' icon="vaadin:line-v" /></span>
                        <span>
                            <Link className='footer-item'>AdChoices</Link>
                        </span>
                        <span><Icon className='iconsized' icon="vaadin:line-v" /></span>
                        <span>
                            <Link className='footer-item'>Terms & Conditions</Link>
                        </span>
                    </li>
                    <li className='footer-logo-container'>
                        <span>
                            <img
                                className='Footer-Buttom-logo'
                                src={Member_FDIC_Logo} alt='' />
                        </span>
                        <span>
                            <img
                                className='Footer-Buttom-logo Footer-Buttom-logo-sized'
                                src={EqualHousingOppurnity} alt='' />
                        </span>
                    </li>
                </ul>
            </div>

        </div>
    )
}
