const nameElement = document.querySelector(".main-name");

// const _name = "Saran Baral";
const _name = "Example";
const sectionOne = document.querySelector(".name-container");
const _splitName = _name.split("");
_splitName.forEach((_nm) => {
    const _h4 = document.createElement("h2");
    _h4.classList.add("my-name");
    _h4.innerText = _nm;
    sectionOne.appendChild(_h4);
});