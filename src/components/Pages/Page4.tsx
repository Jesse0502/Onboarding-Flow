import React from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import {AiFillCheckCircle} from 'react-icons/ai'
interface propsInterface {
  primaryColor: string;
  setPage: any;
};

const Page4 = (props: propsInterface) => {
  const { primaryColor } = props;

  return (
    <Flex
      sx={{ "font-family": "Inter, sans-serif" }}
      flexDir="column"
      alignItems="center"
      p="5"
      mt={["10", "0"]}
      w={["90vw","45vw"]}
    >
      <Box bg={"white"} color={primaryColor} rounded="full">
        <AiFillCheckCircle size={80}  />
      </Box>
      <Text mt="5" fontSize={'2xl'} fontWeight="bold" textAlign="center">
        Congratulations, Eren!
      </Text>
      <Text fontSize={'md'} mb="5" fontWeight="medium" textAlign="center">
        You have completed onboarding, you can start using Eden!
      </Text>
      <Button w={"80%"} _hover={{}} _active={{}} bg={primaryColor} color='white'>Launch Eden</Button>
    </Flex>
  );
};

export default Page4;
