"use client";

const DrinksError = ({ error }: { error: Error }) => {
  console.log(error);
  return <div>{error.message}</div>;
};
export default DrinksError;
