import {
  Box,
  Stack,
  Text,
  Center,
  Input,
  InputGroup,
  InputRightElement,
  Checkbox,
  Button,
  Flex,
  Spacer
} from "@chakra-ui/react";

import { useState } from "react";
import { useEffect } from 'react'
import Navbar from '../navbar/navbar.jsx'

let Register = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Navbar />
      {/* Sign up */}
      <Center marginBottom="50px">
        <Stack spacing={3}>
          <Text fontSize="3xl" fontWeight="bold" py="50px">
            Sign in or create an account
          </Text>

          <Box boxShadow="dark-lg" p="6" rounded="md" bg="white">
            <Text fontSize="md" fontWeight="semibold" pb="30px">
              *indicates required field
            </Text>

            <Input
              focusBorderColor="lime"
              placeholder="Username or email address"
            />

            <Box pb="50px"></Box>

            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>

            <Box pb="50px"></Box>

            <Checkbox colorScheme="green" defaultIsChecked>
              Keep me sign in.{" "}
              <a href="#" className="details">
                Details
              </a>
            </Checkbox>

            <Box pb="50px"></Box>

            <Text as="u" className="username">
              <a href="#">Forgot your username?</a>
            </Text>

            <Box pb="25px"></Box>

            <Text as="u" className="pwd">
              Forgot your password?
            </Text>

            <Box pb="50px"></Box>
            
            <Flex>
                <Spacer />
                <Button boxShadow="dark-lg" bg="green" color="white" borderRadius={25}>
                    Sign in
                </Button>
            </Flex>
          </Box>
        </Stack>
      </Center>
    </>
  );
};

export default Register