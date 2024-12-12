import Modal from "react-modal";
import { ButtonContainer, Container } from "./style";
import { ArrowDown, ArrowUp } from "lucide-react";

const rootElement : any = document.getElementById('root');
Modal.setAppElement(rootElement);


interface TransactionModalProps {
    states : {
        isOpen : boolean 
    }
    isTransactionOpen: () => void ;
    isTransactionClose: () => void ;
}

export function NewTransactionsModal( { states : { isOpen } , isTransactionOpen, isTransactionClose } : TransactionModalProps) {
    
     
    
    return (

        
  <Modal
  className="modal" 
  isOpen={ isOpen }
  onRequestClose={ isTransactionClose }
  contentLabel="Example Modal"
>

  <h2>Cadastrar transação</h2>
  <button onClick={ isTransactionClose }>close</button>
  <div>I am a modal</div>

<Container>
      <div>
        <label htmlFor="">Título</label>
        <input type="text" id="title"/>
      </div>
      <div>
        <label htmlFor="">Preço</label>
        <input type="text" id="price"/>
      </div>
      
      <ButtonContainer>
        <button>
            <ArrowUp/>
            <p>Entrada</p>
        </button>

        <button >
            <ArrowDown/>
            Saída
        </button>
      </ButtonContainer>

      <div>
        <label htmlFor="category">Category</label>
        <input type="text" id="category" />       
      </div>

      <div>
        <button
        >Cadastrar
        </button>
      </div>
      
</Container>
    

</Modal>
    );
}