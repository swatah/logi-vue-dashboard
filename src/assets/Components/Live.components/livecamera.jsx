import React, { useRef, useEffect } from "react";

export default function LiveCamera() {
  const videoRef = useRef(null);

  useEffect(() => {
    const getCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing camera: ", err);
      }
    };

    getCamera();

    // Optional: Clean up when the component unmounts
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Live Camera View</h2>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="w-full max-w-md rounded shadow"
      />
    </div>
  );
}
