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
  //featuredImageNodes: node.querySelectorAll('[data-testid="featured_module_section"]  [data-testid="featured_module"]  [data-testid="featured_module_image"]'),
  //featuredImageUrls: [...node.querySelectorAll('[data-testid="featured_module_section"]  [data-testid="featured_module"]  [data-testid="featured_module_image"]')].map(img=>img.src),
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
