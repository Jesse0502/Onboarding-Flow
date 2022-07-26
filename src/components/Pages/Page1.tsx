import React from "react";
import {  Flex, Text, Input, Button } from "@chakra-ui/react";

interface DataInterface {
  fullName?: string | null;
  displayName?: string | null;
}

interface PropsInterface {
  primaryColor: string;
  setPage: any;
  page1Data: DataInterface | null; 
  setPage1Data: any;
}

const Page1 = (props: PropsInterface) => {
  const { primaryColor, setPage, page1Data, setPage1Data } = props;
  const [displayName, setDisplayName] = React.useState(page1Data?.displayName ?? "")
  const [fullName, setFullName] = React.useState(page1Data?.fullName ?? "")
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    setPage(1);
    setPage1Data({displayName, fullName})
  };
  return (
    <Flex
      sx={{ "font-family": "Inter, sans-serif" }}
      flexDir="column"
      alignItems="center"
      p="5"
      mt={["10","0"]}
      w={["90vw","40vw"]}
    >
      <Text fontSize="3xl" textAlign="center" fontWeight="extrabold">
        Welcome! First things first...
      </Text>
      <Text color="blackAlpha.500" textAlign="center">
        You can always change them later
      </Text>
      <Flex
        flexDir="column"
        justify="start"
        mt="8"
        w="full"
        alignItems="center"
      >
        <form onSubmit={handleOnSubmit}>
          <Text textAlign="left" fontWeight="medium">
            Full Name
          </Text>
          <Input onChange={(e: any) => setFullName(e.target.value)} value={fullName} isRequired type="text" placeholder="Steve Jobs" />
          <Text mt="4" fontWeight="medium">
            Display Name
          </Text>
          <Input onChange={(e: any) => setDisplayName(e.target.value)} value={displayName} isRequired mb="4" type="text" placeholder="Steve" />
          <Button
            _hover={{}}
            _active={{}}
            bg={primaryColor}
            w="full"
            type="submit"
            color="white"
          >
            Create Workspace
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default Page1;
