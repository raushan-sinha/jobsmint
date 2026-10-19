import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveNavbar from "./components/layout/ResponsiveNavbar";
import { Home } from "./pages";

function App() {
	return (
		<>
			<BrowserRouter>
				<ResponsiveNavbar />

				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;