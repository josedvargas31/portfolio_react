import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./pages/start/Start";
import AboutMe from "./pages/aboutMe/AboutMe";

function App() {
	return (
		<>
    <BrowserRouter>
			 <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
      </BrowserRouter>
		</>
	);
}

export default App;
