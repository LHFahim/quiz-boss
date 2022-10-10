import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Nav = () => {
  return (
    <nav className="">
      <div className="navbar bg-yellow-400 shadow-2xl mt-5 rounded-xl text-indigo-600">
        <div className="flex-1">
          <h1 className="text-3xl font-bold md:ml-10">Quiz Boss</h1>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 font-semibold">
            <li>
              <Link to="/">Topics</Link>
            </li>
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <Header /> */}
    </nav>
  );
};

export default Nav;
