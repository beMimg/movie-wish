import { useParams } from "react-router-dom";

export default function Genre() {
  let { id } = useParams();

  return (
    <div>
      <p>{id}</p>
    </div>
  );
}
