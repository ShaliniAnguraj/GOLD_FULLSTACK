import React from "react";
import {IoShirtOutline,IoGlassesSharp,IoWatch} from "react-icons/io5"
const Category = () => {
  const categories = [
    {
      id: 1,
      name: "Fast Food",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/FastFood_BrowseHome@3x.png",
    },
    {
      id: 2,
      name: "Pizza",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Pizza_BrowseHome@3x.png",
    },
    {
      id: 3,
      name: "Wings",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Wings_BrowseHome@3x.png",
    },
    {
      id: 4,
      name: "Indian",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Indian_BrowseHome@3x.png",
    },
    {
      id: 5,
      name: "Latest Deals",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Deals_BrowseHome@3x.png",
    },
    {
      id: 6,
      name: "Restaurant Rewards",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/RestoRewards_BrowseHome@3x.png",
    },
  ];
  return (
    <div className='w-11/12 m-auto'>
      <div className='mt-10 grid grid-cols-4 lg:grid-cols-6 justify-items-center'>
        <div className='space-y-2 text-center'>
          <div className='w-24 h-16 bg-stone-200 flex items-center justify-center rounded-md'>
            <IoShirtOutline size={'2.5rem'}/>
          </div>
          <h1 className='font-semibold'>Shirts</h1>
        </div>
        <div className='space-y-2 text-center'>
          <div className='w-24 h-16 bg-stone-200 flex items-center justify-center rounded-md'>
            <IoGlassesSharp size={'2.5rem'}/>
          </div>
          <h1 className='font-semibold'>Shirts</h1>
        </div>
        <div className='space-y-2 text-center'>
          <div className='w-24 h-16 bg-stone-200 flex items-center justify-center rounded-md'>
            <IoWatch size={'2.5rem'}/>
          </div>
          <h1 className='font-semibold'>Shirts</h1>
        </div>
        <div className='space-y-2 text-center'>
          <div className='w-24 h-16 bg-stone-200 flex items-center justify-center rounded-md'>
            <IoShirtOutline size={'2.5rem'}/>
          </div>
          <h1 className='font-semibold'>Shirts</h1>
        </div>
        <div className='space-y-2 text-center'>
          <div className='w-24 h-16 bg-stone-200 flex items-center justify-center rounded-md'>
            <IoGlassesSharp size={'2.5rem'}/>
          </div>
          <h1 className='font-semibold'>Shirts</h1>
        </div>
        <div className='space-y-2 text-center'>
          <div className='w-24 h-16 bg-stone-200 flex items-center justify-center rounded-md'>
            <IoWatch size={'2.5rem'}/>
          </div>
          <h1 className='font-semibold'>Shirts</h1>
        </div>

      </div>
    </div>
  );
};

export default Category;