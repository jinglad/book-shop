import Books from "../Books/Books";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <Books />
    </div>
  );
};

export default Home;
