import React from "react";
import {  Flex, Text, Input, Button } from "@chakra-ui/react";

interface DataInterface {
  workspaceName: string;
  workspaceUrl: string;
}

interface PropsInterface {
  primaryColor: string;
  setPage: any;
  page2Data: DataInterface | null; 
  setPage2Data: any;
}

const Page2 = (props: PropsInterface) => {
  const { primaryColor, setPage, page2Data, setPage2Data } = props;
  const [workspaceName, setworkspaceName] = React.useState(page2Data?.workspaceName ?? "")
  const [workspaceUrl, setworkspaceUrl] = React.useState(page2Data?.workspaceUrl ?? "")

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    setPage2Data({workspaceName, workspaceUrl})
    setPage(2);
  };
  return (
    <Flex
      sx={{ "font-family": "Inter, sans-serif" }}
      flexDir="column"
      alignItems="center"
      p="5"
      mt={["10","0"]}
      w={["90vw","45vw"]}
    >
      <Text fontSize="3xl" textAlign="center" fontWeight="extrabold">
        Let's setup a home for all your work
      </Text>
      <Text color="blackAlpha.500" textAlign="center">
        You can always create another workspace later
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
            Workspace Name
          </Text>
          <Input onChange={(e:any) => setworkspaceName(e.target.value)} value={workspaceName} isRequired type="text" placeholder="Eden" />
          <Text mt="4" fontWeight="medium">
            Workspace URL (optional)
          </Text>
          <Input onChange={(e:any) => setworkspaceUrl(e.target.value)} value={workspaceUrl} mb="4" type="text" placeholder="www.eden.com" />
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

export default Page2;
