import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ question }) => {
  console.log(question);
  const notify = () => toast.success('You selected the correct answer!');

  const checkAnswer = selectedAnswer => {
    if (selectedAnswer === question.correctAnswer) {
      notify();
    }
  };

  return (
    <div className="border p-5">
      <h1 className="mb-5 font-semibold text-indigo-600">
        {question.question}
      </h1>
      <div className="grid grid-cols-2 gap-y-5">
        <h3
          onClick={() => checkAnswer(question.options[0])}
          className="py-2 px-3 hover:bg-indigo-300 border rounded w-2/4 mx-auto"
        >
          {question.options[0]}
        </h3>

        <h3
          onClick={() => checkAnswer(question.options[1])}
          className="py-2 px-3 hover:bg-indigo-300 border rounded w-2/4 mx-auto"
        >
          {question.options[1]}
        </h3>

        <h3
          onClick={() => checkAnswer(question.options[2])}
          className="py-2 px-3 hover:bg-indigo-300 border rounded w-2/4 mx-auto"
        >
          {question.options[2]}
        </h3>

        <h3
          onClick={() => checkAnswer(question.options[3])}
          className="py-2 px-3 hover:bg-indigo-300 border rounded w-2/4 mx-auto"
        >
          {question.options[3]}
        </h3>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Question;
