import React from 'react'
import Link from '../components/UI/link/Link'
export default function MainPage() {
  return (
    <main className="main main-main"> 
        <div className="container">
            <div className="main__wrap">
                <div className="main__top">
                    <h1 className="main-title">Бюро пропавших велосипедов</h1>
                    <Link 
                        text="Сообщить о краже"
                        href="/message"
                        className="btn btn--header"
                    />
                </div>
                <div className="main__bottom">
                    <h2 className="main__doptitle">Если Вы нашли велосипед:</h2>
                    <p>Позвоните нам:</p>
                    <a className="main__bottom_link" href="tel:+78888888888">+7 (888) 888-88-88</a>
                    <p>Напишите нам:</p>
                    <a className="main__bottom_link" href="https://api.whatsapp.com/send?phone=<PHONE>">WhatsApp</a>
                    <a className="main__bottom_link" href="tg://msg?text=<?php echo urlencode( '<TEXT>' ); ?>">Telegram</a>
                    <a className="main__bottom_link" href="mailto:bicycle@mail.ru">bicycle@mail.ru</a>
                </div>
            </div>
        </div>
    </main>      
  )
}

