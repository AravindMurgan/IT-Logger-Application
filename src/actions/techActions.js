import { GET_TECHS, ADD_TECH, DELETE_TECH, TECHS_ERROR,SET_LOADING } from './type';


export const getTechs = () => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch('/techs');
		const data = await res.json();
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

export const addTechs = (tech) => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch('/techs',{
			method:'POST',
			body:JSON.stringify(tech),
			headers:{'Content-Type' : 'application/json'}
		});
		const data = await res.json();
		dispatch({
			type: ADD_TECH,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: TECHS_ERROR,
			payload: err.message,
		});
	}
};


export const deleteTechs = (id) => async (dispatch) => {
	try {
		setLoading();

		 await fetch(`techs/${id}`,{
			method:'DELETE'
		});
		dispatch({
			type: DELETE_TECH,
			payload: id,
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