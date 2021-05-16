import React from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import memories from '../../images/memories.jpg';
import useStyles from './styles';

function Navbar() {
	const classes = useStyles();

	const user = null;
	return (
		<AppBar className={classes.appBar} position='static' color='inherit'>
			<div className={classes.brandContainer}>
				<Typography className={classes.heading} variant='h2' align='center'>
					Memories
				</Typography>
				<img className={classes.image} src={memories} alt='icon' height='60' />
			</div>
			<Toolbar className={classes.toolbar}>
				{user ? (
					<div className={classes.profile}>
						<Avatar
							className={classes.purple}
							alt={user.result.name}
							src={user.result.imageUrl}>
							{user.result.name.charAt(0)}
							<Typography className={classes.userName} variant='h6'>
								{user.result.name}
							</Typography>
							<Button
								variant='contained'
								className={classes.logout}
								color='secondary'>
								Logout
							</Button>
						</Avatar>
					</div>
				) : (
					<Button component={Link} to='/auth' variant='contained' color='primary'>
						Login
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
