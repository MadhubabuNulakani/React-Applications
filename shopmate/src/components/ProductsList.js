import React, { useEffect, useState } from 'react'

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    if (products.length > 0)
        console.log(products)
    useEffect(() => {
        fetch("http://localhost:8000/Products")
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [])



    return (
        <div>
            {products.map((product) => (
                <p>{product.name}</p>
            ))}
        </div>
    )
}

export default ProductsList
