import React from 'react';
import KranCar from "../assets/images/KranTruck.png";
import BgImg from "../assets/images/bgimg.png";
import { FaUser, FaPhone } from "react-icons/fa";

const home = () => {
    return (
        <main>

            <section id='HERO SECTION'>
                <div className='container mx-auto mt-28'>
                    <div>
                        <div className='flex justify-between'>

                            <div>
                                <div>
                                    <h1 className='text-white text-[32px] font-normal'>300 KG</h1>
                                    <h2 className='text-[#CECECE] font-medium'>Yuk sig‘imi</h2>
                                </div>
                                <div className='mt-[52px]'>
                                    <h1 className='text-white text-[32px] font-normal'>70 METR</h1>
                                    <h2 className='text-[#CECECE] font-medium'>O'q uzunligi</h2>
                                </div>
                                <div className='mt-[52px]'>
                                    <h1 className='text-white text-[32px] font-normal'>18 METR</h1>
                                    <h2 className='text-[#CECECE] font-medium'>Gusak</h2>
                                </div>
                                <div className='mt-[240px]'>
                                    <h1 className='text-white text-[32px] font-normal'>550 000</h1>
                                    <h2 className='text-[#CECECE] font-medium'>Narx 1 soatiga</h2>
                                </div>
                            </div>

                            <div className='justify-center items-center z-10'>
                                <h1 className='text-white text-[40px] font-normal text-center'>Avtovishka Daewoo</h1>
                                <h1 className='text-white text-[32px] font-normal text-center'>Novus</h1>
                            </div>

                            <div>
                                <p className='text-white text-base font-medium text-left'>Website orqali buyurtma qoldiring <br /> va o‘zingizga qulay avtovishkani <br /> ijaraga oling. Qiziqtirgan savollar <br /> uchun murojat yuboring yoki <br /> telefon qiling. Qiziqtirgan savollar <br /> uchun murojat yuboring yoki <br /> telefon qiling.</p>
                            </div>

                        </div>

                        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 flex justify-center'>
                            <img src={BgImg} alt="" className='w-[642px]' />
                        </div>

                        <div className='absolute top-40 left-1/2 transform -translate-x-1/2 flex justify-center'>
                            <img src={KranCar} alt="" />
                        </div>

                        <div className='absolute bottom-24 left-1/2 transform -translate-x-1/2 flex justify-center'>
                            <button className='bg-[#FEDF51] py-2 px-8 rounded-xl text-xl font-semibold'>Bog‘lanish</button>
                        </div>

                    </div>
                </div>
            </section>

            {/* prosta */}


            <section className="flex justify-center items-center py-10  mt-[65px] bg-gray-500 ">
                <div className="bg-gray-700 rounded-2xl p-6 z-10 flex items-center space-x-6 w-[800px] shadow-lg">
                    {/* Ism Input */}
                    <div className="flex items-center space-x-3 flex-1 border-r border-gray-500 pr-6">
                        <FaUser className="text-white text-xl" />
                        <div>
                            <p className="text-white font-semibold">Sizning ismingiz</p>
                            <input
                                type="text"
                                placeholder="Shu yerga yozing"
                                className="bg-transparent text-gray-300 focus:outline-none w-full"
                            />
                        </div>
                    </div>

                    {/* Telefon Input */}
                    <div className="flex items-center space-x-3 flex-1 border-r border-gray-500 pr-6">
                        <FaPhone className="text-white text-xl" />
                        <div>
                            <p className="text-white font-semibold">Telefon raqamingiz</p>
                            <input
                                type="text"
                                placeholder="Shu yerga yozing"
                                className="bg-transparent text-gray-300 focus:outline-none w-full"
                            />
                        </div>
                    </div>

                    {/* Buyurtma tugmasi */}
                    <button className="bg-[#FEDF51] text-black font-semibold px-6 py-3 rounded-lg shadow-md">
                        Buyurtma qoldirish
                    </button>
                </div>
            </section>


        </main>
    );
};

export default home;