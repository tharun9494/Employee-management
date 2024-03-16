import React,{ useState }  from 'react';
import '../App.css';
import image1 from "../components/Profile/images/image1.png";
import { Link} from 'react-router-dom';



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  
  return (
    <div style={{display:"flex", flexDirection:"row"}} className='main'>
    
      <form className='form'> 
      <div style={{ paddingLeft:'20%', color:'red',fontSize:'40px'}}><h1> Login</h1></div><br/>
      <div><h3 style={{background:'white'}}>Welcome  back! Please login to your account.</h3></div>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email
          </label>
          <div className="mt-2">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              style={{width: "370px"}}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div><br/>
        <div className="sm:col-span-3">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            password
          </label>
          <div className="mt-2">
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              style={{width: "370px"}}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div style={{flexDirection:"column"}}>
            <input type="checkbox"/><p>Remember Me</p>
          </div>
        </div>
      </div>
      <div className="Button"><br/><br/><Link to="/Dashboard">
        <button
          type="submit"
          id='button'
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
        Login
        </button>
        </Link>
      </div>
      </form>
      <div><img src={image1} alt="Image" style={{paddingTop:'20%', height:'90%',width:'100%',paddingRight:'8%'}} className='image' />


      </div>
    </div>
  );
}

export default Login;