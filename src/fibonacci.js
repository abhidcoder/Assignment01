import {React,useState} from 'react';
import Button from 'react-bootstrap/Button';
import "./design.css";
import Cookies from 'js-cookie';

export default function Fibonacci() {

   

    function One(props) {
        return <div className="text-center" style={{marginTop:"4%",marginRight:"2%",marginLeft:"2%",color:"#800000"}}><h1>{vals} For The Input {props.Fnumber} and {props.Snumber} Once You Click On GET NUMBERS</h1></div>;
      }
      
      function Two(props) {
        return <div className="text-center" style={{marginTop:"4%",color:"#FF00FF"}}> <h2 style={{color:"#2B547E"}}>After {input.Fnumber}, {input.Snumber}</h2><h1>{vals} For The Input {props.Fnumber} and {props.Snumber}</h1></div>;
      }

    const[input,setinput]=useState({

        Fnumber:"0",
        Snumber:"0"
    })

    const[vals,setvalss]=useState("")

    const setvals=(e)=>{

        setvalss("All The 10 Numbers Will be Displayed Below")
        setdata([])
    }

    const setval1=(e)=>{

        setvalss("All The 10 Numbers Of Fibonacci Sequence Are Being Displayed Below")
    }

    const [data,setdata]=useState([])

   
    const store=(e)=>{
        const name= e.target.name;
        const value= e.target.value;
        setinput({...input,[name]:value})
    }

    const Submit=(e)=>{
        e.preventDefault();
        const datas={...input}
        var First  = Number(datas.Fnumber)
        var Second = Number(datas.Snumber)
        let store = [First,Second];
        var data = [];
        for(let i = 2; i <=11; i++) {
          store[i] = store[i - 1] + store[i - 2]; 
          data.push(store[i]);
        }
        setdata(data)


    }


  return (
    <>
    <h1 className="text-center" style={{marginTop:"2%",background:"lightblue"}}>Enter Your Numbers Down Below</h1>
    <div style={{marginTop:"4%",color:"purple"}} className="text-center">
        <form onSubmit={Submit}>
        <label > Enter Your First Number Here
        <div className="inputmargin">
        <input style={{color:"orange"}} type="number" name="Fnumber"  required={true}  placeholder="1" value={input.Fnumber} onChange={store} onClick={setvals}/>
        </div>
        </label>
        <label> Enter Your Second Number here
        <div   className="inputmargin">
        <input style={{color:"red"}} type="number" name="Snumber" required={true}  placeholder="2" value={input.Snumber} onChange={store}/>
        </div>
        </label>
        <div className="inputmargin1">
        <Button variant="success" type="submit" onClick={setval1}>Get Numbers</Button>
        </div>
        </form>
        
    </div>
    <div>
    
    {
        vals==="" && "" 
    }
    {
        vals==="All The 10 Numbers Will be Displayed Below" && <One Fnumber={input.Fnumber} Snumber={input.Snumber}/>
    }
    {
        vals==="All The 10 Numbers Of Fibonacci Sequence Are Being Displayed Below" && <Two Fnumber={input.Fnumber} Snumber={input.Snumber}/>
    }


    </div>
    <div className="text-center" style={{marginTop:"2%"}}>
            {
                data.map((number)=>{
                    return(
                        <div style={{display:"inline-block",marginLeft:29}} >
                            
                            <h2 style={{marginBottom:22,marginTop:28}}>{number}</h2>
                        </div>
                    )

                })
            }
        </div>
    </>
  )
}
