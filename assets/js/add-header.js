const elemHeader = document.querySelector(".header");

const createLogo = (logo) => {
    const elemPicture = document.createElement("picture");
    elemPicture.classList.add("logo");

    const elemLink = document.createElement("a");
    elemLink.classList.add("logo-img");
    elemLink.setAttribute("href", logo.href);

    const elemImg = document.createElement("img");
    elemImg.classList.add("mk-logo");
    elemImg.setAttribute("src", logo.src);
    elemImg.setAttribute("alt", logo.alt);

    elemLink.appendChild(elemImg);
    elemPicture.appendChild(elemLink);

    return elemPicture;
};

const createNavBar = (navItems) => {
    const elemNavBar = document.createElement("nav");
    elemNavBar.classList.add("nav-bar");

    const elemList = document.createElement("ul");
    elemList.classList.add("nav-list");

    navItems.forEach((item) => {
        const elemItem = document.createElement("li");
        elemItem.classList.add("nav-item");
        if (item.active) elemItem.classList.add("active");

        const elemLink = document.createElement("a");
        elemLink.classList.add("nav-link");
        elemLink.setAttribute("href", item.href);
        elemLink.innerText = item.text;

        elemItem.appendChild(elemLink);
        elemList.appendChild(elemItem);
    });

    elemNavBar.appendChild(elemList);
    return elemNavBar;
};

const createMenu = () => {
    const elemMenu = document.createElement("div");
    elemMenu.classList.add("menu");

    for (let i = 0; i < 3; i++) {
        const elemSpan = document.createElement("span");
        elemMenu.appendChild(elemSpan);
    }

    return elemMenu;
};

const createUserBox = (user) => {
    const elemUserBox = document.createElement("div");
    elemUserBox.classList.add("user-box");

    const elemUserName = document.createElement("p");
    elemUserName.classList.add("name-user");
    elemUserName.innerText = user.name;

    const elemButton = document.createElement("button");
    elemButton.classList.add("btn-login");

    const elemLink = document.createElement("a");
    elemLink.setAttribute("href", user.loginHref);

    const elemImg = document.createElement("img");
    elemImg.classList.add("user-img");
    elemImg.setAttribute("src", user.imgSrc);
    elemImg.setAttribute("alt", user.imgAlt);

    elemLink.appendChild(elemImg);
    elemButton.appendChild(elemLink);
    elemUserBox.appendChild(elemUserName);
    elemUserBox.appendChild(elemButton);

    return elemUserBox;
};

const setActiveNavItem = (navItems) => {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navItems.forEach(item => {
        const link = item.href.split('/').pop();
        const navLink = Array.from(navLinks).find(linkElement => linkElement.innerText === item.text);

        if (link === currentPage) {
            navLink.parentNode.classList.add('active');
        }
    });
};

const loadHeader = (headerData) => {
    elemHeader.innerHTML = '';

    elemHeader.appendChild(createLogo(headerData.logo));

    elemHeader.appendChild(createNavBar(headerData.navItems));

    elemHeader.appendChild(createMenu());

    elemHeader.appendChild(createUserBox(headerData.user));

    setActiveNavItem(headerData.navItems);
};


fetch("../assets/json/header.json")
    .then(response => response.json())
    .then(loadHeader)
    .catch(error => console.error('Error loading header:', error));
