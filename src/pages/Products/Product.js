import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Shared/Button';

const Product = ({ availableProduct }) => {
    const { name, img, description, price, quantity, minimumQuantity } = availableProduct;

    const navigate = useNavigate();

    const gotoPurchase = () => {
        navigate('/purchase');
    }

    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Part" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title font-bold text-accent pb-4">{name}</h2>
                <p><b>Description:</b> {description}</p>
                <p><b>Quantity:</b> {quantity}</p>
                <p><b>Minimum Order Quantity:</b> {minimumQuantity}</p>
                <p><b>Price:</b> ${price}</p>
                <div class="card-actions">
                    <Button onClick={() => gotoPurchase()}>Buy Now</Button>
                </div>
            </div>
        </div>
    );
};

export default Product;