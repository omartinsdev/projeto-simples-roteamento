import { useParams } from "react-router";

export const TaskPage = () => {
  const params = useParams();

  return (
    <div>
      <h2>{params.id}</h2>
      <p></p>
    </div>
  );
};
