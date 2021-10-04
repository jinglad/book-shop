import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <>
      <SearchInput>
        <SearchIcon className="ml-2" />
        <input placeholder="Search" type="text" />
        <button>Search</button>
      </SearchInput>
    </>
  );
};

export default SearchBar;

const SearchInput = styled.div`
  /* padding: 20px; */
  background: #f1f1f1;
  width: 500px;
  margin: auto;
  margin-top: 100px;
  border-radius: 5px;
  & input {
    border: none;
    padding: 20px;
    background: #f1f1f1;
    width: 70%;
    outline: none;
  }
  & button {
    border: none;
    padding: 20px;
    padding-right: 35px;
    padding-left: 35px;
    background: #6946f4;
    color: white;
    border-radius: 5px;
  }
`;
