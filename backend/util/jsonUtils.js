
/**
 * Maps an array of objects to an object that associates an element with its id
 * @param {{_id: string}[]} object An array of objects that have an _id prop
 * @returns {Object}
 */
export function convertObjectToStateShape(object) {
	return {
		...Object.values(object)
			.reduce((a, e) => (
				{...a, [e._id]: e}), 
			{})
	}
}