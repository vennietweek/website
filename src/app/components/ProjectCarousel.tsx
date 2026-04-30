import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectCarouselProps {
  images: string[];
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 size-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-200"
      aria-label="Next image"
    >
      <ChevronRight className="size-5 text-[#1a1a1a]" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 size-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-200"
      aria-label="Previous image"
    >
      <ChevronLeft className="size-5 text-[#1a1a1a]" />
    </button>
  );
}

export function ProjectCarousel({ images }: ProjectCarouselProps) {
  const isVideo = (src: string) => {
    return src.endsWith('.mp4') || src.endsWith('.webm');
  };

  const settings = {
    dots: true,
    infinite: images.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: () => (
      <div className="w-2 h-2 rounded-full bg-[#d4d4d4] hover:bg-[#1a1a1a] transition-colors duration-200" />
    ),
    dotsClass: "slick-dots !bottom-4"
  };

  const renderMedia = (src: string, alt: string) => {
    if (isVideo(src)) {
      return (
        <div className="relative aspect-[9/16] rounded-2xl overflow-hidden">
          <video
            src={src}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      );
    }
    return (
      <div className="relative aspect-[9/16] rounded-2xl overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    );
  };

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center bg-gradient-to-br from-[#f5f5f5] to-[#e5e5e5] rounded-2xl aspect-[9/16]">
        <div className="text-center text-[#8a8a8a] text-sm">Add images to /public/assets</div>
      </div>
    );
  }

  if (images.length === 1) {
    return renderMedia(images[0], 'Project');
  }

  return (
    <div className="project-carousel">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-0">
            {renderMedia(image, `Project image ${index + 1}`)}
          </div>
        ))}
      </Slider>
    </div>
  );
}
