import React, { useState, useEffect } from "react";
import Error from "../Error/error";
import "./third.css";
import axios from "axios";

const Branches = () => {
    const [filiali, setFiliali] = useState([]);
    const [filteredFiliali, setFilteredFiliali] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getService();
    }, []);

    const getService = async () => {
        try {
            const response = await axios.get('http://10.247.16.47:3000/Bran.json');
            //  http://localhost:3000/Bran.json   localhost:8080/filials
            setFiliali(response.data.filiali);
            setFilteredFiliali(response.data.filiali);
            setError(null);
        } catch (error) {
            setError(error); // Устанавливаем ошибку в состояние
        }
    }

    const filterByLocation = (location) => {
        const filtered = filiali.filter(item => item.location === location);
        setFilteredFiliali(filtered);
    };

    const regions = [
        { id: 1, name: "Минск", location: "loc1" },
        { id: 2, name: "Минская обл.", location: "loc2"},
        { id: 3, name: "Гродненская обл.", location: "loc3"},
        { id: 4, name: "Гомельская обл.", location: "loc4"},
        { id: 5, name: "Могилевская обл.", location: "loc5"},
        { id: 6, name: "Брестская обл.", location: "loc6"},
        { id: 7, name: "Витебская обл.", location: "loc7"}
    ];

    return (
        <div className={"container__third__all"}>
            {error ? (
                    <Error error={error} />
                ) : (
            <><div className={"container__first"}>
                        <button onClick={getService} className={"button button__branches"}>Получить данные</button>
                    </div><table className={"table__oblasti"}>
                            <tbody>
                                <tr className={"oblasti"}>
                                    {regions.map(region => (
                                        <td key={region.id} onClick={() => filterByLocation(region.location)}>
                                            {region.name}
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table><table className={"table__vivod"}>
                            <thead>
                                <tr>
                                    <th>Название</th>
                                    <th>Адрес</th>
                                    <th>Телефон</th>
                                    <th>Время Работы</th>
                                    <th>Рейтинг</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredFiliali.map(filial => (
                                    <tr key={filial.id} className="rate__item">
                                        <td className="tbody__td">{filial.name}</td>
                                        <td className="tbody__td">{filial.address}</td>
                                        <td className="tbody__td">{filial.phone}</td>
                                        <td className="tbody__td">{filial.work}</td>
                                        <td className="tbody__td">{filial.rating}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table></>
             )}
        </div>
    );
}

export default Branches;
