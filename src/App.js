
import React, { useEffect, useState } from "react";
import axios from "axios";

import F from "./form";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
console.log(data)
let m=data.map(e=>{
  return(
    <div>
      <F e={e}/>
    </div>
  )
})
  return (
  <div>
    {m}
  </div>);
};

export default App;