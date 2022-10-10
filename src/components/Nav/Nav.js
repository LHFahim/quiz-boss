import React from 'react';

const Nav = () => {
  return (
    <nav className="">
      <div className="navbar bg-yellow-400 shadow-2xl mt-5 rounded-xl text-indigo-600">
        <div className="flex-1">
          <h1 className="text-3xl font-bold ml-10">Quiz Boss</h1>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 font-semibold">
            <li>
              <a>Topics</a>
            </li>
            <li>
              <a>Statistics</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
