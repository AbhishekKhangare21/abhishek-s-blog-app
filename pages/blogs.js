import Image from "next/image";
import React, { useState } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join("");
}

export default function Blogs({ description, blogUrl, title, slug }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <a
      // href={`https://api.theinnerhour.com/v1/blogdetail/${slug}`}
      href="#"
      className="group"
    >
      <div className="aspect-w-1  aspect-h-1 xl:aspect-w-7 xl:aspect-h-8  w-72 overflow-hidden rounded-lg bg-gray-100">
        <Image
          alt=""
          src={`http:${blogUrl}`}
          width={300}
          height={200}
          className={cn(
            "group-hover:opacity-75 duration-700 ease-in-out",
            isLoading
              ? "grayscale  h-48  blur-2xl scale-110"
              : "grayscale-0  h-48 blur-0 scale-100"
          )}
          onLoadingComplete={() => setLoading(false)}
        />
        <h3 className="p-2 font-semibold">{title}</h3>
        <p className="p-2">{description}</p>
      </div>
    </a>
  );
}
