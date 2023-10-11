import request from '@/utils/request';
import { IPaging, IType } from '~/interface';

export function fetchTypeList(params) {
  return request.get<IPaging<IType>>('/type/list', { params });
}
