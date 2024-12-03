import getData from "@/server/actions/get-data";
import Article from "./ui/article";

export default async function Home() {
  const data = await getData();

  const sortedData = data.sort((a, b) => b.id - a.id);
  return sortedData.map((item) => (
    <div key={item.id}>
      <Article id={item.id} titler={item.title} contentr={item.content} />
    </div>
  ));
}
