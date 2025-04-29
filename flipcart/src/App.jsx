import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [myc, setMyc] = useState([]);

  const myfunction = () => {
    fetch('https://mocki.io/v1/ac79d993-3602-4b89-91a3-6ab144fd060c')
      .then(res => res.json())
      .then((data) => {
        setMyc(data.Account);

      });

  };

  useEffect(() => {
    setTimeout(() => {
      myfunction();
    }, 1000);
  }, []);

  return (
    <>
      <div className='rr col-12 d-flex  align-items-center '>
        <div className='col-3 logo'>

          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="" />

        </div>
        <div className='col-5 form'>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search for Products, Brands and More" aria-label="Search"></input>
          </form>
        </div>
        <div className="col-4 d-flex align-items-center ">
          <div className="custom-dropdown col-2">
            <div className="dropdown-header">
              Account
            </div>
            <ul className="dropdown-list">
              {myc.map((v, i) => (
                <li key={i} className="dropdown-item">
                  {v}
                </li>
              ))}
            </ul>
          </div>
          <div className='cart col-2'>
            <p>cart</p>
          </div>

        </div>

      </div>
    </>
  );
}

export default App;
