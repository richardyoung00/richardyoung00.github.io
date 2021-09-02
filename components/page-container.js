class PageContainer extends HTMLElement {
    constructor() {
        super()
        this.dom = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.dom.innerHTML = this.template(); 
    }

    template() {
        return /*html*/`
            <style>
                :host {
                    width: 100%;
                    max-width: 1000px;
                    flex: 1;
                    color: white;
                    z-index: 1;
                    display: flex;
                    flex-direction: column;
                    padding: 1em;
                }
            </style>
            <slot></slot>
        `
    }
}

if (!customElements.get('page-container')) {
    customElements.define('page-container', PageContainer);
}
