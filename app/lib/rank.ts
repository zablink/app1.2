export enum PackageTier { Free=0, Pro1=1, Pro2=2, Pro3=3, Special=4 }
export type AdsScope = 'subdistrict'|'district'|'province'|'national';
export function scorePackage(tier:PackageTier){
  switch(tier){
    case PackageTier.Special: return 90;
    case PackageTier.Pro3: return 80;
    case PackageTier.Pro2: return 60;
    case PackageTier.Pro1: return 40;
    default: return 10;
  }
}
export function scoreAds(scope:AdsScope){
  switch(scope){
    case 'national': return 50;
    case 'province': return 35;
    case 'district': return 20;
    case 'subdistrict': return 10;
  }
}
export function rankShops({ shops, activeAds, userLoc }:{ shops:any[]; activeAds:any[]; userLoc:{lat:number,lng:number} }){
  const now = Date.now();
  const adsMap = new Map<string, number>();
  for(const ad of activeAds){
    if(new Date(ad.startAt).getTime()<=now && new Date(ad.endAt).getTime()>=now){
      adsMap.set(ad.shopId, (adsMap.get(ad.shopId)||0) + scoreAds(ad.scope));
    }
  }
  return shops
    .map(s=>{
      const d = Math.hypot(s.address.lat - userLoc.lat, s.address.lng - userLoc.lng);
      const distanceScore = Math.max(0, 30 - d*10);
      const pkgScore = scorePackage(s.package);
      const adScore = adsMap.get(s.id)||0;
      const score = pkgScore + adScore + distanceScore;
      return {...s, _score: score};
    })
    .sort((a,b)=>b._score - a._score);
}
