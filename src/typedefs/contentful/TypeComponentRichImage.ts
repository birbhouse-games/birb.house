import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeComponentPhotographerCreditSkeleton } from "./TypeComponentPhotographerCredit";
import type { TypeComponentPhotographyPlatformCreditSkeleton } from "./TypeComponentPhotographyPlatformCredit";

export interface TypeComponentRichImageFields {
    internalName: EntryFieldTypes.Symbol;
    image: EntryFieldTypes.AssetLink;
    title?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Text;
    focusArea: EntryFieldTypes.Symbol<"Bottom Left" | "Bottom Right" | "Bottom" | "Center" | "Face" | "Faces" | "Left" | "Right" | "Top Left" | "Top Right" | "Top">;
    caption?: EntryFieldTypes.Symbol;
    link?: EntryFieldTypes.Symbol;
    credits?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeComponentPhotographerCreditSkeleton | TypeComponentPhotographyPlatformCreditSkeleton>>;
    shape?: EntryFieldTypes.Text;
    pullDirection?: EntryFieldTypes.Symbol<"Left" | "None" | "Right">;
    backgroundPositionX: EntryFieldTypes.Symbol<"Center" | "Left" | "Right">;
    backgroundPositionY: EntryFieldTypes.Symbol<"Bottom" | "Center" | "Top">;
    backgroundFit: EntryFieldTypes.Symbol<"Contain" | "Cover">;
}

export type TypeComponentRichImageSkeleton = EntrySkeletonType<TypeComponentRichImageFields, "componentRichImage">;
export type TypeComponentRichImage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentRichImageSkeleton, Modifiers, Locales>;
