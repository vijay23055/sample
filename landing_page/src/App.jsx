import React from 'react'
import Head from './Compoent/Head'
import NavBar from './Compoent/NavBar'
import Text from './Compoent/First'

function App() {
  const data = [
    {
      item: "Fully Responsive",
      Descrption : "This theme will look great on any device, no matter the size!",
      icon:"bi-window m-auto text-primary"
    },
    {
      item: "Bootstrap 5 Ready",
      Descrption : "Featuring the latest build of the new Bootstrap 5 framework!",
      icon:"bi-layers m-auto text-primary"
    },
    {
      item: "Easy to Use",
      Descrption : "Ready to use with your own content, or customize the source files!",
      icon:"bi-terminal m-auto text-primary"
    }
  ]
  return <>
    <NavBar/>
    <section className="features-icons bg-light text-center">
      <div className="container">
          <div className="row">
            {
              data.map((e,i)=>{
                return <Head data = {e} key ={i}/>
              })
                
            }
          </div>
        </div>
    </section> 
    <Text/> 
   
    
  </> 

}

export default App
