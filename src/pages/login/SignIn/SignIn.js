import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [err, setErr] = useState(null);

  const navigate = useNavigate()


  const handleSignIn = async (e) => {
    setErr("");
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3600/api/auth/login", { email, password });
      console.log(res.data.accessToken)

      localStorage.setItem("token", res.data.accessToken);
      navigate("/book/list")
    } catch (err) {
      setErr(err.response.data?.message);
    }
  };

  return (
    <div className="signIn">
      <form>
        <label for="chk" aria-hidden="true" >Login</label>
        <input type="email" name="email" placeholder="Email" required="" onChange={(e) => setEmail(e.target.value)}></input>
        <input type="password" name="pswd" placeholder="Password" required="" onChange={(e) => setPassword(e.target.value)}></input>
        <button onClick={handleSignIn}>Login</button>
        <span id="error">{err && err}</span>
      </form>
    </div>
  );
};

export default SignIn;