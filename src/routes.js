import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

//external package
import pMinDelay from 'p-min-delay';

//custom package
import Loader from 'components/loader';
const Login = lazy(() => pMinDelay(import('pages/login'), 3000));

const RoutesPath = () => {
	return (
		<>
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path={`${process.env.REACT_APP_SUB_FOLDER}/login`} element={<Login />} />
				</Routes>
			</Suspense>
		</>
	);
};
export default RoutesPath;
