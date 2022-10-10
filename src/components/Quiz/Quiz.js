import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
  const quiz = useLoaderData().data.questions;
  // console.log(quiz);
  return (
    <div>
      {quiz.map(question => (
        <Question key={question.id} question={question} />
      ))}
    </div>
  );
};

export default Quiz;
