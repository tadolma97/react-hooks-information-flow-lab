
function Header({onDarkModeClick, mode}){
    return(
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
                    {mode ? "Light" : "Dark"} Mode
            </button>
        </header>
    )
}

export default Header