import React, { useState } from 'react'

function SatateSample() {

    const [name,setName]= useState("Çağatay");

    const changeName=()=>{
        setName("Recep")
    }

  return (
    <div>
        <h1>{name}</h1>
        <button onClick={()=> changeName()} >Degistir</button>

    </div>
  )
}

export default SatateSample 