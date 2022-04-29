import { ChangeEvent, FunctionComponent } from "react"
import { Station } from "../../../model/Station";
import { Search, SearchWrapper, SearchError, ResultList, Result } from './style';

export interface SearchInputProps {
  name: string;
  error?: string
  results: Station[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: FunctionComponent<SearchInputProps> = ({ name, error, results, onChange }) => {
  return (
    <SearchWrapper>
        <Search
          type="text"
          placeholder={ name }
          name={ name }
          onChange={ onChange }
          list={ name }
        />
        {
          results &&
          results.length > 0 &&
          <ResultList id={ name }>
            { results.map((data: Station) => (
                <Result
                  key={ data.name }
                  value={  data.name  }>
                    {  data.name  }
                  </Result>
              ))  }
          </ResultList>
        }

        <SearchError aria-labelledby={ `Input ${name} error` }>
          { error && error }
        </SearchError>
    </SearchWrapper>
    );
}

export default SearchInput;