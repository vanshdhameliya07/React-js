import './Banner2.css'

const Banner2 = ({ banner2 }) => {

    return (
        <div className='mt-3'>

            {
                banner2.map((v, i) => {
                    return (
                        <div key={i}>
                            <img style={{ width: "1504px", margin: "auto", display: "block", cursor: "pointer" }} src={v.img} alt="" />
                        </div>
                    )
                })
            }
            <div className='img-2 mt-3 d-flex'>
                {
                    banner2.map((v, i) => {
                        return (
                            <img src={v.img2} />
                           
                        )
                    })
                }
            </div>



        </div>
    )
}

export default Banner2
