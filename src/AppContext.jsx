import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
    const [hover, setHover] = useState("");
    const [router, setRouter] = useState(null);
    const [mainButtonText, setMainButtonText] = useState(null);
    const [pageOrder, setPageOrder] = useState("");
    const [hideOrUnhideOrder, setHideOrUnhideOrder] = useState(null);
    const [hoverUnderlineColor, setHoverUnderlineColor] = useState(1);
    const [destinationHoverUnderlineColor, setDestonationHoverUnderlineColor] = useState(1);
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        fetch(`/routes.json`)
            .then(res => res.json())
            .then(data => {
                console.log(data.mainButton.text); // Temporarily
                setMainButtonText(data.mainButton.text);
            });
    }, []);

    const navigation  = [
        { page: "Home", order: "00", id: 1, path: ""},
        { page: "destination", order: "01", id: 2, path: "destination"},
        { page: "crew", order: "02", id: 3, path: "crew"},
        { page: "technology", order: "03", id: 4, path: "technology"},
    ]

    const destinationNavigation = [
        {page: "Moon", id: 1, path: "moon"},
        {page: "mars", id: 2,  path: "mars"}, 
        {page: "Europa", id: 3, path: "europa"}, 
        {page: "Titan", id: 4, path: "titan"}
    ]

    const mainButton = {
        text: "Explore"
    }

    const handleNavLinkClick = (id) => {
        setHoverUnderlineColor(id);

    };

    const handleDestinationNavLinkClick = (id) => {
        setDestonationHoverUnderlineColor(id);
    };

    const handleToggleMobileMenu = () => {
        setToggleMobileMenu(prevState => !prevState);
    };


    const value = {
        router,
        setRouter,
        hover,
        setHover,
        mainButtonText,
        setMainButtonText,
        pageOrder,
        setPageOrder,
        hideOrUnhideOrder,
        setHideOrUnhideOrder,
        hoverUnderlineColor,
        setHoverUnderlineColor,
        handleNavLinkClick,
        handleToggleMobileMenu,
        toggleMobileMenu,
        isOpen,
        navigation,
        mainButton,
        destinationNavigation,
        destinationHoverUnderlineColor,
        handleDestinationNavLinkClick,
        toggleMobileMenuIcons: toggleMobileMenu ? "close" : "hamburger" // Derived state
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext, AppProvider };
