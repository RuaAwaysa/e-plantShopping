// // import { createSlice } from '@reduxjs/toolkit';

// // export const CartSlice = createSlice({
// //   name: 'cart',
// //   initialState: {
// //     items: [], // Initialize items as an empty array
// //   },
// //   reducers: {
// //     addItem: (state, action) => {
    
// //     },
// //     removeItem: (state, action) => {
// //     },
// //     updateQuantity: (state, action) => {

    
// //     },
// //   },
// // });

// // export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// // export default CartSlice.reducer;
// import { createSlice } from '@reduxjs/toolkit';

// export const CartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [], // Initialize items as an empty array
//   },
//   reducers: {
//     // Adds a new item to the cart or increases its quantity if it already exists
//     addItem: (state, action) => {
//       const { name, image, cost } = action.payload;
//       const existingItem = state.items.find(item => item.name === name);
//       if (existingItem) {
//         existingItem.quantity++; // Increment the quantity if item exists
//       } else {
//         state.items.push({ name, image, cost, quantity: 1 }); // Add new item
//       }
//     },
    
//     // Removes an item from the cart
//     removeItem: (state, action) => {
//       const { name } = action.payload;
//       state.items = state.items.filter(item => item.name !== name); // Filter out the item
//     },
    
//     // Updates the quantity of a specific item in the cart
//     updateQuantity: (state, action) => {
//       const { name, quantity } = action.payload;
//       const itemToUpdate = state.items.find(item => item.name === name);
//       if (itemToUpdate) {
//         itemToUpdate.quantity = quantity; // Update the quantity
//       }
//     },
//   },
// });

// // Export action creators to use in your components
// export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// // Export the reducer as the default to be used in store.js
// export default CartSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const { name } = action.payload;
      state.items = state.items.filter(item => item.name !== name);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
