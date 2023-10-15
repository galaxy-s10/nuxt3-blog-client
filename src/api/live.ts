import { ILive } from '~/billd-live-interface';
import { IPaging } from '~/interface';
import request from '~/utils/request';

export function fetchLiveList(params) {
  return request.get<IPaging<ILive>>('https://live-api.hsslive.cn/live/list', {
    params,
  });
}
