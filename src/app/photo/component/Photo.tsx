import Image from 'next/image';
import React from 'react'
import { IPhoto } from '../data/model';
import { XMarkIcon } from '@heroicons/react/24/outline';

type ListProp = {
  image:IPhoto
  handleDelete:Function
}

export const Photo = ({image,handleDelete}:ListProp) => {
  return (
    <div className="group relative block">
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 group-hover:opacity-75">
      <Image
        width={100}
        height={100}
        src={image.imageSrc}
        alt={image.imageAlt}
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute top-0 right-0 m-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <XMarkIcon color='red' width={25} onClick={()=>{handleDelete(image.id)}}/>
      </div>
      </div>
      <a key={image.id} href={image.href} target='_blank'>
    <h3 className="absolute bottom-0 left-0 right-0 p-2 bg-gray-800 bg-opacity-50 text-white text-center text-sm">{image.name}</h3>
  </a>
    </div>
  );
}
