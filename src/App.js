import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Header from './components/Header/Header';
import Topics from './components/Topics/Topics';
import Blog from './components/Blog/Blog';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics />,
        },
        {
          loader: ({ params }) => {
            // console.log(params);
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            );
          },
          path: '/quiz/:quizId',
          element: <Quiz />,
        },
        {
          path: '/blog',
          element: <Blog />,
        },
        {
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          path: '/statistics',
          element: <Statistics />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
