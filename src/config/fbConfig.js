import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'; //trenger kanskje ikke denne

var firebaseConfig = {
	apiKey: 'AIzaSyCpw4tAE3fyqv7NaavZVsnB-qS0Du9AsMk',
	authDomain: 'plantview-a6de8.firebaseapp.com',
	databaseURL: 'https://plantview-a6de8.firebaseio.com',
	projectId: 'plantview-a6de8',
	storageBucket: 'plantview-a6de8.appspot.com',
	messagingSenderId: '904479375691',
	appId: '1:904479375691:web:4170ac1db89c9f7b1368ce'
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
