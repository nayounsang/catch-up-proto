import { FormControl, Input, InputAdornment, InputLabel, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SessionSearch(){
    return(
        <FormControl sx={{ flex: 1 }}>
        <InputLabel htmlFor="search">제목으로 검색</InputLabel>
        <SearchInput
          placeholder="검색"
          id="search"
          fullWidth
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
        />
        </FormControl>
    )
}

const SearchInput = styled(Input)(() => ({}));