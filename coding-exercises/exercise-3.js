// ## Exercise 3:

// https://www.dell.com/en-us/shop/accessories

// From the above URL,
// 1. Replace all the images of the Networking products with the Cameras, Photo
// & Video ones.
// 2. Change the background color of the Networking hero image to Purple.
// 3. Create a self-invoking function that calculates the sum of all products listed
// on the Power, Batteries & Adapters section and triggers an alert with the
// result.

// **Bonus**
// - Find the Slider and make the slider's auto play feature stops (only if it has at
// least 2 slides)
/************************************************************************/


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