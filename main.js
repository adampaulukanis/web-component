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
        let btn = this.querySelector('button');
        if (!btn) return;
        btn.addEventListener('click', this.clickHandler);
    }

    disconnectedCallback(){
        let btn = this.querySelector('button');
        if (!btn) return;
        btn.removeEventListener('click', this.clickHandler);
    }

    clickHandler(event) {
            let host = event.target.closest('greeting-message');

            let target = host.querySelector('.message');
            if (!target) return;

            let name = host.getAttribute('name');
            target.textContent = `Hello there, ${name ? name : 'friend'}! How is your day? ;^)`;

            setTimeout(() => {
                target.textContent = '';
            }, 5000);
    }

    /* Create a list of attributes to observe */
    static get observedAttributes() {
        return [ 'logout' ];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name !== 'logout') return;

        let btn = document.querySelector('button');
        if (btn) {
            btn.removeEventListener('click', this.clickHandler);
            btn.remove();
        }

        let target = this.querySelector('.message');
        if (taget) {
            let name = this.getAttribute('name');
            target.textContent = `Bye, ${name ? name : 'friend'}! See you next time.`;
        }
    }
};

if ('customElements' in window) {
    customElements.define('greeting-message', GreetingMessage);
}
