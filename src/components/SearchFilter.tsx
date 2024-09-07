import { InputAdornment, TextField } from '@mui/material';
import { useDebounce } from '../service/graphql/hooks';
import { useEffect, useState } from 'react';

interface SearchFilterProps {
  xsWidth?: string;
  smWidth?: string;
  mdWidth?: string;
  placeholder: string;
  setSearch: (value: string) => void;
  setPage: (value: number) => void;
}

const SearchFilter = ({
  xsWidth,
  smWidth,
  mdWidth,
  placeholder,
  setSearch,
  setPage,
}: SearchFilterProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const debouncedSearchTerm = useDebounce(searchTerm, 700);

  useEffect(() => {
    setSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, setSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setPage(0);
  };

  return (
    <TextField
      placeholder={placeholder}
      variant="outlined"
      sx={{
        width: {
          xs: xsWidth,
          sm: smWidth,
          md: mdWidth,
          maxWidth: '17.5rem',
        },
        backgroundColor: 'transparent',
        borderRadius: '12px',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'rgba(71, 80, 105, 1)',
          },
          '&:hover fieldset': {
            borderColor: 'rgba(71, 80, 105, 1)',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'rgba(71, 80, 105, 1)',
          },
          color: 'rgba(71, 80, 105, 1)',
          fontFamily: 'Poppins, sans-serif',
        },
        fontSize: '0.825rem',
      }}
      onChange={handleSearchChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                stroke="#475069"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 22L20 20"
                stroke="#475069"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchFilter;
