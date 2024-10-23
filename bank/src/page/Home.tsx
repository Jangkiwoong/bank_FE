import styled from "styled-components";
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Accounts {
    id: number;
    account: string;
    money: number;
}
interface ApiResponse {
    message: string;
    data: Accounts[];
}

const Home = () => {
    const [accounts, setAccounts] = useState<ApiResponse | null>(null);

    useEffect(() => {
        const accountData = async () =>{
            try{
                const response = await axios.get<ApiResponse>("http://localhost:8080/get/all/accounts");
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
                <AccountsContainer key={accounts.id}>
                    <Accounts >{accounts.id}</Accounts>
                    <Accounts >{accounts.account}</Accounts>
                    <Accounts >{accounts.money}</Accounts>
                </AccountsContainer>
            ))}
        </Container>
    );
}
export default Home;

const Container = styled.div`
    
`
const Accounts = styled.p`
`
const AccountsContainer = styled.div`
`