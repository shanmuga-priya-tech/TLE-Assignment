import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";

import PrivateRoute from "./components/helper/PrivateRoute";
import AppLayout from "./components/AppLayout/AppLayout";
import Dashboard from "./components/Dashboard/Dashboard";
import PageNotFound from "./components/General/PageNotFound";
import Downloads from "./components/DownloadHistory/Downloads";
import UsersList from "./components/User/UsersList";
import StudentProfile from "./components/Student/StudentProfile/StudentProfile";
import Login from "./components/Auth/Login";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter basename="/">
          <Routes>
            {/* Public Route */}
            <Route path="/login" element={<Login />} />

            {/* Private Routes */}
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <AppLayout />
                </PrivateRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="downloads" element={<Downloads />} />
              <Route path="users" element={<UsersList />} />
              <Route path="studProfile/:studId" element={<StudentProfile />} />
            </Route>

            {/* Catch-All Route */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              className:
                "font-2xl max-w-[500px] py-[16px] px-[24px] bg-blue-700 text-white",
            },
          }}
        />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
