export default function StarIcon({
  value,
  showValue = false,
}: {
  value: number;
  showValue?: boolean;
}) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (value >= i) {
      // Full star
      stars.push(
        <svg
          key={i}
          className="w-4 h-4 text-yellow-400 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>,
      );
    } else if (value >= i - 0.5) {
      // Half star (approximate with full star logic but visual difference needs SVG defs or simple separate icon, keeping simple for now)
      // Or just empty for simplicity if no half-star icon ready, using a generic star with partial fill logic is complex without SVG defs.
      // Let's us basic logic: if value is 4.5, 5th star is half.
      stars.push(
        <svg
          key={i}
          className="w-4 h-4 text-yellow-400 fill-current opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>,
      );
    } else {
      // Empty star
      stars.push(
        <svg
          key={i}
          className="w-4 h-4 text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>,
      );
    }
  }

  return (
    <div className="flex items-center gap-0.5">
      {stars}{" "}
      {showValue && (
        <span className="text-gray-600 ml-1">{value.toFixed(1)}</span>
      )}
    </div>
  );
}
