import React from "react";
import { useLoaderData } from "react-router-dom";
import Heading from "../../../Components/Heading/Heading";
import TopicsComp from "../../../Components/Topics-Comp/TopicsComp";

const Topics = () => {
  const topics = useLoaderData();

  return (
    <div>
      <Heading topics={topics}></Heading>
      <div className="container mx-auto my-72">
        <TopicsComp topics={topics}></TopicsComp>
      </div>
    </div>
  );
};

export default Topics;
