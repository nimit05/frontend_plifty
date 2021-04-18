import React , {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '250px',
          },
       '& label' : {
        color : 'rgb(201, 201, 201)'
       },
       
       '& label.Mui-focused': {
        color: '#FEA001',
      },
       '& .MuiInput-underline:after': {
        borderBottomColor: '#FEA001',
        color : 'white'
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        color : 'white'
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
        color : 'white'
      },
  
}
  }));
  



const Participate = () => {
    const { tourId } = useParams();
    const [data , setData] = useState({tourId : tourId , teamId : " "})
    const classes = useStyles();
    const handleCreate = () => {
        fetch('/api/tourna/participate' , {
            method : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if(!res.ok){
                alert('error occured')
            }else{
                window.location.href = "/tournaments"
            }
        }
        )}
    return(
        <div className = "host_one_tourna">
            <div className = "host_tourna_form">
                <div className = "sub_head">
                    Participate
                </div>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField 
                    id="standard-basic" 
                    label="Team Code" 
                    InputProps = {{
                        style : {
                            color : 'white',
                            marginBottom : '10px'
                        }
                    }}
                    onChange = {(e) => setData({...data ,teamId : e.target.value}) }
                        />
                     
                    <Button variant="contained" onClick = {handleCreate} >
                        Participate
                    </Button>
                </form>
            </div>
            
        </div>
    )
}

export default Participate