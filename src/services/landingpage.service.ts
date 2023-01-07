import { API_URL } from './constants';

export async function fetchAboutMeBlock() {
  return fetch(`${API_URL}/abouts`).then((data) => data.json());
}

export async function fetchExperiencesBlock() {
  return fetch(`${API_URL}/experiences`).then((data) => data.json());
}

export async function fetchWorkBlock() {
  return fetch(`${API_URL}/work-medias?populate=*`).then((data) => data.json());
}
