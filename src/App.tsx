import ProfileImg from '../src/assets/image-victor.jpg'
import BGPattern from '../src/assets/bg-pattern-card.svg'
import BGTop from '../src/assets/bg-pattern-top.svg'
import BGBottom from '../src/assets/bg-pattern-bottom.svg'


const App = () => {
    return (
        <main className="bg-dark-cyan min-w-[100vw] min-h-[100vh] font-kumbh-sans text-sm md:text-md lg:text-lg overflow-x-hidden relative px-8" >
            <img className='absolute -top-[15%] sm:-top-[40%] md:-top-[50%] xl:-top-[60%] -left-[35%] lg:-left-[15%]'
                src={BGTop} alt="bg-pattern-top" />

            <img className='absolute -bottom-[10%] md:-bottom-[60%] xl:-bottom-[80%] -right-[40%] xl:-right-[10%]'
                src={BGBottom} alt="bg-pattern-bottom" />


            <div className='flex min-h-[100vh] items-center justify-center text-neutral-800'>
                <div className='bg-white rounded-2xl shadow-2xl overflow-hidden relative'>
                    <img className='absolute top-0 left-0 z-0 h-[38%] w-full' src={BGPattern} alt="bacground pattern" />
                    <div className='relative flex flex-col items-center gap-4 text-center font-normal mt-28 z-10'>
                        <figure className='rounded-full overflow-hidden p-2 bg-white'>
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
            </div>
        </main>
    )
}

export default App;