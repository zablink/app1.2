export function haversineKm(a:{lat:number,lng:number}, b:{lat:number,lng:number}){
  const R = 6371;
  const dLat = (b.lat - a.lat) * Math.PI/180;
  const dLng = (b.lng - a.lng) * Math.PI/180;
  const s1 = Math.sin(dLat/2)**2;
  const s2 = Math.cos(a.lat*Math.PI/180) * Math.cos(b.lat*Math.PI/180) * Math.sin(dLng/2)**2;
  return 2 * R * Math.asin(Math.sqrt(s1+s2));
}
export type AreaMatchLevel = 'distance'|'subdistrict'|'district'|'province';
export function filterByProximity(
  shops: any[],
  user:{lat:number,lng:number, subdistrict:string, district:string, province:string},
  km:number
){
  const within = shops.filter(s=>haversineKm(user, s.address) <= km);
  if(within.length) return {list:within, level:'distance' as AreaMatchLevel};
  const sub = shops.filter(s=>s.address.subdistrict===user.subdistrict);
  if(sub.length) return {list:sub, level:'subdistrict' as AreaMatchLevel};
  const dist = shops.filter(s=>s.address.district===user.district);
  if(dist.length) return {list:dist, level:'district' as AreaMatchLevel};
  const prov = shops.filter(s=>s.address.province===user.province);
  return {list:prov, level:'province' as AreaMatchLevel};
}
