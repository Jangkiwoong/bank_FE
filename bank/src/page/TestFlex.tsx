import styled from "styled-components";
import GetAccount from "../components/public/GetAccount";
import TransferMoney from "../components/public/TransferMoney";

const Home = () => {
    return(
        <div>
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
            </Container>
        </div>
    );
}
export default Home;

const Container = styled.div`
    border: 1px solid black;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: space-evenly;
    
    width: 59.6%;
    height: 500px;
`
const Box = styled.div`
    width: 100px;
    height: 100px;
    margin: 5px;
    border: 1px solid black;
`