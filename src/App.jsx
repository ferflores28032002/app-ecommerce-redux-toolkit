import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./pages/";
import { ProductsId } from "./components";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/:id" element={<ProductsId />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
