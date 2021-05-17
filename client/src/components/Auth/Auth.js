import React, { useState } from 'react';
import {
	Paper,
	Typography,
	Avatar,
	Button,
	Container,
	Grid,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input.js';

function Auth() {
	const classes = useStyles();
	const [showPassword, setShowPassword] = useState(false);
	const [isSignUp, setSignUp] = useState(false);



	const handleSubmit = () => {};
	const handleChange = () => { };
	const handleShowPassword = () => setShowPassword((prev) => !prev);
	const switchMode = () => {
		setSignUp(!isSignUp);
	}
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
					<Grid container justify="flex-end">
						<Grid item>
							<Button
								onClick={switchMode}
								color='secondary'
							variant='outlined'>
                             {isSignUp ? 'Already have an account? Login' : 'Create an account'}
							</Button>
						 </Grid>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
}

export default Auth;
