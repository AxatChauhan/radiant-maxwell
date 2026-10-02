import React from 'react';
import { KageLandingPage } from '../shaders/landing-pages/LandingPages';

interface KageSceneContainerProps {
  height?: string;
  isFullScreen?: boolean;
}

export const KageSceneContainer: React.FC<KageSceneContainerProps> = ({
  height = "h-[750px]",
  isFullScreen = false
}) => {
  return (
    <div className={`relative w-full overflow-hidden ${isFullScreen ? 'fixed inset-0 z-40 h-screen' : `${height} rounded-2xl border border-[#dfe7e0]/15 shadow-2xl`}`}>
      <div className="shader-frame w-full h-full">
        <KageLandingPage
          headingFont="onest"
          bodyFont="onest"
          headingWeight="400"
          bodyWeight="300"
          primaryColor="#e0231c"
          headingSize={46}
          bodySize={17}
          headingLetterSpacing={-0.012}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};
