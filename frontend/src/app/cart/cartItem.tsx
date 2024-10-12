import React from "react";

type CartItemProps = {
  item: {
    name: string;
    price: string;
    img: string;
    oldPrice?: string;
  };
};

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <div className="flex items-center space-x-4 py-4">
      <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow">
        <h3 className="text-sm font-medium">{item.name}</h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-bold text-black">{item.price}</span>
          {item.oldPrice && (
            <span className="text-xs line-through text-gray-500">{item.oldPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem; 
