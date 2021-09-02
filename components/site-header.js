class SiteHeader extends HTMLElement {
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
            <link rel="stylesheet" type="text/css" href="/style/site.css" />
            <style>
                :host {
                    display: flex;
                    width: 100%;
                    border-bottom: 1px solid;
                }

                a {
                    color: white;
                    cursor: pointer;
                    user-select: none;
                    text-decoration: none;
                }

                
            </style>
            <a href="/">
                <h3>
                    Richard Young
                </h3>
            </a>
        `
    }
}

if (!customElements.get('site-header')) {
    customElements.define('site-header', SiteHeader);
}
