import { Input, InputGroup } from "@chakra-ui/react";
import { HiSearch } from "react-icons/hi";
import { useRef } from "react";

interface Props {
  onSearch: (text: string) => void;
}

const Search = ({ onSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // prevent page reload
    if (inputRef.current) {
      onSearch(inputRef.current.value);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <InputGroup startElement={<HiSearch />}>
        <Input ref={inputRef} borderRadius="full" placeholder="Search Games" />
      </InputGroup>
    </form>
  );
};

export default Search;
