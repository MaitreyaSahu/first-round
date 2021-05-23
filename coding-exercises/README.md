

| [General Exercises](https://github.com/MaitreyaSahu/first-round/tree/master/general-exercises#general-exercises) | [Coding Exercises](https://github.com/MaitreyaSahu/first-round/tree/master/coding-exercises#coding-exercises) |
| ----------- | ----------- |
------
# Coding Exercises:

## Exercise 1:
Please write the code to change the order of the ANAV filter category (Shipping to second place and Form factor to first place and Processor at third place ) from the below URL

https://www.dell.com/en-us/shop/desktop-computers/sr/desktops/xps-desktops?~ck=bt

```javascript
//Solution

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

```


## Exercise 2:

https://www.dell.com/support/home/en-us

From the above URL,
1. Transform the icons' row into 2 rows and make it occupy only the left half
of the page container;
2. Move the "TechDirect" and "MyService360" boxes to the remaining right
half of the container;
3. Delete the "Dell EMC Support Technologies" section (where those boxes
were initially).
Here is how it should look like after manipulations:
https://github.com/tntdevs/interview-survey/blob/master/img/ex-1.jpg

```javascript
//Solution

// 1. Transform the icons' row into 2 rows and make it occupy only the left half
// of the page container;
let resourceLinksContainer = document.querySelector(
  "#divResourceLinks > .container"
);
let resourceLinksContainerRow = resourceLinksContainer.querySelector(".row");
let resourceLinks = resourceLinksContainer.querySelectorAll(".row > div");

//remove bootstrap class col-lg-3 from each link to make 2 column layout
resourceLinks.forEach((resourceLink) => {
  resourceLink.classList.remove("col-lg-3", "mb-4", "mb-lg-0");
  resourceLink.classList.add("mb-8");
});
/**************************************************************/

// 2. Move the "TechDirect" and "MyService360" boxes to the remaining right
// half of the container;
let enterpriseProductLinksArea = document.querySelector(
  "#divEnterpriseProductLinks"
);

let enterpriseProductLinks =
enterpriseProductLinksArea.querySelectorAll(".container > .row > div");

//remove bootstrap calss col-md-6 from each link to make in single column layout
enterpriseProductLinks.forEach((enterpriseProductLink) => {
  enterpriseProductLink.classList.remove("col-md-6");
  enterpriseProductLink.classList.add("mb-8");
});

//Helper function to append a list of nodes to the parent node
const appendNodeList = (parent, nodeList) => {
  nodeList.forEach((node) => {
    parent.appendChild(node);
  });
};

//helper function to create a bootstarp column and wrap node list
const createBootstrapColumnAndWrapNodeLists = (nodeList) => {
  const bootstrapRow = document.createElement("div");
  bootstrapRow.classList.add("row");
  appendNodeList(bootstrapRow, nodeList);

  const bootstrapColumn = document.createElement("div");
  bootstrapColumn.classList.add("col-md-6");  
  bootstrapColumn.appendChild(bootstrapRow);

  return bootstrapColumn;
};

const resourceLinksSection = createBootstrapColumnAndWrapNodeLists(resourceLinks);
const enterpriseProductLinksSection = createBootstrapColumnAndWrapNodeLists(enterpriseProductLinks);0

resourceLinksContainerRow.insertBefore(resourceLinksSection, null);
resourceLinksContainerRow.insertBefore(enterpriseProductLinksSection, null);

/**************************************************************/

// 3. Delete the "Dell EMC Support Technologies" section (where those boxes
// were initially).
enterpriseProductLinksArea.remove();

```


## Exercise 3:
https://www.dell.com/en-us/shop/accessories

From the above URL,
1. Replace all the images of the Networking products with the Cameras, Photo
& Video ones.
2. Change the background color of the Networking hero image to Purple.
3. Create a self-invoking function that calculates the sum of all products listed
on the Power, Batteries & Adapters section and triggers an alert with the
result.

**Bonus**
- Find the Slider and make the slider's auto play feature stops (only if it has at
least 2 slides)

```javascript
//Solution

// 1. Replace all the images of the Networking products with the Cameras, Photo
// & Video ones.

// Get the category container
const categoryNodeList = document.querySelectorAll(
  '[data-testid="category_module_section"]'
);

//form list of category object  by looping over all the category
const categoryObjectList = [...categoryNodeList].map((node) => ({
  categoryImageContainerNode: node.querySelector(
    '[data-testid="category_module"] > a > .half-image-module'
  ),
  categoryName: node.querySelector('[data-testid="category_module"] > div > h2')
    .innerText,
  categoryImageNode: node.querySelector(
    '[data-testid="category_module"] [data-testid="category_module_img"]'
  ),
  categoryImageUrl: node.querySelector(
    '[data-testid="category_module"] [data-testid="category_module_img"]'
  ).src,
  featuredModules: [
    ...node.querySelectorAll(
      '[data-testid="featured_module_section"]  [data-testid="featured_module"]'
    ),
  ].map((featuredModuleNode) => ({
    imageNode: featuredModuleNode.querySelector(
      '[data-testid="featured_module_image"]'
    ),
    imageUrl: featuredModuleNode.querySelector(
      '[data-testid="featured_module_image"]'
    ).src,
    itemPrice: featuredModuleNode
      .querySelector('[data-testid="featured_module_price"]')
      .innerText.split("$")[1],
  })),
}));


//Helper function to replace phtos from one category from another
const replaceModulePhotos = (categoryDestination, categorySource) => {
  const indexOfDestinationModule = categoryObjectList.findIndex(
    (node) => node.categoryName.toUpperCase() == categoryDestination.toUpperCase()
  );
  const indexOfSourceModule = categoryObjectList.findIndex(
    (node) =>
    node.categoryName.toUpperCase() == categorySource.toUpperCase()
  );

  //replace hero photo
  categoryObjectList[indexOfDestinationModule].categoryImageNode.src = categoryObjectList[indexOfSourceModule].categoryImageNode.src;

  //replace all the featured photo from source to destination
  categoryObjectList[indexOfDestinationModule].featuredModules.forEach(
    (featuredModule, i) => {
      featuredModule.imageNode.src =
        categoryObjectList[indexOfSourceModule].featuredModules[
          i
        ].imageNode.src;
    }
  );
}

//Replace photos of "Networking" from "Cameras, Photo & Video"
replaceModulePhotos("Networking", "Cameras, Photo & Video");

/************************************************************************/


// 2. Change the background color of the Networking hero image to Purple.

//Get the index of network module
const indexOfNetworkingModule = categoryObjectList.findIndex(
  (node) => node.categoryName.toUpperCase() == "Networking".toUpperCase()
);

//remove existing background color
categoryObjectList[
  indexOfNetworkingModule
].categoryImageContainerNode.classList.remove("gray-light");

//add purple color to the background
categoryObjectList[
  indexOfNetworkingModule
].categoryImageContainerNode.classList.add("purple");

/************************************************************************/


//  3. Create a self-invoking function that calculates the sum of all products listed
//  on the Power, Batteries & Adapters section and triggers an alert with the
//  result.
(function (moduleName) {
  const moduleIndex = categoryObjectList.findIndex(
    (node) => node.categoryName.toUpperCase() == moduleName.toUpperCase()
  );
  const totalPrice = categoryObjectList[moduleIndex].featuredModules.reduce(
    (acc, featuredModule) => acc + +featuredModule.itemPrice,
    0
  );
  console.log(
    `sum of all products listed on the Power, Batteries & Adapters section is "$${totalPrice}"`
  );
  alert(
    `sum of all products listed on the Power, Batteries & Adapters section is "$${totalPrice}"`
  );
})("Power, Batteries & Adapters");

```