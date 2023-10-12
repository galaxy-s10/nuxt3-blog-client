import request from '@/utils/request';
import { ILink, IPaging } from '~/interface';

export function fetchLinkList(params) {
  return request.get<IPaging<ILink>>('/link/list', { params });
}
