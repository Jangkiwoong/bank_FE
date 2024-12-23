import styled from "styled-components";

const TestFlex = () => {
    return (
        <div>
            <CenteredContainer>
                <Container>
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                </Container>
            </CenteredContainer>
        </div>
    );
}

export default TestFlex;

const CenteredContainer = styled.div`
    border: 1px solid black;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    width: 46.4%;
    border: 1px solid black;
    margin: 10px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
`;

const Box = styled.div`
    flex-shrink: 1;
    align-self: stretch;
    width: 100px;
    height: 100px;
    margin: 5px;
    border: 1px solid black;
`;
