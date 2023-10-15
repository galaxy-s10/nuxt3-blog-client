import { IPaging, IWorks } from '~/interface';
import request from '~/utils/request';

export function fetchWorksList(params) {
  return request.get<IPaging<IWorks>>('/works/list', { params });
}
