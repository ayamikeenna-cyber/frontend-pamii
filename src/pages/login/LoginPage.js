import './LoginPage.css'
import { createHeader } from '../../shared/Header.js'

const pageName = 'login';

class LoginPage extends HTMLElement {
    connectedCallback() {
        this.classList.add('ion-page');
        const cabecalho = createHeader(pageName);
        this.innerHTML = `
            ${cabecalho}
            <div class="container">
               <ion-card>
                   <ion-card-header>
                     <ion-card-title>Acessar</ion-card-title>
                  <ion-card-header>

                          <ion-card-content>
                             <ion-item> 
                             <ion-icon slot="start" name="person"></ion-icon>
                                   <ion-input type="text" id="usuario" placeholder="Usuario"></ion-input>
                             </ion-item>

                             <ion-item>
                             <ion-input type="password" id="senha" placeholder="Senha"></ion-input>
                             
                             </ion-item>

                       <ion-button expande="block" id="login" class="ion-margin-top"> Entrar </button>
                              
                          </ion-card-content>
               </ion-card>
            </div>
        `;
    }
}

customElements.define('login-page', LoginPage);