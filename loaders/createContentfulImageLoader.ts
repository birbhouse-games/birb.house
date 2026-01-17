// Module imports
import { type ImageLoader, type ImageLoaderProps } from "next/image";
import { ImageFit } from "@/typedefs/contentful-extended/ImageFit";
import { ImageFocusArea } from "@/typedefs/contentful-extended/ImageFocusArea";

const CONTENTFUL_IMAGE_MAX_WIDTH = 4000;

/**
 * @param src The URL of the image to be loaded.
 * @param fit How the image should be fit within the size.
 * @param focusArea What part of the image should be saved if it has to be cropped.
 * @returns A Next.js image loader.
 */
export function createContentfulImageLoader(
  src: string,
  fit: ImageFit,
  focusArea: ImageFocusArea = "center",
): ImageLoader {
  /**
   * @param loaderProps All props for the loader.
   * @returns The constructed image URL.
   */
  return (loaderProps: ImageLoaderProps): string => {
    const { quality, width: loaderWidth } = loaderProps;

    const url = new URL(`https:${src}`);

    url.searchParams.set("fm", "webp");
    url.searchParams.set(
      "w",
      Math.min(loaderWidth, CONTENTFUL_IMAGE_MAX_WIDTH).toString(),
    );
    url.searchParams.set("q", (quality || 75).toString());

    if (fit) {
      url.searchParams.set("fit", fit);
    }

    if (focusArea) {
      url.searchParams.set("f", focusArea.toLowerCase().replace(/\s/u, "_"));
    }

    return url.href;
  };
}
