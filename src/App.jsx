import { Toaster } from "react-hot-toast";
import DynamicForm from "./pages/DynamicForm";

function App() {
  return (
    <>
      <DynamicForm />
      <Toaster position="top-center" autoClose={4000} reverseOrder={false} />
    </>
  );
}

export default App;
