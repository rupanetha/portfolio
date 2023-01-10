import { API_URL } from './constants';

export async function fetchAllBlogs() {
  return fetch(`${API_URL}/blogs?populate=*`).then((data) => data.json());
}

export async function fetchOneBlog(slug: any) {
  return fetch(
    `${API_URL}/blogs?filters[slug][$eq]=${slug}&populate[0]=cover_image&populate[1]=author.profile_pic&populate[2]=blog_category&populate[3]=thumbnail_image`
  ).then((data) => data.json());
}

export async function fetchAllCategories() {
  return fetch(`${API_URL}/blog-categories`).then((data) => data.json());
}
