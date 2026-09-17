import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppShell } from "@/components/layout/app-shell";
import { StatePanel } from "@/components/shared/state-panel";
import { ProtectedRoute } from "@/features/auth/protected-route";
import { RoleRoute } from "@/features/auth/role-route";
const LoginPage = lazy(() => import("@/pages/login-page").then((m) => ({ default: m.LoginPage })));
const Dashboard = lazy(() => import("@/pages/ononebox-dashboard").then((m) => ({ default: m.OnOneBoxDashboard })));
const Management = lazy(() => import("@/pages/management-page").then((m) => ({ default: m.ManagementPage })));
const Settings = lazy(() => import("@/pages/system-settings-page").then((m) => ({ default: m.SystemSettingsPage })));
const Profile = lazy(() => import("@/pages/profile-page").then((m) => ({ default: m.ProfilePage })));
const NotFound = lazy(() => import("@/pages/not-found-page").then((m) => ({ default: m.NotFoundPage })));
const Loading = () => <div className="px-4 py-6"><StatePanel kind="loading" title="جارٍ التحميل" description="يتم تجهيز الصفحة..." /></div>;
export const AppRouter = () => <Suspense fallback={<Loading />}><Routes>
  <Route path="/login" element={<LoginPage />} />
  <Route element={<ProtectedRoute />}><Route element={<AppShell />}>
    <Route path="/app/overview" element={<Dashboard />} />
    <Route path="/app/organizations" element={<RoleRoute roles={["Owner", "Admin"]}><Management section="organizations" /></RoleRoute>} />
    <Route path="/app/branches" element={<Management section="branches" />} />
    <Route path="/app/users" element={<Management section="users" />} />
    <Route path="/app/roles" element={<RoleRoute roles={["Owner", "Admin"]}><Management section="roles" /></RoleRoute>} />
    <Route path="/app/modules" element={<RoleRoute roles={["Owner", "Admin"]}><Management section="modules" /></RoleRoute>} />
    <Route path="/app/templates" element={<RoleRoute roles={["Owner", "Admin"]}><Management section="templates" /></RoleRoute>} />
    <Route path="/app/settings" element={<Settings />} />
    <Route path="/app/profile" element={<Profile />} />
  </Route></Route>
  <Route path="/" element={<Navigate to="/app/overview" replace />} />
  <Route path="*" element={<NotFound />} />
</Routes></Suspense>;
