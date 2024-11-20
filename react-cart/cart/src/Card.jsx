import React from 'react'
import axios from 'axios';
const baseURL = "https://jsonplaceholder.typicode.com/users";
function Card1() {
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data);
          console.log(response.data);
        });
      }, []);
  return (
    <div>
        
    </div>
  )
}

export default Card1