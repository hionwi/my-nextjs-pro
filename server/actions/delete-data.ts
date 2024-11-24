"use server";
import { db } from "@/server";
import { postsTable } from "../schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { eq, SQLWrapper } from "drizzle-orm/sql";

export default async function deleteData(id: number | SQLWrapper) {
  await db.delete(postsTable).where(eq(postsTable.id, id));
  revalidatePath("/");
  redirect("/");
}
