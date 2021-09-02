class BlogPost extends HTMLElement {
    constructor() {
        super()
        this.dom = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
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
                    border: 1px solid rgb(64,64,64);
                    width: 100%;
                    padding: 2rem;
                    border-radius: 3px;
                }

                .title {
                    font-size: 1.3em;
                    margin-bottom: 0.5em;
                }
            </style>
            <div>
                <div class="title">${this.post.title}</div>
                ${this.markdown}

            </div>
        `
    }

    async fetchMarkdown() {
        this.markdown = await (await fetch(this.post.markdownPath)).text()
    }

    async setData(post) {
        this.post = post;
        await this.fetchMarkdown()
        this.render();
    }
}

if (!customElements.get('blog-post')) {
    customElements.define('blog-post', BlogPost);
}
