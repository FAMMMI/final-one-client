import React from 'react';
import AvailableProducts from './AvailableProducts';
import ProductsHeader from './ProductsHeader';

const Products = () => {
    return (
        <div>
            <ProductsHeader></ProductsHeader>
            <AvailableProducts></AvailableProducts>
        </div>
    );
};

export default Products;