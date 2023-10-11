import { IArticle } from '@/interface';
import request from '@/utils/request';

export function fetchArticleList(params) {
  return request.get('/article/list', { params });
}

export function fetchArticleDetail(id: number) {
  return request.get<IArticle>(`/article/find/${id}`);
}

export function fetchCreateArticle(data: IArticle) {
  return request.instance({
    url: '/article/create',
    method: 'post',
    data,
  });
}
export function fetchUpdateArticle(data: IArticle) {
  return request.instance({
    url: `/article/update/${data.id}`,
    method: 'put',
    data,
  });
}
export function fetchDeleteArticle(id: number) {
  return request.instance({
    url: `/article/delete/${id}`,
    method: 'delete',
  });
}
