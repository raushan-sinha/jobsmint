import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveNavbar from "./components/layout/ResponsiveNavbar";
import { Home } from "./pages";
import Jobs from "./pages/Jobs";

function App() {
	return (
		<>
			<BrowserRouter>
				<ResponsiveNavbar />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/jobs" element={<Jobs />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;