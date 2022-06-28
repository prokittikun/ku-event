import React from "react";

interface Props {}

const EventMenu: React.FC<Props> = () => {
    return (
        <>
            <div className="flex gap-5 text-2xl text-white">
                <div className="font-bold">Last Events</div>
                <div className="font-bold">Reccommend Events</div>
            </div>
        </>
    );
};

export default EventMenu;
