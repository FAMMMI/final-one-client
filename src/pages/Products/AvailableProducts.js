import React, { useEffect, useState } from 'react';
import Product from './Product';
import Purchase from './Purchase';

const AvailableProducts = () => {
    const [product, setProduct] = useState(null);
    const [availableProducts, setavailableProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/product")
            .then(res => res.json())
            .then(data => setavailableProducts(data))
    }, []);
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 pb-28 px-12'>
                {
                    availableProducts.map(availableProduct => <Product
                        key={availableProduct._id}
                        availableProduct={availableProduct}
                    ></Product>)
                }
            </div>
            {
                product && <Purchase
                    product={product}
                    setProduct={setProduct}

                ></Purchase>


            }
        </div>
    );
};

export default AvailableProducts;