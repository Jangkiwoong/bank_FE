import styled from "styled-components";
import GetAccount from "../components/public/GetAccount";

const Home = () => {
    return(
        <Container>
            <GetAccount />
        </Container>
    );
}
export default Home;

const Container = styled.div`
    display: flex;
    justify-content: center;  /* 수평 가운데 정렬 */
    align-items: center;      /* 수직 가운데 정렬 */
    flex-direction: column; /* 세로 정렬 */
`