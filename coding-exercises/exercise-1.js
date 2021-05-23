// ## Exercise 1:

// Please write the code to change the order of the ANAV filter category
//(Shipping to second place and Form factor to first place and Processor at third place )
//from the below URL

// https://www.dell.com/en-us/shop/desktop-computers/sr/desktops/xps-desktops?~ck=bt

//Get the container Node
const filterBoxNode = document.querySelector(".leftanav__option__box");

//get the list of filters objects cotaining the element node and the filter name
const filterTypes = [
  ...filterBoxNode.querySelectorAll(".anavmfe__accordion__item"),
].map((node) => ({
  node,
  name: node.querySelector(".anavmfe__accordion__item__name").innerText,
}));

//helper function to move the filters to new position
const moveFilterTo = (filterTitle, newPosition) => {
  const filterTypeToBeMoved = filterTypes.find(filterType => filterType.name.toUpperCase() == filterTitle.toUpperCase());
  const referenceFilterType = filterTypes[newPosition - 1].node;
  filterBoxNode.insertBefore(filterTypeToBeMoved.node, referenceFilterType);
};

//Shipping to second place
moveFilterTo("Shipping", 2);

//Form factor to first place
moveFilterTo("Form Factor", 1);

//Processor at third place
moveFilterTo("Processor", 3);
