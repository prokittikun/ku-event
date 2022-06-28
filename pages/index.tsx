import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Search from "components/SearchBar";
import EventMenu from "components/EventMenu";

const Container = styled.div`
    ${tw`flex p-5`}
`;

const Index: React.FC = () => {
    return (
        <div className="max-w-2xl bg-green-400 h-screen mx-auto">
            <Container className="justify-center pt-5">
                <Search />
            </Container>
            <Container className="justify-start">
                <EventMenu />
            </Container>
        </div>
    );
};

export default Index;
