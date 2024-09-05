import Link from "next/link";
import Image from "next/image";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (id: string) => {
  const res = await fetch(`${url}${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch a drink...");
  }
  return res.json();
};

const SingleDrinks = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const data = await getSingleDrink(params.id);
  const { strDrink, strDrinkThumb } = data.drinks[0];

  return (
    <div>
      <Link href='/drinks' className='btn btn-primary uppercase mt-8 mb-12'>
        back to drinks
      </Link>
      <Image
        src={strDrinkThumb}
        alt={strDrink + "image"}
        width={300}
        height={300}
        className='size-48 rounded-lg shadow-lg mb-4'
        priority
      />
      <h1 className='text-4xl mb-8'>{strDrink}</h1>
    </div>
  );
};
export default SingleDrinks;
