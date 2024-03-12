const Login =()=>{
    return (
        <>
        <div>
            <form>
                <div>
                    <label htmlFor="username">User:</label>
                    <input id="username" type="text"></input>
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password"></input>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Login;