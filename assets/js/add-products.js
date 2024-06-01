const elemProjects = document.querySelector(".products-list");

const createImage = (projectImage) => {
    const elemPicture = document.createElement("picture");
    elemPicture.classList.add("product-picture");
    const elemImg = document.createElement("img");
    elemImg.classList.add("product-img");

    elemImg.setAttribute("src", projectImage);
    elemPicture.appendChild(elemImg);

    return elemPicture;
};

const createPrices = (projectPrice) => {
    const elemPrice = document.createElement("p");
    elemPrice.classList.add("product-price");
    elemPrice.innerText = `$${projectPrice}`;

    return elemPrice;
};

const createName = (projectName) => {
    const elemName = document.createElement("h2");
    elemName.classList.add("product-name");
    elemName.innerText = projectName;

    return elemName;
};

const createProject = (project) => {
    const elemProject = document.createElement("li");
    elemProject.classList.add("product-item");

    elemProject.appendChild(createImage(project.image));

    elemProject.appendChild(createName(project.name));

    elemProject.appendChild(createPrices(project.price));

    return elemProject;
};

const loadProjects = (projects) => {
    projects.forEach((project) => {
        elemProjects.appendChild(createProject(project));
    });

    var products = document.querySelectorAll(".product-item");
    var n_products = products.length;
    console.log(n_products);
};

fetch("../assets/json/produtos.json")
    .then(response => response.json())
    .then(loadProjects)
    .catch(error => console.error('Error loading projects:', error));