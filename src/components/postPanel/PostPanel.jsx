import "./postPanel.css"
import {Whatshot} from "@material-ui/icons"

export default function PostPanel(){
    return(
        <div className="postPanel">
            <div className="postPanelTop">
                <span className="panelText">What's going on recently:</span>
                <Whatshot className="rank"/>
            </div>
        </div>
    )
}