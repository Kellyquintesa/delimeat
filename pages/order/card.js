import { Box, Input, Link, Button, Text, Center, Flex } from "@chakra-ui/react";
import { BsChevronLeft } from "react-icons/bs";

const card = () => {
  const info = () => (
      <Box>
    <Box padding={10} paddingTop={0} paddingBottom={5}>
      <Text fontSize={"sm"} paddingBottom={3} paddingLeft={3}> Card details</Text>
      <Input height={50} borderRadius={20} fontSize={"sm"} bg="#fff" placeholder="Enter card details" />
    </Box>
    
    <Flex>
         <Box padding={10} paddingTop={0}>
      <Text fontSize={"sm"} paddingBottom={3} paddingLeft={3}> Exp date</Text>
      <Input height={50} borderRadius={20}  fontSize={"sm"} bg="#fff" placeholder="DD/MM" />
    </Box>
    <Box padding={10} paddingTop={0}>
      <Text fontSize={"sm"} paddingBottom={3} paddingLeft={3}> CVV</Text>
      <Input height={50} borderRadius={20}  fontSize={"sm"} bg="#fff" placeholder="Enter CVV" />
    </Box>
    </Flex>
    </Box>
  );

  const paymentButton = () => (
    <Box margin={5} >
      <Link href="/order/success">
        <Button
          borderRadius={20}
          width="full"
          marginBottom={5}
          color="white"
          backgroundColor="foodiez.orange"
        >
          Pay now
        </Button>
      </Link>
    </Box>
  );

  return (
    <Box backgroundColor={"#F7F7FB"} >
      <Box height="100vh">
        <Link href="/order/payment">
          <Box padding={10}>
            <BsChevronLeft fontSize={25} />
            <Text fontSize="2xl" fontWeight={600} marginTop={20}>
              Payment
            </Text>
          </Box>
        </Link>
        {info()}
      </Box>
      {paymentButton()}
    </Box>
  );
};

export default card;
