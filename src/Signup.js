import {React,useState} from 'react';
import Button from 'react-bootstrap/Button';
import "./design.css";


export default function Input() {

 
 

  const [getdata,setgetdata]=useState("0");
  const [getdata2,setgetdata2]=useState([]);

  if(String(getdata)===String("1")){
    window.alert("Your Sign-Up was a success")
    window.location.reload(true);
  }
  else if(String(getdata)===String("2")){
    window.alert("Oops Some Error has Occured")
    window.location.reload(true);
  }
  else if(String(getdata)===String("4")){
    window.alert("Oops! Id Already Exists")
    window.location.reload(true);
  }

  if(String(getdata2)===String("1")){
    window.alert("Welcome! This Project Is Made By Abhishek")
    window.location.href="http://localhost:3000/fibo"
  }
  else if(String(getdata2)===String("2")){
    window.alert("No Such Id Exists")
    window.location.reload(true);
  } 
  else if(String(getdata2)===String("4")){
    window.alert("Wrong Id or Password")
    window.location.reload(true);
  } 

  console.log(getdata)

  const[changes,setchanges]=useState({
    one:"",
    two:"",
    three:""
  })

  const [changes1,setchanges1]=useState({
    four:"",
    five:""
  })

  const handleSubmit1=(e)=>{
    const value=e.target.value
    const name=e.target.name

    setchanges({...changes,[name]:value})
    
  }

  const handleSubmit2=(e)=>{
    const value=e.target.value
    const name=e.target.name

    setchanges1({...changes1,[name]:value})

  }

    const Submit1=(e)=>{
      e.preventDefault();
      const datas={...changes}

      const requestOptions  = {
          method: 'POST',
          mode: "cors",
          credentials: 'same-origin',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ data:datas})
      };
    fetch('http://localhost:8005/signup', requestOptions )
          .then(response => response.json())
          .then((jsonRes) => setgetdata(jsonRes));


  }

  const Submit2=(e)=>{
    e.preventDefault();
    const  datas={...changes1}

        const requestOptions  = {
          method: 'POST',
          mode: "cors",
          withCredentials: true,
          credentials: 'same-origin',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ data:datas})
      };
    fetch('http://localhost:8005/login', requestOptions )
          .then(response => response.json())
          .then((jsonRes) => setgetdata2(jsonRes));
}

  const[stat,setstat]=useState("")

  if(stat===""){

 

  return (
    <div className="text-center margins">
      <Button onClick={() => {setstat("")}}  style={{ fontSize: '1.2rem'}}>Sign-Up</Button>
      <Button onClick={() => {setstat("login")}}  style={{ fontSize: '1.2rem',marginLeft:"2%" }}>Log-In</Button>
      <br></br>
      <br></br>
      <br></br>
      <h1 className="text-center">Welcome To Sign-Up Page</h1>
        <form onSubmit={Submit1} className="margins1">
        <div   className="inputmargin01">
        <div className="color2">
        <label  className="inputmargin02"> Enter Your Name
        <input style={{color:"orange",marginLeft:"2%",marginTop:"2.5%"}} type="text" name="one"  required={true}  placeholder="Eg. Abhishek" value={changes.one} onChange={handleSubmit1}/>
        </label>
        </div>
        <div className="color2">
        <label className="inputmargin02"> Enter Your New Id
        <input style={{color:"orange",marginLeft:"2%",marginTop:"2.5%"}} type="text" name="two"  required={true}  placeholder="Eg. @Kumar" value={changes.two} onChange={handleSubmit1}/>
        </label>
        </div>
        <div className="color2">
        <label className="inputmargin02"> Enter Your New Password
        <input  style={{color:"red",marginLeft:"2%",marginTop:"2.5%"}} type="password" name="three" required={true}  placeholder="Eg. Singh**" value={changes.three} onChange={handleSubmit1}/>
        </label>
        </div>
        <div className="inputmargin02">
        <Button variant="success" type="submit" >Sign-Up</Button>
        </div>
        </div>
        </form>
    </div>
  )
}
else{

  return (
    <div className="text-center margins">
      <Button onClick={() => {setstat("")}}  style={{ fontSize: '1.2rem' }}>Sign-Up</Button>
      <Button onClick={() => {setstat("login")}}  style={{ fontSize: '1.2rem',marginLeft:"2%" }}>Log-In</Button>
      <br></br>
      <br></br>
      <br></br>
      <h1 className="text-center">Welcome To Login Page</h1>
      <div className="grid">
        <form onSubmit={Submit2} className="margins1">
        <div className="color">
        <label  className="inputmargin02"> Enter Your Registered Id
        <input className="grid" style={{color:"orange"}} type="text" name="four"  required={true}  placeholder="Eg. @Kumar" value={changes1.four} onChange={handleSubmit2}/>
        </label>
        </div>
        <div className="color">
        <label  className="inputmargin02"> Enter Your Registered Password
        <input className="grid" style={{color:"red"}} type="password" name="five" required={true}  placeholder="Eg. Singh**" value={changes1.five} onChange={handleSubmit2}/>
        </label>
        </div>
        <div>
        <Button variant="dark" type="" >Log-in</Button>
        </div>
        </form>
        </div>
    </div>
  )
}


}
