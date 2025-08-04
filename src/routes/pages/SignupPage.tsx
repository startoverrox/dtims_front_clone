import { useNavigate } from "react-router";

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    console.log("signup", email, password);
    navigate("/login");
  };

  return (
    <div className="flex h-100 w-100 flex-col items-center justify-center gap-4 border [&_button]:border [&_input]:border">
      <form onSubmit={handleSignup} className="flex flex-col gap-4">
        <input type="text" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupPage;
