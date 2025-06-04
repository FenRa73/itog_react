import React from "react";

function TopButton() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    return (
        <button className="upbutton" onClick={scrollToTop}>UP</button>
    );
}

export default TopButton;