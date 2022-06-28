import styled from "@emotion/styled";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SeachBar = styled.input`
    ::placeholder {
        color: #e6e6e6;
    }
`;

interface Props {}

const Search: React.FC<Props> = () => {
    return (
        <>
            <SeachBar
                placeholder="Search"
                className="input input-lg w-full bg-green-500 text-white font-bold text-2xl rounded-[1.3rem]"
            />
        </>
    );
};

export default Search;
