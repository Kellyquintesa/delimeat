import {
  Box,
  Flex,
  Spacer,
  Text,
  Input,
  Button,
  Link,
  Center,
} from "@chakra-ui/react";
import Image from "next/image";

const create = () => {
  const Logo = () => (
    <Box>
      <Flex textAlign="center" padding={8}>
        <Box w="70px" h="10" />
        <Spacer />
        <Box w="170px" h="10">
          <Image src="/images/icon.png" width={35} height={24} />
        </Box>
        <Spacer />
        <Box w="70px" h="10" fontWeight={700} color="foodiez.orange">
          Skip
        </Box>
      </Flex>
    </Box>
  );

  const button = () => (
    <Box padding={5}>
      <Center width={"full"} marginBottom={5}>
        <Button
          borderRadius={20}
          width="60%"
          color="black"
          backgroundColor="white"
          boxShadow="base"
          p="6"
          fontSize="sm"
        >
          <Image src="/images/google.png" width={30} height={30} />
          Sign-in with Google
        </Button>{" "}
      </Center>
      <Button
        borderRadius={20}
        width="full"
        marginBottom={5}
        color="white"
        backgroundColor="foodiez.orange"
        fontSize="sm"
      >
        Create an account
      </Button>{" "}
      <br />
      <Link href="/login">
        <Button
          borderRadius={20}
          width="full"
          color="foodiez.orange"
          fontSize="sm"
        >
          Login to my account
        </Button>
      </Link>
    </Box>
  );

  return (
    <Box backgroundColor={"#F7F7FB"} height="100vh">
      {Logo()}
      <Spacer />

      <Box padding={6}>
        <Box>
          <Text
            fontSize="2xl"
            fontWeight={600}
            marginBottom={3}
            paddingLeft={7}
          >
            Create an account
          </Text>
          <Spacer />
          <Text fontSize="md" marginBottom={10} paddingLeft={7} color="#3D3D3D">
            Welcome friend, enter your details so lets get started in ordering
            food.
          </Text>
        </Box>

        <Spacer />

        <Box>
          <Box marginBottom={5}>
            <Text fontSize="xs" paddingBottom={2} paddingLeft={7}>
              Email Address
            </Text>
            <Input
              placeholder="Enter email"
              size="sm"
              padding={5}
              borderRadius={12}
            />
          </Box>
          <Box marginBottom={5}>
            <Text fontSize="xs" paddingBottom={2} paddingLeft={7}>
              Password
            </Text>
            <Input
              placeholder="Enter password"
              size="sm"
              padding={5}
              borderRadius={12}
            />
          </Box>
          <Box marginBottom={5}>
            <Text fontSize="xs" paddingBottom={2} paddingLeft={7}>
              Confirm Password
            </Text>
            <Input
              placeholder="Confirm Password"
              size="sm"
              padding={5}
              borderRadius={12}
            />
          </Box>
        </Box>

        <Box marginTop={20}>{button()}</Box>
      </Box>
    </Box>
  );
};

export default create;
