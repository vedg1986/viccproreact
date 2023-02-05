import React from 'react'
import Card from './Card';

import descarga1 from '../assets/images/descarga1.jpg';
import descarga2 from '../assets/images/descarga2.jpg';
import descarga3 from '../assets/images/descarga3.jpg';
import descarga4 from '../assets/images/descarga4.jpg';


const product= [
    {
        id: 1,
        title:"Sakaariano",
        image: descarga1,
        price: 999.99
    },
    {
        id: 2,
        title: "Monger Mayhem",
        image: descarga2,
        price: 999.99
    },
    {
        id: 3,
        title: " Mech",
        image: descarga3,
        price: 999.99
    },
    {
        id: 4,
        title: "Monger Mayhem",
        image: descarga4,
        price: 999.99
    },
]

function Products() {
    return (
        <div className='container d-flex justify-content-center'>
            <div className='row'>
                {
                    product.map(product =>(
                        <div className="col-md-4" key={product.id}>
                        <Card title={product.title} imageSource={product.image} price={product.price}/>
                    </div> 
                    ))
                }
                
            </div>
            </div>
        
    )
}
export default Products