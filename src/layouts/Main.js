import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';

const Main = () => {
  return (
    <div className="w-10/12 md:w-8/12 mx-auto">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Main;
