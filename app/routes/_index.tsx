import { Link } from "react-router-dom";
import { filterByProximity } from "~/lib/geo";
import { rankShops } from "~/lib/rank";
import { sampleShops } from "~/lib/sampleData";

export default function Index() {
  // mock user location
  const user = {
    lat: 13.7649,
    lng: 100.5383,
    subdistrict: "ถนนพญาไท",
    district: "ราชเทวี",
    province: "กรุงเทพมหานคร",
  };

  // คำนวณร้านแนะนำตรงนี้เลย
  const { list } = filterByProximity(sampleShops, user, 5);
  const shops = rankShops({ shops: list, activeAds: [], userLoc: user });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">ร้านแนะนำใกล้คุณ</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {shops.map((s: any) => (
          <Link
            key={s.id}
            to={`/shops/${s.id}`}
            className="border rounded-2xl p-4 hover:shadow"
          >
            <div className="font-semibold">{s.name}</div>
            <div className="text-xs opacity-70">
              {s.address.district} · {s.address.province}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
