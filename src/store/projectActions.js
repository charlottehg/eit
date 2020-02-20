//adding a project, deleting a project

export const createProject = (project) => {
	const firestore = getFirestore();
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		dispatch({ type: 'CREATE_PROJECT', project: project });
	};
};

//look at video 14 if necessary
