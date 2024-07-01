import "./Profile.css"

export default function Profile() {
    return (
        <div className="ProfilePage">
            <div className="NavBar">
                <p>NavBar</p>
            </div>
            <div className="ProfilBody">
                <div className="LeftPanel">
                    <p>PROFIL</p>
                    <img src="Avatar Gîte.webp" alt="Avatar" />
                    <button className="MessageButton">
                        Message
                    </button>
                </div>
                <div className="RightPanel">
                    <div className="Top">
                        <div className="Name">
                            <p className="FirstName">John</p>
                            <p className="LastName">Doe</p>
                        </div>
                        <div className="NumMail">
                            <p>tel : 00.00.00.00.00</p>
                            <p>mail : 00@gmail.com</p>
                        </div>
                        <button>Editer le profil</button>
                    </div>
                    <div className="Middle Hobbies">
                        <p>Centres d'intérêts</p>

                        <div className="Checkboxes">
                            <div className="Mer">
                                <input type="checkbox" name="Mer" id="Mer" />
                                <label htmlFor="Mer">LA MER</label>
                            </div>
                            <div className="Ski">
                                <input type="checkbox" name="Ski" id="Ski" />
                                <label htmlFor="Ski">LE SKI</label>
                            </div>
                            <div className="Montagne">
                                <input type="checkbox" name="Montagne" id="Montagne" />
                                <label htmlFor="Montagne">LA MONTAGNE</label>
                            </div>
                            <div className="Concerts">
                                <input type="checkbox" name="Concerts" id="Concerts" />
                                <label htmlFor="Concerts">LES CONCERTS</label>
                            </div>
                            <div className="Surf">
                                <input type="checkbox" name="Surf" id="Surf" />
                                <label htmlFor="Surf">LE SURF</label>
                            </div>
                            <div className="htmlForet">
                                <input type="checkbox" name="htmlForet" id="htmlForet" />
                                <label htmlFor="htmlForet">LA FORET</label>
                            </div>
                            <div className="Foule">
                                <input type="checkbox" name="Foule" id="Foule" />
                                <label htmlFor="Foule">LA FOULE</label>
                            </div>
                            <div className="Animaux">
                                <input type="checkbox" name="Animaux" id="Animaux" />
                                <label htmlFor="Animaux">LES ANIMAUX</label>
                            </div>
                            <div className="Golf">
                                <input type="checkbox" name="Golf" id="Golf" />
                                <label htmlFor="Golf">LE GOLF</label>
                            </div>
                            <div className="Camping">
                                <input type="checkbox" name="Camping" id="Camping" />
                                <label htmlFor="Camping">LE CAMPING</label>
                            </div>
                        </div>

                    </div>
                    <div className="Bottom">
                        <p>Récompenses</p>
                        <div className="Badges">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}