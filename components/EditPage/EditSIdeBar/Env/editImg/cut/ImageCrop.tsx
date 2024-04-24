// ImageCrop 컴포넌트 수정 버전
import { useRef, useState, useEffect } from "react";
import { Cropper } from "react-cropper";
import "cropperjs/dist/cropper.css";
import type { UploadFile, UploadProps } from "antd";
interface ImageCropProps {
  previewImage: string; // 추가된 props
  onCrop: (cropData: { url: string; corners: any }) => void; // 수정된 부분
  originfile: any;
}

const ImageCrop: React.FC<ImageCropProps> = ({
  previewImage,
  onCrop,
  originfile,
}) => {
  const cropperRef = useRef<HTMLImageElement>(null);
  const getCropData = () => {
    if (cropperRef.current) {
      const cropper = cropperRef.current.cropper;

      const croppedCanvas = cropper.getCroppedCanvas();
      if (croppedCanvas) {
        const croppedImage = croppedCanvas.toDataURL();
        //onCrop(croppedImage);

        // 크롭 박스 데이터를 가져옵니다.
        const cropBoxData = cropper.getCropBoxData();
        console.log(cropBoxData); // 이 객체에는 left, top, width, height 속성이 포함되어 있습니다.
        // 4구석 점의 위치를 계산할 수 있습니다.
        const corners = {
          left: cropBoxData.left,
          height: cropBoxData.height,
          top: cropBoxData.top,
          width: cropBoxData.width,
        };
        const croppedImageInfo = {
          url: croppedImage,
          corners: corners,
        };
        // 해당 객체를 상태 변수에 저장합니다.
        onCrop({ url: croppedImage, corners: corners });
      }
    }
  };

  return (
    <div>
      {previewImage && (
        <Cropper
          ref={cropperRef}
          src={previewImage}
          style={{ height: "100%", width: "100%" }}
          aspectRatio={NaN}
          guides={true}
          ready={() => {
            const cropper = cropperRef.current.cropper;
            // Now set the crop box data
            cropper.setCropBoxData({
              left: originfile.left,
              top: originfile.top,
              width: originfile.width,
              height: originfile.height,
            });
          }}
        />
      )}
      <button onClick={getCropData}>Crop Image</button>
    </div>
  );
};

export default ImageCrop;
