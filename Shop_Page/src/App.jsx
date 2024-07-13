import React,{ useState } from "react" 
import NavBar from './component/navbar'
import Product from'./component/product'
import carrot from './component/Carrot.jpg'
import beetroot from './component/Beetroot.jpg'
import Onion from'./component/Onion.jpg'
import Tomato from './component/Tomato.jpg'
import spinach from'./component/Spinach.jpg'

function App() {
  let [cart,setCart] = useState(0);
  const data =[
    {
      name:"Carrot",
      price:"$2 - $4",
      image :carrot
    },
    {
      name:"Betroot",
      price:"$4 - $5",
      image:beetroot
    },
    {
      name:"Onion",
      price:"$10 - $14",
      image:Onion
    },
    {
      name:"Tomato",
      price:"$12 - $18",
      image:Tomato
    },
    {
      name:"Spinach",
      price:"$1 - $4",
      image:spinach
    }
  ]
  return <>
  <NavBar cart = {cart}/>   

  <section className="py-5">
  <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      {
          data.map((e,i)=>{
            return <Product data={e} key={i} cart={cart} setCart = {setCart}/>
      })
    }
        </div>
        </div>
    </section>  
  </>
}

export default App
