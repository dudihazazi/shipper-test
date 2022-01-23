import Image from "next/image";

import Flex from "@/styles/components/Flex";
import logoShipper from "@public/images/img-logo.png";
import iconAvatar from "@public/images/icon-user-grey.jpeg";

import Hamburger from "./Hamburger";
import { Nav, Logo, Text, Avatar } from "./styles";

interface INavbar {
  isOpen: boolean;
  handleOpen: () => void;
}

export default function Navbar(props: INavbar) {
  const { isOpen, handleOpen } = props;

  return (
    <Nav>
      <Flex
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex className="logo" height="100%" alignItems="center">
          <Hamburger isOpen={isOpen} handleOpen={handleOpen} />
          <Logo>
            <Image
              src={logoShipper}
              alt="Shipper"
              layout="fill"
              objectFit="contain"
              objectPosition="left center"
            />
          </Logo>
        </Flex>
        <Flex alignItems="center">
          <Text>
            Hello, <strong>Shipper User</strong>
          </Text>
          <Avatar>
            <Image
              src={iconAvatar}
              alt="Shipper"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </Avatar>
        </Flex>
      </Flex>
    </Nav>
  );
}
