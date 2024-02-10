import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Image,
  Input,
} from "@nextui-org/react";
import { PhotoI } from "@/lib/types/photo.interface";
import { getPhotoUrl } from "@/lib/util";

interface CreateGalleryModalModalProps {
  photos: PhotoI[];
  isOpen: boolean;
  onClose(): void;
  onCreate(name: string): void;
}
export const CreateGalleryModalModal = ({
  photos,
  isOpen,
  onClose,
  onCreate,
}: CreateGalleryModalModalProps) => {
  const [name, setName] = useState("");
  return (
    <Modal
      size="lg"
      backdrop="opaque"
      isOpen={isOpen}
      onClose={onClose}
      classNames={{
        backdrop:
          "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
      }}
    >
      <ModalContent>
        <ModalHeader>
          <Input
            type="text"
            placeholder="Name your gallery"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </ModalHeader>
        <ModalBody className="grid grid-cols-4">
          {photos.map((photo) => (
            <Image
              key={photo.id}
              alt={photo.title}
              height={250}
              src={getPhotoUrl({ photo, size: "b" })}
              width={250}
            />
          ))}
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Cancel
          </Button>
          <Button
            color="primary"
            onPress={() => onCreate(name)}
            disabled={name?.length < 3}
          >
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
