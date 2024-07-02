import React from "react";
import {NavLink} from "react-router-dom";
import "./header.css";
import Photo from "../../img/beltelecom.png"
const Header = () => {
    return(
        <div className={"header"}>
            <ul className={"spisok"}>
                <img className="header__photo"src={Photo} alt="beltelecom1"/>
                <li>
                    <NavLink
                        className={"first__header"} to={"/rates"}>
                            Тарифы
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={"first__header"} to={"/users"}>
                            Пользователи
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={"first__header"} to={"/branches"}>
                            Филиалы
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Header;