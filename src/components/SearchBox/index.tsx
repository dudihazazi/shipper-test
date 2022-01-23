import Image from "next/image";

import icSearch from "@public/images/icon-search.png";
import Card from "@/styles/components/Card";
import Flex from "@/styles/components/Flex";

import { Title, Text, Search, IconSearch, InputSearch, BtnAdd } from "./styles";

export default function SearchBox() {
  return (
    <Card width="100%" padding="16px 24px">
      <Flex width="100%" alignItems="center" justifyContent="space-between">
        <div>
          <Title>DRIVER MANAGEMENT</Title>
          <Text>Data driver yang bekerja dengan Anda.</Text>
        </div>
        <Flex alignItems="center">
          <Search height="40px" alignItems="center">
            <IconSearch>
              <Image src={icSearch} width={16} height={16} alt="search" />
            </IconSearch>
            <InputSearch placeholder="Cari Driver" type="text" />
          </Search>
          <BtnAdd>TAMBAH DRIVER +</BtnAdd>
        </Flex>
      </Flex>
    </Card>
  );
}
