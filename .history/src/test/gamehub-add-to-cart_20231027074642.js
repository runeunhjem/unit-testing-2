// // ADD TO CART FUNCTION
// function addToCart(event) {
//   const target = event.target;
//   if (!target.classList.contains("add-to-cart")) {
//     return; // ignore clicks on non-add-to-cart elements
//   }
// }

export function addToCart(event, cart) {
  const target = event.target;
  if (!target.classList.contains("add-to-cart")) {
    return; // ignore clicks on non-add-to-cart elements
  }
  // Add the item to the cart logic here
}
