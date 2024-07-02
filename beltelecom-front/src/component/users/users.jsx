import React, { useState } from "react";
import axios from "axios";
import Error from "../Error/error";
import "./second.css"
import Vk from "../../img/vk.png"
import Facebook from "../../img/facebook.png"
import Instagram from "../../img/instagram.png"
import Twitter from "../../img/twitter.png" 

const Users = () => {

    const [user, setUser] = useState([]);
    const [error, setError] = useState(null);


    const getUsers = async () => {
        try {
            const response = await axios.get('http://10.247.16.47:3000/Users.json');
            // http://localhost:3000/Users.json   localhost:8080/users
            setUser(response.data.users);
            setError(null);
        } catch (error) {
            setError(error);
        }
    }

    return(
        <div className={"container__second__all"}>
            {error ? (
                    <Error error={error} />
                ) : (
            <div className={"container__second"}>
                <button className={"button button__user"} onClick={getUsers}>Получить данные</button>

            <div className={"User"}>            
                {user.map(user => (
                        <div key={user.id} className="User__card">
                            <img className="User__photo" src={user.photo} alt={user.name} />
                            <h3 className={"Name"}>{user.name}</h3>
                            <p className={"Info"}>{user.description}</p>

                            <div className="Social">
                                {user.networks.map(network => (
                                    <div key={network.network} className="Icon2">
                                        <a href={network.url} target="_blank">
                                            {network.network === 'Twitter' ? <img className="Icon" src={Twitter} alt={"Twitter"} /> : console.log('')}
                                            {network.network === 'VK' ? <img className="Icon" src={Vk} alt={"Vk"} /> : console.log('')}
                                            {network.network === 'Facebook' ? <img className="Icon" src={Facebook} alt={"Facebook"} /> : console.log('')}
                                            {network.network === 'Instagram' ? <img className="Icon" src={Instagram} alt={"Instagram"} /> : console.log('')}
                                        </a>
                                    </div>
                                ))}
                            </div>

                        </div>
                ))}
            
                    </div>
                </div>
            )}
        </div>
    );
}

export default Users;