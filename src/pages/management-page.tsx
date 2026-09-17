import { Plus, Search, Settings2 } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/shared/page-header";
import { SectionCard } from "@/components/shared/section-card";

type Config = { title: string; description: string; singular: string; columns: string[]; rows: string[][] };

const configs: Record<string, Config> = {
  organizations: { title: "المنشآت", description: "إنشاء وإدارة منشآت العملاء ونطاق بياناتها.", singular: "منشأة", columns: ["اسم المنشأة", "الرمز", "الفروع", "الحالة"], rows: [["مؤسسة الندى التجارية", "ALN-001", "4", "نشطة"], ["شركة الريادة", "RHD-002", "3", "نشطة"], ["متجر المستقبل", "FUT-003", "2", "معلقة"]] },
  users: { title: "المستخدمون", description: "إدارة الحسابات وربطها بالمنشآت والأدوار.", singular: "مستخدم", columns: ["المستخدم", "المنشأة", "الدور", "الحالة"], rows: [["أحمد محمد", "مؤسسة الندى", "مدير", "نشط"], ["سعيد علي", "شركة الريادة", "محاسب", "نشط"], ["محمد صالح", "متجر المستقبل", "مستخدم", "غير نشط"]] },
  roles: { title: "الأدوار والصلاحيات", description: "تعريف الأدوار وتحديد ما يمكن لكل دور الوصول إليه.", singular: "دور", columns: ["الدور", "النطاق", "الصلاحيات", "الحالة"], rows: [["مدير النظام", "منشأة", "كاملة", "نشط"], ["محاسب", "فرع", "24 صلاحية", "نشط"], ["مشرف مخزون", "فرع", "12 صلاحية", "نشط"]] },
  modules: { title: "وحدات ERP", description: "تحديد الوحدات المتاحة والمفعلة لكل منشأة.", singular: "وحدة", columns: ["الوحدة", "التصنيف", "المنشآت المفعلة", "الحالة"], rows: [["المحاسبة", "مالي", "10", "متاحة"], ["المخزون", "تشغيلي", "8", "متاحة"], ["نقاط البيع", "مبيعات", "5", "متاحة"]] },
  templates: { title: "قوالب ERP", description: "قوالب جاهزة لإعداد الوحدات والأدوار وإعدادات المنشأة.", singular: "قالب", columns: ["القالب", "الوحدات", "المستخدمون", "الحالة"], rows: [["تجارة عامة", "8", "5", "نشط"], ["متجر تجزئة", "11", "8", "نشط"], ["خدمات", "6", "4", "مسودة"]] },
  branches: { title: "الفروع", description: "إدارة فروع المنشآت ونطاق العمل التشغيلي.", singular: "فرع", columns: ["الفرع", "المنشأة", "المدينة", "الحالة"], rows: [["الفرع الرئيسي", "مؤسسة الندى", "إب", "نشط"], ["فرع التحرير", "شركة الريادة", "صنعاء", "نشط"], ["فرع السوق", "متجر المستقبل", "تعز", "نشط"]] },
};

export const ManagementPage = ({ section }: { section: keyof typeof configs }) => {
  const config = configs[section];
  const [query, setQuery] = useState("");
  const rows = useMemo(() => config.rows.filter((row) => row.join(" ").toLowerCase().includes(query.toLowerCase())), [config.rows, query]);
  return <div className="space-y-6" dir="rtl">
    <PageHeader eyebrow="OnOneBox Control Panel" title={config.title} description={config.description} actions={<Button className="gap-2"><Plus className="h-4 w-4" />إضافة {config.singular}</Button>} />
    <SectionCard title={`قائمة ${config.title}`} description={`إدارة ${config.title} من خلال لوحة التحكم.`}>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row"><div className="relative flex-1"><Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted-foreground)]" /><Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="بحث..." className="pr-9" /></div><Button variant="outline" className="gap-2"><Settings2 className="h-4 w-4" />تصفية</Button></div>
      <div className="overflow-x-auto"><table className="w-full text-right text-sm"><thead><tr className="border-b border-[var(--border)] text-[var(--muted-foreground)]">{config.columns.map((c) => <th key={c} className="px-3 py-3 font-medium">{c}</th>)}<th className="px-3 py-3">إجراء</th></tr></thead><tbody>{rows.map((row) => <tr key={row[0]} className="border-b border-[var(--border)] last:border-0">{row.map((cell, i) => <td key={`${row[0]}-${i}`} className="px-3 py-4">{i === row.length - 1 ? <span className="rounded-full bg-[var(--success-soft)] px-2.5 py-1 text-xs font-semibold text-[var(--success)]">{cell}</span> : cell}</td>)}<td className="px-3 py-4"><Button variant="ghost" size="sm">فتح</Button></td></tr>)}</tbody></table></div>
    </SectionCard>
  </div>;
};
