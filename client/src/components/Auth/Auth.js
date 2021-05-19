import React, { useState } from 'react';
import {
	Paper,
	Typography,
	Avatar,
	Button,
	Container,
	Grid,
	Icon,
} from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input.js';
import IconGoogle from './icon.js'
import {useDispatch} from 'react-redux'

function Auth() {
	const classes = useStyles();
	const [showPassword, setShowPassword] = useState(false);
	const [isSignUp, setSignUp] = useState(false);
	const dispatch = useDispatch();

	const handleSubmit = () => {};
	const handleChange = () => {};
	const handleShowPassword = () => setShowPassword((prev) => !prev);
	const switchMode = () => {
		setSignUp(!isSignUp);
	};
	const googleSuccess = async (res) => {
		// ?. is Optional chaining operator
		// ?. wont throw an error if the requested object is not found
		const result = res?.profileObj;
		const token = res?.tokenId;

		try {
			dispatch({ type: 'AUTH', data:{result, token}});
		} catch (error) {
			
		}
	};
	const googleFailure = (error) => {
		console.log(error);
		console.log('google sign in failed, Try Again');
	};

	// const client secret xveKNOBpTC4kut73qZvqhIFh
	return (
		<Container maxWidth='xs' component='main'>
			<Paper className={classes.paper} elevation={3}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography variant='h5'>{isSignUp ? 'Register' : 'Login'}</Typography>
				<form className={classes.form} onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						{isSignUp && (
							<>
								<Input
									name='firstName'
									label='First Name'
									handleChange={handleChange}
									autoFocus
									half
								/>
								<Input
									name='lastName'
									label='Last Name'
									handleChange={handleChange}
									half
								/>
							</>
						)}
						<Input
							name='email'
							label='Email Address'
							handleChange={handleChange}
							type='email'
						/>
						<Input
							name='password'
							label='Password'
							handleChange={handleChange}
							type={showPassword ? 'text' : 'password'}
							handleShowPassword={handleShowPassword}
						/>
						{isSignUp && (
							<Input
								name='confirmPassword'
								label='Confirm Password'
								handleChange={handleChange}
								type='password'
							/>
						)}
					</Grid>
					<Button
						type='submit'
						variant='contained'
						fullWidth
						color='primary'
						className={classes.submit}>
						{isSignUp ? 'Register' : 'Login'}
					</Button>
					<GoogleLogin
						clientId='332038548755-ts1qrib26k1k29g21mim2ilmreepk8a5.apps.googleusercontent.com'
						render={(renderProps) => (
							<Button
								className={classes.googleButton}
								color='primary'
								fullWidth
								disabled={renderProps.disabled}
								startIcon={<IconGoogle />}
								variant='contained'
								onClick={renderProps.onClick}>
								Login with Google
							</Button>
						)}
						onSuccess={googleSuccess}
						onFailure={googleFailure}
						cookiePolicy='single_host_origin'
					/>

					<Grid container justify='flex-end'>
						<Grid item>
							<Button onClick={switchMode} color='secondary' variant='outlined'>
								{isSignUp
									? 'Already have an account? Login'
									: 'Create an account'}
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
}

export default Auth;
