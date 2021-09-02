import "/components/blog-post.js"

class PostList extends HTMLElement {
    constructor() {
        super()
        this.dom = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.dom.innerHTML = this.template(); 
        this.postContainer = this.dom.querySelector(".post-container")
    }

    template() {
        return /*html*/`
            <link rel="stylesheet" type="text/css" href="/style/site.css" />
            <style>
                :host {
                    display: flex;
                }

                .post-container {
                    width: 100%;
                }
            </style>
            <div class="post-container">
                
            </div>
        `
    }

    setData(posts) {
        this.postContainer.innerHTML = "";
        for(let p of posts) {
            const post = document.createElement("blog-post");
            post.preview = true;
            post.setData(p)
            this.postContainer.appendChild(post)
        }

    }
}

if (!customElements.get('post-list')) {
    customElements.define('post-list', PostList);
}
