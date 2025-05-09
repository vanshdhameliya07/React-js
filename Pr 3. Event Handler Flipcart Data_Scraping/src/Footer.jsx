import React from 'react'

import './Footer.css'

const Footer = ({ footer }) => {


    return (



        <footer className="footer">


            <div className="footer-top">
                <div class="footer-column">


                    {
                        footer.map((v, i) => {
                            return (
                                <div >
                                    <h4>{v.ABOUT}</h4>
                                    <a href="">
                                        {v.aboutus}
                                    </a>
                                </div>
                            )
                        })
                    }


                </div>
                <div class="footer-column">

                    {
                        footer.map((v, i) => {
                            return (
                                <div >
                                    <h4>{v.s}</h4>

                                    <a href="">
                                        {v.GROUPCOMPANIES}
                                    </a>
                                </div>
                            )
                        })
                    }


                </div>
                <div class="footer-column">

                    {
                        footer.map((v, i) => {
                            return (
                                <div >
                                    <h4>{v.h}</h4>

                                    <a href="">
                                        {v.HELP}
                                    </a>
                                </div>
                            )
                        })
                    }

                </div>
                <div class="footer-column">

                    {
                        footer.map((v, i) => {
                            return (
                                <div >
                                    <h4>{v.c}</h4>

                                    <a href="">
                                        {v.CONSUMERPOLICY}
                                    </a>
                                </div>
                            )
                        })
                    }

                </div>
                <div class="footer-column address">

                    {
                        footer.map((v, i) => {
                            return (
                                <div key={i} style={{ borderLeft: '2px solid #454d5e', paddingLeft: '20px' }}>
                                    <h4>{v.m}</h4>

                                    <p>{v.MailUs}</p>
                                </div>
                            );
                        })
                    }
                    {
                        footer.map((v, i) => {
                            return (
                                <div key={i}>
                                    <h4 style={{marginLeft:"10px"}}>{v.social}</h4>
                                    <img style={{ marginLeft: "10px",cursor:"pointer" }} src={v.fimg} alt="" />
                                    <img style={{ marginLeft: "10px",cursor:"pointer" }} src={v.timg} alt="" />
                                    <img style={{ marginLeft: "10px",cursor:"pointer" }} src={v.yimg} alt="" />
                                    <img style={{ marginLeft: "10px", width: "19px",cursor:"pointer" }} src={v.iimg} alt="" />

                                </div>
                            );
                        })
                    }

                </div>
                <div class="footer-column address">
                    {
                        footer.map((v, i) => {
                            return (
                                <div >
                                    <h4>{v.r}</h4>

                                    <p>{v.RegisteredOfficeAddress}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div class=" footer-bottom">
                <div>
                    {
                        footer.map((v, i) => {
                            return (
                                <div className='d-flex  jusify-content-center' >
                                    <img style={{ marginLeft: "30px" }} src={v.seller} alt="" />
                                    <p style={{ margin: "0px", marginLeft: "5px" }}>{v.b}</p>
                                    <img style={{ marginLeft: "30px" }} src={v.ad} alt="" />
                                    <p style={{ margin: "0px", marginLeft: "5px" }}>{v.a}</p>

                                    <img style={{ marginLeft: "30px" }} src={v.g} alt="" />
                                    <p style={{ margin: "0px", marginLeft: "5px" }}>{v.gi}</p>

                                    <img style={{ marginLeft: "30px" }} src={v.he} alt="" />
                                    <p style={{ margin: "0px", marginLeft: "5px" }}>{v.hel}</p>

                                </div>
                            )
                        })
                    }
                </div>
                <div>{
                    footer.map((v, i) => {
                        return (
                            <div >
                                <p style={{ marginTop: "10px" }}> {v.rr}</p>
                            </div>
                        )
                    })
                }</div>
                <div className="payment-icons">
                    {
                        footer.map((v, i) => {

                            return (
                                <img src={v.img} alt="" />
                            )
                        })
                    }
                </div>

            </div>

        </footer>

    )
}

export default Footer