import React, { useRef, useEffect, useState } from 'react';

function getCurrentFrame(index) {
  return `./chips/${index.toString().padStart(3, '0')}.png`;
}


const ImageCanvas = () => {
    const numFrames = 150;
    const multiplier = 2;
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [frameIndex, setFrameIndex] = useState(2);
  
    useEffect(() => {
      const preloadImages = () => {
        const imageArray = [];
        let loadedImages = 0;
  
        const checkAllImagesLoaded = () => {
          if (loadedImages === numFrames) {
            setImages(imageArray);
          }
        };
  
        for (let i = 1; i <= numFrames; i++) {
          const img = new Image();
          const imgSrc = getCurrentFrame(i);
          img.onload = () => {
            loadedImages += 1;
            checkAllImagesLoaded();
          };
          img.src = imgSrc;
          imageArray.push(img);
        }
      };
  
      preloadImages();
  
      return () => {
        // Cleanup logic when the component is unmounted
        // For example, cancel any ongoing async operations or clear intervals
      };
    }, [numFrames]);
  
    useEffect(() => {
      const renderCanvas = () => {
        const context = canvasRef.current.getContext('2d');
        const container = canvasRef.current.parentElement;
        context.canvas.width = container.clientWidth;
        context.canvas.height = container.clientHeight;
      };
  
      renderCanvas();
  
      return () => {
        // Cleanup logic for the canvas when the component is unmounted
      };
    }, []);
  
    const handleScroll = () => {
      const scrollFraction = (window.scrollY/2) / (window.innerHeight);
      const index = Math.min(
        numFrames - 1,
        Math.ceil(scrollFraction * numFrames)
      );
    
      if (index <= 0 || index > numFrames) {
        return;
      }
    
      setFrameIndex(index);
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
      if (!canvasRef.current || images.length < 1) {
        return;
      }
  
      const context = canvasRef.current.getContext("2d");
      let requestId;
  
      let Iwidth =context.canvas.width;
      let Iheight = context.canvas.width;
      // Calculate the position to center the image within the canvas
    const centerX = (context.canvas.width - Iwidth) / 2;
    const centerY = 0;

      const render = () => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        context.drawImage(images[frameIndex],centerX,centerY,Iwidth,Iheight);
        requestId = requestAnimationFrame(render);
      };
  
      render();

      // console.log(frameIndex);
  
      return () => cancelAnimationFrame(requestId);
    }, [frameIndex, images]);

    // useEffect(() => {
    //   if (!canvasRef.current || images.length === 0) {
    //     return;
    //   }
  
    //   const context = canvasRef.current.getContext('2d');
    //   let requestId;
  
    //   const render = () => {
    //     context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    //     context.drawImage(images[frameIndex], 0, 0);
  
    //     // Increment the frame index for the next rendering cycle
    //     setFrameIndex((prevFrameIndex) => (prevFrameIndex + 1) % numFrames);
    //   };
  
    //   // Ensure that frameIndex is included as a dependency
    //   requestId = requestAnimationFrame(render);
  
    //   return () => {
    //     // Cleanup logic for the rendering loop when the component is unmounted
    //     cancelAnimationFrame(requestId);
    //   };
    // }, [frameIndex, images, numFrames]);
  
    return (
      <div
      id='imgseq-canvas'
        className="canvas-container"
      >
        <canvas id="responsive-canvas" ref={canvasRef} />
      </div>
    );
  };
  
  

export default ImageCanvas;
