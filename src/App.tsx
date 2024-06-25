import { RouterProvider } from "react-router-dom";
import router from "./router/router.tsx";
import { styled } from "@mui/material";

function App() {
  return (
    <Main>
      <RouterProvider router={router} />
    </Main>
  );
}

export default App;

const Main = styled('main')(()=>({
  width: "100vw",
  height: "100vh",
}))
