import React, { useState } from "react";
import { quizData as questions } from "../QuizData";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thanks for completing the screen assessment Test. Now, let's go and check out some personalized materials we have prepared for you."
    );
    navigate("/profile");
  };

  const showNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const showPrevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };
  return (
    <section className="container">
      <Header />
      <div className="my-5 bg-blue-600 text-white p-4 rounded-xl text-center">
        <h4 className="mb-6">Welcome to the Screening Test</h4>
        <h2 className="mb-5">Hey, Friend.❤😍</h2>
        <h4 className="mb-5">
          Thanks for taking time to appear for this screening test. This test is
          organized to test your mental health.
        </h4>
        <h4>
          This test will consists of 10 questions and will only take few minutes
          to complete. Personalized materials and contents will be displayed on
          your feed based on your responses.
        </h4>
      </div>

      {/* //Quiz Data form  */}
      {/* <div className="quizContainer flex flex-col justify-start items-center gap-5 mt-5 mb-2 bg-blue-700 text-white p-4 rounded-xl w-full h-auto">
        {questions.map((item) => {
          return (
            <article
              key={item.id}
              className="p-3 bg-white text-black border rounded-lg w-full h-auto"
            >
              <div className="">
                <h4>
                  {item.id} of {questions.length}
                </h4>
                <p className="font-semibold text-lg">
                  Question - {item.question}
                </p>
              </div>
              <ul className="mt-3">
                {item.options.map((option, index) => (
                  <li key={index} className="m-2 ml-0 text-xl">
                    <button className="w-full bg-blue-500 text-white p-2 rounded-md mb-2">{option}</button>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div> */}
      <div>
        <article className="p-3 bg-white text-black border rounded-lg w-full h-auto">
          <div className="">
            <h4>
              {currentQuestion + 1} of {questions.length}
            </h4>
            <p className="font-semibold text-lg">
              Question - {questions[currentQuestion].question}
            </p>
          </div>
          <ul className="mt-3">
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index} className="m-2 ml-0 text-xl">
                <button
                  onClick={
                    currentQuestion === questions.length - 1
                      ? handleSubmit
                      : showNextQuestion
                  }
                  className="bg-blue-700 my-2 w-[100%] p-3 rounded-lg font-semibold text-white hover:bg-blue-400 active:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center">
            {currentQuestion === 0 ? (
              <>
                {/* <button
                          onClick={showPrevQuestion}
                          className="bg-yellow-500 mr-6 p-3 rounded-lg font-semibold text-black"
                        >
                          Prev Question
                        </button> */}
              </>
            ) : (
              <>
                <button
                  onClick={showPrevQuestion}
                  className="bg-yellow-500 mr-6 p-3 rounded-lg font-semibold text-black"
                >
                  Prev Question
                </button>
              </>
            )}
            {currentQuestion === questions.length - 1 ? (
              <>
                <button
                  onClick={handleSubmit}
                  className="bg-green-700 p-3 rounded-lg font-semibold text-white"
                >
                  Finish Quiz
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={showNextQuestion}
                  className="bg-green-700 p-3 rounded-lg font-semibold text-white"
                >
                  Next Question
                </button>
              </>
            )}
          </div>
        </article>
        {/* <button
          onClick={handleSubmit}
          type="button"
          className="bg-blue-500 text-white p-2 rounded-md my-3"
        >
          Submit
        </button> */}
      </div>
      <Footer />
    </section>
  );
};
