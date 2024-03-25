import { getArticleById } from "@/app/api/apiPosts";
import { article } from "@/app/lib/interface";
import { urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

export default async function page({ params }: { params: { slug: string } }) {
  const article: article = await getArticleById(params.slug);

  return (
    <div className=" mt-8 flex flex-col items-center">
      <h1>
        <span className=" block text-base text-center text-primary font-semibold tracking-wide uppercase">
          <span className=" italic">Dev</span> - Blog
        </span>
        <span className=" mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {article.title}
        </span>
      </h1>
      <Image
        src={urlFor(article.titleImage).url()}
        width={800}
        height={400}
        alt="title"
        priority
        className="rounded-lg mt-8 border object-cover max-h-[400px]"
      />
      <div className="mt-16 prose prose-blue prose-xl dark:prose-invert prose-li:marker:text-primary">
        <PortableText value={article.content} />
      </div>
    </div>
  );
}
