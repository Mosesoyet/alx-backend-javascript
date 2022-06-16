import signUpUser from './4-user-promise.js'
import uploadPhoto from './5-photo-reject.js'

export default function handleProfileSignup( 
	firstName, 
	lastName, 
	fileName
) {
	const usrData = await signUpUser(firstName, lastName)
	.then((data) => ({
		status: 'fulfilled',
		value: data,
	}));

	const imgData = await uploadPhoto(fileName)
	.catch((err) => ({
		status: 'rejected',
		value: err.toString(),
	}));

	return Promise(usrData, imgData);
}
