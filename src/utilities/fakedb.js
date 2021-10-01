// use local storage as your db for now

const addToBD = (id) => {
  //set on local storage
  const exist = localStorage.getItem('shopping_Cart');
  let shopping_Cart = {};
  if (!exist) {
    shopping_Cart[id] = 1;
  }
  else {
    shopping_Cart = JSON.parse(exist);
    if (shopping_Cart[id]) {
      const newCount = shopping_Cart[id] + 1;
      shopping_Cart[id] = newCount;
    }
    else {
      shopping_Cart[id] = 1;
    }
  }
  localStorage.setItem('shopping_Cart', JSON.stringify(shopping_Cart));
}
//update DB before 

const getDb = () => localStorage.getItem('shopping_Cart');

const updateDb = cart => {
  localStorage.setItem('shopping_Cart', JSON.stringify(cart));
}

//----------------remove item from localstorage
const deleteFromDb = id => {
  const exist = getDb();
  if (!exist) {

  }
  else {
    const shopping_cart = JSON.parse(exist);
    delete shopping_cart[id];
    updateDb(shopping_cart);
  }
}

//-------get cart feom DB
const getStoredCart = () => {
  const exist = getDb();
  return exist ? JSON.parse(exist) : {};
}

//-------clear all cart

const clearCart = () => {
  localStorage.removeItem('shopping_cart');
}

export { addToBD, deleteFromDb, updateDb, getStoredCart, clearCart }

// const addToDb = id => {
//   const exists = getDb();
//   let shopping_cart = {};
//   if (!exists) {
//     shopping_cart[id] = 1;
//   }
//   else {
//     shopping_cart = JSON.parse(exists);
//     if (shopping_cart[id]) {
//       const newCount = shopping_cart[id] + 1;
//       shopping_cart[id] = newCount;
//     }
//     else {
//       shopping_cart[id] = 1;
//     }
//   }
//   updateDb(shopping_cart);
// }

// const getDb = () => localStorage.getItem('shopping_cart');
// const updateDb = cart => {
//   localStorage.setItem('shopping_cart', JSON.stringify(cart));
// }

// const removeFromDb = id => {
//   const exists = getDb();
//   if (!exists) {

//   }
//   else {
//     const shopping_cart = JSON.parse(exists);
//     delete shopping_cart[id];
//     updateDb(shopping_cart);
//   }
// }

// const getStoredCart = () => {
//   const exists = getDb();
//   return exists ? JSON.parse(exists) : {};
// }

// const clearTheCart = () => {
//   localStorage.removeItem('shopping_cart');
// }

// export { addToDb, removeFromDb as deleteFromDb, clearTheCart, getStoredCart }
