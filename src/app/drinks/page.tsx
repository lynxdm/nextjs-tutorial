import DrinksList from "../components/DrinksList";
import Image from "next/image";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch drinks");
  }
  const data = await res.json();
  if (data) {
    return data.drinks;
  }
};

const DrinksPage = async () => {
  const drinks = await fetchDrinks();

  return (
    <div>
      <DrinksList drinks={drinks} />
    </div>
  );
};
export default DrinksPage;
