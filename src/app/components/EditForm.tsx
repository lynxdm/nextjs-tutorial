"use client";
import { updateTask } from "../utils/actions";

const EditForm = ({
  task,
}: {
  task: { id: string; content: string; completed: boolean };
}) => {
  const { id, completed, content } = task;
  return (
    <form
      action={updateTask}
      className='max-w-sm p-12 border border-base-300 rounded-lg'
    >
      <input
        type='text'
        name='edit-text'
        defaultValue={content}
        className='input input-bordered w-full'
        required
      />
      <input type='hidden' name='id' value={id} />

      <div className='form-control my-4'>
        <label htmlFor='completed' className='label cursor-pointer'>
          <span className='label-text'>completed</span>
          <input
            type='checkbox'
            defaultChecked={completed}
            id='completed'
            name='completed'
            className='checkbox checkbox-primary checkbox-sm'
          />
        </label>
      </div>
      <button type='submit' className='btn btn-primary btn-sm btn-block'>
        Edit
      </button>
    </form>
  );
};
export default EditForm;
