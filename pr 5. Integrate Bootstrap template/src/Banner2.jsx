import React from 'react'
import Card from 'react-bootstrap/Card';
import './Banner2.css'

const Banner2 = () => {




    return (
        <div className='Banner'>
            <br />
            <br />
            <br />
            <Card className='card ' style={{ width: '29rem' }}>
                <div className='dd'>
                    <p><span>35%</span> OFF</p>
                </div>
                <Card.Body>
                    <h4>Great deal on organic food.</h4>
                    <Card.Text>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis. </p>
                    </Card.Text>
                    <h4 className='content'>1315 : 03 : 24 : 45 <br />
                        <h6>Days  : Hrs : Min : Sec</h6>
                    </h4>

                </Card.Body>

            </Card>
        </div>
    )
}

<script>
    window.onload = function ()


</script>

export default Banner2
