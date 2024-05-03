import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuiz, submitAnswer } from "../redux/actions/quizAction";
import { Button, Container, Heading } from "@chakra-ui/react";

const Quizpage = () => {
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.quiz);
  
  useEffect(() => {
    dispatch(fetchQuiz());
  }, [dispatch]);
  
  const handleAnswer = (q, index) => {
   return dispatch(submitAnswer(q,index))
  };
  
  return (
    <Container maxW="container.md" mt={"8"}>
      <Heading as="h1" mt={"4"}>
        Quiz
      </Heading>
      {quiz.questions.data && quiz.questions.data.map((question, q) => (
        <div key={question.id}>
          <p>{question.question}</p>
          {question.options.map((option, index) => (
            <Button
              key={index}
              colorScheme="blue"
              isDisabled={quiz.clicked.includes(q)}
              onClick={() => handleAnswer(q, index)}
              mt={'2'}
              mr={'2'}
            >
              {option}
            </Button>
          ))}
        </div>
      ))}
      <Button colorScheme="green" mt={'4'}>Submit</Button>
    </Container>
  );
};

export default Quizpage;
