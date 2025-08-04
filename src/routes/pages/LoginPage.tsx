import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    console.log("login", email, password);
    navigate("/");
  };

  return (
    <div className="flex h-100 w-100 flex-col items-center justify-center gap-4 border [&_button]:border [&_input]:border">
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input type="text" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
      <button onClick={() => navigate("/signup")}>Signup</button>
    </div>
  );
};

export default LoginPage;
