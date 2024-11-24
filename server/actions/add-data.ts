"use server";
import { db } from "@/server";
import { postsTable } from "../schema";
import { revalidatePath } from "next/cache";

export default async function addData(title: string, content: string) {
  await db.insert(postsTable).values({
    title: title,
    content: content,
  });
  revalidatePath("/");
}
