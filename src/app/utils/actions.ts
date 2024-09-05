"use server";
import prisma from "./db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export const getAllTasks = async () => {
  return prisma.task.findMany({
    orderBy: { createdAt: "desc" },
  });
};

export const getSingleTask = async (id: string) => {
  return prisma.task.findUnique({
    where: { id },
  });
};

export const createTask = async (formData: FormData) => {
  const content = formData.get("content");

  if (typeof content !== "string") {
    throw new Error("Invalid content type");
  }

  await prisma.task.create({
    data: {
      content,
    },
  });
  revalidatePath("/tasks");
};

export const createTaskCustom = async (
  prevState: {
    message: string | null;
  },
  formData: FormData
) => {
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  const content = formData.get("content");

  const Task = z.object({
    content: z.string().min(5),
  });

  try {
    if (typeof content !== "string") {
      throw new Error("Invalid content type"); //essentially useless
    }

    Task.parse({ content });
    await prisma.task.create({
      data: {
        content,
      },
    });
    revalidatePath("/tasks");
    return { message: "success" };
  } catch (error) {
    console.log(error);
    return { message: "error" };
  }
};

export const deleteTask = async (formData: FormData) => {
  const id = formData.get("id");

  try {
    if (typeof id !== "string") {
      throw new Error("Invalid content type");
    }
    await prisma.task.delete({
      where: { id },
    });
    revalidatePath("/tasks");
    return { message: "success" };
  } catch (error) {
    return { message: "error" };
  }
};

export const updateTask = async (formData: FormData) => {
  const newText = formData.get("edit-text");
  const id = formData.get("id");
  const completed = formData.get("completed");

  if (typeof id !== "string" || typeof newText !== "string") {
    throw new Error("Invalid content type");
  }

  await prisma.task.update({
    where: { id },
    data: {
      content: newText,
      completed: completed === "on" ? true : false,
    },
  });
  redirect("/tasks");
};
