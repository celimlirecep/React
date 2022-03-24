import React, { useState } from 'react'

function StateSample2() {

    const sehirler=["istanbul","sivas","izmir","Adıyaman"];

    const [sehir,setSehir]=useState(sehirler);

    const deleteItem=(item)=>{

         let newSehir= sehir.filter((element,key)=>element!=item)
        
        setSehir(newSehir);
        console.log(sehirler)
    }

  return (
    <div>
        <h1>{sehir.length}</h1>
        <ul>
        {
            sehir.map((item,index)=>{
                
                return<>
              
              
                
                <li>{index} {item} <button onClick={()=>deleteItem(item)}>Sil</button></li>

              
              </>
               
              
            })
        }
        </ul>

    </div>
  )
}

export default StateSample2