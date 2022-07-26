import "./readMore.css";
import { useState } from "react";

    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore,setIsReadMore] = useState(true);
        const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <div className="text">
            {isReadMore ? text.slice(0, 100) : text}
                <span onClick={toggleReadMore} className="read-or-hide">{isReadMore ? "...read more >" : "< show less"}
                </span>
            
        </div>
    );
};

export default ReadMore;