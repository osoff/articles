import { client } from "../lib/sanity";

export async function getArticles() {
  const query = `*[_type=='blog'] | order(_createdAt desc){
        title,
        smallDescription,
        'currentSlug':slug.current,
        titleImage
      }`;
  const data = await client.fetch(query);
  return data;
}

export async function getArticleById(id: string) {
  const query = `*[_type=='blog' && slug.current=='${id}']{
    'currentSlug':slug.current,
    title,
    titleImage,
    content
  }[0]`;
  const data = await client.fetch(query);
  return data;
}
