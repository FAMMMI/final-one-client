import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrdersForAdmin = ({ deleteOrders, setDeleteOrders,refetch }) => {
    const { _id, name, userName, totalPrice, quantity } = deleteOrders;

    const deleteProduct = () => {
        const url = `http://localhost:5000/orders?id=${_id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success('Successfully Deleted');
                    setDeleteOrders(null);
                    refetch();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete {name} ordered by {userName} ?</h3>
                    <p class="py-4"><b>Quantity:</b>{quantity}</p>
                    <p class="py-4"><b>Price:</b>{totalPrice}</p>
                    <div class="my-modal-6">
                        <button onClick={() => deleteProduct()} class="btn btn-xs btn-error">Delete</button>
                        <label for="my-modal-6" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteOrdersForAdmin;