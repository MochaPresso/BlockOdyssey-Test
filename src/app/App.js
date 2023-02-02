import ProductList from "../components/ProductList";
import Search from "../components/Search";
import Pagination from "../components/Pagination";

import "../styles/App.scss";

const App = () => {
  return (
    <div className="App">
      <Search />
      <ProductList />
      <Pagination />
    </div>
  );
};

export default App;
