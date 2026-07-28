"use client";

import { useRouter } from "next/navigation";

type Item = { slug: string; title: string; subtitle: string | null };
type Category = { slug: string; label: string; icon: string; items: Item[] };

export default function ServicesSelector({ categories }: { categories: Category[] }) {
  const router = useRouter();

  return (
    <section className="mx-auto max-w-3xl px-6 pb-20 sm:px-10">
      <div className="flex flex-col gap-6">
        {categories.map((cat) => (
          <div key={cat.slug} className="rounded-xl border border-[#0B3D2E]/10 bg-white p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{cat.icon}</span>
              <p className="font-[family-name:var(--font-garamond)] text-xl text-[#0B3D2E]">{cat.label}</p>
            </div>
            <select
              onChange={(e) => {
                if (e.target.value) router.push(`/services/${cat.slug}/${e.target.value}`);
              }}
              defaultValue=""
              className="mt-4 w-full rounded-lg border border-[#0B3D2E]/20 bg-[#F8F6F0] px-4 py-3 text-sm text-[#0B3D2E]"
            >
              <option value="" disabled>Choisir une offre…</option>
              {cat.items.map((item) => (
                <option key={item.slug} value={item.slug}>{item.title}{item.subtitle ? ` — ${item.subtitle}` : ""}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </section>
  );
}