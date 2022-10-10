import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
  const quiz = useLoaderData().data.questions;
  console.log(quiz);
  return <div>quiz</div>;
};

export default Quiz;
