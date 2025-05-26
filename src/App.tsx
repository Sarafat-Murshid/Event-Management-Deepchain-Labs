import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LandingPage } from "./screens/LandingPage";
import { SignInPage } from "./screens/SignInPage/SignInPage";
import { SignUpPage } from "./screens/SignUpPage/SignUpPage";
import { DashboardPage } from "./screens/DashboardPage/DashboardPage";
import { EventDetailsPage } from "./screens/EventDetailsPage/EventDetailsPage";
import { AuthProvider } from "./contexts/AuthContext";
import { AdminDashboardPage } from "./screens/AdminDashboardPage/AdminDashboardPage";
import { EventProvider } from "./contexts/EventContext";

function RequireAdmin({ children }: { children: JSX.Element }) {
  if (localStorage.getItem("isAdmin") !== "true") {
    return <Navigate to="/signin" replace />;
  }
  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <EventProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/events/:id" element={<EventDetailsPage />} />
            <Route
              path="/admin-dashboard"
              element={
                <RequireAdmin>
                  <AdminDashboardPage />
                </RequireAdmin>
              }
            />
          </Routes>
        </Router>
      </EventProvider>
    </AuthProvider>
  );
}
