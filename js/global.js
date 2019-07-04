// SITE-WIDE FUNCTIONS AND VARIABLES


/*
 Items fetch function
 @param ep - These are API endpoints to fetch data from.
*/
async function getItems(ep) {
  let response = await fetch(ep);
  return await response.json();
}
