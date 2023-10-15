import { ILink, IPaging } from '~/interface';
import request from '~/utils/request';

export function fetchLinkList(params) {
  return request.get<IPaging<ILink>>('/link/list', { params });
}
