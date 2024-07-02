import React from "react";
import Error from "../Error/error";
import "./first.css"
import axios from "axios";
import { useState } from "react";

const Rates = () => {

    const [rates, setRates] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://10.247.16.47:3000/Ex.json');
            // localhost:8080/tariffs    http://localhost:3000/Ex.json
            setRates(response.data.rates);
            setError(null);
        } catch (error) {
            setError(error);
        }
    }

    return(
        <div className={"container__first__all"}>
            {error ? (
                    <Error error={error} />
                ) : (
            <div className={"container__first"}>
                <button className={"button"} onClick={fetchData}>Получить данные</button>
        


                <div className={"vivod"}>
                    <table className="table">
                        <thead className="Head__Table__1">
                        <tr>
                            <th>Название</th>
                            <th>Скорость</th>
                            <th>Цена</th>
                            <th>Статус</th>
                        </tr>
                        </thead>
                        <tbody> 
                        {rates.map(rate => (
                            <tr key={rate.id} className="rate__item">
                                <td className="tbody__td">{rate.name}</td>
                                <td className="tbody__td">{rate.speed}</td>
                                <td className="tbody__td">{rate.price}</td>
                                <td className="tbody__td">{rate.status === true ? 'Активен' : 'Неактивен'}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    
                </div>
            </div>
                )}
        </div>
        
    );
}

export default Rates;