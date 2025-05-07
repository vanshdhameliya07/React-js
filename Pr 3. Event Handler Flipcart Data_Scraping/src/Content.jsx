import React from 'react'

import './Content.css'

const Content = ({ content }) => {
    console.log(content);

    return (
        <div className='mt-4 ms-4'>
            {
                content.map((v, i) => {
                    return (
                        <div>
                            <h6 >{v.title}</h6>
                            <p>{v.content2}</p>
                            <p>{v.content3}</p>
                            <h6 c>{v.title2}</h6>
                            <p>{v.content4}</p>


                            <p>{v.content5}</p>
                            <p>{v.content6}</p>
                            <p>{v.content7}</p>
                            <p>{v.content8}</p>
                            <p>{v.content9}</p>
                            <p>{v.content10}</p>

                            <h6 >{v.title3}</h6>
                            <p>{v.content11}</p>

                            <h6 >{v.title4}</h6>
                            <p>{v.content12}</p>

                            <h6 >{v.title5}</h6>
                            <p>{v.content13}</p>


                        </div>
                    )
                })
            }
        </div>
    )
}

export default Content
