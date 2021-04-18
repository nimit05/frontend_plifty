import React , {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

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

const Host_Tourna = () => {
    const [data , setData] = useState({tourName : "" , venue : "" , description : "" , entry_fee : ""})
    const classes = useStyles();

    
    const HandleCreate = () => {
        fetch('/api/tourna' , {
            method : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((res) => res.json())
        .then((data) => {
            if(data.error){
                alert('error occured')
            }else{
                window.location.href = "/tournaments/hosted"
            }
        })
        }
    return (
        <div className = "host_one_tourna">
            <div className = "host_tourna_form">
                <div className = "sub_head">
                    Host Tournament
                </div>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField 
                    id="standard-basic" 
                    label="Tournament Name" 
                    InputProps = {{
                        style : {
                            color : 'white',
                            marginBottom : '10px'
                        }
                    }}
                    onChange = {(e) => setData({...data ,tourName : e.target.value}) }
                        />

                    <TextField 
                    id="standard-basic" 
                    label="Venue" 
                    InputProps = {{
                        style : {
                            color : 'white',
                            marginBottom : '20px'
                        }
                    }}
                    onChange = {(e) => setData({...data ,venue : e.target.value}) }

                        />

                    <TextField 
                    id="standard-basic" 
                    label="Entry Fee" 
                    InputProps = {{
                        style : {
                            color : 'white',
                            marginBottom : '10px'
                        }
                    }}
                    onChange = {(e) => setData({...data ,entry_fee : e.target.value}) }
                        />

                    <TextField 
                    id="standard-basic" 
                    label="Decription" 
                    InputProps = {{
                        style : {
                            color : 'white',
                            marginBottom : '10px'
                        }
                    }}
                    onChange = {(e) => setData({...data ,description : e.target.value}) }
                    />
                     
                    <Button variant="contained" onClick = {HandleCreate} >
                        Host One
                    </Button>
                </form>
            </div>
            
        </div>
    )
}

export default Host_Tourna;