import React from 'react';

const Question = ({ question }) => {
  // console.log(question);
  return (
    <div className="border p-5">
      <h1 className="mb-5">{question.question}</h1>
      <div className="grid grid-cols-2 gap-y-5">
        <h3 className="py-2 px-3 bg-indigo-300 rounded w-2/4 mx-auto">
          {question.options[0]}
        </h3>
        <h3 className="py-2 px-3 bg-indigo-300 rounded w-2/4 mx-auto">
          {question.options[1]}
        </h3>
        <h3 className="py-2 px-3 bg-indigo-300 rounded w-2/4 mx-auto">
          {question.options[2]}
        </h3>
        <h3 className="py-2 px-3 bg-indigo-300 rounded w-2/4 mx-auto">
          {question.options[3]}
        </h3>
      </div>
    </div>
  );
};

export default Question;
