import styled from "styled-components";
import GetAccount from "../components/public/GetAccount";
import TransferMoney from "../components/public/TransferMoney";

const Home = () => {
    return(
        <div>
            <Container>
                <GetAccount />
                <TransferMoney />
            </Container>
            <Box />
            <Box />
            <Box />
            <Box />
            <ClearElement />
        </div>
    );
}
export default Home;

const Container = styled.div`
    display: flex;
    justify-content: c  
    enter;  /* 수평 가운데 정렬 */
    align-items: center;      /* 수직 가운데 정렬 */
    flex-flow: column wrap; /* 세로 정렬 */
`
const Box = styled.div`
    float: left;
    width: 100px;
    height: 100px;
    border: 1px solid black;
`
const ClearElement = styled.div`
    clear: both;
    width: 100px;
    height: 100px;
    border: 1px solid black;
`