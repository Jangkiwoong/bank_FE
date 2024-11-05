import styled from "styled-components";

const Home = () => {
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

export default Home;

const CenteredContainer = styled.div`
    border: 1px solid black;
    display: flex;
    justify-content: center;
    width: 100%;
    height:100%;
`;

const Container = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start; /* 왼쪽 정렬 */
    width: 50%;
    height: 30%;
`;

const Box = styled.div`
    flex-shrink: 1;
    align-self: stretch;
    width: 100px;
    height: 100px;
    margin: 5px;
    border: 1px solid black;
`;
