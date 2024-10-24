import styled from "styled-components";
import axios from 'axios';

const TransferMoney = () => {
    const transfer = () => {
        const transferData = async () =>{
            try{
                    await axios.put("http://localhost:8080/api/update/send/money",
                    {
                        myAccount: "1111-1111-1111",
                        relativeAccount: "0000-0000-0000",
                        transferMoney: 1000, // 예시 송금액
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });

            } catch (e) {
                console.error("요청 에러 : ", e);
            }
        };
        transferData();
        window.location.reload();
    }
    return(
        <Container>
            <TransferBtn onClick={transfer}>송금</TransferBtn>
        </Container>
    );
}
export default TransferMoney;

const Container = styled.div`
    margin-top: 10px
    
`
const TransferBtn = styled.button`
    
`