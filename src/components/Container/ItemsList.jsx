import { useState, useEffect } from 'react'
import { gFetch } from './Items'

import '../../style/ItemList.css';

const ItemsList = ({ items }) => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        gFetch
            .then(resp => setProducts(resp))

            .catch(err => console.log(err))
    })

    console.log(products)
    return (

        <>
            {products.map(prod => <div className='contanerGeneral' key={products.id}><div><div>{`${prod.tipo}`}</div><div>{`${prod.nombre}`}</div><div>{`${prod.price}`}</div><img src={`${prod.foto}`} /></div></div>)}

        </>
    )

}

export default ItemsList




