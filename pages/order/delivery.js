import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Flex,
  Spacer,
  useDisclosure,
  Link,
  Button,
  Text,
  Center,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiHomeAlt, BiLike } from "react-icons/bi";
import { HiSearch } from "react-icons/hi";
import { FaRegBell } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import {
  AiFillStar,
  AiOutlineDown,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Delivery = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const listResponsive = {
    0: { items: 1 },
    300: { items: 2 },
    1024: { items: 3 },
  };

  const i = {
    0: { items: 1 },
    450: { items: 2 },
    1024: { items: 3 },
  };

  const Banner = () => (
    <Box paddingTop={10}>
      <AliceCarousel autoPlay autoPlayInterval="3000" disableButtonsControls>
        <img src="/images/pizza.png" />
        <img src="/images/pizza.png" />
        <img src="/images/pizza.png" />
      </AliceCarousel>
    </Box>
  );

  const items = [
    <Box width={100} height={120} borderRadius={50} border="1px solid orange">
      <Box textAlign={"center"} padding={3} fontSize="12px" marginTop={1}>
        <Center>
          <img src="/images/pizza.png" />
        </Center>
        Pizza
      </Box>
    </Box>,
    <Box width={100} height={120} borderRadius={50} border="1px solid orange">
      <Box textAlign={"center"} padding={3} fontSize="12px" marginTop={3}>
        <Center>
          <img src="/images/burger.png" width={40} />
        </Center>
        Burger
      </Box>
    </Box>,
    <Box width={100} height={120} borderRadius={50} border="1px solid orange">
      <Box textAlign={"center"} padding={3} fontSize="12px" marginTop={3}>
        <Center>
          <img src="/images/sausage.png" width={40} />
        </Center>
        Sausage
      </Box>
    </Box>,
    <Box width={100} height={120} borderRadius={50} border="1px solid orange">
      <Box textAlign={"center"} padding={3} fontSize="12px" marginTop={3}>
        <Center>
          <img src="/images/beverages.png" width={40} />
        </Center>
        Beverages
      </Box>
    </Box>,
    <Box width={100} height={120} borderRadius={50} border="1px solid orange">
      <Box textAlign={"center"} padding={3} fontSize="12px" marginTop={3}>
        <Center>
          <img src="/images/noodle.png" width={40} />
        </Center>
        Noodles
      </Box>
    </Box>,
  ];

  const Header = () => (
    <Box>
      <Flex>
        <Box w="70px" h="50">
          <Menu isOpen={isOpen} onClose={onClose}>
            <MenuButton as={Button} variant="solid" onClick={onOpen}>
              <GiHamburgerMenu />
            </MenuButton>
            <MenuList>
              <MenuItem>My profile</MenuItem>
              <MenuItem>Payment method</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Help</MenuItem>
              <MenuItem>Privacy policy</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Spacer />
        <Box w="200px" h="50">
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
          <img src="/images/person.jpg" />
        </Box>
      </Flex>
    </Box>
  );

  const headerText = () => (
    <Box>
      <Box marginTop={10}>
        <Text fontSize="2xl" fontWeight={600}>
          Enjoy Delicious food
        </Text>
      </Box>
    </Box>
  );

  const listCarousel = () => (
    <Box marginTop={10}>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={listResponsive}
        controlsStrategy="alternate"
        disableButtonsControls
      />
    </Box>
  );

  const menu = [
    <Link href="/order">
      <Box width={225} height={280} boxShadow="sm" rounded="md" bg="white">
        <Center paddingTop={30}>
          <img src="/images/burger-menu.png" width={200} />
        </Center>
        <Box padding={3}>
          <Text fontSize="lg" marginBottom={2} fontWeight={500}>
            Meaty cheese burger
          </Text>
          <Text fontSize="sm">
            No 10 opp lekki phase 1 bridge in sangotedo estate
          </Text>
          <Flex paddingTop={3}>
            <Center display={"flex"}>
              <AiFillStar /> <Text marginLeft={2}> 4+ </Text>
            </Center>
            <Spacer />
            <Box>
              <FcLike />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Link>,
    <Link href="/order">
      <Box width={225} height={280} boxShadow="sm" rounded="md" bg="white">
        <Center paddingTop={30}>
          <img src="/images/burger-2.png" width={190} />
        </Center>
        <Box padding={3}>
          <Text fontSize="lg" marginBottom={2} fontWeight={500}>
            Big cheese burger
          </Text>
          <Text fontSize="sm">
            No 10 opp lekki phase 1 bridge in sangotedo estate
          </Text>
          <Flex paddingTop={3}>
            <Center display={"flex"}>
              <AiFillStar /> <Text marginLeft={2}> 4+ </Text>
            </Center>
            <Spacer />
            <Box>
              <FcLike />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Link>,
    <Link href="/order">
      <Box width={225} height={280} boxShadow="sm" rounded="md" bg="white">
        <Center paddingTop={30}>
          <img src="/images/burger-3.png" width={115} />
        </Center>
        <Box padding={3}>
          <Text fontSize="lg" marginBottom={2} fontWeight={500}>
            Zomato cheese burger
          </Text>
          <Text fontSize="sm">
            No 10 opp lekki phase 1 bridge in sangotedo estate
          </Text>
          <Flex paddingTop={3}>
            <Center display={"flex"}>
              <AiFillStar /> <Text marginLeft={2}> 4+ </Text>
            </Center>
            <Spacer />
            <Box>
              <FcLike />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Link>,
    <Link href="/order">
      <Box width={225} height={280} boxShadow="sm" rounded="md" bg="white">
        <Center paddingTop={30}>
          <img src="/images/burger-menu.png" width={200} />
        </Center>
        <Box padding={3}>
          <Text fontSize="lg" marginBottom={2} fontWeight={500}>
            Patty cheese burger
          </Text>
          <Text fontSize="sm">
            No 10 opp lekki phase 1 bridge in sangotedo estate
          </Text>
          <Flex paddingTop={3}>
            <Center display={"flex"}>
              <AiFillStar /> <Text marginLeft={2}> 4+ </Text>
            </Center>
            <Spacer />
            <Box>
              <FcLike />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Link>,
  ];

  const menuCarousel = () => (
    <AliceCarousel
      mouseTracking
      keyboardNavigation
      items={menu}
      responsive={i}
      disableDotsControls
      disableButtonsControls
    />
  );

  const Footer = () => (
    <Box
      boxShadow="xs"
      rounded="md"
      bg="white"
      borderRadius={"20px 20px 0 0"}
      marginTop={30}
    >
      <Flex>
        <Center w="60px" height={16} fontSize={22}>
          {" "}
          <BiHomeAlt />{" "}
        </Center>
        <Spacer />
        <Center w="60px" height={16} fontSize={22}>
          {" "}
          <BiLike />{" "}
        </Center>

        <Spacer />
        <Center w="60px" height={16} fontSize={22}>
          {" "}
          <HiSearch />{" "}
        </Center>
        <Spacer />
        <Center w="60px" height={16} fontSize={22}>
          {" "}
          <FaRegBell />{" "}
        </Center>
        <Spacer />
        <Center w="60px" height={16} fontSize={22}>
          {" "}
          <AiOutlineShoppingCart />{" "}
        </Center>
      </Flex>
    </Box>
  );

  return (
    <Box backgroundColor={"#F7F7FB"}>
      <Box height="100%" padding={10}>
        {Header()}
        {Banner()}
        {headerText()}
        {listCarousel()}
        <Flex marginTop={5} marginBottom={5} alignItems={"center"}>
          <Box fontWeight={700} fontSize="xl">
            Favorite Menu
          </Box>
          <Spacer />
          <Box color={"#FE554A"}>View all(29)</Box>
        </Flex>
        {menuCarousel()}
      </Box>
      <Box width={"full"}>{Footer()}</Box>
    </Box>
  );
};

export default Delivery;
