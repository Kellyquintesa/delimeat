import {
    Box,
    Flex,
    Spacer,
    Text,
    Input,
    Button,
    Center,
    Link,
  } from "@chakra-ui/react";
  import Image from "next/image";
  
  const forgot = () => {
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
  
    const content = () => (
      <Box textAlign="center" p={10}>
        <Text fontSize="2xl" fontWeight={600} marginBottom={5}>
          Forgot Password
        </Text>
        <Text fontSize="md" color="#3D3D3D">
          Enter your email address to request a password reset.{" "}
        </Text>
      </Box>
    );
  
    const button = () => (
      <Box padding={5} marginTop={30}>
        <Link href="/login/reset">
        <Center width={"full"} marginBottom={5}>
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
          Recieve code from Gmail
        </Button>{" "}
        </Center>
        </Link>
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
        <Button
          borderRadius={20}
          width="full"
          color="foodiez.orange"
          fontSize="sm"
        >
          Login to my account
        </Button>
      </Box>
    );
  
    return (
      <Box backgroundColor={"#F7F7FB"} height="100vh">
        {Logo()}
        {content()}
        <Box marginBottom={5} padding={8}>
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
        {button()}
      </Box>
    );
  };
  
  export default forgot;
  