import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import {FaUser} from 'react-icons/fa'

interface DataInterface {
  selection: number
}

interface propsInterface {
  primaryColor: string;
  setPage: any;
  page3Data: DataInterface | null; 
  setPage3Data: any;
}

const Page3 = (props: propsInterface) => {
  const { primaryColor, setPage, page3Data, setPage3Data } = props;
  console.log(page3Data)
  const [selected, setSelected] = React.useState(page3Data?.selection ?? 0);
  const handleOnSubmit = (e: any) => {
    if(selected === 0) return;
    setPage3Data({selection: selected})
    setPage(3)

  };
  return (
    <Flex
      sx={{ "font-family": "Inter, sans-serif" }}
      flexDir="column"
      alignItems="center"
      p="5"
      mt={['10','0']}
      w={["90vw","45vw"]}
    >
      <Text fontSize="3xl" textAlign="center" fontWeight="extrabold">
        Let's setup a home for all your work
      </Text>
      <Text color="blackAlpha.500" textAlign="center">
        You can always create another workspace later
      </Text>
      <Flex
        mt="8"
        w={["100%","80%"]}
        alignItems="center"
        justify="space-between"
      >
        <Flex onClick={() => setSelected(1)} cursor='pointer' border="1px" p="6" py="10" w={["47%","49%"]} rounded="md" borderColor={selected === 1 ? primaryColor : "blackAlpha.400"} color={selected === 1 ? primaryColor :"black"} flexDir="column" justify='start'>
            <FaUser size={25} />
            <Text fontWeight="bold" fontSize={24} pt="4" pb="2">For myself</Text>
            <Text opacity="0.7" fontSize={16}>Write better. Think more clearly. Stay organized.</Text>
        </Flex>
        <Flex onClick={() => setSelected(2)} cursor='pointer' border="1px" p="6" py="10" w={["47%","49%"]} rounded="md" borderColor={selected === 2 ? primaryColor :"blackAlpha.400"} color={selected === 2 ? primaryColor :"black"} flexDir="column" justify='start'>
            <FaUser size={25} />
            <Text fontWeight="bold" fontSize={24} pt="4" pb="2">With my team</Text>
            <Text opacity="0.7" fontSize={16}>Wikis, docs, tasks & projects, all in one place.</Text>
        </Flex>
      </Flex>
        <Button bg={primaryColor} mt="5" w={["100%","80%"]} color='white' _hover={{}} _active={{}}onClick={handleOnSubmit}>Create workspace</Button>
    </Flex>
  );
};

export default Page3;
