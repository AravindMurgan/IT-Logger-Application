import { GET_LOGS, SET_LOADING, LOGS_ERROR,ADD_LOG } from './type';

export  const addLogs = () => async (dispatch) => {
	try {
		const res = await fetch('/logs',{
			method:'POST',
			body:JSON.stringify(),
			headers:{
				'Content-Type':'application/json'
			}
		});
		const data = await res.json();

		dispatch({
			type: ADD_LOG,
			payload: data,
		});
	} catch (err) {
		
		dispatch({
			type: LOGS_ERROR,
			payload: 'Bad request'
		});
	}
};

export  const getLogs = () => async (dispatch) => {
	try {
		const res = await fetch('/logs');
		const data = await res.json();
		console.log(res.url)

		dispatch({
			type: GET_LOGS,
			payload: data,
		});
	} catch (err) {
		
		dispatch({
			type: LOGS_ERROR,
			payload: 'Bad request'
		});
	}
};

export  const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};


