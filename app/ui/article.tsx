export default function Article(title: string, content: string) {
  return (
    <div className="max-w-2xl mx-auto p-6  shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold  mb-4 text-center">{title}</h1>
      <div className="text-lg  leading-relaxed">
        <p className="mb-4">{content}</p>
      </div>
    </div>
  );
}
