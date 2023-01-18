import { useRouteError } from "react-router-dom";
import "../App.css";
export default function Page404() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="App">
      <div className="errors-body">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
