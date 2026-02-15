"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { Button } from "~/components/ui/button";
import { Field } from "~/components/ui/field";
import { Input } from "~/components/ui/input";

const SearchInput = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearchInput = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() == "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${encodeURIComponent(keyword)}`);
    }
  };
  return (
    <>
      <Field orientation="horizontal" className="mt-2">
        <Input
          ref={searchRef}
          onKeyDown={handleSearchInput}
          type="search"
          placeholder="Search..."
          className="text-secondary"
        />
        <Button className="hover:cursor-pointer" onClick={handleSearchInput}>
          Search
        </Button>
      </Field>
    </>
  );
};

export default SearchInput;
