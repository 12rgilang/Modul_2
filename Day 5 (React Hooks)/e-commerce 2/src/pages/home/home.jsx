import {MdNoFood} from 'react-icons/md' 



let Home = () => {
    let img = [
        'https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/rewards-carousel-1_tcm121-77064.jpg',
        'https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/rewards-carousel-2_tcm121-77065.jpg',
        'https://content-prod-live.cert.starbucks.com/binary/v2/asset/digitalcontent.starbucks.com/udp/us/en/assets/rewards-carousel-3_tcm121-77066.jpg'
    ]
    return(
        <>
        <div className="parent flex">
            <div className="left h-screen sticky flex flex-1 justify-center items-center">
                <div className="child flex">
                Selamat Berpuasa <MdNoFood />
                </div>
            </div>
            <div className="right flex flex-1">
                <div className="jumbotron flex ">
                    <div className='item1 '>
                    <a href="#" class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={img[0]} alt="image-1" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Food and Beverage</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Let us treat you—earn and redeem Stars for free drinks, food and more.</p>
                    </div>
                    </a>
                    </div>

                    <div className="item2 flex">
                    <a href="#" class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={img[1]} alt="image-1" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Food and Beverage</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Let us treat you—earn and redeem Stars for free drinks, food and more.</p>
                    </div>
                    </a>
                    </div>
                    <div className="item3 flex">
                    <a href="#" class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={img[2]} alt="image-1" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Food and Beverage</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Let us treat you—earn and redeem Stars for free drinks, food and more.</p>
                    </div>
                    </a>
                    </div>
                </div>
            </div>
        </div>
        </>
        

    )
}

export default Home