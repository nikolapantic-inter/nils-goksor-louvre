"use client";
import { describe, expect, it } from "@jest/globals";
import { PhotoI } from "./types/photo.interface";
import { getPhotoUrl } from "./util";

const mockPhoto: PhotoI = {
  title: "testtitle",
  server: "mockServer",
  id: "mockId",
  secret: "mockSecret",
};

describe("getPhotoUrl", () => {
  it('should generate the correct URL for size "q"', () => {
    const result = getPhotoUrl({ photo: mockPhoto, size: "q" });
    const expectedUrl =
      "https://live.staticflickr.com/mockServer/mockId_mockSecret_q.jpg";
    expect(result).toBe(expectedUrl);
  });

  it('should generate the correct URL for size "b"', () => {
    const result = getPhotoUrl({ photo: mockPhoto, size: "b" });
    const expectedUrl =
      "https://live.staticflickr.com/mockServer/mockId_mockSecret_b.jpg";
    expect(result).toBe(expectedUrl);
  });

  // TODO: Add tests for when mockPhoto contains invalid data
});
