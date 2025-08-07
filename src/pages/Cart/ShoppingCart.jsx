import React from "react";
import { useCart } from "./CartContext";

const API_URL = import.meta.env.VITE_API_URL;
const ShoppingCart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  // Hàm xử lý thay đổi số lượng
  const handleQuantityChange = (id, type) => {
    updateQuantity(id, type);
  };

  // Tính subtotal, tax, total
  const subtotal = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price_new) * item.quantity,
    0
  );
  const tax = subtotal * 0.06; // 6% thuế ví dụ
  const total = subtotal + tax;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8 px-4 pt-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Your Shopping Cart
          </h1>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <>
                <div className="hidden md:grid grid-cols-12 gap-4 mb-4 border-b pb-2 text-gray-600 font-medium">
                  <div className="col-span-5">Product</div>
                  <div className="col-span-2">Price</div>
                  <div className="col-span-2">Quantity</div>
                  <div className="col-span-2">Total</div>
                  <div className="col-span-1"></div>
                </div>

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-12 gap-4 items-center py-4 border-b"
                  >
                    <div className="col-span-5 flex items-center">
                      <img
                        src={`${API_URL}${item.image}`}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded mr-4"
                        loading="lazy"
                      />
                      <div>
                        <h3 className="font-medium text-gray-800">{item.name}</h3>
                        <p className="text-gray-500 text-sm">
                          Product ID: {item.id}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <span className="font-medium text-gray-800">
                        ₫{parseFloat(item.price_new).toLocaleString()}
                      </span>
                    </div>
                    <div className="col-span-2">
                      <div className="flex border rounded w-[9rem] h-10 overflow-hidden">
                        <button
                          className="w-1/3 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                          onClick={() => handleQuantityChange(item.id, "dec")}
                        >
                          <i className="fas fa-minus text-base leading-none"></i>
                        </button>

                        <span className="w-1/3 border-l border-r flex items-center justify-center text-gray-800 font-medium">
                          {item.quantity}
                        </span>

                        <button
                          className="w-1/3 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                          onClick={() => handleQuantityChange(item.id, "inc")}
                        >
                          <i className="fas fa-plus text-base leading-none"></i>
                        </button>
                      </div>

                    </div>
                    <div className="col-span-2">
                      <span className="font-medium text-gray-800">
                        ₫{(parseFloat(item.price_new) * item.quantity).toLocaleString()}
                      </span>
                    </div>
                    <div className="col-span-1 text-right">
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                ))}

                {/* Summary Section */}
                <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div className="mb-4 md:mb-0">
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      className="px-4 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700">
                      Apply
                    </button>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg w-full md:w-1/3">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Subtotal:</span>
                      <span className="font-medium">
                        ₫{subtotal.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Shipping:</span>
                      <span className="font-medium">Free</span>
                    </div>
                    <div className="flex justify-between mb-4 border-b pb-4">
                      <span className="text-gray-600">Tax:</span>
                      <span className="font-medium">₫{tax.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total:</span>
                      <span>₫{total.toLocaleString()}</span>
                    </div>
                    <button className="w-full bg-green-600 text-white py-3 rounded-lg mt-4 hover:bg-green-700 transition duration-200">
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
