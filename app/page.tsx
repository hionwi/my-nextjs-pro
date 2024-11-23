import Article from "./ui/article";

export default function Home() {
  return (
    <ul>
      <li>
        {Article(
          "11-25",
          "先复习之前的技巧，然后继续跟着做题，做完资料分析的那一本书"
        )}
      </li>
    </ul>
  );
}
