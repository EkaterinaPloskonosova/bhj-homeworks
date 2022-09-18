const fontSize = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');


fontSize.forEach(el => {
	el.addEventListener('click', (event) => {
		event.preventDefault();
		const fontSizeActive = document.querySelector('.font-size_active');
		fontSizeActive.classList.remove('font-size_active');
		el.classList.add('font-size_active');

		if (el.classList.contains('font-size_small')) {
			book.classList.add('book_fs-small');
		} else if (el.classList.contains('font-size_big')) {
			book.classList.add('book_fs-big');
		} else {
			book.classList.remove('book_fs-big');
			book.classList.remove('book_fs-small');
		}
	});
});