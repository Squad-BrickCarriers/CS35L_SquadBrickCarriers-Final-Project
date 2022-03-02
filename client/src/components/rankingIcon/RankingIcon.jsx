import "./rankingIcon.css"
import {Whatshot} from "@material-ui/icons"
import { useState } from "react"

export default function RankingIcon(props){
    const[rank, setRank] = useState(false)
    const rankHandler = (e) =>{
        setRank(!rank);
        sort(props.data,e.target.value);
    }

    function sort(data, type) {
        let tempData;
        if (rank)
        {
          tempData = [...data];
          tempData.sort(function(a,b) { 
            if(a["likes"] <= b["likes"])
              return -1;
            else
              return 1;
          });
          props.onChange(0, tempData);
        }
    }
    return(
        <Whatshot onClick={rankHandler} className="rank"/>
    )
}