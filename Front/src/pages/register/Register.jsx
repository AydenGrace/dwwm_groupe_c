import { useState } from "react";
import "./Register.css"
import { Navigate, NavLink } from "react-router-dom";


export default function Register(){

    return(
        <div className="RegisterPage">

            <div className="RegisterArea">
                <form className="Form">
                    <div className="Title">
                        <h2>Inscription</h2>
                    </div>
                        <div className="AlignCenter">
                            <div className="AlignLeft">

                                <div className="UserID">

                                    <div className="UserName">
                                        <p>Nom d'utilisateur :</p>
                                        <input type="text"
                                               placeholder="Nom d'utilisateur" />
                                    </div>

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

                                    <div className="PasswordConfirm">
                                        <p>Confirmation de mot de passe :</p>
                                        <input type="password" placeholder="confirmation de mot de passe"/>
                                    </div>
                                </div>
                            </div>

                            <div className="CGU">
                                <input type="checkbox" />
                                <p>J'accepte les <a href="#">Conditions Générales d'Utilisations</a></p>
                            </div>
                            <div className="AlreadyAccount">
                                <NavLink to={"/login"}>Vous possedez déjà un compte ?</NavLink>
                            </div>

                            <div className="Submit">
                                <button>S'incrire</button>
                            </div>

                            <div className="Or">
                                <p>OU</p>
                            </div>

                            <div className="TiersRegister">
                                <a href="#">
                                    <img src="LogoGoogle.png" alt="Logo Google" />
                                    <p>Inscription avec Google</p>
                                </a>
                            </div>
                            
                        </div>
                </form>
            </div>
        </div> 
    )
}
