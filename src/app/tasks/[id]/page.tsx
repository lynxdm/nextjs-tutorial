import EditForm from "@/app/components/EditForm";
import { getSingleTask, updateTask } from "@/app/utils/actions";
import Link from "next/link";

const SingleTasksPage = async ({ params }: { params: { id: string } }) => {
  const task = await getSingleTask(params.id);

  return (
    <>
      <div className='mb-16'>
        <Link href={"/tasks"} className='btn btn-accent'>
          BACK TO TASKS
        </Link>
      </div>
      {task && <EditForm task={task} />}
    </>
  );
};
export default SingleTasksPage;
