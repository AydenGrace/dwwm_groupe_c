import "./Profile.css"

export default function Profile() {
    return (
    <div className="ProfilePage">
        <div className="NavBar">
            <h3>NavBar</h3>
        </div>
        <div className="ProfileArea">
            <div className="LeftPanel">
                <p>PROFIL</p>

                <div className="Avatar">
                    <p>Avatar</p>
                </div>

                <div className="Message">
                    <p>Message</p>
                </div>
            </div>

            <div className="RightPanel">
                <div className="RightTopPanel">
                    <div className="Name">
                        <h1>John</h1>
                        <h2>Doe</h2>
                    </div>
                    <div className="Edit">
                        <button>Editer le profil</button>
                    </div>
                </div>

                <div className="RightCenterPanel">
                    <div className="Hobbies">
                        <p>Centres d'intérêts</p>

                        <div className="Checkboxes">
                            <div class="Mer">
                                <input type="checkbox" name="Mer" id="Mer" />
                                <label for="Mer">LA MER</label>
                            </div>
                            <div class="Ski">
                                <input type="checkbox" name="Ski" id="Ski" />
                                <label for="Ski">LE SKI</label>
                            </div>
                            <div class="Montagne">
                                <input type="checkbox" name="Montagne" id="Montagne" />
                                <label for="Montagne">LA MONTAGNE</label>
                            </div>
                            <div class="Concerts">
                                <input type="checkbox" name="Concerts" id="Concerts" />
                                <label for="Concerts">LES CONCERTS</label>
                            </div>
                            <div class="Surf">
                                <input type="checkbox" name="Surf" id="Surf" />
                                <label for="Surf">LE SURF</label>
                            </div>
                            <div class="Foret">
                                <input type="checkbox" name="Foret" id="Foret" />
                                <label for="Foret">LA FORET</label>
                            </div>
                            <div class="Foule">
                                <input type="checkbox" name="Foule" id="Foule" />
                                <label for="Foule">LA FOULE</label>
                            </div>
                            <div class="Animaux">
                                <input type="checkbox" name="Animaux" id="Animaux" />
                                <label for="Animaux">LES ANIMAUX</label>
                            </div>
                            <div class="Golf">
                                <input type="checkbox" name="Golf" id="Golf" />
                                <label for="Golf">LE GOLF</label>
                            </div>
                            <div class="Camping">
                                <input type="checkbox" name="Camping" id="Camping" />
                                <label for="Camping">LE CAMPING</label>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}