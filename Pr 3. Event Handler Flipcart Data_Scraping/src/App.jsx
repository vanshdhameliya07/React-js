import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Menu from './Menu';
import Slidbar from './Slidbar';
import { category, product } from './data'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Card from './Card';
import Filter from './Filter';
import Banner from './Banner';
import Footer from './Footer';


function App() {

  let [menu, setMenu] = useState([])
  let [items, setItems] = useState([])
  let [slide, setSlide] = useState([])
  let [cards, setCards] = useState([])
  let [filters, setFilter] = useState([])
  let [banners, setBanners] = useState([])
  let [footers, setFooter] = useState([])



  let getmenu = async () => {
    try {
      let data = await fetch('http://localhost:3000/Account', {
        method: "GET"
      });

      let res = await data.json()
      setMenu(res)
    } catch (err) {
      console.log(err);
      return false;
    }

  };

  let getitems = async () => {
    try {
      let items = await fetch('http://localhost:3000/menu', {
        method: 'get'
      })
      let res = await items.json()
      setItems(res)

    } catch (err) {
      console.log(err);
      return false
    }
  }

  let slidebar = async () => {
    try {
      let slide = await fetch('http://localhost:3000/slidebar', {
        method: 'get'
      })
      let res = await slide.json();
      setSlide(res);

    } catch (err) {
      console.log(err);
      return false

    }

  }

  let card = async () => {
    let card = await fetch('http://localhost:3000/card', {
      method: 'get'
    })
    let res = await card.json();
    setCards(res);
  }

  let banner = async () => {
    let banner = await fetch('http://localhost:3000/banner', {
      method: 'get'
    })
    let res = await banner.json();
    setBanners(res)

  }


  let filter = (name) => {

    if (!name) {
      setFilter(category);
    }
    else {
      let filterd = category.filter(c => c.name == name)
      setFilter(filterd);

    }

  }


  let footer = async () => {
    let footer = await fetch('http://localhost:3000/footer', {
      method: 'get'
    })
    let res = await footer.json()
    setFooter(res)

  }




  useEffect(() => {
    setTimeout(() => {
      getmenu();
      getitems()
      slidebar()
      card()
      banner()
      footer()
    })
  }, [])


  return (
    <>
      <Header menu={menu} />
      <Menu items={items} />
      <Slidbar slidebar={slide} />
      <Card card={cards} />
      <div align="center" style={{ marginTop: "100px" }}>
        <button onClick={() => filter()}>All</button>

        {
          product.map((p, i) => {
            return (
              <button key={i} onClick={() => filter(p.name)}>{p.name}</button>
            )
          })
        }
      </div>
      <Filter filter={filters} />
      <Banner banner={banners} />
      <Footer footer={footers} />
      
    </>
  );
}

export default App;
