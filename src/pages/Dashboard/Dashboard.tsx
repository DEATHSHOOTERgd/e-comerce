import { Link } from "react-router-dom";

const Dashboard =()=>{
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/login">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Dashboard;