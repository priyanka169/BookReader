export function selectBook(book) {
	//selectBook is an actionCreator, it needs to return an action, an object with type of property.
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}