import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Box, Flex, Spacer, Button, Center } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const images = [
    <div className="1" style={{ display: "flex", justifyContent: "center" }}>
      <img src="/images/login-1.png" />
    </div>,
    <div className="2" style={{ display: "flex", justifyContent: "center" }}>
      <img src="/images/login-2.png" />
    </div>,
    <div className="3" style={{ display: "flex", justifyContent: "center" }}>
      <img src="/images/login-3.png" />
    </div>,
  ];

  const renderCarousel = () => (
    <Center>
      <AliceCarousel
        items={images}
        animationType="fadeout"
        animationDuration={800}
        disableButtonsControls
        infinite
        mouseTracking
      />
    </Center>
  );

  const button = () => (
    <Box padding={5}>
      <Link href="/login/create">
        <Button
          borderRadius={20}
          width="full"
          marginBottom={5}
          color="white"
          backgroundColor="foodiez.orange"
        >
          Create an account
        </Button>
      </Link>
      <br />
      <Link href="/login">
        <Button borderRadius={20} width="full" color="foodiez.orange">
          Login
        </Button>
      </Link>
    </Box>
  );

  return (
    <Box backgroundColor={"#F7F7FB"} height="100vh" >
      <Flex textAlign="center" padding={8}>
        <Box w="70px" h="10" />
        <Spacer />
        <Box w="170px" h="10">
          <Image src="/images/icon.png" width={35} height={24} />
        </Box>
        <Spacer />
        <Link href={"/order/delivery"}>
        <Box w="70px" h="10" fontWeight={700} color="foodiez.orange">
          Skip
        </Box>
        </Link>
      </Flex>
      {renderCarousel()}
      {button()}
    </Box>
  );
};

export default Home;
