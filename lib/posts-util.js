import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export const getPostData = (fileName) => {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  const postsSlug = fileName.replace(/\.md$/, ""); // removes the file extension

  const postData = {
    slug: postsSlug,
    ...data,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postsFiles = fs.readdirSync(postsDirectory);
  const allPosts = postsFiles.map((post) => getPostData(post));
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
};
