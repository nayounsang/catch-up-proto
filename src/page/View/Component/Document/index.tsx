import { useCallback, useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "@/assets/02-BinarySearch.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import FabricPdf from "./component/FabricPdf";

pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`;

export default function MyDocument() {
  const [numPages, setNumPages] = useState<null | number>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isExcalidrawVisible, setIsExcalidrawVisible] = useState(false);
  const [pageElements, setPageElements] = useState<ExcalidrawElement[][]>([]);
  const [excalidrawAPI, setExcalidrawAPI] =
    useState<null | ExcalidrawImperativeAPI>(null);
  useEffect(() => {
    if (numPages) {
      setPageElements(Array.from({ length: numPages }, () => []));
    }
  }, [numPages]);
  const updatePageElementsCallback = useCallback(() => {
    setPageElements((prev) => {
      const updated = [...prev];
      if (excalidrawAPI) {
        updated[pageNumber] =
          excalidrawAPI.getSceneElements() as ExcalidrawElement[];
      }
      return updated;
    });
  }, [excalidrawAPI, pageNumber]);
  useEffect(() => {
    const intervalId = setInterval(updatePageElementsCallback, 5000);
    return () => clearInterval(intervalId);
  }, [updatePageElementsCallback]);
  useEffect(() => {
    // console.log(pageElements);
    if (excalidrawAPI) {
      excalidrawAPI?.updateScene({ elements: pageElements[pageNumber] });
    }
  }, [excalidrawAPI, pageElements, pageNumber, isExcalidrawVisible]);
  const onDocumentLoaded = ({ numPages }: { numPages: number | null }) =>
    setNumPages(numPages);
  return (
    <Document file={pdf} onLoadSuccess={onDocumentLoaded}>
      {numPages !== null && (
        <>
          <Page pageNumber={pageNumber} />
          <FabricPdf isExcalidrawVisible={isExcalidrawVisible}/>
          {/* <ExcaliPdf
            pageNumber={pageNumber}
            isExcalidrawVisible={isExcalidrawVisible}
            setExcalidrawAPI={setExcalidrawAPI}
            pageElements={pageElements}
          /> */}
        </>
      )}

      <Box display="flex" justifyContent="center" alignItems="center">
        <IconButton
          onClick={() => {
            setPageNumber((num) => (num > 1 ? num - 1 : num));
          }}
        >
          <ArrowLeft />
        </IconButton>
        <Typography>
          Page {pageNumber} of {numPages}
        </Typography>
        <IconButton
          onClick={() => {
            setPageNumber((num) =>
              numPages !== null && num < numPages ? num + 1 : num
            );
          }}
        >
          <ArrowRight />
        </IconButton>
        <Button
          onClick={() => {
            setIsExcalidrawVisible(!isExcalidrawVisible);
          }}
          size="large"
          variant="contained"
        >
          그림판 켜고 끄기
        </Button>
      </Box>
    </Document>
  );
}
