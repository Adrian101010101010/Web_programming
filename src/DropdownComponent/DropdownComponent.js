import React, {useState} from "react";
import SelectMenu from "./SelectMenu";
import SearchMenu from "./SearchMenu";
const DropdownMenu = () => {


    return (
        <div className="dropdown-menu">
            <SelectMenu/>
            <SearchMenu/>
            <button className={"viwe_more2"}>Apply</button>
        </div>
    );
};

export default DropdownMenu;
