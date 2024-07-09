import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../Pages/Shared/ErrorPage'
import Home from '../Pages/Home'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Login/Signup'
import Main from '../Layout/Main'
import ComingSoon from '../Pages/Shared/ComingSoon'
import Details from '../Pages/Details'
import SearchResult from '../Pages/SearchResult'
import Checkout from '../Pages/Checkout'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../Layout/DashboardLayout'
import MyBookings from '../Pages/Dashboard/MyBookings'
import BecomeAHost from '../Pages/Dashboard/BecomeAHost'
import Welcome from '../Pages/Dashboard/Welcome'
import AllUsers from '../Pages/Dashboard/AllUsers'
import AddHome from '../Pages/Dashboard/AddHome'
import ManageHomes from '../Pages/Dashboard/ManageHomes'
import AllBookings from '../Pages/Dashboard/AllBookings'
import AllHome from '../Pages/AllHome'
import AdminRoute from './AdminRoute'
import HostRoute from './HostRoute'
import HomeAll from '../Pages/HomeAll'
import ProductAdd from '../Pages/Dashboard/Admin/Products/ProductAdd/ProductAdd'
import ProductEdit from '../Pages/Dashboard/Admin/Products/ProductEdit/ProductEdit'
import ProductList from '../Pages/Dashboard/Admin/Products/ProductsList/ProductList'
import AddCategories from '../Pages/Dashboard/Admin/Categories/AddCategories/AddCategories'
import CategoriesList from '../Pages/Dashboard/Admin/Categories/CategoriesList/CategoriesList'
import ThemeChange from '../Pages/Dashboard/Admin/ThemeChange/ThemeChange'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomeAll></HomeAll>,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/all-homes',
        element: <AllHome />,
      },
      {
        path: '/coming-soon',
        element: <ComingSoon />,
      },
      {
        path: '/service-details/:id',
        element: <Details />,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/home/${params.id}`),
      },
      {
        path: '/search-result',
        element: <SearchResult />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
    ],
  },
  {
    path: '/dashboard',
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '',
        element: (
          <PrivateRoute>
            <Welcome />
          </PrivateRoute>
        ),
      },
      {
        path: 'my-bookings',
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: 'become-host',
        element: (
          <PrivateRoute>
            <BecomeAHost />
          </PrivateRoute>
        ),
      },
      {
        path: 'all-users',
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: 'all-bookings',
        element: (
          <AdminRoute>
            <AllBookings />
          </AdminRoute>
        ),
      },
      {
        path: 'add-home',
        element: (
          <AdminRoute>
            <AddHome />
          </AdminRoute>
        ),
      },
      // E-Start
      {
        path: 'product-add',
        element: (
          <AdminRoute>
            <AddHome />
          </AdminRoute>
        ),
      },
      {
        path: 'product-edit',
        element: (
          <AdminRoute>
            <ProductEdit />
          </AdminRoute>
        ),
      },
      {
        path: 'product-list',
        element: (
          <AdminRoute>
            <ProductList />
          </AdminRoute>
        ),
      },
      {
        path: 'product-edit',
        element: (
          <AdminRoute>
            <ProductEdit />
          </AdminRoute>
        ),
      },
      {
        path: 'add-categories',
        element: (
          <AdminRoute>
            <AddCategories />
          </AdminRoute>
        ),
      },
      {
        path: 'categories-list',
        element: (
          <AdminRoute>
            <CategoriesList />
          </AdminRoute>
        ),
      },
      {
        path: 'theme-change',
        element: (
          <AdminRoute>
            <ThemeChange />
          </AdminRoute>
        ),
      },
      // E-END
      {
        path: 'manage-homes',
        element: (
          <HostRoute>
            <ManageHomes />
          </HostRoute>
        ),
      },
    ],
  },
])

export default router
