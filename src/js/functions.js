import { cityInput, countryInput, form, result, ui } from './references.js';

// Functions
// Valida el formulario
const validateForm = event => {
    event.preventDefault();

    const city      = cityInput.value,
          country   = countryInput.value;
    
    if( city === '' || country === '' ) {
        ui.showError( 'Ambos campos son obligatorios' );
        return;
    }

    form.reset();
    consultAPI( city, country );
}

// Consulta la API
const consultAPI = ( city, country ) => {
    ui.showSpinner();
    
    const appID = '9483abbc0441d5dc4b4944a5e211fa35';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ city },${ country }&appid=${ appID }`;
    
    fetch( url )
    .then( response => response.json() )
    .then( data => {
        limpiarHTML()
        
            if( data.cod === '404' ) {
                ui.showError( 'Ciudad no encontrada' );
                return;
            }

            ui.showClimate( data );
        })
}

// Limpia el HTML
const limpiarHTML = () => {
    while( result.firstChild ) { 
        result.removeChild( result.firstChild ) 
    };
}

// Convierte los grados kelvin a centigrados centrigados
const kelvinToCentigrades = degrees => parseInt( degrees - 273.15 );

export {
    validateForm,
    kelvinToCentigrades,
    limpiarHTML
}