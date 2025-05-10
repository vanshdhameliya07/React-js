import React from 'react'

import './Footer.css'

const Footer = ({ footer }) => {


    return (



        <footer className="footer">


            <div className="footer-top">
                <div className="footer-column">


                    {
                        footer.map((v, i) => {
                            return (
                                <div key={i}>
                                    <h4>{v.ABOUT}</h4>
                                    <a href="">{v.ContactUs}</a>
                                    <a href="">{v.AboutUs}</a>
                                    <a href="">{v.Careers}</a>
                                    <a href="">{v.FlipkartStories}</a>
                                    <a href="">{v.Press}</a>
                                    <a href="">{v.CorporateInformation}</a>
                                </div>
                            )
                        })
                    }


                </div>
                <div className="footer-column">

                    {
                        footer.map((v, i) => {
                            return (
                                <div key={i}>
                                    <h4>{v.s}</h4>

                                    <a href="">{v.Myntra}</a>
                                    <a href="">{v.Cleartrip}</a>
                                    <a href="">{v.Shopsy}</a>
                                </div>
                            )
                        })
                    }


                </div>
                <div className="footer-column">

                    {
                        footer.map((v, i) => {
                            return (
                                <div key={i}>
                                    <h4>{v.h}</h4>

                                    <a href="">{v.Payments}</a>
                                    <a href="">{v.Shipping}</a>
                                    <a href="">{v.C}</a>
                                    <a href="">{v.FAQ}</a>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="footer-column">

                    {
                        footer.map((v, i) => {
                            return (
                                <div key={i}>
                                    <h4>{v.c}</h4>

                                    <a href="">{v.ca}</a>
                                    <a href="">{v.TermsOfUse}</a>
                                    <a href="">{v.Security}</a>
                                    <a href="">{v.Privacy}</a>
                                    <a href="">{v.Sitemap}</a>
                                    <a href="">{v.GrievanceRedressal}</a>
                                    <a href="">{v.EPRCompliance}</a>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="footer-column address">

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
                                    <h4 style={{ marginLeft: "10px" }}>{v.social}</h4>
                                    <img style={{ marginLeft: "10px", cursor: "pointer" }} src={v.fimg} alt="" />
                                    <img style={{ marginLeft: "10px", cursor: "pointer" }} src={v.timg} alt="" />
                                    <img style={{ marginLeft: "10px", cursor: "pointer" }} src={v.yimg} alt="" />
                                    <img style={{ marginLeft: "10px", width: "19px", cursor: "pointer" }} src={v.iimg} alt="" />

                                </div>
                            );
                        })
                    }

                </div>
                <div className="footer-column address">
                    {
                        footer.map((v, i) => {
                            return (
                                <div key={i}>
                                    <h4>{v.r}</h4>

                                    <p>{v.RegisteredOfficeAddress}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className=" footer-bottom">
                <div>
                    {
                        footer.map((v, i) => {
                            return (
                                <div key={i} className='d-flex  jusify-content-center' >
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
                            <div key={i}>
                                <p style={{ marginTop: "10px" }}> {v.rr}</p>
                            </div>
                        )
                    })
                }</div>
                <div className="payment-icons">
                    {
                        footer.map((v, i) => {

                            return (
                                <img key={i} src={v.img} alt="" />
                            )
                        })
                    }
                </div>

            </div>

        </footer>

    )
}

export default Footer