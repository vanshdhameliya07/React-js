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
import Cardx from './Cardx';
import Content from './Content';
import Banner2 from './Banner2';


function App() {

  let [menu, setMenu] = useState([])
  let [items, setItems] = useState([])
  let [slide, setSlide] = useState([])
  let [cards, setCards] = useState([])
  let [cardx, setCardx] = useState([])
  let [filters, setFilter] = useState([])
  let [banners, setBanners] = useState([])
  let [bannerss, setBanners2] = useState([])
  let [footers, setFooter] = useState([])
  let [contents, setContents] = useState([])



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

  let cardxs = async () => {
    let card = await fetch('http://localhost:3000/card-x', {
      method: 'get'
    })

    let res = await card.json();
    setCardx(res);
  }


  let banner = async () => {
    let banner = await fetch('http://localhost:3000/banner', {
      method: 'get'
    })
    let res = await banner.json();
    setBanners(res)

  }
  let benners = async () => {
    let banners = await fetch('http://localhost:3000/banner2', {
      method: 'get'
    })
    let res = await banners.json();

    setBanners2(res)

  }
  let content = async () => {
    let content = await fetch('http://localhost:3000/content', {
      method: 'get'
    })
    let res = await content.json();
    setContents(res)

  }


  let filter = (name) => {
    if (!name) {
      setFilter(category);
    } else {
      let filtered = category.filter(c => c.name === name);
      setFilter(filtered);
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
      cardxs()
      banner()
      benners()
      footer()
      content()
    })
  }, [])


  return (
    <>
      <Header menu={menu} />
      <Menu items={items} />
      <Slidbar slidebar={slide} />
      <Card card={cards} />
      <Cardx cardx={cardx} />
      <Banner2 banner2={bannerss} />


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
      <Content content={contents} />
      <Footer footer={footers} />

    </>
  );
}

export default App;
