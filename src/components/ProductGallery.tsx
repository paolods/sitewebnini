"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductGalleryProps {
    mainImage: string;
    additionalImages: string[];
    productName: string;
}

export default function ProductGallery({ mainImage, additionalImages, productName }: ProductGalleryProps) {
    const allImages = [mainImage, ...additionalImages];
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="flex flex-col gap-4">
            {/* Main Image Display */}
            <div className="relative aspect-square w-full overflow-hidden rounded-card border border-border bg-[var(--off-white)] shadow-soft">
                <Image
                    src={allImages[selectedImage]}
                    alt={productName}
                    fill
                    className="object-cover transition-opacity duration-300"
                    priority
                />
            </div>

            {/* Thumbnail Gallery */}
            {additionalImages.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {allImages.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedImage(idx)}
                            className={`relative h-20 w-20 overflow-hidden rounded-lg border-2 transition-all ${selectedImage === idx ? "border-[var(--price-red)] ring-2 ring-[var(--price-red)]/10" : "border-transparent hover:border-gray-300"
                                }`}
                        >
                            <Image
                                src={img}
                                alt={`${productName} view ${idx + 1}`}
                                fill
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
