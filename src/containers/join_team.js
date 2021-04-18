import React , {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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



const JoinTeam = () => {
    const [data , setData] = useState({teamCode :""})
    const classes = useStyles();
      const handleCreate = () => {
            fetch('/api/team/addPlayers' , {
                method : 'post',
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(data)
            }).then((res) => {
                if(res.ok){
                    window.location.href = "/teams"
                }else{
                    alert('error occur')
                }
            })

    }

    return(
        <div className = "create_team_page">
            <div className = "create_team_form">
                <div className = "sub_head">
                Join Team 
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
                    onChange = {(e) => setData({...data ,teamCode : e.target.value}) }
                        />
                     
                    <Button variant="contained" onClick = {handleCreate} >
                        Join
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default JoinTeam;