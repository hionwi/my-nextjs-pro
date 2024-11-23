export default function Article(title: string, content: string) {
  return (
    <div className="max-w-2xl mx-auto p-6  shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-gray-200 mb-4 text-center">
        {title}
      </h1>
      <div className="text-lg text-gray-200 leading-relaxed">
        {content.split("\n").map((paragraph, index) => (
          <p key={index} className="pl-8 mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
