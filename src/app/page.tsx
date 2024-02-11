"use client";
import { useGetGalleriesQuery } from "@/api/apiSlice";
import { GalleryI } from "@/lib/types/gallery.interface";
import { getPhotoUrl } from "@/lib/util";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Spinner,
} from "@nextui-org/react";
import { useState } from "react";

export default function Home() {
  const { data: galleries, isLoading, isError } = useGetGalleriesQuery();

  const [selectedGallery, setSelectedGallery] = useState<GalleryI | undefined>(
    undefined
  );

  console.log({ galleries });

  return (
    <>
      {isLoading && <Spinner />}
      {isError && <p>Error!</p>}
      {!isError && !isLoading && (!galleries || galleries?.length < 1) && (
        <p>No galleries found</p>
      )}
      {!selectedGallery ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {galleries?.map((gallery) => (
            <Card
              key={gallery.id}
              isPressable
              onPress={() => setSelectedGallery(gallery)}
            >
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">{gallery.name}</p>
                <small className="text-default-500">{`${gallery.photos?.length} images`}</small>
              </CardHeader>
              <CardBody>
                <Image
                  alt={gallery.name}
                  src={getPhotoUrl({ photo: gallery.photos?.[0], size: "b" })}
                />
              </CardBody>
            </Card>
          ))}
        </div>
      ) : (
        <>
          <div className="mb-8">
            <h1>{selectedGallery.name}</h1>
            <div className="mt-4">
              <Button onClick={() => setSelectedGallery(undefined)}>
                Close gallery
              </Button>
              <Button
                className="ml-4"
                color="danger"
                variant="light"
                onClick={() => setSelectedGallery(undefined)}
                disabled
              >
                Delete
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {selectedGallery?.photos?.map((p) => (
              <Image
                key={p.id}
                alt={p.title}
                src={getPhotoUrl({ photo: p, size: "b" })}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}
