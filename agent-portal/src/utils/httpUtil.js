import { httpBase } from './httpBaseUtil';

export function fetch(endpoint, params) {
  return httpBase().get(`/api/v1/${endpoint}`, { params });
}


export function store(endpoint, data) {
  return httpBase().post(`/api/v1/${endpoint}`, data);
}


export function update(endpoint, data) {
  return httpBase().put(`/api/v1/${endpoint}`, data);
}

export function destroy(endpoint, id) {
  return httpBase().delete(`/api/v1/${endpoint}/${id}`);
}
