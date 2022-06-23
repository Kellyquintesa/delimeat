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
import { MdAdd } from "react-icons/md";
import { Checkbox } from "@chakra-ui/react";

const payment = () => {
  const address = () => (
    <Box>
      <Box>
        <Text fontSize="2xl" fontWeight={600}>
          Delivery method
        </Text>
      </Box>
      <Spacer height={10} />
      <Flex paddingBottom={4}>
        <Box width={200} fontSize="sm" fontWeight={500}>
          137 Teaticket Hwy, East Falmouth MA 2536
        </Box>
        <Spacer />
        <Center fontSize="sm" fontWeight={700} width={100} color="#FE554A">
          Change
        </Center>
      </Flex>
      <Spacer />
      <Flex>
        <Box width={200} fontSize="sm" fontWeight={500}>
          +234 9011039271
        </Box>
        <Spacer />
        <Center fontSize="sm" fontWeight={700} width={100} color="#FE554A">
          Change
        </Center>
      </Flex>
    </Box>
  );

  const payment = () => (
    <Box marginTop={5}>
      <Text fontSize="2xl" fontWeight={600}>
        Payment
      </Text>
      <Box>
        <Flex>
          <Center width={50}>
            <Center
              width={8}
              height={8}
              borderRadius="50%"
              border="1px solid black"
              opacity={0.4}
            >
              {" "}
              <MdAdd />{" "}
            </Center>
          </Center>

          <Center width={70} height={70} marginLeft={5}>
            {" "}
            <img src="/images/mandiri.png" />{" "}
          </Center>

          <Center width={50} height={70} marginLeft={5}>
            {" "}
            <img src="/images/bca.png" />{" "}
          </Center>

          <Center width={35} height={70} marginLeft={5}>
            {" "}
            <img src="/images/bni.png" />{" "}
          </Center>
        </Flex>
      </Box>

      <Box borderRadius={35} bg="white" p={3}>
        <Flex alignItems={"center"}>
          <Checkbox defaultChecked />
          <Text fontSize="md" paddingLeft={5} fontWeight={500}>
            {" "}
            Pay on arrival
          </Text>
        </Flex>
      </Box>
      <Text fontSize="xs" marginTop={2} color="#FE554A">
        {" "}
        Pay with cash/POS upon arrival{" "}
      </Text>
    </Box>
  );

  const total = () => (
    <Box marginTop={5}>
      <Box>
        <Flex paddingBottom={3}>
          <Text width={150} fontSize="sm" fontWeight={600}>
            {" "}
            Delivery Fee
          </Text>
          <Spacer />
          <Text width={50} textAlign="right">
            {" "}
            $20
          </Text>
        </Flex>
        <Spacer />
        <Flex>
          <Text width={150} fontSize="sm" fontWeight={600}>
            Subtotal
          </Text>
          <Spacer />
          <Text width={50} textAlign="right">
            {" "}
            $520
          </Text>
        </Flex>
      </Box>
    </Box>
  );

  const paymentButton = () => (
    <Box padding={5}>
      <Link href="/order/card">
        <Button
          borderRadius={20}
          width="full"
          marginBottom={5}
          color="white"
          backgroundColor="foodiez.orange"
        >
          Proceed to Payment
        </Button>
      </Link>
    </Box>
  );

  return (
    <Box backgroundColor={"#F7F7FB"}>
      <Box height={"100%"}>
        <Box padding={10} paddingBottom={3}>
          <Link href="/order/cart">
            <Box>
              <BsChevronLeft fontSize={25} />
            </Box>
          </Link>
          <Spacer height={19} />

          {address()}
          <Spacer height={19} />
          {payment()}
          <Spacer height={10} />
          {total()}
        </Box>
        <Box
          color={"#000000"}
          backgroundColor="#000000"
          height={"0.3"}
          borderColor="#000000"
        ></Box>

        <Box>
          <Flex padding={10} paddingTop={3}>
            <Text width={150} fontSize="sm" fontWeight={600}>
              {" "}
              Total
            </Text>
            <Spacer />
            <Text width={50} textAlign="right" fontSize="xl" fontWeight={700}>
              {" "}
              $540
            </Text>
          </Flex>
        </Box>
      </Box>
      {paymentButton()}
    </Box>
  );
};

export default payment;
