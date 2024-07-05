import "./Login.css"

export default function Login(){
    return(
        <div className="LoginPage">
            
            <div className="NavBar">
                <p>NavBar</p>
            </div>

            <div className="LoginArea">
                <div className="Form">
                    <div className="Title">
                        <h2>Connexion</h2>
                    </div>
                        <div className="AlignCenter">
                            <div className="AlignLeft">

                                <div className="UserID">


                                    <div className="Email">
                                        <p>Email : </p>
                                        <input type="text" placeholder="Email"/>
                                    </div>
                                </div>

                                <div className="Passwords">
                                    <div className="Password">
                                        <p>Mot de passe : </p>
                                        <input type="password" placeholder="Mot de passe "/>
                                    </div>

                                </div>
                            </div>
                            <div className="AlreadyAccount">
                                <p><a href="#">Vous n'avez pas de compte ? </a></p>
                            </div>

                            <div className="Submit">
                                <button>Connexion</button>
                            </div>

                            <div className="Or">
                                <p>OU</p>
                            </div>

                            <div className="TiersLogin">
                                <a href="#">
                                    <img src="LogoGoogle.png" alt="Logo Google" />
                                    <p>Connexion avec Google</p>
                                </a>
                            </div>
                            
                        </div>
                </div>
            </div>
        </div> 
    )
}
