import React, { useEffect, useState} from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Our_Work = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    const imageUrl1 = 'https://images.unsplash.com/photo-1561986810-4f3ba2f46ceb?auto=format&fit=crop&w=2880';

  return (
    <>
        <div className='w-full h-96 relative bg-black'>
            <img className='w-full h-full object-cover opacity-75' src={imageUrl1} />
                <div className='absolute top-0 w-full h-full flex flex-col justify-center text-left text-white p-4'>
                    <h1 className='uppercase text-5xl font-bold lg:ml-40'>OUR WORK</h1>      
                </div>
        </div>
        <div class="container mx-auto w-full h-full mt-10">
            <div class="relative wrap overflow-hidden p-10 h-full">
                <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{'left': '50%'}}></div>
                <div class="mb-8 flex justify-between items-center w-full right-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                    <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
                </div>
                <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                    <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Visiting our arabica beans farm in Kintamani, Bali to make sure our coffee beans quality are on point.</p>
                </div>
                </div>
                <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                    <h1 class="mx-auto text-white font-semibold text-lg">2</h1>
                </div>
                <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                    <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Our staff picking up products that are ready to be delivered to our customer.</p>
                </div>
                </div>
                <div class="mb-8 flex justify-between items-center w-full right-timeline">
                    <div class="order-1 w-5/12"></div>
                    <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
                    </div>
                    <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Visiting our robusta farm in Palembang, Sumatra to make sure products quality are maintained and beans are well kept.</p>
                    </div>
                </div>
                <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div class="order-1 w-5/12"></div>
                    <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 class="mx-auto text-white font-semibold text-lg">4</h1>
                    </div>
                    <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Visiting our virgin coconut oil factory to make sure products quality is right before products are shiped to our customer.</p>
                    </div>
                </div>
                <div class="mb-8 flex justify-between items-center w-full right-timeline">
                    <div class="order-1 w-5/12"></div>
                    <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 class="mx-auto font-semibold text-lg text-white">5</h1>
                    </div>
                    <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Visiting our robusta beans farm in Mt. Temanggung, Indonesia to make sure our coffee beans quality are on point.</p>
                    </div>
                </div>
                
            </div>
        </div>
        {/* <div className='my-8 px-8' data-aos="fade-up">
                <div className="w-5/6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center px-2 py-2 mx-auto my-4">
                    <div>
                        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=784,h=736,fit=crop/AoPyw88ByJtGz0O3/whatsapp-image-2022-08-15-at-5.06.07-pm-2-YanDXj1MpWCQBb59.jpeg" className="w-full mx-auto rounded-lg" alt="" />
                    </div>
                    <div className="col-span-2 py-4">
                        <p className="text-justify">Visiting our arabica beans farm in Kintamani, Bali to make sure our coffee beans quality are on point</p>
                    </div>
                </div>
                <div className="w-5/6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center px-2 py-4 my-2 mx-auto">
                    <div className="col-span-2 py-4">
                        <p className="text-justify">Our staff picking up products that are ready to be delivered to our customer</p>
                        
                    </div>
                    <div className="">
                        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=784,h=736,fit=crop/AoPyw88ByJtGz0O3/c133ae43-d599-4e2b-bad7-b07ec578d0de-Aq2ygLQgQBix9nG5.jpg" className="w-full mx-auto" alt="" />
                    </div>
                </div>
                <div className="w-5/6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center px-2 py-4 my-2 mx-auto">
                    <div className="">
                        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=784,h=736,fit=crop/AoPyw88ByJtGz0O3/arabica-6-AE0XGK6ePKS97xW3.jpeg" className="w-full mx-auto" alt="" />
                    </div>
                    <div className="col-span-2 py-4">
                        <h2 className="font-bold py-8 text-2xl">RS Islam Bogor Didirikan KH Sholeh Iskandar dan Menjadi Wakaf Umat Islam</h2>
                        <p className="text-justify">Ketua Takmir Masjid Baitus Syifa Rumah Sakit Islam Bogor (RSIB) KH Djudjih Djajasumpena menyampaikan rasa syukurnya atas prestasi RSIB mendapatkan Akreditasi Paripurna dari Komisi Akreditasi Rumah Sakit (KARS) Nasional.<br/><br/>
                            “Kita sangat bersyukur atas capaian predikat Paripurna, dan Yayasan RSIB akan terus berupaya meningkatkan pelayanan dan fasilitas rumah sakit ini,” kata Djudjih dalam kajian zuhur di Masjid Baitus Syifa, Selasa (17/1/2023).</p>
                        <div className="flex items-center justify-between my-4">
                            <div>
                                <p className="text-sm text-gray-400">Emir, Info Seputar RSIB</p>
                            </div>
                            <div>
                                <span className="text-sm text-gray-400">15 Febuari 2022</span>
                            </div>
                        </div>
                        <button className="bg-blue-600 rounded-lg px-4 py-2 my-4 hover:bg-blue-500 hover:text-white">Lihat Selengkapnya</button>
                    </div>
                </div>
                <div className="w-5/6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center px-2 py-4 my-2 mx-auto">
                    <div className="col-span-2 py-4">
                        <h2 className="font-bold py-8 text-2xl">GIZI RUMAH SAKIT ISLAM BOGOR TELAH BERSERTIFIKAT HALAL MUI</h2>
                        <p className="text-justify">Para pembaca yang dirahmati Allah, benar adanya sabda Rasulullah saw. yang beliau katakan beratus tahun yang lalu tersebut. Modernisasi yang merupakan tanda kemajuan ilmu pengetahuan manusia seringkali tidak sejalan dengan kondisi iman dan takwa. Tidak sedikit orang yang menghalalkan segala cara untuk mendapatkan nikmat dunia yang diinginkan oleh hawa nafsunya. Tindakan korupsi, perampokan, pembegalan, pengedaran narkoba, pencurian, penipuan merupakan beberapa contoh cara yang tidak halal untuk mendapatkan harta dan marak sekali diberitakan di media dan seringkali meresahkan dan merugikan masyarakat..</p>
                        <div className="flex items-center justify-between my-4">
                            <div>
                                <p className="text-sm text-gray-400">Emir, Info Seputar RSIB</p>
                            </div>
                        <div>
                            <span className="text-sm text-gray-400">15 Maret 2022</span>
                        </div>
                        </div>
                        <button className="bg-blue-600 rounded-lg px-4 py-2 my-4 hover:bg-blue-500 hover:text-white">Lihat Selengkapnya</button>
                    </div>
                    <div className="">
                        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=784,h=736,fit=crop/AoPyw88ByJtGz0O3/whatsapp-image-2022-08-07-at-2.44.12-pm-mnlypegRgOfP3aK0.jpeg" className="w-full mx-auto" alt="" />
                    </div>
                </div>
                <div className="w-5/6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center px-2 py-2 mx-auto my-4">
                    <div className="">
                        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=784,h=736,fit=crop/AoPyw88ByJtGz0O3/whatsapp-image-2022-08-15-at-5.06.06-pm-1-A3QKvW2PvMFlo0W2.jpeg" className="w-full mx-auto" alt="" />
                    </div>
                    <div className="col-span-2 py-4">
                    <h2 className="font-bold py-8 text-2xl">5 TIPS MENJAGA KESEHATAN SAAT MENGHADAPI PUNCAK MUSIM HUJAN</h2>
                    <p className="text-justify">Assalamualaikum warahmatullahi wabarakatuh, Sahabat RSIB Segala puji bagi Allah subhanahu wa ta’ala atas segala nikmat-Nya. Shalawat dan salam semoga senantiasa tercurah atas panutan kita Nabi Muhammad shallallahu ‘alaihi wa sallam, keluarganya, sahabatnya, dan semua orang-orang yang istiqamah di atas ajarannya hingga hari kiamat tiba..</p>
                    <div className="flex items-center justify-between my-4">
                    <div>
                        <p className="text-sm text-gray-400">Emir, Info Seputar RSIB</p>
                    </div>
                    <div>
                        <span className="text-sm text-gray-400">06 Desember 2022</span>
                    </div>
                    </div>
                    <button className="bg-blue-600 rounded-lg px-4 py-2 my-4 hover:bg-blue-500 hover:text-white">Lihat Selengkapnya</button>
                    </div>
                </div>
        </div> */}
    </>
  )
}

export default Our_Work