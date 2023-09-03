import ProfileImg from '../public/image-victor.jpg'


const App = () => {
    return (
        <main className="bg-dark-cyan min-w-[100vw] min-h-[100vh]">
            we
            <div>
                <figure>
                    <img src={ProfileImg} alt="profile-image" />
                </figure>
                <div>
                    <h1>Victor Crest</h1>
                    <h1>26</h1>
                </div>
                <p>London</p>
                <div>
                    <div>
                        <p>80K</p>
                        <p>Followers</p>
                    </div>
                    <div>
                        <p>803K</p>
                        <p>Likes</p>
                    </div>
                    <div>
                        <p>1.4K</p>
                        <p>Photos</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default App;