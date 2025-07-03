function Timeline({ items }) {
  return (
    <ol className="relative border-l-2 border-blue-600 pl-4">
      {items.map((item) => (
        <li key={item.id} className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 border border-white" />
          {item.degree ? (
            <h3 className="text-lg font-semibold">
              {item.degree} @ {item.school}
            </h3>
          ) : (
            <h3 className="text-lg font-semibold">
              {item.title} @ {item.company}
            </h3>
          )}
          <span className="block text-sm text-gray-500 mb-2">{item.period}</span>
          {item.bullets && (
            <ul className="list-disc pl-5 space-y-1">
              {item.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}

export default Timeline;