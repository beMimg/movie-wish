import { RouterProvider } from "react-router-dom";
import router from "./Router";
import ContextProvider from "./context/MovieContext";

function App() {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
