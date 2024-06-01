const elemFooter = document.querySelector(".footer");

const createHelpSection = (help) => {
    const elemHelp = document.createElement("div");
    elemHelp.classList.add("help-footer");

    const elemTitle = document.createElement("h1");
    elemTitle.classList.add("footer-title");
    elemTitle.innerText = help.title;
    elemHelp.appendChild(elemTitle);

    const elemList = document.createElement("ul");
    elemList.classList.add("list-footer");

    help.links.forEach((link) => {
        const elemItem = document.createElement("li");
        elemItem.classList.add("elem-list-footer");

        const elemLink = document.createElement("a");
        elemLink.setAttribute("href", link.href);
        elemLink.innerText = link.text;

        elemItem.appendChild(elemLink);
        elemList.appendChild(elemItem);
    });

    elemHelp.appendChild(elemList);
    return elemHelp;
};

const createPaymentMethodsSection = (paymentMethods) => {
    const elemPayment = document.createElement("div");
    elemPayment.classList.add("method-of-pay-footer");

    const elemTitle = document.createElement("h1");
    elemTitle.classList.add("footer-title");
    elemTitle.innerText = paymentMethods.title;
    elemPayment.appendChild(elemTitle);

    const elemPicture = document.createElement("picture");
    elemPicture.classList.add("picture-footer-pay");

    paymentMethods.images.forEach((image) => {
        const elemImg = document.createElement("img");
        elemImg.setAttribute("src", image.src);
        elemImg.setAttribute("alt", image.alt);

        elemPicture.appendChild(elemImg);
    });

    elemPayment.appendChild(elemPicture);
    return elemPayment;
};

const createSocialFollowSection = (socialFollow) => {
    const elemFollow = document.createElement("div");
    elemFollow.classList.add("follow-footer");

    const elemTitle = document.createElement("h1");
    elemTitle.classList.add("footer-title");
    elemTitle.innerText = socialFollow.title;
    elemFollow.appendChild(elemTitle);

    const elemPicture = document.createElement("picture");
    elemPicture.classList.add("picture-footer-follow");

    socialFollow.images.forEach((image) => {
        const elemImg = document.createElement("img");
        elemImg.setAttribute("src", image.src);
        elemImg.setAttribute("alt", image.alt);

        elemPicture.appendChild(elemImg);
    });

    elemFollow.appendChild(elemPicture);
    return elemFollow;
};

const loadFooter = (footerData) => {
    elemFooter.innerHTML = '';

    const firstColumn = document.createElement("div");
    firstColumn.classList.add("first-column-footer");
    firstColumn.appendChild(createHelpSection(footerData.help));

    const secondColumn = document.createElement("div");
    secondColumn.classList.add("second-column-footer");
    secondColumn.appendChild(createPaymentMethodsSection(footerData.paymentMethods));
    secondColumn.appendChild(createSocialFollowSection(footerData.socialFollow));

    elemFooter.appendChild(firstColumn);
    elemFooter.appendChild(secondColumn);
};

fetch("../assets/json/footer.json")
    .then(response => response.json())
    .then(loadFooter)
    .catch(error => console.error('Error loading footer:', error));
