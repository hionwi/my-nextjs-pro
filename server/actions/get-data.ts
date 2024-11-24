"use server";
import { db } from "@/server";
import { revalidatePath } from "next/cache";

export default async function getData() {
  const posts = (await db.query.postsTable.findMany()).reverse();
  revalidatePath("/");

  return posts;
}
