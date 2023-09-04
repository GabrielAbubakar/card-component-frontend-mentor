import ProfileImg from '../src/assets/image-victor.jpg'
// import BGTop from '../src/assets/bg-pattern-top.svg'
// import BGBottom from '../src/assets/bg-pattern-bottom.svg'


const App = () => {
    return (
        <main
            className="bg-dark-cyan min-w-[100vw] min-h-[100vh] font-kumbh-sans text-lg overflow-x-hidden relative"
        >
            {/* <figure className='absolute'>
                <img src={BGTop} alt="" />
            </figure>
            <figure>
                <img src={BGBottom} alt="" />
            </figure> */}

            <div className='flex min-h-[100vh] items-center justify-center text-neutral-800'>
                <div className='bg-white flex flex-col justify-center items-center gap-4 text-center font-normal rounded-2xl pt-28'>
                    <figure className='rounded-full overflow-hidden p-2 bg-black'>
                        <img className='rounded-full' src={ProfileImg} alt="profile-image" />
                    </figure>
                    <div className='flex gap-4'>
                        <h1 className='font-bold text-2xl'>Victor Crest</h1>
                        <h1 className='text-2xl'>26</h1>
                    </div>
                    <p>London</p>
                    <div className='flex justify-between gap-14 px-14 py-6 border-t'>
                        <div className='flex-1'>
                            <p className='font-bold text-2xl'>80K</p>
                            <p>Followers</p>
                        </div>
                        <div className='flex-1'>
                            <p className='font-bold text-2xl'>803K</p>
                            <p>Likes</p>
                        </div>
                        <div className='flex-1'>
                            <p className='font-bold text-2xl'>1.4K</p>
                            <p>Photos</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default App;