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
import { AiOutlineDown } from "react-icons/ai";
import NumericInput from "react-numeric-input";

const cart = () => {
  const Header = () => (
    <Box padding={10}>
      <Flex>
        <Center w="70px" h="50">
          <Link href="/order">
            <Box fontSize={25}>
              <BsChevronLeft />{" "}
            </Box>
          </Link>
        </Center>
        <Spacer />
        <Box w="200px" h="50">
          {" "}
          <Center>
            <Box width="fit-content">
              <Text
                fontSize="xs"
                alignItems={"center"}
                display={"flex"}
                paddingLeft={5}
              >
                Delivery to <AiOutlineDown />
              </Text>

              <Text fontSize="xs" textAlign={"center"} color={"foodiez.orange"}>
                lekki phase 1, Estate
              </Text>
            </Box>
          </Center>
        </Box>
        <Spacer />
        <Box w="50px" h="50">
          {" "}
          <img src="/images/person.jpg" />
        </Box>
      </Flex>
    </Box>
  );

  const headerText = () => (
    <Box paddingLeft={10} marginBottom={10}>
      <Box>
        <Text fontSize="2xl" fontWeight={600}>
          Your cart
        </Text>
      </Box>
    </Box>
  );

  const item = () => (
    <Box
      marginTop={10}
      padding={3}
      boxShadow="xs"
      borderRadius={35}
      bg="white"
      margin={5}
    >
      <Flex>
        <Center w="70px" h="90">
          <img src="/images/burger-menu.png" />
        </Center>
        <Spacer />
        <Center w="160px" h="90" display={"flex"} flexDirection="column">
          <Box>
            <Text fontSize="md" fontWeight={500}>
              The Macdonalds{" "}
            </Text>
            <Text fontSize="xs">Classic cheesburger</Text>
            <Text fontSize="lg" color={"#FE554A"} fontWeight={500}>
              $23.99
            </Text>
          </Box>
        </Center>

        <Spacer />
        <Box w="140px" h="90">
          <Center marginTop={8}>
            <NumericInput
              className="form-control"
              value={1}
              min={0}
              max={100}
              step={1}
              precision={0}
              size={1}
              mobile
            />
          </Center>
        </Box>
      </Flex>
    </Box>
  );

  const total = () => (
    <Flex padding={10}>
      <Box p="4">Total</Box>
      <Spacer />
      <Box p="4" fontSize="xl" fontWeight={700}>
        $345
      </Box>
    </Flex>
  );

  const paymentButton = () => (
    <Box padding={5}>
      <Link href="/order/payment">
        <Button
          borderRadius={20}
          width="full"
          marginBottom={5}
          color="white"
          backgroundColor="foodiez.orange"
        >
          Process to payment
        </Button>
      </Link>
    </Box>
  );

  return (
    <Box backgroundColor={"#F7F7FB"}>
      <Box height={"100%"}>
        {Header()}
        {headerText()}
        {item()}
        {item()}
        {item()}
        {total()}
      </Box>
      <Box>{paymentButton()}</Box>
    </Box>
  );
};

export default cart;
