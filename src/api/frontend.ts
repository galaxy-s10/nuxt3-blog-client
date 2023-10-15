import { IFrontend } from '~/interface';
import request from '~/utils/request';

export function fetchFindFrontend(id: number) {
  return request.get<IFrontend>(`/frontend/${id}`);
}
export function fetchFrontendDetail() {
  return request.get(`/frontend/detail`);
}
