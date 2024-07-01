import { RouterProvider } from "react-router-dom";
import router from "./router/router.tsx";
import { styled } from "@mui/material";
import { createContext, useState } from "react";

export const TutorContext = createContext<{
  isTutor: boolean;
  setIsTutor: React.Dispatch<React.SetStateAction<boolean>>;
}>({ isTutor: false, setIsTutor: () => {} });


function App() {
  const [isTutor, setIsTutor] = useState(false);
  return (
    <Main>
          <TutorContext.Provider value={{ isTutor:isTutor, setIsTutor }}>
      <RouterProvider router={router} /></TutorContext.Provider>
    </Main>
  );
}

export default App;

const Main = styled('main')(()=>({
  width: "100vw",
  height: "100vh",
}))
