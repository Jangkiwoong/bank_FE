import styled from "styled-components";

const TestGrid = () => {
    return (
        <div>
            <CenteredContainer>
                {/* <Container>
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                </Container> */}
                <GridContainer>
                    <Header>헤더</Header>
                    <Main>메인</Main>
                    <Sidebar>사이드바</Sidebar>
                    <Footer>풋터</Footer>
                </GridContainer>
            </CenteredContainer>
        </div>
    );
}

export default TestGrid;

const CenteredContainer = styled.div`
    border: 1px solid black;
`;

const Container = styled.div`
    width: 46.4%;
    border: 1px solid black;
    margin: 10px;

    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);

`;

const Box = styled.div`
    align-self: stretch;
    width: 100px;
    height: 100px;
    margin: 5px;
    border: 1px solid black;
`;

const GridContainer = styled.div`
    height: 98vh;

    display: grid;
    /* grid-template-rows: repeat(3, 100px); */
    /* grid-template-columns: repeat(4, 100px); */
    /* grid-template: 
        "header header header" 1fr
        "main main sidebar" 1fr
        "main main sidebar" 1fr
        "footer footer footer" 1fr
        /1fr 1fr 1fr; */

    grid-template: 
        "header header header" 1fr
        "main main sidebar" 1fr
        "main main sidebar" 1fr
        "footer footer footer" 1fr
        /2fr 2fr 1fr;

    row-gap: 10px;
    column-gap: 10px;
`;

const Header = styled.div`
    grid-area: header; /* 'header' 영역에 배치 */
    border: 1px solid black;
`;

const Sidebar = styled.div`
    grid-area: sidebar; /* 'sidebar' 영역에 배치 */
    border: 1px solid black;
`;

const Main = styled.div`
    grid-area: main; /* 'main' 영역에 배치 */
    border: 1px solid black;
`;

const Footer = styled.div`
    grid-area: footer; /* 'footer' 영역에 배치 */
    border: 1px solid black;
`;