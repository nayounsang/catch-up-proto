import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

const sortBenchmark: string[] = ["기준1", "기준2", "기준3"];

export default function SessionFilter() {
  const [curBenchmark, setCurBenchmark] = useState<string[]>([]);
  const handleChange = (event: SelectChangeEvent<typeof curBenchmark>) => {
    const {
      target: { value },
    } = event;
    setCurBenchmark(
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <FormControl sx={{ flex: 0.5 }}>
      <InputLabel id="filter">필터</InputLabel>
      <Select
        labelId="filter"
        multiple
        input={<OutlinedInput label="필터" />}
        value={curBenchmark}
        onChange={handleChange}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", gap: "0.5rem",overflowX:"scroll" }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
      >
        {sortBenchmark.map((e) => (
            <MenuItem key={e} value={e}><Chip label={e}/></MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
