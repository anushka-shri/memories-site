import React from 'react';
import {
	Paper,
	Typography,
	Toolbar,
	Avatar,
	Button,
	Container,
	Grid,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import useStyles from './styles';

function Auth() {
    const classes = useStyles();
    const isSignUp = false;

    const handleSubmit = () => {
        
    }
	return (
		<Container maxWidth='xs' component='main'>
			<Paper className={classes.paper} elevation={3}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
                <Typography variant='h5'>
                    {isSignUp ? 'Sign Up' : 'Sign In'}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid>
                        
                    </Grid>
                </form>
			</Paper>
		</Container>
	);
}

export default Auth;
