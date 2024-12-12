import { Container } from "./style";
import { ArrowUp , ArrowDown , CircleDollarSign } from "lucide-react";


export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <ArrowUp color="#12A454"/>
                </header>
                <strong>R$ 5.000</strong>
                    <p>Última entrada em 13 de abril</p>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <ArrowDown color="#F75A68"/>
                </header>
                
                <strong>R$ 6.000</strong>
                <p>Última entrada em 10 de abril</p>
            </div>
            <div>
                    <header>
                    <p>Total</p>
                    <CircleDollarSign color="#E1E1E6"/>    
                    </header>
                <strong>R$ 10.000</strong>
                <p>De 15/03/22 até 13/04/22</p>
                
            </div>
        </Container>
    );
}