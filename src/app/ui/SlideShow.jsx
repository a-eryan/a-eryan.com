"use client";
import { useState } from "react";
import Image from "next/image";

export default function SlideShow({ slidesSources }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative"> {/*coordinate space filled up by non absolutely positioned elements */}
        <Image src={slidesSources[currentIndex]}  width={3200} height={2100} alt={`Slide ${currentIndex + 1}`} className="w-full h-auto object-cover" />
					{/*absolute: removed from the document flow entirely 
						top-1/2: Positioned 50% from the top
						left-0 / right-0: Anchored to left/right edge
						transform -translate-y-1/2 - Moves up by 50% of button height (vertically centers it)					
					*/}
        <button
          onClick={() => setCurrentIndex((currentIndex - 1 + slidesSources.length) % slidesSources.length)}
          className={`absolute top-1/2 left-0 transform -translate-y-1/2 p-2 shadow-win95-button active:shadow-win95-active`}
        >
          &#10094;
        </button>
        <button
          onClick={() => setCurrentIndex((currentIndex + 1) % slidesSources.length)}
          className={`absolute top-1/2 right-0 transform -translate-y-1/2 p-2 shadow-win95-button active:shadow-win95-active`}
        >
          &#10095;
        </button>
      </div>
    </div>
    )

}
