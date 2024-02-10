"use client";
import { useGetPhotosQuery } from "@/api/apiSlice";
import { getPhotoUrl } from "@/lib/util";
import {
  Input,
  Spinner,
  Image,
  Card,
  CardFooter,
  Button,
  Badge,
  Avatar,
} from "@nextui-org/react";
import { useState } from "react";
import { PhotoI } from "@/lib/types/photo.interface";
import { InspectPhotoModal } from "@/components/create-gallery/InspectPhotoModal";
import { CreateGalleryModalModal } from "@/components/create-gallery/CreateGalleryModal";

const CreateGallery = () => {
  const [searchTerm, setSearchTerm] = useState("maltese");

  const { data, isLoading, isError } = useGetPhotosQuery(searchTerm, {
    skip: searchTerm?.length < 3,
  });

  const [gallery, setGallery] = useState<PhotoI[]>([]);

  const [selectedPhoto, setSelectedPhoto] = useState<PhotoI | undefined>(
    undefined
  );

  const [creatingGallery, setCreatingGallery] = useState(false);

  const addPhotoHandler = () => {
    selectedPhoto && setGallery((prev) => [...prev, selectedPhoto]);
    setSelectedPhoto(undefined);
  };

  const createGalleryHandler = (name: string) => {
    setSelectedPhoto(undefined);
    setGallery([]);
    console.log("create gallery", name, " w. # pictures: ", gallery?.length);
    // TODO: Create gallery
    setCreatingGallery(false);
  };

  return (
    <>
      <Input
        label="Search"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />

      {selectedPhoto && (
        <InspectPhotoModal
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(undefined)}
          onAdd={addPhotoHandler}
        />
      )}

      <CreateGalleryModalModal
        photos={gallery}
        isOpen={creatingGallery}
        onClose={() => setCreatingGallery(false)}
        onCreate={createGalleryHandler}
      />

      {isLoading && <Spinner />}
      {isError && <p>Error!</p>}

      {gallery.length > 0 && (
        <div className="mb-4 flex flex-row align-center">
          <Badge content={gallery?.length} color="default">
            <Button radius="full" isIconOnly variant="light" onClick={() => {}}>
              <Avatar
                radius="md"
                src={getPhotoUrl({ photo: gallery[0], size: "q" })}
              />
            </Button>
          </Badge>

          <Button
            color="primary"
            className="ml-4"
            onClick={() => setCreatingGallery(true)}
          >
            Create gallery
          </Button>
        </div>
      )}

      <div className="grid grid-rows-4 grid-flow-col gap-4">
        {data?.photos?.photo?.map((photo) => (
          <Card
            key={photo.id}
            isFooterBlurred
            radius="lg"
            className="border-none"
          >
            <Image
              alt={photo.title}
              className="object-cover"
              height={200}
              src={getPhotoUrl({ photo, size: "q" })}
              width={200}
            />
            <CardFooter className="justify-around before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
                onClick={() => setSelectedPhoto(photo)}
              >
                Inspect
              </Button>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
                onClick={() => setGallery((prev) => [...prev, photo])}
              >
                Add
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default CreateGallery;
