import { container } from '../references.js';

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


}

export default UI;