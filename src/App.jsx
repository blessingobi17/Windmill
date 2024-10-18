import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Homepage from "./pages/Homepage";
import Form from "./pages/Form";
import Charts from "./pages/Charts";
import Tables from "./pages/Tables";
import EditPage from "./pages/EditPage";
import { DataProvider } from "./context/DataContext";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Route>
    )
  );
  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  );
}

export default App;
