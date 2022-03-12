import {
    Box,
    Flex,
    Spacer,
    Text,
    Link,
    Button,
    ButtonGroup,
  } from "@chakra-ui/react";
  import Image from "next/image";
  import dynamic from "next/dynamic";
  
  const reset = () => {
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
      <Box textAlign="center" p={8}>
        <Text fontSize="2xl" fontWeight={600} marginBottom={5}>
          Reset Password
        </Text>
        <Text fontSize="md" color="#3D3D3D">
          A reset code has been sent to your email{" "}
        </Text>
      </Box>
    );
  
    const ReactCodeInput = dynamic(import("react-code-input"));
  
  
    const button = () => (
      <Box padding={5}>
        <Button
          borderRadius={20}
          width="full"      
          marginBottom={5}
          color="white"
          backgroundColor="foodiez.orange"
          fontSize="sm"
        >
          Reset Password
        </Button>{" "}
      </Box>
    );
  
    return (
      <Box backgroundColor={"#F7F7FB"} height="100vh" >
        {Logo()}
        {content()}
        
        <Box width="100%" padding={5} >
        <Box p={5}  width="fit-content" margin="auto">
          <Text fontSize="xs" color="#3D3D3D" textAlign="center" p={3}>
            Enter code{" "}
          </Text>
          <ReactCodeInput type="number" fields={4} />
        </Box>
        </Box>
        {button()}
      </Box>
    );
  };
  
  export default reset;
  