import { lsKey } from '@/constant';
import { lsCache } from '@/utils/cache';

export function getLastBuildDate() {
  return lsCache.getStorage<string>(lsKey.lastBuildDate);
}
export function setLastBuildDate(val: string) {
  return lsCache.setStorage(lsKey.lastBuildDate, val);
}
export function clearLastBuildDate() {
  return localStorage.removeItem(lsKey.lastBuildDate);
}
