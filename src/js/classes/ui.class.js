import { container, result } from '../references.js';
import { kelvinToCentigrades } from '../functions.js';

class UI{

    showError( message ) {
        const existAlert = document.querySelector( '.bg-red-100' );

        if( !existAlert ) {
            const alert = document.createElement( 'div' );
            alert.classList.add( 'bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center' );
            alert.innerHTML = `
                <strong class="font-bold">Error!</stron>
                <span class="block">${ message }</span>`;

            container.appendChild( alert );

            setTimeout( () => {
                alert.remove();
            }, 3000 );
        }
    }

    showClimate( data ) {
        const { name, main: { temp, temp_max, temp_min } } = data;
        
        const centigrades   = kelvinToCentigrades( temp ),
              max           = kelvinToCentigrades( temp_max ),
              min           = kelvinToCentigrades( temp_min );    

        const cityName = document.createElement( 'p' );
        cityName.textContent = `Clima en ${ name }`;
        cityName.classList.add( 'font-bold', 'text-2xl' );

        const current = document.createElement( 'p' );
        current.innerHTML = `${ centigrades } &#8451;`;
        current.classList.add( 'font-bold', 'text-6xl' );

        const tempMaxima = document.createElement( 'p' );
        tempMaxima.innerHTML = `Max: ${ max } &#8451;`;
        tempMaxima.classList.add( 'text-xl' );
     
        const tempMinima = document.createElement( 'p' );
        tempMinima.innerHTML = `Min: ${ min } &#8451;`;
        tempMinima.classList.add( 'text-xl' );


        const resultDiv = document.createElement( 'div' );
        resultDiv.classList.add( 'text-center', 'text-white' );
        resultDiv.appendChild( cityName );
        resultDiv.appendChild( current );
        resultDiv.appendChild( tempMaxima );
        resultDiv.appendChild( tempMinima );

        result.appendChild( resultDiv );
    }
}

export default UI;