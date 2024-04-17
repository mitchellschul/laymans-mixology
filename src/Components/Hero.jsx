import React from 'react'
import bg from '../Assets/Images/barframe.png'
import RecipeModal from './RecipeModal'
const Hero = () => {
    return (
        // <div className='w-full bg-cover flex flex-col items-center' >
        // <div className='flex flex-col my-8' >
        //     <div className='text-lg md:text-xl text-gray-600 font-oswald'>Good Eveneing,</div>
        //     <div className='text-2xl md:text-3xl font-oswald'>Tonights Recomended Drink</div>
        // </div>

        //     <div className='flex flex-col md:flex-row items-center my-8'>
        //         <div id={'feature' + '_card'} className="w-72 h-72 bg-[#003049] flex justify-center items-center m-4 relative  ">

        //             <div class="w-64 h-64 absolute border-solid 
        //         border-white border-2">
        //                 <div class="drink-text absolute bottom-4 left-4 w-44 ">
        //                     <div class="drink-name text-white text-xl">
        //                         <div>Blue Captain Crush</div>
        //                     </div>
        //                 </div>
        //             </div>


        //         </div>
        //         <div>
        //             <div> 1.5 oz of Captain Morgan Long Island</div>

        //             <div>0.5 oz of Blue Curacao</div>
        //             <div>3 oz of Sweet and Sour Mix</div>
        //             <div>1 oz of Water</div>
        //         </div>
        //     </div>
        // </div >
        <div className='w-full flex flex-col items-center'>
            <img src={bg} className='relative'></img>
            <div className='flex flex-col my-8 absolute w-1/2 px-40 py-20 mr-80' >
                <div className='text-2xl md:text-3xl text-bg-white font-bold font-display'>Red Ruby Lemon Drop</div>
                <div className='text-xl text-bg-white font-extralight'>a cool mix of tangy lemon juice and the bold kick of ruby red grapefruit. Sweet, sour, and totally refreshing, it's like a sunny day in a glass!</div>

            </div>
        </div>
    )
}

export default Hero