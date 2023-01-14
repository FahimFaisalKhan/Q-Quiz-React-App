import React, { useState } from "react";
import { Button, Card } from "react-daisyui";
import { useLoaderData } from "react-router-dom";
import Question from "../../../Components/Question/Question";

const Questions = () => {
  const [scores, setScores] = useState([]);
  const data = useLoaderData();
  const { logo, total, name, description } = data.data;

  const questions = data.data.questions;

  const verifyAnswer = (selectedAnswer, correctAnswer, setToast, id) => {
    if (selectedAnswer === correctAnswer) {
      setToast({ text: "Good Job!! Correct Answer.", status: "success" });
      if (!scores.includes(id)) {
        setScores([...scores, id]);
      }
    } else {
      setToast({ text: "Sorry!!  Wrong Answer", status: "error" });
    }
    setTimeout(() => {
      setToast("");
    }, 3000);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-left mb-5">About {name}</h1>
      <div className="container mx-auto  mb-24 text-lg">{description}</div>
      <div className="container mx-auto flex flex-col xl:flex-row gap-12">
        <div>
          <h1 className="text-3xl text-left mb-10">
            Answer the following Questions by filling in the circles:
          </h1>
          {questions.map((q, index) => (
            <Question
              key={q.id}
              questionData={q}
              serial={index + 1}
              verifyAnswer={verifyAnswer}
            ></Question>
          ))}
        </div>
        <Card className="h-3/6 bg-base-content text-base-100">
          <h1 className="text-center mt-2 text-3xl font-semibold">{name}</h1>
          <Card.Image src={logo} alt="topic-image" />
          <Card.Body className="items-center text-center">
            <Card.Title tag="h2"> Score</Card.Title>
            <p className="text-2xl font-semibold">
              {scores.length !== 0 && `${scores.length}/${total}`}
            </p>
            <Card.Actions className="justify-end">
              <Button>Quiz Complete</Button>
            </Card.Actions>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Questions;
