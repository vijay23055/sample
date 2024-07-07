import React from 'react'
import Log from './assets/Logg'

function App() {

 let item = [
  {
    titles:"Free",
    amount:"0",
    user:"Single User",
    Storage:"5GB Storage",
    Access:"Community Access",
    Projects:"Unlimited Private Projects",
    Support:"Dedicated Phone Support",
    Subdomain:"Free Subdomain",
    Reports:"Monthly Status Reports"
  },
  {
    titles:"Plus",
    amount:"9",
    user:"5 User",
    Storage:"5GB Storage",
    Access:"Community Access",
    Projects:"Unlimited Private Projects",
    Support:"Dedicated Phone Support",
    Subdomain:"Free Subdomain",
    Reports:"Monthly Status Reports"
  },
  {
    titles:"Pro",
    amount:"49",
    user:"Unlimited User",
    Storage:"5GB Storage",
    Access:"Community Access",
    Projects:"Unlimited Private Projects",
    Support:"Dedicated Phone Support",
    Subdomain:"Free Subdomain",
    Reports:"Monthly Status Reports"
  }
 ]

  return <>
  
  <section className="pricing py-5">
    <div className="container">
      <div className="row">
        {
          item.map((e,i)=>{
            return <Log item={e} key={i}/>
          })
        }
      </div>
    </div>
  </section>  
  </>
}

export default App
