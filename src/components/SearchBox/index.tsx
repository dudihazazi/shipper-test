import { useState } from "react";
import Image from "next/image";
import type { ChangeEvent } from "react";

import icSearch from "@public/images/icon-search.png";
import useDebounce from "@/hooks/useDebounce";
import Card from "@/styles/components/Card";

import {
  Wrapper,
  Title,
  Text,
  SearchWrapper,
  Search,
  IconSearch,
  InputSearch,
  BtnAdd,
} from "./styles";

interface ISearchBox {
  handleSearch: (val: string) => void;
}

export default function SearchBox(props: ISearchBox) {
  const { handleSearch } = props;
  const [searchVal, setSearchVal] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchVal(val);
  };

  useDebounce(searchVal, 500, () => handleSearch(searchVal));

  return (
    <Card width="100%" padding="16px 24px">
      <Wrapper width="100%" alignItems="center" justifyContent="space-between">
        <div>
          <Title>DRIVER MANAGEMENT</Title>
          <Text>Data driver yang bekerja dengan Anda.</Text>
        </div>
        <SearchWrapper alignItems="center">
          <Search alignItems="center">
            <IconSearch>
              <Image src={icSearch} width={16} height={16} alt="search" />
            </IconSearch>
            <InputSearch
              placeholder="Cari Driver"
              type="text"
              onChange={handleInput}
            />
          </Search>
          <BtnAdd>TAMBAH DRIVER +</BtnAdd>
        </SearchWrapper>
      </Wrapper>
    </Card>
  );
}
