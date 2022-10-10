import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
  const quizName = useLoaderData().data.name;
  const quiz = useLoaderData().data.questions;

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold mb-10 text-indigo-600">
        {quizName} Quiz!
      </h1>
      <div className="space-y-5">
        {quiz.map(question => (
          <Question key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
