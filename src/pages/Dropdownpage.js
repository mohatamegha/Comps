import Dropdown from "../components/Dropdown";
import { useState } from "react";

function DropdownPage () {
    const [selection, setSelection] = useState('Select');

    const handleSelect = (option) => {
        setSelection(option.label);
    };
    
    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Blue', value: 'blue'},
        {label: 'Pink', value: 'pink'},
    ];
    return <Dropdown options={options} value={selection} onChange = {handleSelect} />;
}
export default DropdownPage;