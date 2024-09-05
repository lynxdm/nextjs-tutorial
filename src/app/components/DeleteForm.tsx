"use client";
import { useEffect } from "react";
import { deleteTask } from "../utils/actions";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button className='btn btn-xs btn-error' disabled={pending}>
      {pending ? "pending" : "delete"}
    </button>
  );
};

const initialState: {
  message: string | null;
} = {
  message: null,
};

const DeleteForm = ({ id }: { id: string }) => {
  // const [state, formAction] = useFormState(deleteTask, initialState);

  // useEffect(() => {
  //   console.log(state);
  //   if (state.message === "success") {
  //     toast.success("Deleted succesfully");
  //     return;
  //   }
  //   if (state.message === "error") {
  //     toast.error("Error Deleting");
  //     return;
  //   }
  // }, [state]);

  return (
    <form action={deleteTask}>
      <input type='hidden' name='id' value={id} />
      <SubmitBtn />
    </form>
  );
};
export default DeleteForm;
