import React, { useEffect, useState } from 'react';
import DeleteIndividualItem from './DeleteIndividualItem';
import ManageIndividualProduct from './ManageIndividualProduct';



const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [deleteItem, setDeleteItem] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:5000/products`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products);
    return (
        <div >
            <div>
                <h2 className='text-2xl font-bold'>Manage Products</h2>
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Minimum Quantity</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ManageIndividualProduct
                                key={product._id}
                                product={product}
                                index={index}
                                setDeleteItem={setDeleteItem}
                                products={products}
                                setProducts={setProducts}>

                            </ManageIndividualProduct>)
                        }
                    </tbody>
                </table>
                {
                    deleteItem && <DeleteIndividualItem
                        deleteItem={deleteItem}
                        setDeleteItem={setDeleteItem}

                    ></DeleteIndividualItem>

                }
            </div>
        </div>
    );
};

export default ManageProducts;
