import * as React from "react";
import {
  Center,
  ChakraProvider,
  Flex,
  Text,
} from "@chakra-ui/react";
// @ts-ignore
import logo from "./assets/logo.PNG";
import Progress from "./components/Progress";
import Page1 from "./components/Pages/Page1";
import Page2 from "./components/Pages/Page2";
import Page3 from "./components/Pages/Page3";
import Page4 from "./components/Pages/Page4";

export const App = () => {
  let primaryColor = "#664DE5";
  const [page, setPage] = React.useState(0);
  const [page1Data, setPage1Data] = React.useState(null)
  const [page2Data, setPage2Data] = React.useState(null)
  const [page3Data, setPage3Data] = React.useState(null)

  const Pages = [
    (<Page1 primaryColor={primaryColor} setPage={setPage} page1Data={page1Data} setPage1Data={setPage1Data}/>),
    (<Page2 primaryColor={primaryColor} setPage={setPage} page2Data={page2Data} setPage2Data={setPage2Data}/>),
    (<Page3 page3Data={page3Data} setPage3Data={setPage3Data} primaryColor={primaryColor}  setPage={setPage}/>),
    (<Page4 primaryColor={primaryColor} setPage={setPage} />),
  ];

  return (
    <ChakraProvider>
      <Center
        maxH="100vh"
        py="12"
        flexDir="column"
        sx={{ "font-family": "Inter, sans-serif" }}
      >
        <Flex alignItems="center">
          <img src={logo} alt="logo" height="40" width="40" />
          <Text fontWeight="bold" fontSize="2xl">
            Eden
          </Text>
        </Flex>
        <Progress pagesData={[page1Data, page2Data, page3Data]} primaryColor={primaryColor} setPage={setPage} page={page} />
        {Pages[page]}
      </Center>
    </ChakraProvider>
  );
};
