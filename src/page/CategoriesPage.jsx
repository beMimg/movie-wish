import FetchData from "../components/Fetch";

export default function CategoriesPage() {
  const { data, error, isLoading } = FetchData("http://localhost:8000/list");

  console.log(data);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error...</p>;

  return (
    <div className="grid grid-cols-2">
      {data &&
        data.genres.map((genre) => (
          <div
            key={genre.id}
            className=" m-4 flex h-44 items-center justify-center rounded bg-red-700"
          >
            <p>{genre.name}</p>
          </div>
        ))}
    </div>
  );
}
