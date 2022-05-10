import React, { useState } from 'react';
//material ui
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled, makeStyles } from '@mui/material/styles';

import login from 'assets/login.png';
import Student from './Student';
import './login.css';

const CutomButton = styled(Button)`
	${'' /* background: linear-gradient(to right, #43cea2, #185a9d); */}
	background: linear-gradient(45deg, #2196f3 30%, #21cbf3 90%);
	width: 25rem;
	margin: 0.5rem;
	text-transform: capitalize;
	font-family: 'Nunito', sans-serif;
	font-size: 1rem;
	font-weight: 500;
	${
		'' /* &:hover {
		background: rgba(74, 196, 243, 0.2);
	} */
	}
`;
const page = {
	loginPage: 1,
	student: 2,
	collage: 3,
	councillor: 4,
};
const Login = () => {
	const [pageno, setpageno] = useState(page.loginPage);

	const handleCutomButtonClick = (e) => {
		console.log('e');
	};
	return (
		<>
			<div className='login-container'>
				<Grid container spacing={2}>
					<Grid item xs={12} md={5} sm={12}>
						<div className='left-container'>
							<h1>Hii, Welcome Back</h1>
							<img src={login} style={{ width: '100%', height: '100%' }} />
						</div>
					</Grid>
					<Grid item xs={12} md={7} sm={12}>
						{pageno === page.loginPage && (
							<div className='right-container'>
								jhj
								<div className='right-button-container'>
									<CutomButton
										variant='contained'
										fullWidth
										onClick={() => {
											setpageno(page.student);
										}}
									>
										Log In As A Student
									</CutomButton>

									<CutomButton
										variant='contained'
										fullWidth
										onClick={() => {
											setpageno(page.collage);
										}}
									>
										Log In As A Collage
									</CutomButton>
									<CutomButton variant='contained' fullWidth>
										{() => {
											setpageno(page.councillor);
										}}
										Log In As A councillor
									</CutomButton>
								</div>
							</div>
						)}
						{pageno === page.student && <Student />}
					</Grid>
				</Grid>
			</div>
		</>
	);
};
export default Login;
