'use strict';

class GreetingMessage extends HTMLElement {
    constructor(){
        super();

        console.log('created', this);

        this.innerHTML =
            `<p>
                <button>Hello there!</button>
            </p>
            <div class="message" aria-live="polite"></div>`;
    }

    connectedCallback(){
        console.log('Connected', this);
    }

    disconnectedCallback(){
        console.log('Disconnected', this);
    }
};

if ('customElements' in window) {
    customElements.define('greeting-message', GreetingMessage);
}
