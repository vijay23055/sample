import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
// function Logg(dataa) {
//     console.log(dataa)
//   return<>
//       <div className="col-lg-4">
//         <div className="card mb-5 mb-lg-0">
//           <div className="card-body">
//             <h5 className="card-title text-muted text-uppercase text-center">{dataa.item.titles}</h5>
//             <h6 className="card-price text-center">${dataa.item.amount}<span className="period">/month</span></h6>
//             <hr/>
//             <ul className="fa-ul">
//               <li><span className="fa-li"><i className="fas fa-check"></i></span>{dataa.item.user}</li>
//               <li><span className="fa-li"><i className="fas fa-check"></i></span>{dataa.item.Storage}</li>
//               <li><span className="fa-li"><i className="fas fa-check"></i></span>{dataa.item.Projects}</li>
//               <li><span className="fa-li"><i className="fas fa-check"></i></span>{dataa.item.Access}</li>
//               <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{dataa.item.Projects}</li>
//               <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{dataa.item.Support}</li>
//               <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{dataa.item.Subdomain}</li>
//               <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{dataa.item.Reports}
//                 </li>
//             </ul>
//             <div className="d-grid">
//               <a href="#" className="btn btn-primary text-uppercase">Button</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
// }

// export default Logg
// function Logg(dataa) {
//     console.log(dataa);
//     return (
//         <>
//             <div className="col-lg-4">
//                 <div className="card mb-5 mb-lg-0">
//                     <div className="card-body">
//                         <h5 className="card-title text-muted text-uppercase text-center">{dataa.item.titles}</h5>
//                         <h6 className="card-price text-center">${dataa.item.amount}<span className="period">/month</span></h6>
//                         <hr />
//                         <ul className="fa-ul">
//                             <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>{dataa.item.user}</li>
//                             <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>{dataa.item.Storage}</li>
//                             <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>{dataa.item.Projects}</li>
//                             <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>{dataa.item.Access}</li>
//                             <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes} /></span>{dataa.item.Projects}</li>
//                             <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes} /></span>{dataa.item.Support}</li>
//                             <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes} /></span>{dataa.item.Subdomain}</li>
//                             <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes} /></span>{dataa.item.Reports}</li>
//                         </ul>
//                         <div className="d-grid">
//                             <a href="#" className="btn btn-primary text-uppercase">Button</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Logg;



function Logg(dataa) {
    const { amount, titles, user, Storage, Projects, Access, Support, Subdomain, Reports } = dataa.item;
    
    const renderIcon = (condition) => (
        <FontAwesomeIcon icon={condition ? faCheck : faTimes} />
    );

    const isNineDollarPlan = amount === "9";
    const isFortyNineDollarPlan = amount === "49";

    return (
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{titles}</h5>
                    <h6 className="card-price text-center">${amount}<span className="period">/month</span></h6>
                    <hr />
                    <ul className="fa-ul">
                        <li><span className="fa-li">{renderIcon(isNineDollarPlan || isFortyNineDollarPlan || user)}</span>{user}</li>
                        <li><span className="fa-li">{renderIcon(isNineDollarPlan || isFortyNineDollarPlan || Storage)}</span>{Storage}</li>
                        <li><span className="fa-li">{renderIcon(isNineDollarPlan || isFortyNineDollarPlan || Projects)}</span>{Projects}</li>
                        <li><span className="fa-li">{renderIcon(isNineDollarPlan || isFortyNineDollarPlan || Access)}</span>{Access}</li>
                        <li className={isNineDollarPlan || isFortyNineDollarPlan ? "" : "text-muted"}>
                            <span className="fa-li">{renderIcon(isNineDollarPlan || isFortyNineDollarPlan)}</span>{Projects}
                        </li>
                        <li className={isNineDollarPlan || isFortyNineDollarPlan ? "" : "text-muted"}>
                            <span className="fa-li">{renderIcon(isNineDollarPlan || isFortyNineDollarPlan)}</span>{Support}
                        </li>
                        <li className={isNineDollarPlan || isFortyNineDollarPlan ? "" : "text-muted"}>
                            <span className="fa-li">{renderIcon(isNineDollarPlan || isFortyNineDollarPlan)}</span>{Subdomain}
                        </li>
                        <li className={isFortyNineDollarPlan ? "" : "text-muted"}>
                            <span className="fa-li">{renderIcon(isFortyNineDollarPlan)}</span>{Reports}
                        </li>
                    </ul>
                    <div className="d-grid">
                        <a href="#" className="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Logg;