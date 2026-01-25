import { useQuery } from "@tanstack/react-query";

export function ProductsPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["health-check"],
    queryFn: async () => {
      return new Promise<string>((resolve) =>
        setTimeout(() => resolve("Ract Query is working"), 500),
      );
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  return <h1 className="text-xl font-semibold text-green-600">{data}</h1>;
}
