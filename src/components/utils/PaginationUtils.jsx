import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";

function PaginationUtils({ page, lastPage, setPage }) {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prev) => Math.min(lastPage, prev + 1));
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prev) => Math.max(1, prev - 1));
    scrollTop();
  };

  const handlePageClick = (pageNumber) => {
    if (pageNumber !== '...') {
      setPage(pageNumber);
      scrollTop();
    }
  };

  const generatePageNumbers = () => {
    const pages = [];
    const delta = 2; // Jumlah halaman di sekitar halaman saat ini
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, page - delta); i <= Math.min(lastPage - 1, page + delta); i++) {
      range.push(i);
    }

    if (page - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (page + delta < lastPage - 1) {
      rangeWithDots.push('...', lastPage);
    } else if (lastPage > 1) {
      rangeWithDots.push(lastPage);
    }

    return rangeWithDots;
  };

  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePrevPage}
              className={`cursor-pointer ${page === 1? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={page === 1}
            />
          </PaginationItem>
          {generatePageNumbers().map((pageNum, index) => (
            <PaginationItem key={index}>
              {pageNum === '...' ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  onClick={() => handlePageClick(pageNum)}
                  className={`cursor-pointer ${pageNum === page ? 'active' : ''}`}
                >
                  {pageNum}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={handleNextPage}
              className={`cursor-pointer ${page === lastPage? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={page === lastPage}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}

export default PaginationUtils;