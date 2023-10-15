import { IPaging, ITag } from '~/interface';
import request from '~/utils/request';

export function fetchTagList(params) {
  return request.get<IPaging<ITag>>('/tag/list', { params });
}
export function fetchTagArticleList({ tagId, params }) {
  return request.get<IPaging<ITag>>(`/tag/article_list/${tagId}`, { params });
}
