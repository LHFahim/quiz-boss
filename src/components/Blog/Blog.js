import React from 'react';

const Blog = () => {
  return (
    <div className="mt-10">
      <section className="p-5 shadow-2xl rounded-xl hover:bg-yellow-400">
        <h1 className="text-3xl font-bold uppercase">
          what is the purpose of react router?
        </h1>
        <p>
          React Router is a standard library for routing in React. It enables
          the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL. React Router is used to define multiple routes in the
          application. When a user types a specific URL into the browser, and if
          this URL path matches any 'route' inside the router file, the user
          will be redirected to that particular route.
        </p>
      </section>

      <section className="p-5 shadow-2xl rounded-xl hover:bg-yellow-400 my-20">
        <h1 className="text-3xl font-bold uppercase">
          how does context api work?
        </h1>
        <p>
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. It returns a consumer and a provider. Provider is a
          component that as it's names suggests provides the state to its
          children. It will hold the "store" and be the parent of all the
          components that might need that store. Consumer as it so happens is a
          component that consumes and uses the state.
        </p>
      </section>

      <section className="p-5 shadow-2xl rounded-xl hover:bg-yellow-400">
        <h1 className="text-3xl font-bold uppercase">what is useRef?</h1>
        <p>
          Essentially, useRef is like a “box” that can hold a mutable value in
          its .current property. The useRef Hook allows you to persist values
          between renders. It can be used to store a mutable value that does not
          cause a re-render when updated. It can be used to access a DOM element
          directly.
        </p>
      </section>
    </div>
  );
};

export default Blog;
