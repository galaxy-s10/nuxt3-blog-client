import request from '@/utils/request';
import { IPaging, IWorks } from '~/interface';

export function fetchWorksList(params) {
  return request.get<IPaging<IWorks>>('/works/list', { params });
}
