import { Button } from '@/components/ui/button'
import { ArrowRight, Church, HandHelping, Heart, UsersRound } from 'lucide-react'
import React from 'react'
import { ministers } from '../../data'
import Link from 'next/link'
import { routes } from '@/routes'

export default function AboutUs() {
    return (
        <div>

            <section className="pt-36 pb-16 px-9.25 md:pt-50 h-[80vh] bg-[url('/aboutUsBg.jpg')] bg-cover bg-center flex flex-col gap-8 items-center bg-blend-overlay bg-black/50">


                <div className="hidden md:flex items-center gap-3">
                    {/* <Cross className="text-white h-[36px] w-[36px]" /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="31" viewBox="0 0 25 31" fill="none">
                        <path d="M22.2188 7.875H16.3125V1.96875C16.3125 0.882167 15.4303 0 14.3438 0H9.84375C8.75717 0 7.875 0.882167 7.875 1.96875V7.875H1.96875C0.882167 7.875 0 8.75717 0 9.84375V14.3438C0 15.4303 0.882167 16.3125 1.96875 16.3125H7.875V28.9688C7.875 30.0553 8.75717 30.9375 9.84375 30.9375H14.3438C15.4303 30.9375 16.3125 30.0553 16.3125 28.9688V16.3125H22.2188C23.3053 16.3125 24.1875 15.4303 24.1875 14.3438V9.84375C24.1875 8.75717 23.3053 7.875 22.2188 7.875ZM22.5 14.3438C22.5 14.499 22.374 14.625 22.2188 14.625H15.4688C15.0031 14.625 14.625 15.0031 14.625 15.4688V28.9688C14.625 29.124 14.499 29.25 14.3438 29.25H9.84375C9.68852 29.25 9.5625 29.124 9.5625 28.9688V15.4688C9.5625 15.0031 9.18443 14.625 8.71875 14.625H1.96875C1.81352 14.625 1.6875 14.499 1.6875 14.3438V9.84375C1.6875 9.68852 1.81352 9.5625 1.96875 9.5625H8.71875C9.18443 9.5625 9.5625 9.18443 9.5625 8.71875V1.96875C9.5625 1.81352 9.68852 1.6875 9.84375 1.6875H14.3438C14.499 1.6875 14.625 1.81352 14.625 1.96875V8.71875C14.625 9.18443 15.0031 9.5625 15.4688 9.5625H22.2188C22.374 9.5625 22.5 9.68852 22.5 9.84375V14.3438Z" fill="white" />
                    </svg>
                </div>

                <div className="flex flex-col lg:max-w-[50%] gap-5">
                    <h1 className="text-[36px] md:text-[72px] text-white font-gambetta font-medium text-center tracking-[-2.4px]">About Our Sacred Mission</h1>

                    <p className="text-[#C9C6C6] italic text-[14px] md:text-[24px] font-light font-switzer text-center">Called to be a sanctuary in a wandering world, bringing the healing
                        presence of the Sacred Hearts to every corner of the world.</p>
                </div>
            </section>

            <section className='bg-[#F5F1ED4D] py-8 md:px-[48px] px-6 md:py-[96px] lg:flex'>


                <div className=" flex flex-col lg:h-[773px] lg:w-[50%] items-center gap-8 justify-center bg-[url('/aboutUsPastor.png')] px-6.5 bg-contain bg-no-repeat bg-center h-[216px]" />

                <div className="lg:h-[773px] lg:w-[50%] px-6 py-6.5 lg:p-16 flex flex-col lg:justify-between gap-3">
                    <h3 className='text-[#D4AF37] font-gambetta font-bold text-[14px] uppercase tracking-[3.5px] leading-[20px]'>About us</h3>
                    <p className='text-[#4B5563] text-center lg:text-left font-switzer leading-[24px] text-[16px]'>
                        Hearts of Jesus and Mary Ministries (HJM) began as a prayer ministry where people connect through a teleconference platform to pray together. It became popularly known as the “Holy Spirit Prayer Line.” By God’s grace, participation grew from a small group of faithful believers to more than 300 participants gathering nightly for prayer, worship, and spiritual fellowship.
                        HJM is a Catholic-based ministry rooted in the values, teachings, and traditions of the Catholic Church while remaining open to all Christians who believe in the Holy Bible and desire a deeper relationship with God. Our members and participants include both Catholics and non-Catholics seeking spiritual growth, healing, deliverance, transformation, intimacy with God, and empowerment to fulfill His purpose within our families, communities, and throughout the world.
                        Some of our regular prayer activities include the daily Rosary, the Divine Mercy Chaplet, the Stations of the Cross, and intercessory prayers for healing, deliverance, and the renewal of the mind, soul, and spirit. These activities are carried out through various platforms, including teleconferences and social media channels such as Facebook and YouTube.
                        The ministry also provides many opportunities for faith formation and service through daily ministry activities, a weekly youth ministry, workshops, special events, annual retreats, community outreach, and charitable initiatives. Through these ministries, we seek to proclaim the Word of God, foster authentic Christian fellowship, and inspire lives of faith and service.
                        We invite you to join us in the vision and mission of HJM as we strive to be the hands and feet of Jesus Christ in the world.Hearts of Jesus  and Mary Ministries is an IRS-approved 501(c)(3) nonprofit organization in the United States.
                    </p>

                    <div className='flex flex-col lg:flex-row items-center justify-start gap-8'>
                        <div className="h-px bg-[#D4AF37] w-18"></div>

                        <p className='text-[#2C2C2C] font-switzer font-bold text-[14px] uppercase tracking-[1.5px] leading-[20px]'>Semper Fidelis</p>
                    </div>
                </div>

            </section>

            <section className='bg-[#F5F1ED] w-full py-8 lg:py-24 lg:px-46.25 px-6 flex flex-col gap-5 md:gap-8'>
                <h2 className='text-[#2C2C2C] text-[24px] lg:text-[48px] w-[80%] mx-auto italic font-gambetta leading-10 text-center'>
                    To promote and support individual’s spirituality through evangelical mission, prayers and charity.
                </h2>

                <div className="h-px bg-[#D4AF37] w-24 mx-auto"></div>

                <p className="text-[#8B3A3A] font-switzer tracking-[4.8px] leading-[16px] text-center font-bold text-[12px] lg:text-[12px]">
                    Our Perpetual Mission
                </p>
            </section>

            <section className="bg-white w-full py-8 px-6 md:px-11.5 flex flex-col gap-5 md:gap-12.5 ">
                <div className="text-center flex flex-col gap-3">
                    <p className="text-[#D4AF37] font-gambetta tracking-[3px] leading-[16px] text-center font-bold text-[10px] lg:text-[12px]">
                        The Pillars of Our House
                    </p>
                    <h2 className="text-[#2C2C2C] font-gambetta text-2xl md:text-[32px]">Our Core Spiritual Principles</h2>
                    {/* <div className="h-0.5 bg-[#D4AF37] w-24 mx-auto"></div> */}
                </div>

                <div className="flex items-center gap-4 lg:flex-row lg:gap-10.5 lg:justify-center overflow-auto scrollbar-none w-full">
                    <div className='p-10 bg-[#F5F1EDB2] h-[270px] lg:h-[340px] min-w-[277px] flex flex-col gap-4  rounded-[10px]'>
                        <HandHelping className='text-[#8B3A3A] h-6 w-6 md:h-8 md:w-8' />

                        <h3 className='font-gambetta text-[#2C2C2C] text-[18px] md:text-[24px] font-bold tracking-[-0.24px]'>
                            Prayer &
                            Intercession
                        </h3>

                        <p className='font-switzer text-[12px] md:text-[16px] text-[#6B7280]  ' >We stand in the breach,
                            offering constant intercession for the needs of our members and the whole world.</p>

                    </div>

                    <div className='p-10 bg-[#F5F1EDB2] h-[270px] lg:h-[340px] min-w-[277px] flex flex-col gap-4  rounded-[10px]'>
                        <Church className='text-[#8B3A3A] h-6 w-6 md:h-8 md:w-8' />

                        <h3 className='font-gambetta text-[#2C2C2C] text-[18px] md:text-[24px] font-bold tracking-[-0.24px]'>
                            Liturgical Tradition
                        </h3>

                        <p className='font-switzer text-[12px] md:text-[16px] text-[#6B7280]  ' >Anchored in the richness of Catholic heritage, we preserve the beauty of sacred chant and timeless
                            devotions.
                        </p>

                    </div>

                    <div className='p-10 bg-[#F5F1EDB2] h-[270px] lg:h-[340px] min-w-[277px] flex flex-col gap-4  rounded-[10px]'>
                        <Heart className='text-[#8B3A3A] h-6 w-6 md:h-8 md:w-8' />

                        <h3 className='font-gambetta text-[#2C2C2C] text-[18px] md:text-[24px] font-bold tracking-[-0.24px]'>
                            Spiritual Healing
                        </h3>

                        <p className='font-switzer text-[12px] md:text-[16px] text-[#6B7280]  ' >
                            Through prayer and council, we facilitate encounters with Christ the Physician for the
                            healing of soul and mind.
                        </p>

                    </div>

                    <div className='p-10 bg-[#F5F1EDB2] h-[270px] lg:h-[340px] min-w-[277px] flex flex-col gap-4  rounded-[10px]'>
                        <UsersRound className='text-[#8B3A3A] h-6 w-6 md:h-8 md:w-8' />

                        <h3 className='font-gambetta text-[#2C2C2C] text-[18px] md:text-[24px] font-bold tracking-[-0.24px]'>
                            Community &
                            Fellowship
                        </h3>

                        <p className='font-switzer text-[12px] md:text-[16px] text-[#6B7280]  ' >
                            A global family united by
                            faith, providing mutual
                            support and accompaniment on the journey to holiness.
                        </p>

                    </div>

                </div>
            </section>

            <section className='bg-[#F5F1ED] w-full py-8 lg:py-24 lg:px-12 px-6 flex flex-col gap-5 md:gap-12'>
                <div className="text-center flex flex-col gap-3">
                    <p className="text-[#D4AF37] font-gambetta tracking-[3px] leading-[16px] text-center font-bold text-[10px] lg:text-[12px]">
                        Witnesses of Grace
                    </p>
                    <h2 className="text-[#2C2C2C] font-gambetta text-2xl md:text-[32px]">Echoes of Encounter</h2>
                </div>

                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-10 lg:gap-12'>

                    {ministers.map((item, index) => (
                        <div key={index} className='flex gap-6 flex-col items-center w-fit mx-auto'>
                            <div className='h-[142px] w-[142px] rounded-full bg-[url("/pastor.jpg")] bg-top bg-contain aspect-square bg-cover bg-center' style={{ backgroundImage: `url(${item.img})` }} />

                            <div className='flex flex-col items-center'>
                                <h2 className=' text-[18px] lg:text-[24px] text-[#2C2C2C] font-gambetta font-bold tracking-[-0.24px]'>
                                    {item.name}
                                </h2>

                                <h3 className='text-[14px] lg:text-[18px] text-[#8B3A3A] font-bold tracking-[-0.18px]'>
                                    Vision Bearer
                                </h3>

                            </div>

                        </div>
                    ))}

                </div>

                {/* <Button className=" self-center md:col-span-2 lg:col-span-3 w-fit text-[14px] tracking-[1.4px] mt-12">
                    View All
                    <ArrowRight />
                </Button> */}
            </section>

            <section className='bg-[#fff] w-full py-8 lg:py-24 lg:px-12 px-6 flex flex-col gap-5 md:gap-16'>
                <div className="text-center flex flex-col gap-3">
                    <p className="text-[#D4AF37] font-gambetta tracking-[3px] leading-[16px] text-center font-bold text-[10px] lg:text-[12px]">
                        Witnesses of Grace
                    </p>
                    <h2 className="text-[#2C2C2C] font-gambetta text-2xl md:text-[32px]">Echoes of Encounter</h2>
                </div>



                <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-12'>
                    <div className='flex flex-col gap-8 lg:gap-16 bg-[#F5F1EDA1] rounded-[80px_10px_10px_10px] p-5 lg:p-10'>
                        <p className='text-[#2C2C2C] font-switzer text-[12px] italic lg:text-[18px] not-only:leading-6.5'>
                            "Being homebound due to illness,
                            HJAMM became my spiritual
                            lifeline. The Rosary sessions make
                            me feel like I am kneeling right in
                            the chapel with everyone else."
                        </p>

                        <div className='font-switzer'>
                            <h3 className='font-bold font-switzer text-[14px] lg:text-[18px] text-[#2C2C2C]'>
                                Chike S.
                            </h3>
                            <p className='text-[10px] lg:text-[12px] text-[#D4AF37] font-bold tracking-[1.2px] uppercase'>
                                Devoted Member
                            </p>
                        </div>

                    </div>

                    <div className='flex flex-col gap-8 lg:gap-16 bg-[#F5F1EDA1] rounded-[10px] p-5 lg:p-10'>
                        <p className='text-[#2C2C2C] font-switzer text-[12px] italic lg:text-[18px] not-only:leading-6.5'>
                            "The healing ministry has
                            transformed my family life. Fr.
                            Thomas's teachings on the Sacred
                            Hearts helped me find peace I
                            never thought possible."
                        </p>

                        <div className='font-switzer'>
                            <h3 className='font-bold font-switzer text-[14px] lg:text-[18px] text-[#2C2C2C]'>
                                Fisayo M.
                            </h3>
                            <p className='text-[10px] lg:text-[12px] text-[#D4AF37] font-bold tracking-[1.2px] uppercase'>
                                Ministry Volunteer
                            </p>
                        </div>

                    </div>

                    <div className='flex flex-col gap-8 lg:gap-16 bg-[#F5F1EDA1] rounded-[10px_10px_80px_10px] p-5 lg:p-10'>
                        <p className='text-[#2C2C2C] font-switzer text-[12px] italic lg:text-[18px] not-only:leading-6.5'>
                            "In the middle of my busy workday,
                            the Mid-day Angelus brings me
                            back to what matters. This
                            community is a true blessing in the
                            digital world."
                        </p>

                        <div className='font-switzer'>
                            <h3 className='font-bold font-switzer text-[14px] lg:text-[18px] text-[#2C2C2C]'>
                                David L.
                            </h3>
                            <p className='text-[10px] lg:text-[12px] text-[#D4AF37] font-bold tracking-[1.2px] uppercase'>
                                Global Supporter
                            </p>
                        </div>

                    </div>
                </div>


            </section>

            <section className=" bg-[#F5F1ED] text-center py-8 px-6 md:px-[185px] md:py-[96px] flex flex-col gap-7 md:gap-9">
                <h2 className='text-[#2C2C2C] text-[24px] md:text-[48px] font-gambetta leading-6.5 md:leading-[48px] text-center'>
                    Join the Communion of Hearts
                </h2>

                <p className="text-[#4B5563] font-switzer font-light text-[12px] md:text-[20px] ">
                    Whether you seek prayer, want to serve, or wish to support our mission, there is a place for you
                    in our sacred chapel. Join us today and experience the transformative power of
                    encounter.
                </p>

                <div className=" flex flex-col lg:flex-row lg:justify-center gap-6">

                    <Link href={routes?.livePrayer} className="w-full  md:w-fit">
                        <Button className='text-[#fff]  w-full lg:w-fit'>
                            Submit a Prayer Request
                        </Button>
                    </Link>

                    <Link href={'/#mission'} className="w-full  md:w-fit">
                        <Button variant="outline" className=' border-[#8B3A3A] text-[#8B3A3A] w-full lg:w-fit'>
                            Volunteer to Serve
                        </Button>
                    </Link>
                </div>

            </section >


        </div>
    )
}
