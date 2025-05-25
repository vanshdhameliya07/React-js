import React from 'react'
import Card from 'react-bootstrap/Card';
import { AiOutlineShopping } from "react-icons/ai";
import { IoMdStar } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

import './ProductCard.css'


const ProductCard = () => {
    return (
        <div>

            <div className=' to mb-5'>
                <h1>Popular Products</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    <br />
                    incididunt ut labore lacus vel facilisis.</p>
                <div className="col-12 d-flex align-items-center">

                    <div className="col-2 ff">
                        <ul className='ul '>
                            <li>All</li>
                            <div className='arrow'>
                                <FaArrowRight />
                            </div>

                        </ul>
                        <ul className='ul'>
                            <li>Snack</li>
                            <FaArrowRight />
                        </ul>

                        <ul className='ul'>
                            <li>Vegetable</li>

                        </ul>
                        <ul className='ul'>
                            <li>Fruit</li>

                        </ul>
                        <ul className='ul'>
                            <li>Bakery</li>

                        </ul>

                    </div>

                    <div classNames="col-3">
                        <Card className='Card4' style={{ width: '14rem', height: "25rem" }}>
                            <div className="ht">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/1.jpg" alt="" />

                            </div>

                            <div className='lock'>
                                <AiOutlineShopping />
                            </div>

                            <div className='Card4-content mt-3'>
                                <a href="">Snacks</a>
                                <div className="star d-flex justify-content-center">
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <p>(0.5)</p>
                                </div>

                                <div className='a'>
                                    <a href="">Fresh organic villa farm lomon
                                        500gm pack</a>

                                </div>

                                <div className='cc d-flex '>
                                    <span> $120.25</span>
                                    <p>$123.25</p>
                                </div>

                            </div>

                        </Card>

                    </div>
                    <div classNames="col-3">
                        <Card className='Card4' style={{ width: '14rem', height: "25rem" }}>
                            <div className="ht">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/9.jpg" alt="" />

                            </div>

                            <div className='lock'>
                                <AiOutlineShopping />
                            </div>

                            <div className='Card4-content mt-3'>
                                <a href="">Snacks</a>
                                <div className="star d-flex justify-content-center">
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <p>(0.5)</p>
                                </div>

                                <div className='a'>
                                    <a href="">Best snakes with hazel <br /> nut mix pack 200gm</a>

                                </div>

                                <div className='cc d-flex '>
                                    <span> $145</span>
                                    <p>$150</p>
                                </div>

                            </div>

                        </Card>

                    </div>
                    <div className="col-2">
                        <Card className='Card4' style={{ width: '14rem', height: "25rem" }}>
                            <div className="ht">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/2.jpg" alt="" />

                            </div>

                            <div className='lock'>
                                <AiOutlineShopping />
                            </div>

                            <div className='Card4-content mt-3'>
                                <a href="">Fruits</a>
                                <div className="star d-flex justify-content-center">
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <p>(0.5)</p>
                                </div>

                                <div className='a'>
                                    <a href="">Fresh organic apple 1kg simla
                                        marming  </a>

                                </div>

                                <div className='cc d-flex '>
                                    <span> $120.25</span>
                                    <p>$123.25</p>
                                </div>

                            </div>

                        </Card>
                    </div>
                    <div className="col-2">
                        <Card className='Card4' style={{ width: '14rem', height: "25rem" }}>

                            <div className='ht'>
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/3.jpg" alt="" />
                            </div>

                            <div className='lock'>
                                <AiOutlineShopping />
                            </div>

                            <div className='Card4-content mt-3'>
                                <a href="">Fruits</a>
                                <div className="star d-flex justify-content-center">
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <p>(0.5)</p>
                                </div>

                                <div className='a'>
                                    <a href="">Organic fresh venila farm
                                        watermelon 5kg</a>

                                </div>

                                <div className='cc d-flex '>
                                    <span> $50.30</span>
                                    <p>$72.60</p>
                                </div>

                            </div>

                        </Card>
                    </div>





                </div>

                <div className="col-12 d-flex align-items-center">

                    <div className="col-2 ff">

                        <div className='green'>
                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/product-banner.jpg" alt="" />
                        </div>
                        <div className='color'>
                            <h4>Juicy </h4>
                            <h5>Fruits</h5>
                            <span>100% Natural</span>
                            <div className="bt">
                                <a href="#">Shop Now</a>
                            </div>
                        </div>

                    </div>




                    <div classNames="col-3">
                        <Card className='Card4' style={{ width: '14rem', height: "25rem" }}>

                            <div className="ht">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/11.jpg" alt="" />

                            </div>

                            <div className='lock'>
                                <AiOutlineShopping />
                            </div>

                            <div className='Card4-content mt-3'>
                                <a href="">Snacks</a>
                                <div className="star d-flex justify-content-center">
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <p>(0.5)</p>
                                </div>

                                <div className='a'>
                                    <a href="">Sweet crunchy nut mix 250gm
                                        pack</a>

                                </div>

                                <div className='cc d-flex '>
                                    <span> $120.25</span>
                                    <p>$123.25</p>
                                </div>

                            </div>

                        </Card>

                    </div>
                    <div classNames="col-3">
                        <Card className='Card4' style={{ width: '14rem', height: "25rem" }}>

                            <div className="ht">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/1.jpg" alt="" />

                            </div>

                            <div className='lock'>
                                <AiOutlineShopping />
                            </div>

                            <div className='Card4-content mt-3'>
                                <a href="">Snacks</a>
                                <div className="star d-flex justify-content-center">
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <p>(0.5)</p>
                                </div>

                                <div className='a'>
                                    <a href="">Best snakes with hazel <br /> nut mix pack 200gm</a>

                                </div>

                                <div className='cc d-flex '>
                                    <span> $120.25</span>
                                    <p>$123.25</p>
                                </div>

                            </div>

                        </Card>

                    </div>
                    <div className="col-2">
                        <Card className='Card4' style={{ width: '14rem', height: "25rem" }}>

                            <div className="ht">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/10.jpg" alt="" />

                            </div>

                            <div className='lock'>
                                <AiOutlineShopping />
                            </div>

                            <div className='Card4-content mt-3'>
                                <a href="">Snacks</a>
                                <div className="star d-flex justify-content-center">
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <p>(0.5)</p>
                                </div>

                                <div className='a'>
                                    <a href="">Sweet snakes crunchy <br /> nut
                                        mix 250gm
                                        pack </a>

                                </div>

                                <div className='cc d-flex '>
                                    <span> $100.25</span>
                                    <p>$110.25</p>
                                </div>

                            </div>

                        </Card>
                    </div>
                    <div className="col-2">
                        <Card className='Card4' style={{ width: '14rem', height: "25rem" }}>

                            <div className="ht">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/17.jpg" alt="" />

                            </div>
                            <div className='lock'>
                                <AiOutlineShopping />
                            </div>

                            <div className='Card4-content mt-3'>
                                <a href="">Bakery</a>
                                <div className="star   d-flex justify-content-center">
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <p>(0.5)</p>
                                </div>

                                <div className='a'>
                                    <a href="" style={{ textAlign: "center" }}>Delicious white baked fresh bread
                                        and toast</a>

                                </div>

                                <div className='cc d-flex '>
                                    <span> $20</span>
                                    <p>$22.25</p>
                                </div>

                            </div>

                        </Card>
                    </div>






                </div>
            </div>
        </div >
    )
}

export default ProductCard
