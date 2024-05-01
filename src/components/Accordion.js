import { useState } from "react";
import {GoChevronDown, GoChevronLeft} from "react-icons/go";

function Accordion ({items}) {
    const [expandedIndex, setExpandedIndex] = useState();

    const handleClick = (index) => {
        setExpandedIndex(index);
        if (index === expandedIndex)
            setExpandedIndex();
    };

    const renderedItems = items.map( (item, index) => {
        const isExpanded = index === expandedIndex;

        const content = isExpanded && <div>{item.content}</div>;
        /*What JS does with the && operator is :
        it either gives the first falsy value (if falsey exists) or the last truthy value (if both are true.)
        So, in this expression, if isExpanded is true then we'll get back the div.
        else, we will get back 'false' which is not displayed by react. 
        so, we will just display this {content} */
        
        // const handleClick = () => {
        //     setExpandedIndex(index);
        // }
        const icon = <span className="border-b p-3"> {isExpanded ? <GoChevronDown/> : <GoChevronLeft/> }</span> 
        return ( 
            <div key = {item.id}>
                <div className="flex justify-between p-2 bg-gray-50 border-b items-center cursor-pointer" onClick={()=>handleClick(index)}>
                    {item.label} 
                    {icon}
                </div>
                <div className="pl-2">
                    {content}
                </div>
            </div>
        );
    });
    return <div className="border-x border-t rounded"> {renderedItems} </div>;
}

export default Accordion;