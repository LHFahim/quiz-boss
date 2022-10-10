import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
  const topics = useLoaderData().data;
  // console.log(topics);

  return (
    <div className="grid grid-cols-2 justify-items-center shadow-2xl gap-10 mb-10 p-5">
      {topics.map(topic => (
        <Topic key={topic.id} topic={topic} />
      ))}
    </div>
  );
};

export default Topics;
