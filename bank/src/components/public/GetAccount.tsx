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

const GetAccount = () => {
    const [accounts, setAccounts] = useState<ApiResponse | null>(null);

    useEffect(() => {
        const accountData = async () =>{
            try{
                const response = await axios.get<ApiResponse>("http://localhost:8080/api/get/all/account");
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
                    {/* <Account >NAME : {accounts.}</Account> */}
                    <Account >계좌번호 : {accounts.account}</Account>
                    <Account >보유잔액 : {accounts.money}</Account>
                </AccountContainer>
            ))}
        </Container>
    );
}
export default GetAccount;
const Container = styled.div`
    width: 30%;
    max-height: 70vh; /* 최대 높이 설정 */
    overflow: hidden;
    overflow-y: auto; /* 스크롤 가능 */

    padding: 10px;

    border: 1px solid black;
    border-radius: 10px;
`;
const Account = styled.p`

`
const AccountContainer = styled.div`
    display: flex;
    flex-direction: row; /* 세로 정렬 */
    align-items: center;
    justify-content: space-between;

    border: 1px solid black;
    border-radius: 10px;
    gap: 30px;
    margin-top: 15px;
    padding: 20px; /* 여백 추가 */
`