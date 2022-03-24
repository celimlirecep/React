import React from 'react'
import ReactDOM from 'react-dom';


function RenderSample() {
   const myHtmlCode=(

        <table>
            <tr>
                <td>Recep</td>
                <td>çelimli</td>
            </tr>
            <tr>
                <td>Mikail</td>
                <td>Ayhan</td>
            </tr>
        </table>
       

    )
  return 
     
  {
     ReactDOM.render(myHtmlCode,document.querySelector("#baslik"))
    
  }
  

    
        
    


  
}

export default RenderSample
