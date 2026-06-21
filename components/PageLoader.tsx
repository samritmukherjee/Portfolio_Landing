'use client';

import React, { useEffect, useState, useImperativeHandle, forwardRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

function shouldSkipLoader() {
  if (typeof window === 'undefined') return false;
  if (window.self !== window.top) return true;
  return new URLSearchParams(window.location.search).has('preview');
}

const PageLoader = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpening, setIsOpening] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [skipLoader, setSkipLoader] = useState(false);

  useEffect(() => {
    if (shouldSkipLoader()) {
      setSkipLoader(true);
      setIsVisible(false);
      return;
    }

    const mediaQuery = window.matchMedia('(max-width: 768px), (pointer: coarse)');
    const updateMobile = () => setIsMobile(mediaQuery.matches);
    updateMobile();
    mediaQuery.addEventListener('change', updateMobile);

    const timer = setTimeout(() => {
      handleClose();
    }, 1200);

    return () => {
      clearTimeout(timer);
      mediaQuery.removeEventListener('change', updateMobile);
    };
  }, []);

  const handleClose = () => {
    setIsOpening(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsOpening(false);
    }, 600);
  };

  const triggerLoader = () => {
    if (shouldSkipLoader()) return;
    setIsVisible(true);
    setIsOpening(false);
    setTimeout(() => {
      handleClose();
    }, 1500);
  };

  useImperativeHandle(ref, () => ({
    trigger: triggerLoader
  }));

  if (!isVisible || skipLoader) return null;

  const containerStyle = isMobile
    ? {
        opacity: isOpening ? 0 : 1,
        transform: isOpening ? 'scale(0.98)' : 'scale(1)',
        transition: 'opacity 520ms cubic-bezier(0.76, 0, 0.24, 1), transform 520ms cubic-bezier(0.76, 0, 0.24, 1)'
      }
    : {
        clipPath: isOpening ? 'circle(0% at 50% 50%)' : 'circle(150% at 50% 50%)',
        transition: 'clip-path 0.8s cubic-bezier(0.76, 0, 0.24, 1)'
      };

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#000004] page-loader"
      style={containerStyle}
    >
      <div className="flex flex-col items-center justify-center gap-12 sm:gap-16 md:gap-24">
         <div className="relative w-16 h-16 sm:w-20 sm:h-20 opacity-100 scale-100 transition-all duration-500">
           <Image
              src="https://res.cloudinary.com/duxrcy3jn/image/upload/q_auto/f_auto/v1777463452/SAMRIT_FEBICON_hxnczn.png"
              alt="Samrit Mukherjee - AI & ML Developer Logo"
              width={80}
              height={80}
              priority
              className="w-full h-full object-contain"
            />
         </div>

         <StyledWrapper>
            <div className="boxes">
              <div className="box">
                <div />
                <div />
                <div />
                <div />
              </div>
              <div className="box">
                <div />
                <div />
                <div />
                <div />
              </div>
              <div className="box">
                <div />
                <div />
                <div />
                <div />
              </div>
              <div className="box">
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
          </StyledWrapper>
      </div>
    </div>
  );
});


PageLoader.displayName = 'PageLoader';

const StyledWrapper = styled.div`
  .boxes {
    --size: 32px;
    --duration: 800ms;
    height: calc(var(--size) * 2);
    width: calc(var(--size) * 3);
    position: relative;
    transform-style: preserve-3d;
    transform-origin: 50% 50%;
    margin-top: calc(var(--size) * 1.5 * -1);
    transform: rotateX(60deg) rotateZ(45deg) rotateY(0deg) translateZ(0px);
    will-change: transform;
  }

  .boxes .box {
    width: var(--size);
    height: var(--size);
    top: 0;
    left: 0;
    position: absolute;
    transform-style: preserve-3d;
    will-change: transform;
    backface-visibility: hidden;
  }

  .boxes .box:nth-child(1) {
    transform: translate(100%, 0);
    animation: box1 var(--duration) linear infinite;
  }

  .boxes .box:nth-child(2) {
    transform: translate(0, 100%);
    animation: box2 var(--duration) linear infinite;
  }

  .boxes .box:nth-child(3) {
    transform: translate(100%, 100%);
    animation: box3 var(--duration) linear infinite;
  }

  .boxes .box:nth-child(4) {
    transform: translate(200%, 0);
    animation: box4 var(--duration) linear infinite;
  }

  .boxes .box > div {
    --background: #4f7cff;
    --top: auto;
    --right: auto;
    --bottom: auto;
    --left: auto;
    --translateZ: calc(var(--size) / 2);
    --rotateY: 0deg;
    --rotateX: 0deg;
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--background);
    top: var(--top);
    right: var(--right);
    bottom: var(--bottom);
    left: var(--left);
    transform: rotateY(var(--rotateY)) rotateX(var(--rotateX)) translateZ(var(--translateZ));
    box-shadow: none;
    will-change: transform;
    backface-visibility: hidden;
  }

  .boxes .box > div:nth-child(1) {
    --top: 0;
    --left: 0;
  }

  .boxes .box > div:nth-child(2) {
    --background: #6b8fd4;
    --right: 0;
    --rotateY: 90deg;
  }

  .boxes .box > div:nth-child(3) {
    --background: #8fa4fb;
    --rotateX: -90deg;
  }

  .boxes .box > div:nth-child(4) {
    --background: #b36a3f;
    --top: 0;
    --left: 0;
    --translateZ: calc(var(--size) * 3 * -1);
  }

  @media (max-width: 768px), (pointer: coarse) {
    .boxes {
      --size: 26px;
      --duration: 1000ms;
      transform: rotateX(55deg) rotateZ(45deg) translateZ(0px);
    }
  }

  @keyframes box1 {
    0%, 50% {
      transform: translate(100%, 0);
    }

    100% {
      transform: translate(200%, 0);
    }
  }

  @keyframes box2 {
    0% {
      transform: translate(0, 100%);
    }

    50% {
      transform: translate(0, 0);
    }

    100% {
      transform: translate(100%, 0);
    }
  }

  @keyframes box3 {
    0%, 50% {
      transform: translate(100%, 100%);
    }

    100% {
      transform: translate(0, 100%);
    }
  }

  @keyframes box4 {
    0% {
      transform: translate(200%, 0);
    }

    50% {
      transform: translate(200%, 100%);
    }

    100% {
      transform: translate(100%, 100%);
    }
  }
`;

export default PageLoader;
