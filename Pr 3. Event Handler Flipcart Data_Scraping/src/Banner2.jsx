import React from 'react'

const Banner2 = ({banner2}) => {
    console.log(banner2);
    
    return (
        <div className='mt-3'>

            {
                banner2.map((v,i)=>{
                    return(
                        <img style={{width:"1504px", margin:"auto",display:"block",cursor:"pointer"}} src={v.img} alt="" srcset="" />
                    )
                })
            }

        </div>
    )
}

export default Banner2
