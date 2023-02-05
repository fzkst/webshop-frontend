import React from 'react'

let text;


(async () => {
  let response = await fetch('http://localhost:8000/api/iphones');
  
  text = await response; // read response body as text
  

  })()


const NepszeruTermekek = () => {
  return (
    <div>
        <h3>Adatok: </h3>
      <p>{text}</p>
    </div>
  )
}

export default NepszeruTermekek
