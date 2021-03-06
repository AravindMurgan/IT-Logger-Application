import {
	GET_LOGS,
	SET_LOADING,
	LOGS_ERROR,
	ADD_LOG,
	DELETE_LOG,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_LOG,
} from './type';

export const addLogs = (log) => async (dispatch) => {
	try {
		const res = await fetch('/logs', {
			method: 'POST',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await res.json();

		dispatch({
			type: ADD_LOG,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.message,
		});
	}
};

export const updateLogs = (log) => async (dispatch) => {
	try {
		const res = await fetch(`/logs/${id}`, {
			method: 'PUT',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await res.json();

		dispatch({
			type: DELETE_LOG,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.message,
		});
	}
};

export const getLogs = () => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch('/logs');
		const data = await res.json();

		dispatch({
			type: GET_LOGS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.message,
		});
	}
};

export const deleteLogs = (id) => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch(`/logs/${id}`, {
			method: 'DELETE',
		});
		const data = await res.json();

		dispatch({
			type: DELETE_LOG,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.message,
		});
	}
};

///setCurrent log
export const setCurrent = (log) => {
	return {
		type: SET_CURRENT,
		payload: log,
	};
};

//clearCurrent log
export const clearCurrent = () => {
	return {
		type: SET_CURRENT,
	};
};

export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
