import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";

const Router = () => {
	return (
		// url 라우터 처리
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
