import style from './Header.module.css';
import { IonIcon } from '@ionic/react';
import { add, pencil, trash, search } from 'ionicons/icons';
import { Main } from './Main';

export function Header() {

   return (
      <div className={style.container}>
         <div className={style.nav}>
            <div>
               <p className={style.title}>Meus contatos</p>
            </div>
            <div>
               <button id='add'><IonIcon icon={add} className={style.icons} /></button>
               <button id='edit'><IonIcon icon={pencil} className={style.icons} /></button>
               <button id='delete'><IonIcon icon={trash} className={style.icons} /></button>
            </div>
         </div>

         <form type='submit' className={style.search_bar}>
            <button className={style.btn_lupa}><IonIcon icon={search} className={style.lupa} /></button>
            <input id='input' type='search' autoComplete='off' placeholder='Busque por nome ou por dados de contato...' />
         </form>
      </div>
   )
};