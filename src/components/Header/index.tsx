import { HeaderContainer, Content , Title, Button } from "./styles";
 



interface HeaderProps {
  onOpenTransactionModal: () => void
}



export function Header( { onOpenTransactionModal } : HeaderProps ) {

    return (
        <>
                <HeaderContainer>
                    <Content>    
                        <Title>
                            <img src="./logo.svg" height={40} width={40} alt="" />
                            DT money
                        </Title>
                        <Button onClick={ () => { onOpenTransactionModal() }}>
                            Nova Transação
                        </Button>
                    </Content>
                </HeaderContainer>


          
        </>
    );
}