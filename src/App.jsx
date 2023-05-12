import style from "./App.module.css";
import { Card } from "../components/Avatar/Card.jsx";
import { Header } from "../components/Agenda/Header";
import { Main } from "../components/Agenda/Main";

export function App() {

   const listStack = ['JavaScript', 'HTML', 'CSS', 'C#']

   return (
      <div className={style.container}>
         <Card
            cover='https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=50'
            avatar='https://github.com/germanotischler.png'
            name='Germano Tischler'
            office='Web Developer'
            stacks={listStack}
         />

         <div className={style.contatos}>
            <Main />
         </div>
   
      </div>
  );
}
