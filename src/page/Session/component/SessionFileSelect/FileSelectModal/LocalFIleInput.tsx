import { Box, Paper, Typography } from "@mui/material";
import { useDropzone } from "react-dropzone";

export default function LocalFileInput() {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
    },
  });

  return (

    <Paper
      elevation={3}
      sx={{ padding: "1rem", textAlign: "center", flexGrow: 1,marginTop:"1rem" }}
    >
      <Box
        {...getRootProps()}
        sx={{
          border: "2px dashed #ccc",
          borderRadius: "5px",
          padding: "20px",
          cursor: "pointer",
          backgroundColor: isDragActive ? "#f0f0f0" : "transparent",
          display:"flex",
          alignItems:"center",
          textAlign:"center",
          justifyContent:"center",
          height:"100%"
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <Typography variant="h6" color="primary">
            Drop the files here...
          </Typography>
        ) : (
          <Typography variant="h6" color="textSecondary">
            파일 드래그 & 드롭
          </Typography>
        )}
      </Box>
    </Paper>
  );
}
