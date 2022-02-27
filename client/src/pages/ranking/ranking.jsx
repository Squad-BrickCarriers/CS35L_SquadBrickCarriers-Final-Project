// import Topbar from "../../components/topbar/Topbar";
// import Margin from "../../components/margin/Margin";
// import Feed from "../../components/feed/Feed";
// import Scrollbar from "../../components/scrollbar/Scrollbar";
import "./ranking.css"
import { Link } from "react-router-dom";
import sortedList from "../../components/sortedList/sortedList";

// Ranking page of posts
export default function Ranking() {
    return (
        <div className="Ranking">
            Ranking page is under construction

            <Link to="/" className="loginButton" >
                <button className="loginButton">
                    Home
                </button>
            </Link>

            {/*!FIXME section below is not working */}
            <sortedList
                products={[
                    { id: 1, name: 'Cheese', price: 4.9, stock: 20 },
                    { id: 2, name: 'Milk', price: 1.9, stock: 32 },
                    { id: 3, name: 'Yoghurt', price: 2.4, stock: 12 },
                    { id: 4, name: 'Heavy Cream', price: 3.9, stock: 9 },
                    { id: 5, name: 'Butter', price: 0.9, stock: 99 },
                    { id: 6, name: 'Sour Cream ', price: 2.9, stock: 86 },
                    { id: 7, name: 'Fancy French Cheese 🇫🇷', price: 99, stock: 12 },
                ]}
            />
        </div>
    );
}