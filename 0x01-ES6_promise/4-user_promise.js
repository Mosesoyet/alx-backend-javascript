export default function signUpUser(firstName, lastName) {
	return new Promise((resolve, reject) => {
		if (firstName === true && lastName === true) {
			resolve({
				firstName: firstName,
				lastName: lastName
			});
		} else {
			reject(new Error());
		}
	})
}
