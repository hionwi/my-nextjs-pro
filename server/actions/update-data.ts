"use server";
import { db } from "@/server";
import { postsTable } from "../schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { eq, SQLWrapper } from "drizzle-orm/sql";

export default async function updateData(
  id: number | SQLWrapper,
  title: string,
  content: string
) {
  await db
    .update(postsTable)
    .set({
      title: title,
      content: content,
    })
    .where(eq(postsTable.id, id));
  revalidatePath("/");
  redirect("/");
}
