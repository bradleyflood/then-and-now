import actions from '../actions/types';

const defaultState = {
	name: '',
	date: '',
	time: ''
};

const juncturesListReducer = (state = defaultState, action) => {
	switch (action.type) {
		case actions.JUNCTURE_UPDATE_FIELD:
			return {
				...state,
				[action.payload.key]:
					action.payload.value
			};
		case actions.JUNCTURE_CREATE:
			return state;
		case actions.JUNCTURE_CREATE_FULFILLED:
			return state;
		case actions.JUNCTURE_CREATE_ERROR:
			return state;
		case actions.JUNCTURE_FETCH_BY_ID_FULFILLED:
			return {...action.payload, fetched: true};
		default:
			return state;
	}
};

export default juncturesListReducer;
