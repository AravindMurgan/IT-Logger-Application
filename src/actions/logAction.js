import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './type';

export  const getLogs = () => async (dispatch) => {
	try {
		const res = await fetch('/logs');
		const data = await res.json();
		console.log(res.url)

		dispatch({
			type: GET_LOGS,
			payload: data.statusText,
		});
	} catch (err) {
		
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText,
		});
	}
};

export  const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};


