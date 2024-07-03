import { Excalidraw } from "@excalidraw/excalidraw";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";
import { Box, styled } from "@mui/material";
import { useEffect, useRef } from "react";
import { Page } from "react-pdf";
interface PropType {
  pageNumber: number;
  isExcalidrawVisible: boolean;
  setExcalidrawAPI: React.Dispatch<
    React.SetStateAction<ExcalidrawImperativeAPI | null>
  >;
  pageElements: ExcalidrawElement[][];
}

export default function ExcaliPdf({
  pageNumber,
  isExcalidrawVisible,
  setExcalidrawAPI,
  pageElements,
}: PropType) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef.current === null) {
      return;
    }
    const context = canvasRef.current.getContext("2d");
    if (context === null) {
      return;
    }
    if (pageElements[pageNumber] === undefined) {
      return;
    }
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    pageElements[pageNumber].map((element) => {
      if (element.type === "freedraw") {
        context.fillStyle = element.fillStyle;
        context.strokeStyle = element.strokeColor;
        context.lineWidth = element.strokeWidth;
        context.beginPath();
        context.moveTo(
          element.x + element.points[0][0],
          element.y + element.points[0][1]
        );
        element.points.forEach((point) => {
          context.lineTo(element.x + point[0], element.y + point[1]);
        });
        context.stroke();
      } else if (element.type === "text") {
        context.font = `${element.fontSize}px`
        context.textAlign = element.textAlign as CanvasTextAlign
        context.fillStyle = element.fillStyle
        context.strokeText(element.originalText,element.x,element.y);
      }
    });
  }, [pageElements, pageNumber]);
  return (
    <>
      <Page pageNumber={pageNumber} />
      <Canvas ref={canvasRef} width={960} height={540} />
      {isExcalidrawVisible && (
        <Box
          sx={{
            width: "960px",
            height: "540px",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <Excalidraw
            initialData={{
              elements: pageElements[pageNumber],
              appState: {
                viewBackgroundColor: "#ffffff00",
              },
            }}
            excalidrawAPI={(api) => {
              setExcalidrawAPI(api);
            }}
          ></Excalidraw>
        </Box>
      )}
    </>
  );
}

const Canvas = styled("canvas")(() => ({
  width: "960px",
  height: "540px",
  position: "absolute",
  top: 0,
  left: 0,
}));
