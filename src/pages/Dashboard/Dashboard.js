import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);

    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 className='text-2xl text-primary font-bold m-10'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side ">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content bg-orange-600 text-white">
                    {/* <!-- Sidebar content here --> */}
                    <li className='text-white'><Link to="/dashboard">My Orders</Link></li>
                    <li className='text-white'><Link to="/dashboard/review">My Reviews</Link></li>
                    <li className='text-white'><Link to="/dashboard/profile">My Profile</Link></li>
                    {
                        admin && <>
                            <li className='text-white'><Link to="/dashboard/allOrders">All Orders</Link></li>
                            <li className='text-white'><Link to="/dashboard/addProduct">Add Product</Link></li>
                            <li className='text-white'><Link to="/dashboard/manageProducts">Manage Products</Link></li>
                            <li className='text-white'><Link to="/dashboard/users">Users</Link></li>
                        </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;