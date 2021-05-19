import * as api from '../Api';
import { AUTH } from '../constants/actionTypes';

export const signin = ({ formData, history }) => async (dispatch) => {
		try {
			// signin the user

			history.push('/');
		} catch (error) {
			console(error);
		}
	};

export const signup = ({ formData, history }) => async (dispatch) => {
		try {
			// signup the user

			history.push('/');
		} catch (error) {
			console.log(error);
		}
	};
