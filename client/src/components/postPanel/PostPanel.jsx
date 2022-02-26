import "./postPanel.css"
import {Whatshot} from "@material-ui/icons"
import { Link } from "react-router-dom";

export default function PostPanel(){
    return(
        <div className="postPanel">
            <div className="postPanelTop">
                <span className="panelText">What's going on recently:</span>
                
                {/*Whatshot is the FireIcon */}
                <Link to="/ranking"className="" >
                    <Whatshot className="rank"/>    
                </Link>
                

            </div>
        </div>
    )
}