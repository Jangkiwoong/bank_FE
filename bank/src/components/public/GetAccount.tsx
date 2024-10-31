import styled from "styled-components";
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Account {
    id: number;
    userName: string;
    account: string;
    money: number;
}
interface ApiResponse {
    message: string;
    data: Account[];
}
const exampleResponse: ApiResponse = {
    message: "성공적으로 데이터를 가져왔습니다.",
    data: [
        {
            id: 1,
            userName: "JohnDoe",
            account: "123-456-789",
            money: 1500,
        },
        {
            id: 2,
            userName: "JaneSmith",
            account: "987-654-321",
            money: 3000,
        }
    ],
};

const GetAccount = () => {
    const [accounts, setAccounts] = useState<ApiResponse | null>(exampleResponse);

    useEffect(() => {
        const accountData = async () =>{
            try{
                const response = await axios.get<ApiResponse>("http://localhost:8080/api/get/all/account");
                setAccounts(response.data);
            } catch (e) {
                console.error("요청 에러 : ", e);
            }
        };
        accountData();
    },[])

    return(
        <Container>
            {accounts?.data.map(accounts => (
                <AccountContainer key={accounts.id}>
                    <Account >ID : {accounts.id}</Account>
                    <Account >NAME : {accounts.userName}</Account>
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