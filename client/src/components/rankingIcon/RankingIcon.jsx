import "./rankingIcon.css"
import {Whatshot} from "@material-ui/icons"
import { useState } from "react"

export default function RankingIcon(props){
    const[rank, setRank] = useState(false)
    const rankHandler = (e) =>{
        setRank(!rank);
    }
    
    return(
        <Whatshot onClick={rankHandler} className="rank"/>
    )
}