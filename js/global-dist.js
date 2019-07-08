"use strict";

// SITE-WIDE FUNCTIONS AND VARIABLES


/*
 Items fetch function
 @param ep - These are API endpoints to fetch data from.
*/
async function fetchItems(ep) {
  var response = await fetch(ep);
  return await response.json();
}
/////////////////////////////////
//# sourceMappingURL=global-dist.js.map