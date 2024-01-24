import { useEffect, useState } from "react";

const Home = () => {
    const [auth, setAuth] = useState(false);

    const clickHandler = () => {
        setAuth(!auth);
    }

    const cls = auth ? 'btn-danger' : 'btn-success';

    return (
        <button className={['btn', cls].join(' ')} onClick={() => clickHandler()}>{auth ? 'Logout' : 'Login'}</button>
    )
}

export default Home;