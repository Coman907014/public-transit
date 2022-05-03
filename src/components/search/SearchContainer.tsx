import { ChangeEvent, FunctionComponent, useCallback, useState } from "react"
import { Station } from "../../model/Station";
import SearchInput from "./searchInput/SearchInput";

interface SearchContainerProps {
  name: string;
  results: Station[];
  onChange: (newValue: string) => void;
  onSelect: (newValue: Station | undefined) => void;
}

const SearchContainer: FunctionComponent<SearchContainerProps> = ({ name, onChange, results, onSelect }) => {
  const [searchError, setSearchError] = useState<string>();

  const handleOnChangeValidation = useCallback((e: ChangeEvent<HTMLInputElement>) => {

    const isResultSelected: boolean = results.filter(result => result.name === e.target.value)?.length > 0
    const selectedResult: Station | undefined = results.find(result => result.name === e.target.value);

    if(isResultSelected) {
      return onSelect(selectedResult)
    }

    if(e.target.value.length < 3) {
      return setSearchError('Please, add at least three letters');
    };

    setSearchError(undefined);
    return onChange(e.target.value);

  }, [onChange, results, onSelect]);

  return (
    <SearchInput
      name={ name }
      error={ searchError }
      results={ results }
      onChange={ handleOnChangeValidation }
      />
    )
}

export default SearchContainer;