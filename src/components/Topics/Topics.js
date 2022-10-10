import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topic from '../Topic/Topic';

const Topics = () => {
  const topics = useLoaderData().data;
  // console.log(topics);

  return (
    <div>
      <Header />
      <div className="grid md:grid-cols-2 justify-items-center shadow-2xl gap-10 mb-10 p-5">
        {topics.map(topic => (
          <Topic key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default Topics;
