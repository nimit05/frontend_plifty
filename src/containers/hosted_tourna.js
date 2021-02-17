import React , {useEffect, useState} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import down from '../images/down.svg'

const Hosted_Tourna = () => {
    const [Tdata , setTdata] = useState({tourName : "" , venue : "" , description : ""})
    const [Tourna , setTourna] = useState([])

    const GetTourna = () => {
        fetch('/api/tourna').then(res => res.json())
        .then((data) => {
            if(data.error){
                alert('error occured in getting')
            }
            else if(data){
                setTourna(data)
            }
        })
    }

    const handleStatus = (id) => {
        fetch('/api/tourna/active' , {
            method : "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({Id : id})
        }).then((res) => res.json())
        .then((data) => {
            if(data.error){
                alert('error occured')
            }else if(data){
                alert('changed')
            }
        })
    }

    useEffect(() => {
        GetTourna()
    },[])

    const HandleCreate = () => {
    fetch('/api/tourna' , {
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Tdata)
    }).then((res) => res.json())
    .then((data) => {
        if(data.error){
            alert('error occured')
        }else if(data){
            GetTourna()
        }
    })
    }
    return(
        <div className = "hosted_tourna">
            <div className = "hosted_empty">
                    <span className = "msg">
                        Host Your Own Tournament
                    </span>
                    <Popup
                        trigger={<button className="button"> Host One </button>}
                        modal
                        nested
                     >
                        {close => (
                        <div className="modal">
                            <button className="close" onClick={close}>
                            &times;
                            </button>
                            <div className="header"> Modal Title </div>
                            <div className="content">
                                <input placeholder = "Name" type = "text" onChange = {(e) => {
                                    setTdata({...Tdata , tourName : e.target.value})
                                }} />
                              
                                <input placeholder = "Venue" type = "text" onChange = {(e) => {
                                    setTdata({...Tdata , venue : e.target.value})
                                }}  />
                                <textarea placeholder = "Description" onChange = {(e) => {
                                    setTdata({...Tdata , description : e.target.value})
                                }}  />
                            </div>
                            <div className="actions">
                            <button
                                className="button"
                                onClick={() => {
                                console.log('modal closed ');
                                close();
                                HandleCreate()
                                }}
                            >
                                Create
                            </button>
                            </div>
                        </div>
                        )}
                    </Popup>
                </div>
                {Tourna.length > 0 &&
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
                        <div className = "t_status">
                            Status
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
                                <div className = "t_status">
                                    <select defaultValue = "open" onChange = {() => handleStatus(t.Id)}>
                                        <option value = "open" >open</option>
                                        <option value = "close">close</option>
                                    </select>
                                </div>
                            </div>
                        )
                    })}
                </div>
                }
        </div>
    )
}

export default Hosted_Tourna;