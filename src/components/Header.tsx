import { Link } from 'react-router';
import logo from '@/assets/images/logo.svg';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 h-[60px]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-8 h-8" />
      </Link>
      <div className="flex items-center gap-4">
        <p>
          <span className="font-bold">테스트1 </span>0000년 00월 00일 마지막
          로그인
        </p>
        <p>
          오늘 작업량
          <span className="mx-1 px-2 py-1 rounded-full border">0000</span>
        </p>
        <p>
          누적 작업량
          <span className="mx-1 px-2 py-1 rounded-full border">0000</span>
        </p>
        <button>로그아웃</button>
      </div>
    </header>
  );
};

export default Header;
