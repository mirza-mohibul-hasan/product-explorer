export function TableSkeleton() {
  return (
    <div className="animate-pulse space-y-2">
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="h-10 rounded bg-gray-200" />
      ))}
    </div>
  );
}
