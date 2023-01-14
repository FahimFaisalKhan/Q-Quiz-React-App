import React from "react";
import Topic from "../Topic/Topic";

const TopicsComp = ({ topics }) => {
  return (
    <>
      <div className="flex  gap-10 flex-col sm:flex-row px-2 flex-wrap justify-center">
        {topics.map((topic) => (
          <Topic key={topic.data.id} topic={topic.data}></Topic>
        ))}
      </div>
      <></>
    </>
  );
};

export default TopicsComp;
