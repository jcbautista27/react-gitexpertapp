import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    // console.log(newCategory);
    setCategories([newCategory, ...categories]);
  };

  const onRemoveCategory = (categoryToRemove) => {
    setCategories(
      categories.filter((category) => category !== categoryToRemove)
    );
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <div key={category} className="wrapper">
          <button
            className="buttoncss"
            onClick={() => onRemoveCategory(category)}
          >
            Eliminar
          </button>
          <GifGrid category={category} />
        </div>
      ))}
    </>
  );
};
