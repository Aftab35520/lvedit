import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderShowHide from "./GlobalComponents/HeaderShowHide";
import Service from "./component/Service";
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeaderShowHide>
      </HeaderShowHide>
      <Routes>
        <Route path="/" element={<Service/>}/>
      </Routes>
   
      </BrowserRouter>
    </div>
  );
}

export default App;
