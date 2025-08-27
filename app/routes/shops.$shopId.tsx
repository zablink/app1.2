import { useParams } from "react-router-dom";
import { sampleShops } from "~/lib/sampleData";

export default function Shop() {
  const { shopId } = useParams();
  const shop = sampleShops.find((s) => s.id === shopId);

  if (!shop) {
    return <div className="p-6 text-center text-red-500">ไม่พบร้านนี้</div>;
  }

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{shop.name}</h1>
      </header>

      <section className="space-y-2">
        <h2 className="font-semibold">เมนูยอดนิยม</h2>
        <ul className="grid md:grid-cols-2 gap-3">
          {shop.menu.slice(0, 6).map((m: any, i: number) => (
            <li
              key={i}
              className="border rounded-xl p-3 flex items-center justify-between"
            >
              <span>{m.name}</span>
              <span className="font-medium">฿{m.price}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-semibold mb-2">สั่งเดลิเวอรี</h2>
        <div className="flex flex-wrap gap-2">
          {shop.delivery.map((d: any, i: number) => (
            <a
              key={i}
              href={d.url}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 border rounded-full text-sm hover:bg-gray-50"
            >
              {d.name}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
