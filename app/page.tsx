import { Card, CardContent } from "@/components/ui/card";
import { getArticles } from "./api/apiPosts";
import { articleCard } from "./lib/interface";
import Image from "next/image";
import { urlFor } from "./lib/sanity";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const articles: articleCard[] = await getArticles();
  return (
    <div className=" grid grid-col-1  md:grid-cols-2 lg:grid-cols-4 mt-5 gap-5 ">
      {articles.map((article, idx) => (
        <Card key={idx} className="max-w-[500px] mx-auto">
          <Image
            src={urlFor(article.titleImage).url()}
            alt="article"
            width={500}
            height={500}
            className="rounded-t-lg h-[200px] object-cover"
          />
          <CardContent className="mt-5">
            <h3 className=" text-lg line-clamp-2 font-bold">{article.title}</h3>
            <p className="text-sm line-clamp-3 mt-2 text-gray-600 dark:text-gray-300">
              {article.smallDescription}
            </p>
            <Button asChild className=" w-full mt-7">
              <Link href={`/blog/${article.currentSlug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
