import React, { useEffect, useState } from 'react';
import Product from './Product';

const AvailableProducts = () => {
    const [availableProducts, setavailableProducts] = useState([]);
    useEffect(() => {
        fetch("parts.json")
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
        </div>
    );
};

export default AvailableProducts;