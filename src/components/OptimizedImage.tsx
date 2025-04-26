import React from 'react';
import { Suspense } from 'react';
import Loading from '@/components/Loading';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  priority = false 
}) => {
  return (
    <Suspense fallback={<Loading text="جاري تحميل الصورة..." />}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} object-cover`}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </Suspense>
  );
};

export default OptimizedImage;
