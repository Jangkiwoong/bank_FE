import styled from "styled-components";
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Account {
    id: number;
    account: string;
    money: number;
}
interface ApiResponse {
    message: string;
    data: Account[];
}

const Home = () => {
    const [accounts, setAccounts] = useState<ApiResponse | null>(null);

    useEffect(() => {
        const accountData = async () =>{
            try{
                const response = await axios.get<ApiResponse>("http://localhost:8080/api/get/all/accounts");
                setAccounts(response.data);
            } catch (e) {
                console.error("요청 에러 : ", e);
                setAccounts(null);
            }
        };
        accountData();
    },[])

    return(
        <Container>
            {accounts?.data.map(accounts => (
                <AccountContainer key={accounts.id}>
                    <Account >ID : {accounts.id}</Account>
                    <Account >계좌번호 : {accounts.account}</Account>
                    <Account >보유잔액 : {accounts.money}</Account>
                </AccountContainer>
            ))}
        </Container>
    );
}
export default Home;

const Container = styled.div`
    display: flex;
    justify-content: center;  /* 가로 중앙 정렬 */
    align-items: center;      /* 세로 중앙 정렬 */
    height: 100vh;            /* 화면 전체 높이 */
    flex-direction: column;
`
const Account = styled.p`
    padding: 10px;
`
const AccountContainer = styled.div`
      border: 1px solid white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;               /* 적절한 너비 설정 */
  max-width: 800px;
  /* padding: 15px; */
  gap: 30px;
`