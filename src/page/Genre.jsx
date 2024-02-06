import { useParams } from "react-router-dom";
import FetchData from "../components/Fetch";

export default function Genre() {
  let { id } = useParams();

  const { data, error, isLoading } = FetchData(
    `https://movies-app-demo-0guf.onrender.com/genre/${id}`,
  );

  if (data) {
    console.log(data);
  }
  return (
    <div>
      {data && data.results.map((movie) => <p>{movie.original_title}</p>)}
    </div>
  );
}
