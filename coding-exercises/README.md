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

let resourceLinksContainer = document.querySelector(
  "#divResourceLinks > .container"
);
let resourceLinksContainerRow = resourceLinksContainer.querySelector(".row");
let resourceLinks = resourceLinksContainer.querySelectorAll(".row > div");

resourceLinks.forEach((resourceLink) => {
  resourceLink.classList.remove("col-lg-3", "mb-4", "mb-lg-0");
  resourceLink.classList.add("mb-8");
});

let enterpriseProductLinksArea = document.querySelector(
  "#divEnterpriseProductLinks"
);
let enterpriseProductLinksContainer =
  enterpriseProductLinksArea.querySelector(".container");
let enterpriseProductLinks =
  enterpriseProductLinksContainer.querySelectorAll(".row > div");

enterpriseProductLinks.forEach((enterpriseProductLink) => {
  enterpriseProductLink.classList.remove("col-md-6");
  enterpriseProductLink.classList.add("mb-8");
});

const appendNodeList = (parent, nodeList) => {
  nodeList.forEach((node) => {
    parent.appendChild(node);
  });
};

let enterpriseProductLinksSection = document.createElement("div");
enterpriseProductLinksSection.classList.add("col-md-6");

let enterpriseProductLinksSectionRow = document.createElement("div");
enterpriseProductLinksSectionRow.classList.add("row");

enterpriseProductLinksSection.appendChild(enterpriseProductLinksSectionRow);

appendNodeList(enterpriseProductLinksSectionRow, enterpriseProductLinks);

let resourceLinksSection = document.createElement("div");
resourceLinksSection.classList.add("col-md-6");

let resourceLinksSectionRow = document.createElement("div");
resourceLinksSectionRow.classList.add("row");

resourceLinksSection.appendChild(resourceLinksSectionRow);

appendNodeList(resourceLinksSectionRow, resourceLinks);

resourceLinksContainerRow.insertBefore(resourceLinksSection, null);

resourceLinksContainerRow.insertBefore(enterpriseProductLinksSection, null);

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

var categoryNodeList = document.querySelectorAll(
  '[data-testid="category_module_section"]'
);

var categoryObjectList = [];

categoryObjectList = [...categoryNodeList].map((node) => ({
  categoryImageContainerDivNode: node.querySelector(
    '[data-testid="category_module"] > a > .half-image-module'
  ),
  categoryName: node.querySelector('[data-testid="category_module"] > div > h2')
    .innerText,
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

var indexOfNetworkingModule = categoryObjectList.findIndex(
  (node) => node.categoryName.toUpperCase() == "Networking".toUpperCase()
);
var indexOfCameraPhotoModule = categoryObjectList.findIndex(
  (node) =>
    node.categoryName.toUpperCase() == "Cameras, Photo & Video".toUpperCase()
);

categoryObjectList[indexOfNetworkingModule].featuredModules.forEach(
  (featuredModule, i) => {
    featuredModule.imageNode.src =
      categoryObjectList[indexOfCameraPhotoModule].featuredModule[
        i
      ].imageNode.src;
  }
);

categoryObjectList[
  indexOfNetworkingModule
].categoryImageContainerDivNode.classList.remove("gray-light");
categoryObjectList[
  indexOfNetworkingModule
].categoryImageContainerDivNode.classList.add("purple");

//  3. Create a self-invoking function that calculates the sum of all products listed
//  on the Power, Batteries & Adapters section and triggers an alert with the
//  result.

(function (moduleName) {
  var moduleIndex = categoryObjectList.findIndex(
    (node) => node.categoryName.toUpperCase() == moduleName.toUpperCase()
  );
  var totalPrice = categoryObjectList[moduleIndex].featuredModules.reduce(
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