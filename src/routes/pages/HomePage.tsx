import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex h-[200px] w-[400px] flex-col items-stretch justify-between">
        <button className="border" onClick={() => navigate("/job")}>
          a
        </button>
        <button className="border">b</button>
        <button className="border">c</button>
      </div>
    </div>
  );
};

export default HomePage;
