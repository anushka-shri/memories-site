import React from 'react';
import {
    Container,
    AppBar,
    Typography,
    Grow,
    Grid
} from '@material-ui/core';
import memories from './images/memories.jpg'

function App() {
    return (
			<Container maxWidth='lg'>
				<AppBar position='static' color='inherit'>
					<Typography variant='h2' align='center'>
						Memories
					</Typography>
					<img src={memories} alt='memories' height='60' />
				</AppBar>
				<Grow in>
					<Container container justify='space-between' alignItems='stretch' spacing={3}>
						<Grid>
							<Grid xs={12} sm={7}>
								<Posts />
							</Grid>
							<Grid xs={12} sm={4}>
								<Form />
							</Grid>
						</Grid>
					</Container>
				</Grow>
			</Container>
		);
}

export default App
