import * as api from '../Api';
import { AUTH } from '../constants/actionTypes';

export const signin = ({ formData, history }) => async (dispatch) => {
		try {
			// signin the user
			const { data } = await api.signIn(formData);

			dispatch({ type: AUTH, data });

			history.push('/');
		} catch (error) {
			console(error);
		}
	};

export const signup = ({ formData, history }) => async (dispatch) => {
		try {
			// signup the user
			const { data } = await api.signUp(formData);

			dispatch({ type: AUTH, data });

			history.push('/');
		} catch (error) {
			console.log(error);
		}
	};
