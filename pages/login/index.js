import {
    Box,
    Flex,
    Spacer,
    Text,
    Input,
    Button,
    ButtonGroup,
    Center,
  } from "@chakra-ui/react";
  import Image from "next/image";
  import Link from "next/link";
  
  const login = () => {
    const Logo = () => (
      <Box>
        <Flex textAlign="center" padding={8}>
          <Box w="70px" h="10" />
          <Spacer />
          <Box w="170px" h="10">
            <Image src="/images/icon.png" width={35} height={24} />
          </Box>
          <Spacer />
          <Link href="/order/delivery">
            <Box w="70px" h="10" fontWeight={700} color="foodiez.orange">
              Skip
            </Box>
          </Link>
        </Flex>
      </Box>
    );
  
    const button = () => (
      <Box padding={5} marginTop={40}>
        <Center width={"full"}  marginBottom={5}>
          <Button
            borderRadius={20}
            width="70%"
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
        <Link href={"/order/delivery"}>
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
      <Box height="100vh" backgroundColor={"#F7F7FB"}>
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
              Login to your account
            </Text>
            <Spacer />
            <Text fontSize="md" marginBottom={10} paddingLeft={7}>
              Good to see you again, enter your details below to continue
              ordering.
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
          </Box>
          <Spacer />
  
          <Link href="/login/forgot">
            <Box>
              <Text
                fontSize="xs"
                paddingBottom={2}
                paddingLeft={7}
                textAlign="center"
                color={"orange"}
              >
                Forgot your password?
              </Text>
            </Box>
          </Link>
  
          {button()}
        </Box>
      </Box>
    );
  };
  
  export default login;
  