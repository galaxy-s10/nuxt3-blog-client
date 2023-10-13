import request from '@/utils/request';
import { IFrontend } from '~/interface';

export function fetchFindFrontend(id: number) {
  return request.get<IFrontend>(`/frontend/${id}`);
}
export function fetchFrontendDetail() {
  return request.get(`/frontend/detail`);
}
