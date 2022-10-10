import React from 'react';
import img from './img.jpg';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mt-16">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <p className="text-xl font-bold text-yellow-500">
          Quizzes encourage students' self awareness of progress and self
          assessment. By taking quizzes, students get instant feedback on their
          responses. And this can help them identify areas they need to develop
          themselves and highlight progress for them to be proud of. Hence we
          have designed our technological quizes in a way that will sharpen up
          your programming skills.
        </p>
      </div>
    </div>
  );
};

export default Header;
