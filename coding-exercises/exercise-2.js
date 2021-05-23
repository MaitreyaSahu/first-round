// ## Exercise 2:

// https://www.dell.com/support/home/en-us

// From the above URL,
// 1. Transform the icons' row into 2 rows and make it occupy only the left half
// of the page container;
// 2. Move the "TechDirect" and "MyService360" boxes to the remaining right
// half of the container;
// 3. Delete the "Dell EMC Support Technologies" section (where those boxes
// were initially).
// Here is how it should look like after manipulations:
// https://github.com/tntdevs/interview-survey/blob/master/img/ex-1.jpg
/**************************************************************/

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
