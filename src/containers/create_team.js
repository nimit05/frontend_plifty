import React , {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import  { Redirect } from 'react-router-dom'

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
  
  const styles = makeStyles((theme) => ({
    formControl: {
      color : 'white',
      marginBottom : '10px'
    },
    select : {
        color : 'white',
        textAlign : 'left'
    }
  }));


const CreateTeam = () => {
    const [data , setData] = useState({Tname : "" , field : "" , size : ""})
    const classes = useStyles();
    const clas = styles();
    const [sport , setSport] = useState('')
    const handleChange = (event) => {
        setSport(event.target.value);
        setData({...data , field : event.target.value})
      };

      const handleCreate = () => {
            fetch('/api/team' , {
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
                Create Team 
                </div>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField 
                    id="standard-basic" 
                    label="Team Name" 
                    InputProps = {{
                        style : {
                            color : 'white',
                            marginBottom : '10px'
                        }
                    }}
                    onChange = {(e) => setData({...data ,Tname : e.target.value}) }
                        />
                        <FormControl className={clas.formControl} >
                            <InputLabel id="demo-simple-select-label">Sport</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sport}
                            onChange={handleChange}
                            className = {clas.select}

                            >
                            <MenuItem value="cricket">Cricket</MenuItem>
                            <MenuItem value="football">FootBall</MenuItem>
                            <MenuItem value="PUBG">PUBG</MenuItem>
                            <MenuItem value="FreeFire">FreeFire</MenuItem>
                            </Select>
                        </FormControl>
                    <TextField 
                    id="standard-basic" 
                    label="Squad Size" 
                    InputProps = {{
                        style : {
                            color : 'white',
                            marginBottom : '20px'
                        }
                    }}
                    onChange = {(e) => setData({...data ,size : e.target.value}) }

                        />
                     
                    <Button variant="contained" onClick = {handleCreate} >
                        Create
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default CreateTeam;