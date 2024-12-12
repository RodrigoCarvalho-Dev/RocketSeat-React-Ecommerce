import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header/index";
import { NewTransactionsModal } from "./components/Modal/TransactionsModal";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";



function App() {

  
  const [IsTransactionOpen, setIsTransactionOpen ] = useState(false);


  function openModalTransaction() {
    setIsTransactionOpen(true);
  }

  function closeModalTransaction() {
    setIsTransactionOpen(false);
  }
   




  return (
    <>

  <Header
    onOpenTransactionModal={ openModalTransaction }
  />
  <Dashboard/> 
    <NewTransactionsModal
    states={ { isOpen : IsTransactionOpen } }
    isTransactionOpen={ openModalTransaction }
    isTransactionClose={ closeModalTransaction }
    />

  <GlobalStyle/>
    </>
 
  );
}

export default App;
