import React , {useEffect , useState} from 'react';
import { NavLink } from 'react-router-dom';
import Participate from './participate';

const Active_Tourna = () => {
    const [Tourna , setTourna] = useState([])

    const GetTourna = () => {
        fetch('/api/tourna/active_tourna').then(res => res.json())
        .then((data) => {
            if(data.error){
                alert('error occured in getting')
            }
            else if(data){
                setTourna(data)
            }
        })
    }

    const handleParti = (id) => {
        fetch('/api/tourna/participate' , {
            method : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({tourId : id})
        }).then((res) => res.json())
        .then((data) => {
            if(data.error){
                alert('error occured')
            }else{
                alert('participated')
            }
        })
    }

    useEffect(() => {
        GetTourna()
    } , [])
    return(
        <div className = "hosted_tourna">
             <div className = "hosted_tourna_list">
                    <div className = "tourna_det_slide head_slide">
                        <div className = "t_name">
                            Name
                        </div>
                        <div className = "t_venue">
                            Venue
                        </div>
                        <div className = "t_des">
                            Description
                        </div>
                        <div className = "t_des">
                            Entry Fee
                        </div>
                        <div className = "partic_btn">

                        </div>
                    </div>
                    {Tourna.map((t , i) => {
                        return(
                            <div className = "tourna_det_slide">
                                <div className = "t_name">
                                    {t.TourName}
                                </div>
                                <div className = "t_venue">
                                    {t.Venue}
                                </div>
                                <div className = "t_des">
                                    {t.Description}
                                </div>
                                <div className = "t_des">
                                    {t.EntryFee}
                                </div>
                                <div className = "partic_btn">
                                        <button className = "button" onClick = {() => {
                                            window.location.href = `/tournaments/participate/${t.Id}`
                                        }}>
                                            participate
                                        </button>                                    
                                </div>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}

export default Active_Tourna;