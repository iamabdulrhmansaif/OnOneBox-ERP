import { canAccess } from "@/lib/rbac";
import type { AppRole, NavItem } from "@/types";
export type NavGroup = { label: string; items: NavItem[] };
export type NavLeaf = NavItem & { href: string };
export type NavTrail = { group: NavGroup; item: NavItem; child?: NavItem };
export const navGroups: NavGroup[] = [
  { label: "الرئيسية", items: [{ title: "لوحة التحكم", href: "/app/overview", icon: "LayoutDashboard" }] },
  { label: "إدارة المنشآت", items: [
    { title: "المنشآت", href: "/app/organizations", icon: "Building2", roles: ["Owner", "Admin"] },
    { title: "الفروع", href: "/app/branches", icon: "GitBranch", roles: ["Owner", "Admin", "Manager"] },
    { title: "المستخدمون", href: "/app/users", icon: "Users", roles: ["Owner", "Admin", "Manager"] },
  ] },
  { label: "الوصول", items: [
    { title: "الأدوار والصلاحيات", href: "/app/roles", icon: "ShieldCheck", roles: ["Owner", "Admin"] },
    { title: "وحدات ERP", href: "/app/modules", icon: "Boxes", roles: ["Owner", "Admin"] },
    { title: "قوالب ERP", href: "/app/templates", icon: "Layers3", roles: ["Owner", "Admin"] },
  ] },
  { label: "النظام", items: [
    { title: "إعدادات النظام", href: "/app/settings", icon: "Settings", roles: ["Owner", "Admin"] },
    { title: "الملف الشخصي", href: "/app/profile", icon: "UserRound" },
  ] },
];
export const navItems = navGroups.flatMap((group) => group.items);
const isLeaf = (item: NavItem): item is NavLeaf => Boolean(item.href);
export const navLeafItems = navItems.flatMap((item) => item.children ? item.children.filter(isLeaf) : isLeaf(item) ? [item] : []);
export const filterNavGroupsByRole = (groups: NavGroup[], role?: AppRole): NavGroup[] => groups.map((group) => ({ ...group, items: group.items.filter((item) => canAccess(role, item.roles)) })).filter((group) => group.items.length > 0);
export const resolveNavTrail = (pathname: string): NavTrail | undefined => {
  for (const group of navGroups) for (const item of group.items) {
    if (item.href && (pathname === item.href || pathname.startsWith(`${item.href}/`))) return { group, item };
  }
  return undefined;
};
