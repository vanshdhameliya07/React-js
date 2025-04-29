import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Menu from './Menu';

function App() {

  let [menu, setMenu] = useState([])
  let [items, setItems] = useState([])

  let getmenu = async () => {
    let data = await fetch('http://localhost:3000/Account', {
      method: "GET"
    });

    let res = await data.json()
    setMenu(res)

  };

  let getitems = async () => {
    let items = await fetch('http://localhost:3000/menu', {
      method: 'get'
    })
    let res = await items.json()
    setItems(res)


  }

  useEffect(() => {
    setTimeout(() => {
      getmenu();
      getitems()
    })
  }, [])


  return (
    <>
      <Header menu={menu} />
      <Menu items={items} />


    </>
  );
}

export default App;
