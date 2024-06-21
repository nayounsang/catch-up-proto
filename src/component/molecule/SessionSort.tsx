import { FormControl, InputLabel, NativeSelect, Typography } from "@mui/material";

export default function SessionSort() {
  return (
    <FormControl sx={{ flex: 0.5 }}>
      <InputLabel variant="standard" htmlFor="sort">
        정렬 기준
      </InputLabel>
      <NativeSelect
        defaultValue={"latest"}
        inputProps={{
          name: "sort",
          id: "sort",
        }}
      >
        <option value={"latest"}><Typography>최신순</Typography></option>
        <option value={"others"}><Typography>다른것</Typography></option>
      </NativeSelect>
    </FormControl>
  );
}
