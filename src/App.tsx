import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout.tsx";
import HomePage from "./Pages/HomePage.tsx";
import ContactsPage from "./Pages/ContactsPage.tsx";
import MessagePage from "./Pages/MessagePage.tsx";
import SettingsPage from "./Pages/SettingsPage.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/message" element={<MessagePage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Route>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
