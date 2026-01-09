type CardProps = {
  title: string;
  body: string;
};

export default function Card({ title, body }: CardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-600 line-clamp-3">
        {body}
      </p>
    </div>
  );
}