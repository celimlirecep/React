import React from 'react'

function ProductList(prop) {
  return (
    <table>

        <tr>
            <td>companyName</td>
            <td>postalCode</td>
        </tr>

        {
                prop.Satislar.map(Element=>{

                    return <tr>
                        <td>{Element.companyName}</td>
                        <td>{Element.address.postalCode}</td>
                    </tr>
                })
        }




    </table>
  )
}

export default ProductList