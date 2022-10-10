import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ question }) => {
  // console.log(question.question);
  let questionTitle = question.question;
  questionTitle = questionTitle.split('<p>').join('');
  questionTitle = questionTitle.split('</p>').join('');

  const notify = () => toast.success('You selected the correct answer!');

  const notifyCorrectAnswer = answer =>
    toast.success(`The correct answer is ` + answer);

  const checkAnswer = selectedAnswer => {
    if (selectedAnswer === question.correctAnswer) {
      notify();
    }
  };

  const showCorrectAnswer = ques => {
    // console.log(ques);
    notifyCorrectAnswer(ques.correctAnswer);
  };

  return (
    <div className="border p-5">
      <div className="flex justify-between w-3/4 mx-auto">
        <h1 className="mb-5 font-semibold text-indigo-600">{questionTitle}</h1>
        <svg
          onClick={() => showCorrectAnswer(question)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

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
