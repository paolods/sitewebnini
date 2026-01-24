"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductGalleryProps {
    mainImage: string;
    additionalImages: string[];
    productName: string;
}

export default function ProductGallery({
    mainImage,
    additionalImages,
    productName,
}: ProductGalleryProps) {
    const allImages = [mainImage, ...additionalImages];
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="flex flex-col gap-10 w-full">
            {/* Main Image */}
            <div className="relative aspect-square w-full overflow-hidden rounded-kawaii border border-border-soft bg-white shadow-soft group">
                <Image
                    src={allImages[selectedImage]}
                    alt={productName}
                    fill
                    className="object-cover transition-soft group-hover:scale-110 p-10"
                    priority
                />
            </div>

            {/* Thumbnails */}
            {additionalImages.length > 0 && (
                <div className="flex flex-wrap justify-center gap-6">
                    {allImages.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedImage(idx)}
                            className={`relative h-20 w-20 overflow-hidden rounded-card-kawaii border-2 transition-soft
                ${selectedImage === idx
                                    ? "border-accent-vibrant shadow-kawaii scale-105"
                                    : "border-transparent bg-white hover:border-border-soft"
                                }`}
                        >
                            <Image
                                src={img}
                                alt={`${productName} view ${idx + 1}`}
                                fill
                                className="object-cover p-3"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
