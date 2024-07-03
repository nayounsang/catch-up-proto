import { Box, Button } from "@mui/material";
import { Canvas, FabricObject, Object, PencilBrush, Point } from "fabric";
import { useCallback, useEffect, useRef, useState } from "react";

interface PropType {
  pageNumber?: number;
  isExcalidrawVisible: boolean;
}

export default function FabricPdf({ isExcalidrawVisible }: PropType) {
  //const canvasContainerRef = useRef(null);
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState<null | Canvas>(null);
  const [activeTool, setActiveTool] = useState("pen");
  const [lastDrawnObject, setLastDrawnObject] = useState<null | FabricObject>(
    null
  );
  const [canvasData, setCanvasData] = useState<JSON[]>([]);
  console.log(lastDrawnObject);

  useEffect(() => {
    if (canvasRef.current === null) {
      return;
    }
    const newCanvas = new Canvas(canvasRef.current, {
      width: 960,
      height: 540,
    });
    newCanvas.on("object:added", (event) => {
      setLastDrawnObject(event.target as FabricObject);
    });

    setCanvas(newCanvas);

    // 언마운트 시 캔버스 정리, 이벤트 제거
    return () => {
      void newCanvas.dispose();
    };
  }, [isExcalidrawVisible]);
  const handleSelectTool = useCallback(() => {
    if (canvas === null) {
      return;
    }
    canvas.isDrawingMode = false;
    canvas.selection = true;
    canvas.defaultCursor = "default";
  }, [canvas]);
  const handlePenTool = useCallback(() => {
    if (canvas === null) return;
    canvas.isDrawingMode = true;
    if (canvas.freeDrawingBrush) {
      canvas.freeDrawingBrush.width = 5;
      canvas.freeDrawingBrush.color = "#000";
    } else {
      const brush = new PencilBrush(canvas);
      brush.width = 5;
      brush.color = "#000";
      canvas.freeDrawingBrush = brush;
    }
  }, [canvas]);
  const handleHandTool = useCallback(() => {
    if (canvas === null) return;
    canvas.isDrawingMode = false;
    canvas.selection = false;
    canvas.defaultCursor = "move";

    let panning = false;
    const handleMouseDown = () => {
      panning = true;
    };
    const handleMouseMove = (event) => {
      if (panning) {
        const delta = new Point(event.e.movementX, event.e.movementY);
        canvas.relativePan(delta);
      }
    };
    const handleMouseUp = () => {
      panning = false;
    };
    canvas.on("mouse:down", handleMouseDown);
    canvas.on("mouse:move", handleMouseMove);
    canvas.on("mouse:up", handleMouseUp);
  }, [canvas]);
  useEffect(() => {
    if (!canvasRef.current || !canvas) return;
    canvas.off("mouse:down");
    canvas.off("mouse:move");
    canvas.off("mouse:up");
    switch (activeTool) {
      case "select":
        handleSelectTool();
        break;

      case "pen":
        handlePenTool();
        break;

      case "hand":
        handleHandTool();
        break;
    }
  }, [activeTool, canvas, handleHandTool, handlePenTool, handleSelectTool]);

  const saveCanvasData = () => {
    if (canvas) {
      const data = canvas.toJSON();
      setCanvasData(data);
    }
  };

  const loadCanvasData = () => {
    if (canvas && canvasData) {
      canvas.loadFromJSON(canvasData, canvas.renderAll.bind(canvas), (o, object) => {
        console.log('Object loaded:', object);
      });
    }
  };


  return (
    <>
      {isExcalidrawVisible && (
        <Box
          sx={{
            width: "960px",
            height: "540px",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2,
          }}
        >
          <canvas ref={canvasRef} width={960} height={540} />
        </Box>
      )}

      <Box>
        <Button
          onClick={() => setActiveTool("select")}
          disabled={activeTool === "select"}
        >
          select
        </Button>
        <Button
          onClick={() => setActiveTool("pen")}
          disabled={activeTool === "pen"}
        >
          pen
        </Button>
        <Button
          onClick={() => setActiveTool("hand")}
          disabled={activeTool === "hand"}
        >
          hand
        </Button>
      </Box>
    </>
  );
}
