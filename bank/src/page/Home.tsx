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
    width: 420%;               /* 수정 필요 */
    height: 10%;               /* 수정 필요 */
`