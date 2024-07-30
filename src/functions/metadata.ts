import { Metadata } from "next";

const HOST = process.env.HOST || "http://localhost:3000";

export type MetadataProps = {
    title: string;
    description: string;
    img?: string;
    path?: string;
}

/**
 * Generates static metadata for a given set of properties.
 *
 * @param {MetadataProps} props - The properties for generating the metadata.
 * @param {string} props.title - The title of the metadata.
 * @param {string} props.description - The description of the metadata.
 * @param {string} [props.img] - The image URL of the metadata.
 * @param {string} [props.path] - The path of the metadata.
 * @return {Metadata} The generated metadata.
 */
export function createMetadata({ title, description, img, path }: MetadataProps): Metadata {
    const keywords = ["Center point Network", "rentals", "Homes", "buildings", "real estate UK", "agents", ...title.split(' '), ...description.split(' ')];
    const buildImg = img ? (img.startsWith('/') ? HOST+img : img) : '/images/hero.png';

    return {
        title,
        description,
        metadataBase: new URL(HOST),
        icons: ["/images/icon.png"],
        appleWebApp: { capable: true, title: "Center point Network", startupImage: ["/images/hero.png"] },
        applicationName: "Center point Network",
        keywords: keywords,
        // manifest: "/files/manifest.json",
        twitter: { title, description, images: [buildImg] },
        openGraph: {
            title,
            description,
            images: [buildImg],
            tags: keywords,
        },

    }
}