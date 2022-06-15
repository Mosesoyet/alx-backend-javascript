#!/usr/bin/node

export const getFullResponseFromAPI = ((success) => {
	return new promise((true, false) => {
		if (success) {
			true({status: 200; body: 'Success'})
		}
		else {
			false('The fake API is not working currently')
		}
	})
})
