class ProjectCard extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this._projectName = "Name";
        this._projectDescription = "Description";
        this.template = document.createElement('template');

        this.addEventListener("click", this.goToRoute);
    }

    connectedCallback() {
        this.render();
    }

    render() {
        
        this.template.innerHTML = /*html*/
        `
        <link href = "/public/stylesheets/style.css" type = "text/css" rel = "stylesheet">
        <div class = "project-card-wrapper">
            <h1 class = "project-name" >${ this._projectName }</h1>
            <p class = "project-description">${ this._projectDescription }</p>
        </div>
        `;

        this.setRoute();
        
        this.shadow.appendChild(this.template.content.cloneNode(true));
    }

    setRoute() {
        this._route = `${this._projectOwner}/${this._projectName.replace(" ", "-")}`
    }

    goToRoute() {
        window.location.href = this._route;
    }

    set projectName(projectName) {
        this._projectName = projectName;
    }

    set projectDescription(projectDescription) {
        this._projectDescription = projectDescription;
    }

    set projectOwner(projectOwner) {
        this._projectOwner = projectOwner;
    }

}

customElements.define("project-card", ProjectCard);