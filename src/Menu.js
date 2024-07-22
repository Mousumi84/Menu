import { useState } from "react";
import Dishes from "./Dishes";
import Filters from "./Filters";
import "./Menu.css";

const menus=[
    {
      id: 1,
      title: 'Buttermilk Pancakes',
      category: 'Breakfast',
      price: 15.99,
      img: 'item-1.jpg',
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: 'Diner Double',
      category: 'Lunch',
      price: 13.99,
      img: 'item-2.jpg',
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: 'Godzilla Milkshake',
      category: 'Shakes',
      price: 6.99,
      img: 'item-3.jpg',
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: 'Country Delight',
      category: 'Breakfast',
      price: 20.99,
      img: 'item-4.jpg',
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: 'Egg Attack',
      category: 'Lunch',
      price: 22.99,
      img: 'item-5.jpg',
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: 'Oreo Dream',
      category: 'Shakes',
      price: 18.99,
      img: 'item-6.jpg',
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: 'Bacon Overflow',
      category: 'Breakfast',
      price: 8.99,
      img: 'item-7.jpg',
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: 'American Classic',
      category: 'Lunch',
      price: 12.99,
      img: 'item-8.jpg',
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: 'Quarantine Buddy',
      category: 'Shakes',
      price: 16.99,
      img: 'item-9.jpg',
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ]

const categoryList=["All", "Breakfast", "Lunch", "Shakes"];

function Menu() {
    const [category,setCategory]=useState(categoryList[0]);
    
    const menuList=menus.filter(dishes => dishes.category == category);
   


    return (
        <div id="menu">
          <h1 id="heading">Our Menu</h1>
          <Filters categoryList={categoryList} selected={category} setCategory={setCategory} />
          <Dishes menuList={category === "All" ? menus : menuList} />
        </div>
    )
}

export default Menu;