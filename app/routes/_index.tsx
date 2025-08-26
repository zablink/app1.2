import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { filterByProximity } from "~/lib/geo";
import { rankShops } from "~/lib/rank";
import { sampleShops } from "~/lib/sampleData";

export const meta: MetaFunction = () => [{ title: "RRRP – ร้านใกล้คุณ" }];

export async function loader() {
  const user = { lat:13.7649, lng:100.5383, subdistrict:'ถนนพญาไท', district:'ราชเทวี', province:'กรุงเทพมหานคร' };
  const { list } = filterByProximity(sampleShops, user, 5);
  const ranked = rankShops({ shops:list, activeAds:[], userLoc:user });
  return { shops: ranked };
}

export default function Index() {
  const data = (window as any).__staticRouterHydrationData?.loaderData?.["routes/_index"] ?? {};
  const shops = data.shops ?? [];
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">ร้านแนะนำใกล้คุณ</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {shops.map((s:any)=> (
          <a key={s.id} href={`/shops/${s.id}`} className="border rounded-2xl p-4 hover:shadow">
            <div className="font-semibold">{s.name}</div>
            <div className="text-xs opacity-70">{s.address.district} · {s.address.province}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
