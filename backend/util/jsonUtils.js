
export function convertObjectToStateShape(object) {
	return {
		...Object.values(object)
			.reduce((a, e) => (
				{...a, [e._id]: e}), 
			{})
	}
}