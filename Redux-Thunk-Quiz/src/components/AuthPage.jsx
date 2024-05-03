<Button colorScheme="blue"></Button>;
import { Container, Heading, Button } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/authAction";

const AuthPage = () => {
  const dispatch = useDispatch();
  const handleClick=()=>{
    dispatch(login())
  }
  let loginState = useSelector((state) => state.auth);
  console.log(loginState);
  return (
    <Container maxW="container.md" mt="8">
      <Heading as="h1" mb="4">
        QUIZ APP
      </Heading>
      <Button colorScheme="blue" onClick={handleClick}>Login</Button>
    </Container>
  );
};

export default AuthPage;
