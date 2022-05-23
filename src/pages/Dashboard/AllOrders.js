import React, { useEffect, useState } from 'react';
import DeleteOrdersForAdmin from './DeleteOrdersForAdmin';
import ManageIndividualOrders from './ManageIndividualOrders';

const AllOrders = () => {
    const [deleteOrders, setDeleteOrders] = useState(null);

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    return (
        <div className=''>
            <h2>All Orders</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>User Email</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Shipment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <ManageIndividualOrders key={order._id}
                                index={index}
                                order={order}
                                orders={orders} setOrders={setOrders}
                                setDeleteOrders={setDeleteOrders}></ManageIndividualOrders>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteOrders && <DeleteOrdersForAdmin
                    deleteOrders={deleteOrders}
                    setDeleteOrders={setDeleteOrders}

                ></DeleteOrdersForAdmin>

            }
        </div>
    );
};

export default AllOrders;