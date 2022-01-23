import Image from "next/image";

import icThreeDots from "@public/images/icon-three-dots.png";
import Flex from "@/styles/components/Flex";
import {
  CardDriver,
  CardHeader,
  Text,
  TextID,
  CardBody,
  BodyImg,
  BodySection,
  BodyTitle,
  BodyTxt,
} from "./styles";

interface IDriverCard {
  id: string;
  img: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  dob: string;
}

export default function DriverCard(props: IDriverCard) {
  const { id, img, firstName, lastName, phone, email, dob } = props;

  return (
    <CardDriver>
      <CardHeader
        padding="16px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <Text>Driver ID</Text>
          <TextID>{id}</TextID>
        </Flex>
        <Image src={icThreeDots} alt="more" width={20} height={20} />
      </CardHeader>
      <CardBody padding="24px 16px">
        <BodyImg>
          <Image
            src={img}
            alt={firstName}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </BodyImg>
        <div>
          <BodySection>
            <BodyTitle>Nama Driver</BodyTitle>
            <BodyTxt>
              {firstName} {lastName}
            </BodyTxt>
          </BodySection>
          <BodySection>
            <BodyTitle>Telepon</BodyTitle>
            <BodyTxt>{phone}</BodyTxt>
          </BodySection>
          <BodySection isSmHide>
            <BodyTitle>Email</BodyTitle>
            <BodyTxt>{email}</BodyTxt>
          </BodySection>
          <BodySection isSmHide>
            <BodyTitle>Tanggal Lahir</BodyTitle>
            <BodyTxt>{dob}</BodyTxt>
          </BodySection>
        </div>
      </CardBody>
    </CardDriver>
  );
}
