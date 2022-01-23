import { useState, useCallback, useMemo } from "react";

import DriverCard from "@/components/DriverCard";
import SearchBox from "@/components/SearchBox";
import apiNormalizer from "@/helpers/apiNormalizer";
import Flex from "@/styles/components/Flex";
import { Carousel, BtnPage } from "@/styles/pages/driver";
import type { IDriverProps } from "@/types/driver";

const PAGE_SIZE = 5;
const INITIAL_PAGE = 1;

export async function getStaticProps() {
  const res = await fetch("https://randomuser.me/api/?results=30&seed=dizzi");
  const data = await res.json();
  const normalized = apiNormalizer(data);

  return {
    props: {
      data: normalized,
    },
  };
}

export default function Driver(props: IDriverProps) {
  const { data } = props;

  const [currentPage, setPage] = useState(INITIAL_PAGE);
  const [keyword, setKeyword] = useState("");

  const filteredDriver = useMemo(() => {
    if (keyword) {
      const filtered = data.filter((dt) => {
        const lower = dt.firstName.toLowerCase();
        return lower.includes(keyword);
      });

      return filtered;
    }

    return data;
  }, [keyword, data]);

  const totalPages = Math.ceil(filteredDriver.length / PAGE_SIZE);
  const hasNext = currentPage < totalPages;
  const hasPrev = currentPage > 1;

  const shownDriver = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return filteredDriver.slice(start, end);
  }, [currentPage, filteredDriver]);

  const handleSearch = useCallback((searchVal) => {
    setKeyword(searchVal);
    setPage(INITIAL_PAGE);
  }, []);

  const handleNext = () => setPage((prev) => prev + 1);
  const handlePrev = () => setPage((prev) => prev - 1);

  return (
    <div>
      <SearchBox handleSearch={handleSearch} />
      <Carousel margin="24px 0 0" alignItems="center">
        {shownDriver.map((driver, idx) => (
          <DriverCard key={idx} {...driver} />
        ))}
      </Carousel>
      <Flex
        width="100%"
        margin="16px 0 0"
        alignItems="center"
        justifyContent="center"
      >
        <BtnPage className="prev" isDisabled={!hasPrev} onClick={handlePrev}>
          Previous Page
        </BtnPage>
        <BtnPage className="next" isDisabled={!hasNext} onClick={handleNext}>
          Next Page
        </BtnPage>
      </Flex>
    </div>
  );
}
