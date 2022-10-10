import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const Statistics = () => {
  const data = useLoaderData();
  console.log(data.data);
  return (
    <div className="mt-20 md:w-11/12 mx-auto">
      <h1>Below is the chart of quiz topics!</h1>
      <LineChart width={600} height={300} data={data.data}>
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Statistics;
