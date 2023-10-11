import React from 'react';
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-2 font-bold text-black text-lg"
      >
        <a href="/" className="flex items-center hover:text-yellow-500 hover:text-xl hover:font-bold">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-black text-lg"
      >
        <a href="/collections" className="flex items-center font-semibold hover:text-yellow-500 hover:text-xl hover:font-bold">
          Designs
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-black text-lg"
      >
        <a href="/about" className="flex items-center font-semibold hover:text-yellow-500 hover:text-xl hover:font-bold">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-black text-lg"
      >
        <a href="/contact" className="flex items-center font-semibold hover:text-yellow-500 hover:text-xl hover:font-bold">
          Contact
        </a>
      </Typography>
    </ul>
  );
  return (
    <Navbar className="mx-auto max-w-screen-xl py-1 shadow-inner shadow-stone-400  px:2 md:px-4 md:py-4 lg:justify-items-end lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-around sm:justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className=" flex mr-4 cursor-pointer py-1.5 font-extrabold text-black text-2xl"
        >
          SAR JEWEL💍
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        {
          userInfo ? (
            <>

<Menu>
      <MenuHandler>
        <Button className=' flex px-4 py-2 bg-red-700 justify-end justify-items-end'>{userInfo.name}</Button>
      </MenuHandler>
      <MenuList className="bg-black text-white p-3 mb-4">
        <MenuItem className="mb-3 hover:text-amber-500 font-semibold"><a href="/profile">Profile</a></MenuItem>
        <hr className="my-3" />
        <MenuItem>
        <h1 onClick={logoutHandler} className='hover:text-red-500 font-bold text-lg'>Sign Out</h1></MenuItem>
      </MenuList>
    </Menu>
            </>
          ) :(
            <>
     <Button className="hidden lg:inline-block bg-yellow-500 text-black">
        <a href="/login"><span>Login</span></a> 
        </Button>
            </>
          )
        }
      
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6 text-black"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        
        <div className="container mx-auto">
          {navList}

          {
          userInfo ? (
            <>
            </>
          ) :(
            <>
    <Button variant="gradient" size="sm" fullWidth className="mb-2 text-black bg-yellow-500">
           <a href="/login"><span className="text-black">Login</span></a>
          </Button>
            </>
          )
        }
     
          {/**<Button variant="gradient" size="sm" fullWidth className="mb-2 text-black bg-yellow-500">
           <a href="/login"><span className="text-black">Login</span></a>
      </Button>**/}
        </div>
      </Collapse>
    </Navbar>
    
  )
}


export default Header



             