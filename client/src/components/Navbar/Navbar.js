import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation, Link } from 'react-router-dom';
import memories from '../../images/memories.jpg';
import useStyles from './styles';

function Navbar() {
	const classes = useStyles();
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
	const dispatch = useDispatch();
	const history = useHistory();
	const location = useLocation();

	console.log(user);

	useEffect(() => {
		const token = user?.token;
		setUser(JSON.parse(localStorage.getItem('profile')));
	}, [location]);

	const logout = () => {
		dispatch({ type: 'LOGOUT' });
		history.push('/');
		setUser(null);
	};

	return (
		<AppBar className={classes.appBar} position='static' color='inherit'>
			<div className={classes.brandContainer}>
				<Typography className={classes.heading} variant='h2' align='center'>
					Memories
				</Typography>
				<img className={classes.image} src={memories} alt='icon' height='60' />
			</div>
			<Toolbar className={classes.toolbar}>
				{user?.result ? (
					<div className={classes.profile}>
						<Avatar
							className={classes.purple}
							alt={user?.result.name}
							src={user?.result.imageUrl}>
							{user?.result.name.charAt(0)}
						</Avatar>
						<Typography className={classes.userName} variant='h6'>
							{user?.result.name}
						</Typography>
						<Button
							variant='contained'
							className={classes.logout}
							color='secondary'
							onClick={logout}>
							Logout
						</Button>
					</div>
				) : (
					<Button
						component={Link}
						to='/auth'
						variant='contained'
						color='primary'>
						Login
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
