let navbar = () =>{ 
    return`
<div id="navbar">
    <div id="navbarFirst">
        <button id="exploreBtn">
            <div>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
            <div>
                <h3>Explore</h3>
            </div>
        </button>
    </div>
    <div id="navbarSecond">
        <button id="mintBtn">
            <a href="/index.html"><h1 id="h1Mint">mint</h1></a>
        </button>
    </div>
    <div id="navbarThird">
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-bell"></i>
        <h3 id="eh3">e-paper</h3>
        <button id="sh3"><a  href="signup.html" id="ah3">Sign up</a></button>
    </div>
</div>`
};
export default navbar;