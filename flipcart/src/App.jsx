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


function App() {

  let [menu, setMenu] = useState([])
  let [items, setItems] = useState([])
  let [slide, setSlide] = useState([])
  let [cards, setCards] = useState([])
  let [filters, setFilter] = useState([])



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


  let filter = (name) => {

    if (!name) {
      setFilter(category);
    }
    else {
      let filterd = category.filter(c => c.name == name)
      setFilter(filterd);

    }

  }






  useEffect(() => {
    setTimeout(() => {
      getmenu();
      getitems()
      slidebar()
      card()
    })
  }, [])


  return (
    <>
      <Header menu={menu} />
      <Menu items={items} />
      <Slidbar slidebar={slide} />
      <Card card={cards} />
      <div align="center">
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


    </>
  );
}

export default App;
