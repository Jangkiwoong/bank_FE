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
        </div>
    );
}
export default Home;

const Container = styled.div`
    display: flex;
    justify-content: center;  /* 수평 가운데 정렬 */
    align-items: center;      /* 수직 가운데 정렬 */
    flex-flow: column wrap; /* 세로 정렬 */
`