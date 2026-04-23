import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import Category from "./pages/Category";
import Filter from "./pages/Filter";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";

const App = () => {
	return (
		<>
			<Toaster />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigate to="/home" replace />} />
					<Route path="/home" element={<LandingPage />} />
					<Route path="/signup" element={
						<PublicRoute>
							<Signup />
						</PublicRoute>
					} />
					<Route path="/login" element={
						<PublicRoute>
							<Login />
						</PublicRoute>
					} />
					<Route path="/dashboard" element={
						<PrivateRoute>
							<Home />
						</PrivateRoute>
					} />
					<Route path="/category" element={<Category />} />
					<Route path="/income" element={<Income />} />
					<Route path="/expense" element={<Expense />} />
					<Route path="/filter" element={<Filter />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

const PrivateRoute = ({ children }) => {
	const isAuthenticated = !!localStorage.getItem("token");
	return isAuthenticated ? children : <Navigate to="/home" replace />;
};

const PublicRoute = ({ children }) => {
	const isAuthenticated = !!localStorage.getItem("token");
	return isAuthenticated ? <Navigate to="/dashboard" replace /> : children;
};

export default App;