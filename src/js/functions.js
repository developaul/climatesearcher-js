import { cityInput, countryInput, ui } from './references.js';

// Functions
// Valida el formulario
const validateForm = ( event ) => {
    event.preventDefault();

    const city      = cityInput.value,
          country   = countryInput.value;
    
    if( city === '' || country === '' ) {
        ui.showError( 'Ambos campos son obligatorios' );
        return;
    }

}

export {
    validateForm
}