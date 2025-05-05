import React from 'react'

import './Footer.css'

const Footer = ({ footer }) => {


    return (



        <footer className="footer">


            <div className="footer-top">
                <div class="footer-column">
                    <h4>ABOUT</h4>

                    {
                        footer.map((v, i) => {
                            return (
                                <div >
                                    <a href="">
                                        {v.aboutus}
                                    </a>
                                </div>
                            )
                        })
                    }


                </div>
                <div class="footer-column">
                    <h4>GROUP COMPANIES</h4>

                    {
                        footer.map((v, i) => {
                            return (
                                <div >
                                    <a href="">
                                        {v.GROUPCOMPANIES}
                                    </a>
                                </div>
                            )
                        })
                    }


                </div>
                <div class="footer-column">
                    <h4>HELP</h4>

                    {
                        footer.map((v, i) => {
                            return (
                                <div >
                                    <a href="">
                                        {v.HELP}
                                    </a>
                                </div>
                            )
                        })
                    }

                </div>
                <div class="footer-column">
                    <h4>CONSUMER POLICY</h4>

                    {
                        footer.map((v, i) => {
                            return (
                                <div >
                                    <a href="">
                                        {v.CONSUMERPOLICY}
                                    </a>
                                </div>
                            )
                        })
                    }

                </div>
                <div class="footer-column address">
                    <h4>Mail Us:</h4>

                    {
                        footer.map((v, i) => {
                            return (
                                <div key={i}>
                                    <p>{v.MailUs}</p>
                                </div>
                            );
                        })
                    }


                    <h4>Social:</h4>
                    <div class="social-icons">
                        {/* {
                            footer.map((v, i) => {
                                return (
                                    <div >
                                        <img src={v.img} alt="" />
                                    </div>
                                )
                            })
                        } */}
                    </div>
                </div>
                <div class="footer-column address">
                    <h4>Registered Office Address:</h4>
                    {
                        footer.map((v, i) => {
                            return (
                                <div >
                                    <p>{v.RegisteredOfficeAddress}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            
            <div class="footer-bottom">
                <div>
                    {
                        footer.map((v, i) => {
                            return (
                                <div >
                                    <img src={v.img} alt="" />
                                    <p> {v.BecomeaSeller}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div>&copy; 2007-2025 Flipkart.com</div>
                <div className="payment-icons">
                    {
                        footer.map((v, i) => {
                            console.log(v);

                            return (
                                <div key={i}>
                                    <img src={v.img} alt="" />
                                </div>
                            );
                        })
                    }
                </div>

            </div>

        </footer>




    )
}

export default Footer