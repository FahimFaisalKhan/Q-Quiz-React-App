import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
const Statistics = () => {
  const topics = useLoaderData();

  const info = topics.map((topic) => {
    return { name: topic.data.name, Questions: topic.data.total };
  });
  console.log(info);
  return (
    <div className="container mx-auto flex justify-center">
      <ResponsiveContainer width="100%" height={500} className="text-info">
        <BarChart data={info} className="bg-base-100 ">
          <XAxis dataKey="name" stroke="rgb(99 102 241)" />
          <YAxis stroke="rgb(99 102 241)" />
          <Tooltip />
          <Legend
            width={100}
            wrapperStyle={{
              top: 10,
              left: 70,
              backgroundColor: "#f5f5f5",
              border: "1px solid #d5d5d5",
              borderRadius: 3,
              lineHeight: "40px",
            }}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="Questions" fill="rgb(99 102 241)" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
