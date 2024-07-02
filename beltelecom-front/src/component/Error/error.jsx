import React from "react";
import Cat from "../../img/error2.jpg"
import "../rates/first.css"

const Error = ({ error }) => (
    <div>
        <h1 style={{
            fontSize: 50,
            marginBottom: 20,
            fontFamily: 'Roboto',
            textAlign: 'center'
        }}>Упс.<br/> Походу ошибка №{error.response ? error.response.status : 'неизвестно'}
        <br/>Попробуйте подключиться чуть позже!</h1>
        <div className="error__container">
        <img className={"Error"} src={Cat} alt={"Тут прикол!"}/>
        </div>
    </div>
);

export default Error;