import "./nav.css"

export function Navbar(){
    return(
        <>
        <div className="icons">
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs3bhLf4eJNrdYO_tGbMlWEcFsl2Mj0rlbqw&s" alt="" />
            <h3>Profile</h3>
        </div>
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaM9xrMz_MugMaixlmPiZsONyv6zaVIUKPkQ&s" alt="" />
            <h3>Work</h3>
        </div>
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qhr9CoJcRWzGas6tulfwBoUclesIuniKPQ&s" alt="" />
            <h3>Skiils & Samples</h3>
        </div>
        </div>
        <div className="content">
        <nav className="phase1">
            <h1>JESSICA GREENE</h1>
            <p>FREELANCE WRITER</p>
            <br />
            <br />
    
        </nav>
        <section className="phase2">
            <p>I specialize in writing long-form blogcontent, case studies, e-books, andwhite papers for B2Bs, tech startups,and marketing agencies.</p>
            <pre><b>Email:</b>     myemail@gmail.com</pre>
            <pre><b>Website:</b>   mywebsite.com</pre>
        </section>
        </div>
        </>
    )
}