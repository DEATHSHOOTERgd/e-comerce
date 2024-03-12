import { lazy } from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import './App.css'

const Login = lazy(()=> import('./pages/Login/Login'));
const Dashboard = lazy(()=> import('./pages/Dashboard/Dashboard'));
const Products = lazy(()=> import('./pages/Products/Products'));

const App=()=> {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/products' element={<Products />}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
