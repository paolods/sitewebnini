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
        <div className="flex flex-col gap-6">
            {/* Main Image Display */}
            <div className="relative mx-auto aspect-square w-full max-w-[500px] overflow-hidden rounded-full bg-muted shadow-lg">
                <Image
                    src={allImages[selectedImage]}
                    alt={productName}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Thumbnail Gallery */}
            {additionalImages.length > 0 && (
                <div className="flex justify-center gap-4 py-2">
                    {allImages.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedImage(idx)}
                            className={`relative h-20 w-20 overflow-hidden rounded-lg border-2 transition-all ${selectedImage === idx ? "border-teal-600 ring-2 ring-teal-600/20" : "border-transparent hover:border-teal-200"
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
