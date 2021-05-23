let filterBox = document.querySelector(".leftanav__option__box");
let filterTypes = filterBox.querySelectorAll(".anavmfe__accordion__item");
let filterTypeTitles = [
  ...filterBox.querySelectorAll(
    ".anavmfe__accordion__item .anavmfe__accordion__item__name"
  ),
].map((elem) => elem.innerText.toUpperCase());

const moveFilterTo = (filterTitle, newPosition) => {
  const oldPosition = filterTypeTitles.indexOf(filterTitle.toUpperCase());
  const nodeToBeMoved = filterTypes[oldPosition];
  const referenceNode = filterTypes[+newPosition - 1];
  filterBox.insertBefore(nodeToBeMoved, referenceNode);
};

//(Shipping to second place
moveFilterTo("Shipping", 2);

//Form factor to first place
moveFilterTo("Form Factor", 1);

//Processor at third place
moveFilterTo("Processor", 3);
