import { Save, Shield, Globe2, Database, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionCard } from "@/components/shared/section-card";
import { PageHeader } from "@/components/shared/page-header";

export const SystemSettingsPage = () => <div className="space-y-6" dir="rtl">
  <PageHeader eyebrow="OnOneBox Control Panel" title="إعدادات النظام" description="إعدادات المنصة العامة التي لا تتبع منشأة واحدة." actions={<Button className="gap-2"><Save className="h-4 w-4" />حفظ التغييرات</Button>} />
  <div className="grid gap-6 lg:grid-cols-2">
    <SectionCard title="الهوية والمنطقة" description="الاسم واللغة والمنطقة الافتراضية."><div className="space-y-4"><label className="block space-y-2 text-sm font-medium">اسم النظام<Input defaultValue="OnOneBox ERP" className="mt-2" /></label><label className="block space-y-2 text-sm font-medium">اللغة الافتراضية<Input defaultValue="العربية" className="mt-2" /></label><label className="block space-y-2 text-sm font-medium">العملة الافتراضية<Input defaultValue="YER" className="mt-2" /></label></div></SectionCard>
    <SectionCard title="الأمان" description="الإعدادات الأساسية للوصول إلى لوحة التحكم."><div className="space-y-4"><div className="flex items-center gap-3 rounded-xl border border-[var(--border)] p-4"><Shield className="h-5 w-5" /><div><p className="font-medium">المصادقة متعددة العوامل</p><p className="text-xs text-[var(--muted-foreground)]">متاحة للتفعيل للحسابات الإدارية.</p></div></div><div className="flex items-center gap-3 rounded-xl border border-[var(--border)] p-4"><Database className="h-5 w-5" /><div><p className="font-medium">عزل بيانات المنشآت</p><p className="text-xs text-[var(--muted-foreground)]">مفعل على مستوى نطاق المؤسسة.</p></div></div></div></SectionCard>
    <SectionCard title="الإقليم والوقت" description="التهيئة الافتراضية للتاريخ والوقت."><div className="flex items-center gap-3 rounded-xl bg-[var(--surface-panel)] p-4"><Globe2 className="h-5 w-5" /><div><p className="font-medium">Asia/Aden</p><p className="text-sm text-[var(--muted-foreground)]">اليمن · توقيت عدن</p></div></div></SectionCard>
    <SectionCard title="المظهر" description="هوية OnOneBox الأساسية."><div className="flex items-center gap-3 rounded-xl bg-[var(--surface-panel)] p-4"><Palette className="h-5 w-5" /><div><p className="font-medium">OnOneBox Green</p><p className="text-sm text-[var(--muted-foreground)]">هوية موحدة قابلة للتخصيص لكل منشأة.</p></div></div></SectionCard>
  </div>
</div>;
