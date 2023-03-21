import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [err, setErr] = useState(null);


  const handleClick = async (e) => {
    setErr("")
    e.preventDefault();
    try {
      await axios.post("http://localhost:3600/api/auth/register", { name, password, email });
      try {
        const res = await axios.post("http://localhost:3600/api/auth/login", { email, password });
        localStorage.setItem("token", JSON.stringify(res.data.accessToken));
        navigate("/book/list")
      } catch (err) {
        setErr(err.response.data?.message);
      }
    } catch (err) {
      setErr(err.response.data?.message);
    }

  };

  return (
    <div className="register">
      <form>
        <label for="chk" aria-hidden="true">Sign up</label>
        <input type="text" name="txt" placeholder="Name" required="" onChange={(e) => setName(e.target.value)}></input>
        <input type="email" name="email" placeholder="Email" required="" onChange={(e) => setEmail(e.target.value)}></input>
        <input type="password" name="pswd" placeholder="Password" required="" onChange={(e) => setPassword(e.target.value)}></input>
        <button onClick={handleClick}>Sign up</button>
        <span id="error">{err && err}</span>

      </form>
    </div>
  );
};

export default Register;