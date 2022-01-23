import Image from "next/image";
import Link from "next/link";

import Flex from "@/styles/components/Flex";

import { LinkList } from "./styles";

interface IList {
  icon: StaticImageData;
  link: string;
  title: string;
  isActive: boolean;
}

export default function List(props: IList) {
  const { icon, link, title, isActive } = props;

  return (
    <li>
      <Link passHref href={link}>
        <LinkList isActive={isActive}>
          <Flex padding="16px" alignItems="center">
            <Image src={icon} width={24} height={24} alt={title} />
            <p>{title}</p>
          </Flex>
        </LinkList>
      </Link>
    </li>
  );
}
