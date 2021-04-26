import React, {useState, useEffect} from "react"
import BDATE_DATA from './bdate.data';
import BDateCard from '../component/bdate-card.component';

const BDateInfo = () =>{
    console.log(BDATE_DATA);
    const[birthdayDate, setBirthdayDate] = useState()

    useEffect(() => {
        setBirthdayDate([BDATE_DATA])
    }, [])
    useEffect(() => {
        console.log(birthdayDate)
    }, [birthdayDate])
    return(
        <div className="bdate-info">
            {birthdayDate && birthdayDate.map(({id, ...moreBDateProps})=>(
                <BDateCard key={id}{...moreBDateProps}/>
            ))}
        </div>
    )
}

export default BDateInfo;