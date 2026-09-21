"use client";

import { useState } from "react";
import Image from "next/image";
import { gallery } from "@/content/gallery";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function GalleryGrid() {
  const [group, setGroup] = useState<(typeof gallery.groups)[number]["id"]>("all");
  const images =
    group === "all"
      ? gallery.images
      : gallery.images.filter((image) => image.group === group);

  return (
    <Tabs value={group} onValueChange={(value) => setGroup(value as typeof group)}>
      <TabsList className="mx-auto mb-8 max-w-[1440px] px-4 md:px-8">
        {gallery.groups.map((item) => (
          <TabsTrigger key={item.id} value={item.id}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value={group}>
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-3 px-4 pb-20 sm:grid-cols-2 lg:grid-cols-4 md:px-8">
          {images.map((image) => (
            <figure
              key={image.id}
              className={
                image.span === "wide"
                  ? "sm:col-span-2"
                  : image.span === "tall"
                    ? "lg:row-span-2"
                    : ""
              }
            >
              <div
                className={`relative overflow-hidden ${
                  image.span === "tall"
                    ? "aspect-[3/4] min-h-[280px] lg:h-full lg:aspect-auto"
                    : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-sm text-ink-soft">{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
