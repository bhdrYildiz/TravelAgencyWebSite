import React from "react";
import RoomsPage from "./Rooms";
import Nav from "@/components/Home/Navbar/Nav";

const Rooms = () => {
    return (
        <>
            <Nav fixed />
            <RoomsPage />
        </>
    );
};

export default Rooms;
