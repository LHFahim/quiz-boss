import React from 'react';
import img from './img.jpg';

const Header = () => {
  return (
    <div className="flex items-center mt-16">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <p className="text-xl font-bold text-yellow-500">
          Quizzes encourage pupils’ self awareness of progress and self
          assessment By taking quizzes, pupils get instant feedback on their
          responses. And this can help them identify areas they need to develop
          themselves and highlight progress for them to be proud of. In the
          world of education there are many different ways to teach and to
          consolidate what has been learned. In years gone by, children were
          expected to memorise dates, formulae and figures by rote. But this
          method of teaching can be quite dull, to say the least! One tool
          becoming more common, especially in online education, is quizzes. In
          this guide we’ll find out the many reasons why quizzes are valuable in
          learning.
        </p>
      </div>
    </div>
  );
};

export default Header;
