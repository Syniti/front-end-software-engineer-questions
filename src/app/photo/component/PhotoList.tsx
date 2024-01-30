import Image from 'next/image';
import React from 'react'
import { IPhoto } from '../data/model';

export const PhotoList = ({image}:{image:IPhoto}) => {
  return (
    <a key={image.id} href={image.href} target='_blank' className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          width={100}
          height={100}
          src={image.imageSrc}
          alt={image.imageAlt}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{image.name}</h3>
    </a>
  );
}
