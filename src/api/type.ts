import { IPaging, IType } from '~/interface';
import request from '~/utils/request';

export function fetchTypeList(params) {
  return request.get<IPaging<IType>>('/type/list', { params });
}
