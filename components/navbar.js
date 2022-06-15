let navbar = () =>{ 
    return`
<div id="navbar">
    <div id="navbarFirst">
        <button id="exploreBtn">
            <div>
                <i class="fa-solid fa-grip-lines"></i>
            </div>
            <div>
                <h2>Explore</h2>
            </div>
        </button>
    </div>
    <div id="navbarSecond">
        <button id="mintBtn">
            <img src="https://images.livemint.com/static/livemint-logo-v2.svg" alt="Mint">
        </button>
    </div>
    <div id="navbarThird">
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-bell"></i>
        <h3 id="eh3">e-paper</h3>
        <h3 id="sh3">Sign in</h3>
    </div>
</div>`
};
export default navbar;