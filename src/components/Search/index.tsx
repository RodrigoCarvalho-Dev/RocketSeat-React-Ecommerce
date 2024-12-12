import { Search } from "lucide-react";
import { MainConteiner, InputBox, ButtonGreen } from "./style";

export function Main() {
    return (
        <>
            <MainConteiner>
                <InputBox>
                    <div>
                        <input type="text"/>
                        <label htmlFor="">Busque uma transação</label>
                    </div>
                    <div>
                        <ButtonGreen>
                            <Search/>
                        </ButtonGreen>                       
                    </div>
                    
                </InputBox>
            </MainConteiner>        
        </>
    );
}