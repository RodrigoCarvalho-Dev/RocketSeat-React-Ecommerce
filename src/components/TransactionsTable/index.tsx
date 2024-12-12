import { useEffect } from "react";
import { Container, Information } from "./style";
import { api } from "../../services/api";

export function TransactionsTable() {


    useEffect(() => {
        api.get('http://localhost:3000/api/transactions');
    } , [] );

    return (
        <>
        <Information>
            <strong>Title</strong>
            <strong>Valor</strong>
            <strong>Categoria</strong>
            <strong>Data</strong>
        </Information>
        <Container>
            
        </Container>
        </>
    );
}