import React from 'react'
import { useLocation } from 'react-router';


const PostPage = () => {
  const location = useLocation();
  const { state } = location;
    const el = state ? state.el : null;
    console.log(el);


  return <div>{/* Ваш вміст сторінки з використанням 'el' */}</div>;
};

export default PostPage;
