import UI from './classes/ui.class.js';

// References
const container     = document.querySelector( '.container' ),
      result        = document.querySelector( '.resultado' ),
      form          = document.querySelector( '#formulario' ),
      cityInput     = document.querySelector( '#ciudad' ),
      countryInput  = document.querySelector( '#pais' );

// Instances
const ui = new UI;

export {
    container,
    form,
    result,
    cityInput,
    countryInput,
    ui
}
