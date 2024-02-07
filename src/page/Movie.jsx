import { useParams } from "react-router-dom";

export default function Movie() {
  let { name } = useParams();

  return (
    <div>
      <p>{name}</p>
    </div>
  );
}
