import React, { useEffect, useState } from 'react'

const ProductsList = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch("http://localhost:8000/Products")
            .then(response => response.json())
            .then(data => setProducts(data));
    },[])


    console.log(products);

    return (
        <div>
            Products List
        </div>
    )
}

export default ProductsList
