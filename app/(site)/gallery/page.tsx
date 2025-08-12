import Image from "next/image";
import fs from "fs";
import path from "path";

export const metadata = {
    title: "Gallery",
    description: "Cuisine, ambiance, and bar galleries in high resolution.",
};

function getImagesFromFolder(folderKey: string): string[] {
    // Load from subfolder (e.g., images/dishes) and also from images/gallery if requested
    const sources: string[] = [];

    const subDir = path.join(process.cwd(), "public", "images", folderKey);
    if (fs.existsSync(subDir)) {
        const sub = fs
            .readdirSync(subDir)
            .filter((fileName) => /\.(png|jpe?g|webp|gif|avif)$/i.test(fileName))
            .map((fileName) => `/images/${folderKey}/${fileName}`);
        sources.push(...sub);
    }

    if (folderKey === "gallery") {
        const galleryDir = path.join(process.cwd(), "public", "images", "gallery");
        if (fs.existsSync(galleryDir)) {
            const gal = fs
                .readdirSync(galleryDir)
                .filter((fileName) => /\.(png|jpe?g|webp|gif|avif)$/i.test(fileName))
                .map((fileName) => `/images/gallery/${fileName}`);
            sources.push(...gal);
        }
    }

    return sources;
}

export default function GalleryPage() {
    // Flatten all folders into a single list for a tighter, easy-to-scan gallery
    const allImages = [
        ...getImagesFromFolder("dishes"),
        ...getImagesFromFolder("sweets"),
        ...getImagesFromFolder("menu"),
        ...getImagesFromFolder("interior"),
        ...getImagesFromFolder("exterior"),
        ...getImagesFromFolder("happy_customers"),
        ...getImagesFromFolder("gallery"),
    ];

    return (
        <main className="container-grid py-6 md:py-10">
            <header className="mb-4 md:mb-6">
                <h1 className="text-4xl md:text-5xl">Gallery</h1>
                {/* Keep description compact and readable on light theme */}
                <p className="mt-2 text-neutral-600 max-w-2xl">
                    A curated selection from our cuisine and ambiance. All photos are yours.
                </p>
            </header>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {allImages.map((src, idx) => (
                    <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100/30">
                        <Image src={src} alt={`Gallery ${idx + 1}`} fill className="object-cover" />
                    </div>
                ))}
            </div>
        </main>
    );
}


