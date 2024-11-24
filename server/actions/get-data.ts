"use server";
import { db } from "@/server";

export default async function getData() {
  const posts = (await db.query.postsTable.findMany()).reverse();
  return posts;
}
