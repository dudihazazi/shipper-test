import Image from "next/image";

import Flex from "@/styles/components/Flex";
import logoShipper from "@public/images/img-logo.png";
import iconAvatar from "@public/images/icon-user-grey.jpeg";

import { Nav, Logo, Text, Avatar } from "./styles";

export default function Navbar() {
  return (
    <Nav>
      <Flex
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Logo>
          <Image
            src={logoShipper}
            alt="Shipper"
            layout="fill"
            objectFit="contain"
            objectPosition="left center"
          />
        </Logo>
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
