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

            <div className="RightTopPanel">
                <div className="Name">
                    <h1>John</h1>
                    <h2>Doe</h2>
                </div>
                <div className="Edit">
                    <button>Editer le profil</button>
                </div>
            </div>
        </div>
    </div>
    )
}