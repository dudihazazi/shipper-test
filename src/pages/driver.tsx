import { useState, useEffect, useRef, useCallback, useMemo } from "react";

import DriverCard from "@/components/DriverCard";
import DriverNotFound from "@/components/DriverNotFound";
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
  const carouselRef = useRef<HTMLDivElement>(null);

  const filteredDriver = useMemo(() => {
    if (keyword) {
      const filtered = data.filter((dt) => {
        const lower = dt.firstName.toLowerCase();
        const keywordLow = keyword.toLowerCase();
        return lower.includes(keywordLow);
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

  const isAnyDriver = shownDriver.length > 0;

  const handleSearch = useCallback((searchVal) => {
    setKeyword(searchVal);
    setPage(INITIAL_PAGE);
  }, []);

  const handleNext = () => setPage((prev) => prev + 1);
  const handlePrev = () => setPage((prev) => prev - 1);

  useEffect(() => {
    const carouselEl = carouselRef.current;

    if (carouselEl) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      carouselEl.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [currentPage]);

  return (
    <div>
      <SearchBox handleSearch={handleSearch} />
      <Carousel
        ref={carouselRef}
        margin="24px 0 0"
        width="100%"
        alignItems="center"
      >
        {shownDriver.map((driver, idx) => (
          <DriverCard key={idx} {...driver} />
        ))}
        {!isAnyDriver && <DriverNotFound />}
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
