import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice';
import AnimatedLogo from './AnimatedLogo';


const Navbar = () => {
  const { token, user } = useSelector((state) => state?.auth);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleLogOut = ()=>{
    dispatch(logout()); //logging out
  }

  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white">
      <div className="flex items-center space-x-2">
        <AnimatedLogo />
        <span className="font-bold text-lg">CodeRecap</span>
      </div>
      <div className="space-x-4 -ml-8">
        {token ? (
          <div className='flex gap-4 items-center'>
            {/* <Link to="/" className="hover:text-gray-300">Home</Link> */}
            <Link to="/problems" className="hover:text-gray-300">Problems</Link>
            <Link to="/add" className=" items-center hover:text-gray-300">Add Problem </Link>
            <span className='flex flex-col items-center ml-5'>
              <span>
                <img 
                  onClick={handleLogOut}
                className='h-6 cursor-pointer' 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAhFBMVEX///8AAP97e//f3//j4/9mZv9eXv+hof/W1v9+fv/8/P+Ghv/IyP/Z2f9AQP85Of9OTv/MzP9GRv+UlP+zs/9LS/80NP9VVf+YmP+Pj/9hYf+Kiv9ZWf/4+P+cnP/S0v/p6f/w8P++vv8qKv92dv9vb/8gIP+urv+5uf8VFf+mpv/Dw/+Q+P49AAAHIElEQVR4nO2d6ZqqMAyGrSsKLqDoqIOAuKH3f39HjzOOBqSkLTT48P22Je/QKW2apI0GVwMvaA2t7ex47vXOm+lNa/NP/Wa2zCwtpxn6Mjy+dRgNgstyxHQp+vLDgTKU1rGjjeS/Ds1toIYlnK1ivSxXRTtLxWgz+pFukv8a9wJplstCN8Wv4mZLDmUwG+tmeFLXkGOZ6wZ40bcvwXKi9F5u6oqPNH+i2/iEdoEgS1vz1yVVG7EZetDTbXiaIksIpkXj+wK1D0Vg9rrNfqOTwDot0G30O3UEXs06raPDfD4eOY7juu5kkdA3UBepe6vf3lzXGaV95gT+a7xDspd+73jaXizbtg3bN/5r+KQWUBurn3b33gzDt+3tppukWaNhZok+FtvQG9yE7ktc1y3hObFk76LHWeLf35VaGEnoBC2ZYxc1bRf0MJJYFkkqMUhOyA4SMEuh6V2JwhWw5YzsAMLMxT68agQHWg/ZHsIshoWYmU8WgNkg20OYfVCElTllg8/EFNmeFIwRqYUR3keokAH2iEtkewjT1DeZNRpD59UY7BKAFExr8kkwwN1lIldUEKavFeYbGFNlGOiMqGGeh6niQxKcMZ8EE+xrmIdowezUwqxrGEX6KJiwX8M8VMMUpdBUC7Ms0/UHVcM8iRbMuoZ5qOXUMMXIm74aYyLbk4bBOjRqGBENwrbtc/bk3lc1YDxrN46iXbZbfnAZVQHGm93N7F4y+x9cVhWA8X/de+Nj9uLP2CuE+RI3OEPeX0RL1Mv+x2mb1GGeF12HZZD92ylxmBe3S9xsZ/968/tL7PlMOTCt16NX3lnjLCINA9z7Med83nIJwwwToYackCVjRRfGdyBMfOZMaruYLEwywSBeZk8DgXmgCpMSnRs3s4N0gk2MPaDVB8Pijp3ZyOsdkY8pCSY9BnySHdviYQ++yoGx38S0RjOlj9ELg4/1yRSEwcbe5NN7GGYqPETVDsN2kgkmTyoJJhnV+qeOoWoPVQ6MlQXDvrO3n/lVEkx2MpszU0NDAobNe0pOUoZg1aQHhrv9zCejHBgOy3Vt0w/kH1MOzIULc53U5KdoOjBskb3uzCFCMGy+lXyMCIzXOs1wMtOth4qOclO0AMwwp2kCOmykVmoQhr+KtYrMgzysOT41tTBJ34RSxU2J+H0sTFh4TudKfFLDwmyKLxngCCeKIGGCMhLtx9gkIEEYGBNejCKsW4YyDIvF8qtowjDWF5miqcKwjsAUTRaGrfBpiXRh2OTyQTBshPV3UoZhEdI1QBrmuu5ETdG0YViMSugjDsPYHvHBIQ/DFvmnaPowbGLl3UxXAIaNtjlpqgDDDud8NJWAuZqVa4qG58BEYdg0z7uxKwKTK+GiIjDTXMOsGjC5BllFYPI6OCoAM8rtT6cPgzi+JQ+z9/OfDFCHQdXUJA5jBggW4jBfOF8gZZjDGRkdQBhmjI7boAvj4iNqyMJ0BdyzVGH2IiEONGG4uQ8VgonyrfhlYco5BuSE1quCaSyLP6AdbUWDz7Awxb8aiXggLEzDLvjVdCRKX6JhGttCWXYy4SYQJkcgUEr+iDLJxQMKwFwb8a4HgYLVPt8o6smFaAnBoOXnYhnLpjlYIBlEYySgIxpl8lA5MPzo2evKUjpEkw7MXkGd2JJguB8nU2ZKfjyGBswmUPIYCjAxJ68+92NKgcnMn2Fz6WnsRwRgFsrqXZcEk5GmJRKL9UbaYZqBusfohlFaTw3CFJSn+eYWpUjt48qBSc1tvm6Qs6Nk0enAOmG+syMvvDM2IrgkmLT9XMfmsETYFHp9MByfZbiM0MUNyoExkqkdnFuMgqZA2YlyYJIFQTgj6F4gnCYMLNVyyN4gD+w7PE2Y9qtHg7NB9rY/o5ImzGu5X84G2Tv/2kQT5qUM445X1eSxxKY5NQ9mDwNjzga5bf5tF7BVtCBMQcXa2r9ltOJpkP3D3dOmlChMw79f/RVxNsj2yw1hVGEa7elkNHY5G2T7tXgsWZibPE7nsqUnS4XhSbYo6EfBwFOAGkaVwuWrMdgSx7RgJOs11zBFSbZgO4Sp9L0AHwUDnUCVvn4C5s/UMKr0UTCyl+nUMEVJ9jYtWN+s0leDwcpzNYwqyV6nl4D5pIsO9d7auPokmK4cTDAhBAMPC7AwIYCp9IW64YIQjOxVxx64w7bSl1A3wP9cpa8Hb3QIwfiSF7dDmK66UtB42a+24AN5wHJoriz4S0AnWRiwhYg3+hZnYRPAoAvQwQqfI/nwYlElUibQ5Vu/YA+doR4/4OACg9Lm6OyTZAZJ5xKWj+MFx0TkUzfA9hImYJiznm0t2/+RcdfwSS1FuvV169v3rfM+GZNq4v+mKSVL4/l45LiuO5lM3Mniru8nrV7VQerRsHvt69a36zopcY8HgYrHrWQ3NLQI8DBpr4aEhOrrD3Vbna4O78X8AxbHwEnlPheNAAAAAElFTkSuQmCC" alt="logout" /></span>
              <span className='font-semibold capitalize cap'>{user?.username}</span>
            </span>
          </div>
        ) : (
          <Link to="/signup" className="hover:text-gray-300">Sign Up</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
