import { Building2, Boxes, GitBranch, ShieldCheck, Users, ArrowUpLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/shared/page-header";
import { SectionCard } from "@/components/shared/section-card";

const kpis = [
  { id: "org", label: "المنشآت", value: "10", change: "2 جديدة هذا الشهر" },
  { id: "users", label: "المستخدمون", value: "64", change: "8 مستخدمين جدد" },
  { id: "branches", label: "الفروع", value: "27", change: "3 فروع جديدة" },
  { id: "modules", label: "الوحدات المفعلة", value: "43", change: "من 60 وحدة" },
];

const shortcuts = [
  ["/app/organizations", "المنشآت", "إدارة المنشآت والفروع", Building2],
  ["/app/users", "المستخدمون", "الحسابات والأدوار", Users],
  ["/app/modules", "وحدات ERP", "تفعيل الوحدات لكل منشأة", Boxes],
  ["/app/roles", "الأدوار والصلاحيات", "ضبط الوصول", ShieldCheck],
] as const;

export const OnOneBoxDashboard = () => (
  <div className="space-y-6" dir="rtl">
    <PageHeader eyebrow="OnOneBox ERP" title="مركز التحكم" description="إدارة منشآت ERP والمستخدمين والفروع والوحدات من مكان واحد." />
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {kpis.map((kpi) => <div key={kpi.id} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-card)]"><p className="text-sm text-[var(--muted-foreground)]">{kpi.label}</p><p className="mt-3 text-3xl font-bold tracking-tight">{kpi.value}</p><p className="mt-2 text-xs text-[var(--success)]">{kpi.change}</p></div>)}
    </div>
    <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
      <SectionCard title="الوصول السريع" description="أكثر العمليات استخدامًا في لوحة التحكم.">
        <div className="grid gap-3 sm:grid-cols-2">
          {shortcuts.map(([href, title, desc, Icon]) => (
            <Link key={href} to={href} className="group rounded-2xl border border-[var(--border)] p-4 transition hover:border-[var(--accent)] hover:bg-[var(--surface-panel)]">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--success-soft)] text-[var(--success)]"><Icon className="h-5 w-5" /></span>
                <div className="min-w-0 flex-1"><p className="font-semibold">{title}</p><p className="text-sm text-[var(--muted-foreground)]">{desc}</p></div>
                <ArrowUpLeft className="h-4 w-4 opacity-40 transition group-hover:opacity-100" />
              </div>
            </Link>
          ))}
        </div>
      </SectionCard>
      <SectionCard title="حالة المنصة" description="ملخص تشغيلي سريع.">
        <div className="space-y-4">
          {["خدمة المصادقة", "عزل بيانات المنشآت", "نظام الصلاحيات", "واجهة الـ API"].map((item) => (
            <div key={item} className="flex items-center justify-between border-b border-[var(--border)] pb-3 last:border-0 last:pb-0"><span className="text-sm">{item}</span><span className="rounded-full bg-[var(--success-soft)] px-2.5 py-1 text-xs font-semibold text-[var(--success)]">يعمل</span></div>
          ))}
        </div>
      </SectionCard>
    </div>
    <SectionCard title="آخر النشاطات" description="سجل مبسط للنشاطات الإدارية الأخيرة.">
      <div className="divide-y divide-[var(--border)]">
        {["تم إنشاء منشأة جديدة", "تمت إضافة فرع إلى مؤسسة الندى", "تم تعديل دور مدير المبيعات", "تم تفعيل وحدة المخزون"].map((item, i) => (
          <div key={item} className="flex items-center justify-between py-3"><span className="text-sm">{item}</span><span className="text-xs text-[var(--muted-foreground)]">منذ {i + 1} ساعة</span></div>
        ))}
      </div>
    </SectionCard>
  </div>
);
