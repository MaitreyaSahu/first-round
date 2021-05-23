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

//enterpriseProductLinksContainer.querySelector('.container > h3').remove();

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
