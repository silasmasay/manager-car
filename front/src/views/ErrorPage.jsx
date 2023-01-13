import { useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();

  console.log(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>página não encontrada.</p>
    </div>
  );
}