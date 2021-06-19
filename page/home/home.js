const menuLinks = ["home", "about", "plants", "pots", "care guide", "contact", "HUN"];
const plantsPics = ["", "", ""];
const careTipsArticles = ["", "", ""];
const fontAwesomeIcons = ["fa-facebook", "fa-instagram", "fa-discord"];
const contact = ["petplants@gmail.com", "@petplants", "PetPlants"];


function onLoad() {

    const root = document.getElementById("root");

    // creating HEADER with NAVBAR
    const header = document.createElement("header");
    root.appendChild(header);

    const nav = document.createElement("nav");
    header.appendChild(nav);

    const navUL = document.createElement("ul");
    nav.appendChild(navUL);

    const logoLI = document.createElement("li");
    logoLI.setAttribute("id", "logo");
    navUL.appendChild(logoLI);

    const logoA = document.createElement("a");
    logoA.setAttribute("href", "../home/home.html");
    logoLI.appendChild(logoA);

    const logoIMG = document.createElement("img");
    logoIMG.setAttribute("src", "../../petplant_logo.svg");
    logoA.appendChild(logoIMG);

    for (m of menuLinks) {
        const menuLI = document.createElement("li");
        navUL.appendChild(menuLI);

        const menuA = document.createElement("a");
        menuA.innerHTML = `
            <a href="../${m}/${m}.html">${m}</a>
        `;
        menuLI.appendChild(menuA);
    }


    // SLIDE section with bg image
    const slideSection = document.createElement("section");
    slideSection.setAttribute("id", "slide");
    root.appendChild(slideSection);

    const bgIMG = document.createElement("img");
    bgIMG.setAttribute("src", "../../img/zz_bg.jpg");
    slideSection.appendChild(bgIMG);


    

    // Available Plants section
    const plantsSection = document.createElement("section");
    plantsSection.setAttribute("id", "available_plants");
    root.appendChild(plantsSection);

    const plantsH3 = document.createElement("h3");
    plantsH3.innerHTML = "Available Plants";

    const plantsUL = document.createElement("ul");
    plantsSection.appendChild(plantsUL);

    for (p of plantsPics) {
        const plantsLI = document.createElement("li");
        plantsUL.appendChild(plantsLI);

        const plantIMG = document.createElement("img");
        plantIMG.setAttribute("src", `../../img/plant.jpg`);
        plantsLI.appendChild(plantIMG);
        
        // still need to add more plant names and latin names and do a for cicle to fill hrefs and innerHTML
        const plantNameA = document.createElement("a");
        plantNameA.innerHTML = "Növény neve";
        plantsLI.appendChild(plantNameA);

        const plantLatinNameA = document.createElement("a");
        plantLatinNameA.innerHTML = "latin neve";
        plantsLI.appendChild(plantLatinNameA);

        const plantPriceP = document.createElement("span");
        plantPriceP.innerHTML = "price";
        plantsLI.appendChild(plantPriceP);
    }

    // href still not defined!
    const plantsButtonA = document.createElement("a");
    plantsButtonA.setAttribute("id", "showMeMoreBtn");
    plantsSection.appendChild(plantsButtonA);

    const plantsButton = document.createElement("button");
    plantsButton.setAttribute("type", "button");
    plantsButton.innerHTML = "Show Me More...";
    plantsButtonA.appendChild(plantsButton);




    // plant care tips section
    const careTipsSelection = document.createElement("section");
    careTipsSelection.setAttribute("id", "plant_care_tips");
    root.appendChild(careTipsSelection);

    // href not yet defined! 
    const careTipsHeadlineA = document.createElement("a");
    careTipsHeadlineA.setAttribute("id", "moreTips");
    careTipsSelection.appendChild(careTipsHeadlineA);

    const careTipsHeadlineDIV = document.createElement("div");
    careTipsHeadlineA.appendChild(careTipsHeadlineDIV);

    const careTipsHeadlineH3 = document.createElement("h3");
    careTipsHeadlineH3.innerHTML = "Check Out My Plant Care Tips";
    careTipsHeadlineDIV.appendChild(careTipsHeadlineH3);

    const careTipsDescriptionP = document.createElement("p");
    careTipsDescriptionP.innerHTML = "Are you a new PlantMom or PlantDad?<br>I'll help you figure out how NOT to kill your first plant!"
    careTipsSelection.appendChild(careTipsDescriptionP);

    const careTipsUL = document.createElement("ul");
    careTipsSelection.appendChild(careTipsUL);

    for (a of careTipsArticles) {
        const careTipsLI = document.createElement("li");
        careTipsUL.appendChild(careTipsLI);

        // href not yet defined!
        const careTipsIMGA = document.createElement("a");
        careTipsIMGA.setAttribute("id", "IMGA");
        careTipsIMGA.setAttribute("href", "#");
        careTipsLI.appendChild(careTipsIMGA);

        // still need to add article titles and img
        const careTipsIMG = document.createElement("img");
        careTipsIMG.setAttribute("src", "../../img/plantcare.jpg");
        careTipsIMGA.appendChild(careTipsIMG);

        // href not yet defined
        const careTipsHeadlineA = document.createElement("a");
        careTipsHeadlineA.setAttribute("id", "HeadlineA");
        careTipsHeadlineA.setAttribute("href", "#");
        careTipsHeadlineA.innerHTML = "Article Headline";
        careTipsLI.appendChild(careTipsHeadlineA);
    }

    // decoration section
    const decorationSection = document.createElement("section");
    decorationSection.setAttribute("id", "decorations");
    root.appendChild(decorationSection);

    for (i = 0; i <= 8; i++) {
        const decor = document.createElement("img");
        decor.setAttribute("src", " ../../img/leaves.svg");
        decorationSection.appendChild(decor);
    }




    // contact section
    const contactSection = document.createElement("section");
    contactSection.setAttribute("id", "contact");
    root.appendChild(contactSection);

    const contactH3 = document.createElement("h3");
    contactH3.innerHTML = "Don't miss out on new plants!";
    contactSection.appendChild(contactH3);

    const contactBox = document.createElement("div");
    contactBox.setAttribute("id", "box");
    contactSection.appendChild(contactBox);


    const emailBox = document.createElement("div");
    emailBox.setAttribute("id", "email");
    contactBox.appendChild(emailBox);

    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "text");
    emailInput.placeholder = "email address";
    emailBox.appendChild(emailInput);

    emailButtonA = document.createElement("a");
    emailButtonA.setAttribute("href", "#");
    emailBox.appendChild(emailButtonA);

    const emailButton = document.createElement("button");
    emailButton.setAttribute("type", "submit");
    emailButton.innerHTML = "Sign Me Up!";
    emailButtonA.appendChild(emailButton);


    const questionBox = document.createElement("div");
    questionBox.setAttribute("id", "question");
    contactBox.appendChild(questionBox);

    const questionP = document.createElement("span");
    questionP.innerHTML = "Do you have questions?";
    questionBox.appendChild(questionP);

    const questionButtonA = document.createElement("a");
    questionButtonA.setAttribute("href", "#");
    questionButtonA.setAttribute("id", "askMeBtn");
    questionBox.appendChild(questionButtonA);

    const questionButton = document.createElement("button");
    questionButton.setAttribute("type", "button");
    questionButton.innerHTML = "Contact Me!";
    questionButtonA.appendChild(questionButton);

    const socialDIV = document.createElement("div");
    socialDIV.setAttribute("id", "socials");
    questionBox.appendChild(socialDIV);

    const followP = document.createElement("span");
    followP.innerHTML = "Follow Me:";
    socialDIV.appendChild(followP);

    for (i of fontAwesomeIcons) {
        const followA = document.createElement("a");
        followA.setAttribute("href", "#");
        socialDIV.appendChild(followA);

        const icon = document.createElement("i");
        icon.classList.add("fab");
        icon.classList.add(`${i}`);
        followA.appendChild(icon);
    }



    // footer section
    const footer = document.createElement("footer");
    root.appendChild(footer);

    const copyRight = document.createElement("span");
    copyRight.innerHTML = "PetPlants | 2021";
    footer.appendChild(copyRight);

    const footerIMG = document.createElement("img");
    footerIMG.setAttribute("src", "../../petplant_logo.svg");
    footer.appendChild(footerIMG);

    const footerContact = document.createElement("div");
    footer.appendChild(footerContact);

    for (c of contact) {
        const footerContactE = document.createElement("span");
        footerContactE.innerHTML = `${c}`;
        footerContact.appendChild(footerContactE);
    }
}
window.addEventListener("load", onLoad)