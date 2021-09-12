import './style.css';
import {rovingIndex} from 'roving-ux';

rovingIndex({
	element: document.querySelector('.gui-button-popup'),
	target: '.gui-button'
});

let popupButtons = document.querySelectorAll('.gui-button-popup');
popupButtons.forEach(button => {
	button.addEventListener('keyup', (event) => {
		if (event.code.toLowerCase() === 'escape') {
			event.target.blur();
		}
	});

	button.addEventListener('focusin', (event) => {
		event.currentTarget.setAttribute('aria-expanded', true);
	});

	button.addEventListener('focusout', (event) => {
		event.currentTarget.setAttribute('aria-expanded', false);
	});
});
