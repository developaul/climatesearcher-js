import { form } from './references.js';
import { validateForm } from './functions.js';
import '../css/tailwind.min.css';

export function startEventListeners() {
    document.addEventListener( 'DOMContentLoaded', () => {
        form.addEventListener( 'submit', validateForm );
    });
}