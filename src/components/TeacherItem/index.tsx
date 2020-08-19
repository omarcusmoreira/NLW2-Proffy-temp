import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

function TeacherItem() {
    return (
    <article className="teacher-item">
        <header>
            <img src="https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-9/70893098_10157407135924223_2238031162146553856_n.jpg?_nc_cat=105&_nc_sid=174925&_nc_eui2=AeHgZCKD_ioEewouTTyoQFEVzSxiOUVT1mTNLGI5RVPWZFeDUYEkM1zzrCOzhQUWrzU&_nc_ohc=NdCSuZqNi5gAX8RH-wK&_nc_oc=AQnIAqm-Iv0aDcQwXwO9Qq_Tafx0_XcHJzf4CT7NEY0BeaexwP2IM482TWk-4Mke0_KOH6MKM6Hf_wzxM30tNWu5&_nc_ht=scontent.fsjk2-1.fna&oh=e70ab7a8cb5ac6822dd3a4f68212a9ac&oe=5F618710" alt="Marcus Moreira"/>
            <div>
                <strong>
                    Marcus Moreira
                </strong>
                <span>
                    Javascript
                </span>
            </div>
        </header>

        <p>
            Entusiasta das melhores tecnoclogias de Javascript avançado.

            <br/><br/>

            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}

export default TeacherItem;