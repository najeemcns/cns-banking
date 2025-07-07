import  { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import jsQR from "jsqr";
import { useNavigate } from "react-router-dom";
import "../assets/BarcodeScanner.css";

const CardlessTransaction = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const webcamRef = useRef<any>(null);
  const [barcodeData, setBarcodeData] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (!webcamRef.current) return;

      const video = webcamRef.current.video;
      if (!video) return;

      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height);

      if (code) {
        navigate("/cardless-confirm");
        setBarcodeData(code.data);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="barcode-container">
      <h2 className="barcode-title">Scan the barcode in the ATM</h2>

      <div className="webcam-wrapper">
        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/jpeg"
          videoConstraints={{ facingMode: "environment" }}
          className="webcam-preview"
        />

        {/* Scanner Overlay */}
        <div className="overlay">
          <div className="overlay-window" />
        </div>

        {/* Loader */}
        {barcodeData && (
          <div className="loader-overlay">
            <div className="loader-spinner" />
          </div>
        )}
      </div>

      <p
        className="barcode-result"
        style={{
          color: barcodeData ? "#1890ff" : "#888",
        }}
      >
        {barcodeData ? `Scanned code: ${barcodeData}` : "No barcode detected yet"}
      </p>
    </div>
  );
};

export default CardlessTransaction;
