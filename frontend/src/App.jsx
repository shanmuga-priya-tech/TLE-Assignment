import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import Dashboard from "./components/Dashboard/Dashboard";
import PageNotFound from "./components/General/PageNotFound";
import { ThemeProvider } from "./context/ThemeContext";
import Downloads from "./components/DownloadHistory/Downloads";
import Users from "./components/UsersList/Users";

function App() {
  return (
    <ThemeProvider>
      <div>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/users" element={<Users />} />
            </Route>

            {/* Catch-All Route */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
