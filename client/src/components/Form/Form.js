import React, { useState } from 'react';
import useStyles from './styles';
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper } from '@material-ui/core';

function Form() {
	const [postData, setPostData] = useState({
		creator: '',
		title: '',
		message: '',
		tags: '',
		selectedFile: '',
	});

	const classes = useStyles();

    const handleSubmit = () => { };
    const clear = () => { };
	return (
		<Paper className={classes.paper}>
			<form
				autoComplete='off'
				noValidate
				className={`${classes.root} ${classes.form}`}
				onSubmit={handleSubmit}>
				<Typography variant='h6'>Add Memory Here</Typography>
				<TextField
					name='creator'
					label='Creator'
					variant='outlined'
					fullWidth
					onChange={(e) =>
						setPostData({ ...postData, creator: e.target.value })
					}
					value={postData.creator}
				/>
				<TextField
					name='titler'
					label='Title'
					variant='outlined'
					fullWidth
					onChange={(e) => setPostData({ ...postData, title: e.target.value })}
					value={postData.creator}
				/>
				<TextField
					name='message'
					label='Message'
					variant='outlined'
					fullWidth
					onChange={(e) =>
						setPostData({ ...postData, message: e.target.value })
					}
					value={postData.creator}
				/>
				<TextField
					name='tags'
					label='Tags'
					variant='outlined'
					fullWidth
					onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
					value={postData.creator}
				/>
				<div className={classes.fileInput}>
					<FileBase
						type='file'
						multiple={false}
						onDone={({ base64 }) =>
							setPostData({ ...postData, selectedFile: base64 })
						}
					/>
				</div>
				<Button
					className={classes.buttonSubmit}
					variant='contained'
					color='primary'
					size='large'
					type='submit'
					fullWidth>
					Submit
				</Button>
				<Button
					variant='contained'
					color='secondary'
					size='small'
					onClick={clear}
					fullWidth>
					Clear
				</Button>
			</form>
		</Paper>
	);
}

export default Form;
