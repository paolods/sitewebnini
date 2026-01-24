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
        <div className="grid grid-cols-1 gap-6">
            {/* Main Image Display - Soft & Rounded */}
            <div className="relative aspect-square w-full overflow-hidden rounded-kawaii border border-[var(--border-soft)] bg-white shadow-soft group">
                <Image
                    src={allImages[selectedImage]}
                    alt={productName}
                    fill
                    className="object-cover transition-soft duration-500 group-hover:scale-105 p-6"
                    priority
                />
            </div>

            {/* Thumbnail Gallery - Breathable & Minimal */}
            {additionalImages.length > 0 && (
                <div className="flex flex-wrap justify-center gap-4">
                    {allImages.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedImage(idx)}
                            className={`relative h-20 w-20 overflow-hidden rounded-card-kawaii border-2 transition-soft ${selectedImage === idx
                                ? "border-[var(--accent-vibrant)] shadow-kawaii scale-110"
                                : "border-transparent bg-white hover:border-[var(--accent-soft)]"
                                }`}
                        >
                            <Image
                                src={img}
                                alt={`${productName} view ${idx + 1}`}
                                fill
                                className="object-cover p-2"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
