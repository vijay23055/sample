import React from 'react';

function Card() {
  const data = [
    {
      title: "Earnings (Monthly)",
      value: "$40,000",
      icon: "calendar",
      color: "primary",
      isProgress: false
    },
    {
      title: "Earnings (Annual)",
      value: "$215,000",
      icon: "dollar",
      color: "success",
      isProgress: false
    },
    {
      title: "Task",
      value: "50",
      color: "info",
      icon: "clipboard",
      isProgress: true
    },
    {
      title: "Pending Request",
      value: "18",
      icon: "comments",
      color: "warning",
      isProgress: false
    },
  ];
  return (
    <>
      {data.map((item, i) => (
        <div key={i} className="col-xl-3 col-md-6 mb-4">
          <div className={`card border-left-${item.color} shadow h-100 py-2`}>
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                {item.isProgress ? (
                  <>
                    <div className="col mr-2">
                      <div className={`text-xs font-weight-bold text-${item.color} text-uppercase mb-1`}>{item.title}</div>
                      <div className="row no-gutters align-items-center">
                        <div className="col-auto">
                          <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{item.value}%</div>
                        </div>
                        <div className="col">
                          <div className="progress progress-sm mr-2">
                            <div className={`progress-bar bg-${item.color}`} role="progressbar" style={{ width: `${item.value}%`,  ariaValueNow:`${item.value}`, ariaValueMin:"0", ariaValueMax:"100"}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ):(
                  <>
                    <div className="col mr-2">
                      <div className={`text-xs font-weight-bold text-${item.color} text-uppercase mb-1`}>{item.title}</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">{item.value}</div>
                    </div>
                  </>
                )}
                <div className="col-auto">
                  <i className={`fas fa-${item.icon} fa-2x text-gray-300`}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;