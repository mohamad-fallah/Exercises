import React from "react";

const page = () => {
    async function getItem() {
       
        const res = await fetch('https://.../item/1', { cache: 'force-cache' })
        // fetch('https://api.example.com/products', { next: { revalidate: 600 } });
        // const res = await fetch('https://.../item/1', { cache: 'force-cache' })
        return res.json()
      }
       
      const item =  getItem() // cache MISS بار اول کش میشه فقط
      const item2 =  getItem() // cache HIT


    //   export async function generateStaticParams() {
    //     const posts = await fetch('https://api.example.com/posts').then((res) => res.json());
      
    //     return posts.map((post) => ({
    //       slug: post.slug,
    //     }));
    //   }
  return (
    <>
      <div></div>
    </>
  );
};

export default page;
