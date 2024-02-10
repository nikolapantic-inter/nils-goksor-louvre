"use client";
import { useGetPhotosQuery } from "@/api/apiSlice";
import { getPhotoUrl } from "@/lib/util";
import Image from "next/image";

const CreateGallery = () => {
  const { data, isLoading, isError } = useGetPhotosQuery("Mo Salah");

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error!</p>}
      {data?.photos?.photo?.map((photo) => (
        <Image
          key={photo.id}
          alt={photo.title}
          src={getPhotoUrl({ photo, size: "s" })}
          width={150}
          height={150}
        />
      ))}
    </>
  );
};

export default CreateGallery;
