// // import React from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { removeItem, updateQuantity } from './CartSlice';
// // import './CartItem.css';

// // const CartItem = ({ onContinueShopping }) => {
// //   const cart = useSelector(state => state.cart.items); // Access cart items from the Redux store
// //   const dispatch = useDispatch();

// //   // Calculate total amount for all products in the cart
// // //   const calculateTotalAmount = () => {
// // //     return cart.reduce((total, item) => total + (item.cost * item.quantity), 0).toFixed(2);
// // //   };
// // const calculateTotalAmount = () => {
// //   return cart.reduce((total, item) => {
// //     const numericCost = parseFloat(item.cost.replace('$', '')); // Remove the $ and convert to number
// //     return total + (numericCost * item.quantity);
// //   }, 0).toFixed(2);
// // };
// //   // Calculate total cost based on quantity for an item
// //   const calculateTotalCost = (item) => {
// //     return (item.cost * item.quantity).toFixed(2);
// //   };

// //   // Handle continue shopping (calls parent component's function)
// //   const handleContinueShopping = (e) => {
// //     if (onContinueShopping) onContinueShopping();
// //   };

// //   // Increment the quantity of an item in the cart
// //   const handleIncrement = (item) => {
// //     dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
// //   };

// //   // Decrement the quantity of an item in the cart, or remove it if quantity is 0
// //   const handleDecrement = (item) => {
// //     if (item.quantity > 1) {
// //       dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
// //     } else {
// //       dispatch(removeItem({ name: item.name }));
// //     }
// //   };

// //   // Remove an item from the cart
// //   const handleRemove = (item) => {
// //     dispatch(removeItem({ name: item.name }));
// //   };

// //   return (
// //     <div className="cart-container">
// //       <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
// //       <div>
// //         {cart.map(item => (
// //           <div className="cart-item" key={item.name}>
// //             <img className="cart-item-image" src={item.image} alt={item.name} />
// //             <div className="cart-item-details">
// //               <div className="cart-item-name">{item.name}</div>
// //               <div className="cart-item-cost">${item.cost}</div>
// //               <div className="cart-item-quantity">
// //                 <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
// //                 <span className="cart-item-quantity-value">{item.quantity}</span>
// //                 <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
// //               </div>
// //               <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
// //               <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
// //       <div className="continue_shopping_btn">
// //         <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
// //         <br />
// //         <button className="get-started-button1" onClick={handleCheckoutShopping}>Checkout</button>
// //       </div>
// //     </div>
// //   );
// // };

// // // A placeholder for checkout functionality
// // const handleCheckoutShopping = (e) => {
// //   alert('Functionality to be added for future reference');
// // };

// // export default CartItem;
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeItem, updateQuantity } from './CartSlice';
// import './CartItem.css';

// const CartItem = ({ onContinueShopping }) => {
//   const cart = useSelector(state => state.cart.items); // Access cart items from the Redux store
//   const dispatch = useDispatch();

//   // Calculate total amount for all products in the cart
//   const calculateTotalAmount = () => {
//     return cart.reduce((total, item) => {
//       const numericCost = parseFloat(item.cost.replace('$', '')); // Remove the $ and convert to number
//       return total + (numericCost * item.quantity);
//     }, 0).toFixed(2);
//   };

//   // Calculate total cost based on quantity for an item
//   const calculateTotalCost = (item) => {
//     return (item.cost * item.quantity).toFixed(2);
//   };

//   // Handle continue shopping (calls parent component's function)
//   const handleContinueShopping = () => {
//     if (onContinueShopping) onContinueShopping(); // Call the function passed from ProductList
//   };

//   // Increment the quantity of an item in the cart
//   const handleIncrement = (item) => {
//     dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
//   };

//   // Decrement the quantity of an item in the cart, or remove it if quantity is 0
//   const handleDecrement = (item) => {
//     if (item.quantity > 1) {
//       dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
//     } else {
//       dispatch(removeItem({ name: item.name }));
//     }
//   };

//   // Remove an item from the cart
//   const handleRemove = (item) => {
//     dispatch(removeItem({ name: item.name }));
//   };

//   return (
//     <div className="cart-container">
//       <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
//       <div>
//         {cart.map(item => (
//           <div className="cart-item" key={item.name}>
//             <img className="cart-item-image" src={item.image} alt={item.name} />
//             <div className="cart-item-details">
//               <div className="cart-item-name">{item.name}</div>
//               <div className="cart-item-cost">${item.cost}</div>
//               <div className="cart-item-quantity">
//                 <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
//                 <span className="cart-item-quantity-value">{item.quantity}</span>
//                 <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
//               </div>
//               <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
//               <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
//       <div className="continue_shopping_btn">
//         <button className="get-started-button" onClick={handleContinueShopping}>Continue Shopping</button>
//         <br />
//         <button className="get-started-button1" onClick={handleCheckoutShopping}>Checkout</button>
//       </div>
//     </div>
//   );
// };

// // A placeholder for checkout functionality
// const handleCheckoutShopping = (e) => {
//   alert('Functionality to be added for future reference');
// };

// export default CartItem;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items); // Access cart items from the Redux store
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      const numericCost = parseFloat(item.cost.replace('$', '')); // Remove the $ and convert to number
      return total + (numericCost * item.quantity);
    }, 0).toFixed(2);
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    const numericCost = parseFloat(item.cost.replace('$', '')); // Ensure cost is a number
    return (numericCost * item.quantity).toFixed(2); // Calculate total cost
  };

  // Handle continue shopping (calls parent component's function)
  const handleContinueShopping = () => {
    if (onContinueShopping) onContinueShopping(); // Call the function passed from ProductList
  };

  // Increment the quantity of an item in the cart
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Decrement the quantity of an item in the cart, or remove it if quantity is 0
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem({ name: item.name }));
    }
  };

  // Remove an item from the cart
  const handleRemove = (item) => {
    dispatch(removeItem({ name: item.name }));
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">${item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={handleContinueShopping}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={handleCheckoutShopping}>Checkout</button>
      </div>
    </div>
  );
};

// A placeholder for checkout functionality
const handleCheckoutShopping = (e) => {
  alert('Functionality to be added for future reference');
};

export default CartItem;
