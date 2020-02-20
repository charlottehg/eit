const initState = {
	sensors: [
		{ id: '1', name: 'pH-verdi', value: [] },
		{ id: '2', name: 'Jordfuktighet', value: [] },
		{ id: '3', name: 'Luftfuktighet', value: [] },
		{ id: '4', name: 'CO2', value: [] }
	]
};

const projectReducer = (state = initState, action) => {
	return state;
};

export default projectReducer;
