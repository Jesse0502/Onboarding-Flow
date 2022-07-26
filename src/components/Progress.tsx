import React from "react";
import { Flex, Box, Text, ChakraProps } from "@chakra-ui/react";

interface propsInterface {
  primaryColor: string;
  setPage: any;
  page: number;
  pagesData: any
}

const Divider = (props: any) => (
  <Box
    h="1"
    w="20"
    bg={props.active ? props.primaryColor : "blackAlpha.300"}
    color={props.active ? props.primaryColor : "blackAlpha.300"}
  />
);

const Progress = (props: propsInterface) => {
  const { primaryColor, page, setPage, pagesData } = props;
  const tagProps: ChakraProps = {
    py: "2",
    px: "4",
    rounded: "full",
    color: primaryColor,
    border: "1px solid",
    borderColor: "blackAlpha.300",
    cursor: "pointer",
  };

  const handleChangePage = (page: number) => {
    if(page === 3 && pagesData[2]) setPage(page);
    if(pagesData[page]) setPage(page);
  }
  return (
    <Flex alignItems="center" mt="10" mb="5">
      <Flex alignItems="center" w="24" onClick={() => handleChangePage(0)}>
        <Text {...tagProps} bg={primaryColor} color="white">
          1
        </Text>
        <Divider active={true} primaryColor={primaryColor} />
      </Flex>
      <Flex alignItems="center" w="120px" onClick={() => handleChangePage(1)}>
        <Divider active={page >= 1} primaryColor={primaryColor} />
        <Text
          {...tagProps}
          bg={page >= 1 ? primaryColor : "inherit"}
          color={page >= 1 ? "white" : "inherit"}
        >
          2
        </Text>
        <Divider active={page >= 1} primaryColor={primaryColor} />
      </Flex>
      <Flex alignItems="center" w="120px" onClick={() => handleChangePage(2)}>
        <Divider active={page >= 2} primaryColor={primaryColor} />

        <Text
          {...tagProps}
          bg={page >= 2 ? primaryColor : "inherit"}
          color={page >= 2 ? "white" : "inherit"}
        >
          3
        </Text>
        <Divider active={page >= 2} primaryColor={primaryColor} />
      </Flex>
      <Flex alignItems="center" w="24" onClick={() => handleChangePage(3)}>
        <Divider active={page >= 3} primaryColor={primaryColor} />

        <Text
          {...tagProps}
          bg={page >= 3 ? primaryColor : "inherit"}
          color={page >= 3 ? "white" : "inherit"}
        >
          4
        </Text>
      </Flex>
    </Flex>
  );
};

export default Progress;
