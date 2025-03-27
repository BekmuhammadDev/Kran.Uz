import React from 'react';
import KranCar from "../assets/images/KranTruck.png"

const home = () => {
    return (
        <main>
            <section>
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
                            </div>
                            <div>
                                <h1 className='text-white text-[40px] font-normal'>Avtovishka Daewoo <br /> Novus</h1>
                            </div>
                            <div>
                                <p className='text-white text-base font-medium'>Website orqali buyurtma qoldiring <br /> va o‘zingizga qulay avtovishkani <br /> ijaraga oling. Qiziqtirgan savollar <br /> uchun murojat yuboring yoki <br /> telefon qiling. Qiziqtirgan savollar <br /> uchun murojat yuboring yoki <br /> telefon qiling.</p>
                            </div>
                        </div>

                        <div className='absolute top-40 flex justify-center left-[500px]'>
                            <img src={KranCar} alt="" />
                        </div>

                    </div>

                </div>
            </section>
        </main>
    );
};

export default home;