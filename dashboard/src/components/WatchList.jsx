import { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";


const WatchList = () => {
    return (
        <div className="watchlist-container">
            <div className="search-container">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
                    className="search"
                />
                <span className="counts"> {watchlist.length} / 50</span>
            </div>

            <ul className="list">
                {watchlist.map((stock, index) => {
                    return (
                        <WatchListItem stock={stock} key={index} />);
                })}
            </ul>
        </div>
    );
};

export default WatchList;


const WatchListItem = function ({ stock, key }) {
    const [showWatchListActions, setShowWatchListActions] = useState(false);
    const handleMouseEnter = function (e) {
        setShowWatchListActions(true);
    }
    const handleMouseLeave = function (e) {
        setShowWatchListActions(false);
    }

    return (
        <li key={key} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="item">
                <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
                <div className="itemInfo">
                    <span className="percent">{stock.percent}</span>
                    {stock.isDown ? (<KeyboardArrowDown className="down" />) : (<KeyboardArrowUp className="down" />)}
                    <span className="price">{stock.price}</span>
                </div>
            </div>
        </li>
    );
}
