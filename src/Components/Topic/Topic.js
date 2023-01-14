import React from "react";
import { Button, Card } from "react-daisyui";
import "./Topic.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Topic = ({ topic }) => {
  const { id, name, logo, total, description } = topic;
  return (
    <div className="xl:w-[30%]">
      <Card
        side="lg"
        className="py-5 justify-between bg-gray-800 shadow-2xl shadow-gray-600 "
      >
        <div className="h-[10rem] flex justify-center">
          <img className="max-h-[100%] px-4" src={logo} alt="Shoes" />
        </div>

        <Card.Body className="h-[75%]">
          <Card.Title className="text-4xl" tag="h2">
            {name}
          </Card.Title>
          <p className="text-xl">Total Questions: {total}</p>
          <p className="text-sm">
            {description.split(" ").length > 100
              ? `${description.split(" ").splice(0, 100).join(" ")}...`
              : description}
          </p>
          <Card.Actions className="justify-start">
            <Link to={`/${id}`}>
              <Button className="text-base-content capitalize text-base mt-4 py-4 h-auto bg-base-300 ">
                Start Practice
                <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
              </Button>
            </Link>
          </Card.Actions>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Topic;
