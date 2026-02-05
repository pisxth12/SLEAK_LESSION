import React from "react";

export const fakeCategories = [
  {
    id: 1,
    title: "Electronics",
    description: "Latest gadgets and devices",
    imageUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Electronics",
    active: true,
  },
  {
    id: 2,
    title: "Clothes",
    description: "Trendy fashion for all",
    imageUrl: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Clothes",
    active: true,
  },
  {
    id: 3,
    title: "Books",
    description: "Fiction, non-fiction, comics & more",
    imageUrl: "https://via.placeholder.com/150/00FF00/FFFFFF?text=Books",
    active: true,
  },
  {
    id: 4,
    title: "Home & Kitchen",
    description: "Everything for your home",
    imageUrl: "https://via.placeholder.com/150/FFA500/FFFFFF?text=Home+%26+Kitchen",
    active: true,
  },
  {
    id: 5,
    title: "Toys",
    description: "Fun toys for kids of all ages",
    imageUrl: "https://via.placeholder.com/150/800080/FFFFFF?text=Toys",
    active: true,
  },
  {
    id: 6,
    title: "Sports",
    description: "Equipment & apparel for sports",
    imageUrl: "https://via.placeholder.com/150/008080/FFFFFF?text=Sports",
    active: true,
  },
];


const Categories = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {fakeCategories.map((category) => (
        <div
          key={category.id}
          className="bg-white shadow rounded-lg p-4 flex flex-col items-center"
        >
          <img
            src={category.imageUrl}
            alt={category.title}
            className="h-24 w-24 object-contain mb-2"
          />
          <h3 className="font-semibold text-lg">{category.title}</h3>
          <p className="text-sm text-gray-500 text-center">{category.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
