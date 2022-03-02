import "./postPanel.css"
import { Link } from "react-router-dom";
import RankingIcon from "../rankingIcon/RankingIcon";

export default function PostPanel(){
    return(
        <div className="postPanel">
            <div className="postPanelTop">
                <span className="panelText">What's going on recently:</span>
                
                {/*Whatshot is the FireIcon */}
                <Link to="/ranking" style={{ textDecoration: 'none' }}>
                    <RankingIcon/>    
                </Link>
                

            </div>
        </div>
    )
}