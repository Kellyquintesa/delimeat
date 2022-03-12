import {
    Box,
    Flex,
    Spacer,
    Link,
    Button,
    Text,
    Center,
  } from "@chakra-ui/react";
import { BsChevronLeft } from "react-icons/bs";


const success = () => {

    const homeButton = () => (
        <Box margin={5} >
          <Link href="/order/delivery">
            <Button
              borderRadius={20}
              width="full"
              marginBottom={5}
              color="white"
              backgroundColor="foodiez.orange"
            >
             Go back to home
            </Button>
          </Link>
        </Box>
      );

    return (
        <Box  backgroundColor={"#F7F7FB"}>
        <Box height="100vh">
            <Link href="/order/delivery">
          <Box padding={10}>
            <BsChevronLeft fontSize={25} />
          </Box>
        </Link>


        <Center marginTop={15} display="flex" flexDirection={"column"}>
            <img src="/images/finish.png" width={250} />
        <Text fontSize='3xl' fontWeight={700} textAlign="center" marginTop={5}>
        Your order has been successfully placed
        </Text>
        <Text fontSize='md' width={310}  textAlign="center" marginTop={5}>
        Sit and relax while your orders is being worked on . It’ll take 5min before you get it
        </Text>
        </Center>
     
        </Box>
        {homeButton()}
        </Box>
    )
}

export default success