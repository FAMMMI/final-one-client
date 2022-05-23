import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import DeleteOrder from './DeleteOrder';
import SingleProduct from './SingleProduct';


const MyOrders = () => {
    const [products, setProducts] = useState([]);
    const [user] = useAuthState(auth);
    const [deleteOrder, setdeleteOrder] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [user])

    console.log(products);
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Payment status</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Order Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <SingleProduct key={product._id}
                                index={index}
                                product={product} products={products} setProducts={setProducts}
                                setdeleteOrder={setdeleteOrder}>
                            </SingleProduct>)
                        }
                    </tbody>
                </table>
                {
                    deleteOrder && <DeleteOrder
                        deleteOrder={deleteOrder}
                        setdeleteOrder={setdeleteOrder}
                    ></DeleteOrder>
                }
            </div>

        </div>
    );
};

export default MyOrders;