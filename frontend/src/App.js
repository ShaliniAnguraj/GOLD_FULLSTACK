import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import About from './components/About.js';
import Contact from './components/Contact.js';
import LoginScreen from './screens/LoginScreen.js';
import RegisterScreen from './screens/RegisterScreen.js';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import Profile from './components/Profile';
import Designs from './components/Designs';
//import Category from './components/Category';
//import NavListMenu from './components/NavListMenu';

/** import all components 
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';*/

/*function App() {
  return (
    <div className="App">
       <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
    </div>
  );
}*/




//router
const router = createBrowserRouter([

  {
    path : '/',
    element : <HomeScreen/>
},
{
  path : '/about',
  element : <About />
},
{
  path : '/contact',
  element : <Contact />
},
  {
    path : '/login',
    element : <LoginScreen />
},
{
    path : '/register',
    element : <RegisterScreen />
},
{
  path : '/collections',
  element : <Designs/>

},

{
  path : '/footer',
  element : <Footer/>
},

{
  path : '/profile',
  element : <Profile />
},
/*{
    path : '/password',
    element : <Password></Password>

    //element : <ProtectRoute><Password /></ProtectRoute>
},
{
    path : '/profile',
    element : <Profile></Profile>

    //element : <AuthorizeUser><Profile /></AuthorizeUser>
},
{
    path : '/recovery',
    element : <Recovery></Recovery>
},
{
    path : '/reset',
    element : <Reset></Reset>
},
{
    path : '*',
    element : <PageNotFound></PageNotFound>
},
*/
])

export default function App(){
  return(
    
  
    <main>
      <ToastContainer />
         <RouterProvider router={router}></RouterProvider>
     </main>
  )
}
