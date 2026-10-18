import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveNavbar from "./components/layout/ResponsiveNavbar";
import { Home, Support } from "./pages";

function App() {
	return (
		<>
			<BrowserRouter>
				<ResponsiveNavbar />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/support" element={<Support />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;