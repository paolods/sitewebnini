"use client";

import { useState } from "react";

interface SizeSelectorProps {
    sizes: string[];
}

export default function SizeSelector({ sizes }: SizeSelectorProps) {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    return (
        <div>
            <label className="mb-3 block text-sm font-medium">Taille</label>
            <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                    <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`rounded border px-4 py-2 text-sm font-medium transition-colors ${selectedSize === size
                            ? "border-teal-600 bg-teal-600 text-white"
                            : "border-input bg-background hover:border-teal-600"
                            }`}
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
    );
}
