"use server";
import { db } from "@/server";
import { postsTable } from "../schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function addData(title: string, content: string) {
  await db.insert(postsTable).values({
    title: title,
    content: content,
  });
  revalidatePath("/");
  redirect("/");
}
