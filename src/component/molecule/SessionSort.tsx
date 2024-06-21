import { FormControl, InputLabel, NativeSelect } from "@mui/material";

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
        <option value={"latest"}>최신순</option>
        <option value={"others"}>다른것</option>
      </NativeSelect>
    </FormControl>
  );
}
