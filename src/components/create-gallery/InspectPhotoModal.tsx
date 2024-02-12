import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Image,
} from "@nextui-org/react";
import { PhotoI } from "@/lib/types/photo.interface";
import { getPhotoUrl } from "@/lib/util";

interface InspectPhotoModalProps {
  isOpen: boolean;
  photo?: PhotoI;
  onClose(): void;
  onAdd(): void;
}
export const InspectPhotoModal = ({
  isOpen,
  photo,
  onClose,
  onAdd,
}: InspectPhotoModalProps) => (
  <Modal
    backdrop="opaque"
    isOpen={isOpen}
    onClose={onClose}
    classNames={{
      backdrop:
        "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
    }}
  >
    {photo && (
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">{photo.title}</ModalHeader>
        <ModalBody>
          <Image
            alt={photo.title}
            className="object-cover"
            height={400}
            src={getPhotoUrl({ photo, size: "b" })}
            width={400}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Cancel
          </Button>
          <Button color="primary" onPress={onAdd}>
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    )}
  </Modal>
);
