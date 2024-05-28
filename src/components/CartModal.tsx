"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;
  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,00.2)] z-20 top-12 right-0 flex flex-col gap-6 bg-white">
      {!cartItems ? (
        <div>cart is empty</div>
      ) : (
        <>
        <div className="flex flex-col gap-8">
          <div className="flex gap-4 ">
            <Image
              src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={72}
              height={96}
              className="object-cover rounded-md"
            />
            <div className=" flex flex-col justify-between w-full">
              {/* top */}
              <div className="">
                {/* title */}
                <div className="flex gap-8 items-center justify-between">
                  <h3 className="font-semibold ">product name</h3>
                  <div className="p-1 bg-slate-100 rounded-sm">$35</div>
                </div>
                {/* description */}
                <div className="text-sm text-gray-500">available</div>
              </div>
              {/* bottom */}
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Qty:2</span>
                <span className="text-blue-500">Remove</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4 ">
            <Image
              src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={72}
              height={96}
              className="object-cover rounded-md"
            />
            <div className=" flex flex-col justify-between w-full">
              {/* top */}
              <div className="">
                {/* title */}
                <div className="flex gap-8 items-center justify-between">
                  <h3 className="font-semibold ">product name</h3>
                  <div className="p-1 bg-slate-100 rounded-sm">$35</div>
                </div>
                {/* description */}
                <div className="text-sm text-gray-500">available</div>
              </div>
              {/* bottom */}
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Qty:2</span>
                <span className="text-blue-500">Remove</span>
              </div>
            </div>
          </div>
        </div>
        {/* // bottom  */}
        <div className="">
          <div className="flex justify-between items-center font-semibold">
            <span>Subtotal</span>
            <span>$50</span>
          </div>
          <p className="text-gray-500 text-sm mt-2 mb-4">Lorem ipsum dolor sit.</p>
          <div className=" flex justify-between text-sm">
            <button className="py-3 px-4 rounded-md ring-1 ring-gray-300">View Cart</button>
            <button className="py-3 px-4 rounded-md bg-black text-white">Checkout</button>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
