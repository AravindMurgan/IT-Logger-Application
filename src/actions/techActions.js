import { GET_TECHS, ADD_TECH, DELETE_TECH, TECHS_ERROR,SET_LOADING } from './type';


export const getTechs = () => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch('/techs');
		const data = await res.json();
		console.log(data);
		dispatch({
			type: GET_TECHS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: TECHS_ERROR,
			payload: err.message,
		});
	}
};


export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};