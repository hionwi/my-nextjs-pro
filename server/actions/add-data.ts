"use server";
import { db } from "@/server";
import { postsTable } from "../schema";

export default async function addData(title: string, content: string) {
  await db.insert(postsTable).values({
    title: title,
    content: content,
  });
}
