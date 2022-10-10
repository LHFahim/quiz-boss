import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
  // console.log(topic);
  return (
    <div className="flex flex-col items-start rounded-lg p-10 shadow-lg bg-zinc-400">
      <div>
        <img className="w-52" src={topic.logo} alt="" />
      </div>
      <div className="flex justify-between w-full items-center mt-2">
        <p className="font-semibold text-indigo-700">{topic.name}</p>
        <Link
          to={`/quiz/${topic.id}`}
          className=" font-bold text-indigo-700 bg-yellow-400 py-2 px-3 rounded-xl"
        >
          Start Practice
        </Link>
      </div>
    </div>
  );
};

export default Topic;
