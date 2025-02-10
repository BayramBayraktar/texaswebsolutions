import React from 'react'

const Reviews = () => {
    return (
        <div className='bg-[#032127]'>
            <div className='w-full max-w-screen-xl mx-auto px-3 py-24'>
                <div className='mb-12'>
                    <h1 className='text-white text-center font-Font1 text-3xl md:text-6xl'>
                        What Our <span className='text-[#FFA500]'>Clients</span> Say <br /> About Us
                    </h1>
                    <h2 className='text-white text-center font-sans text-base md:text-lg mt-4'>
                        Hear It Straight from Those Who Matter Most – Our Valued Clients
                    </h2>
                </div>
                <div className='text-white flex md:flex-row flex-col gap-8 h-full md:h-screen'>
                    <div className='md:w-1/3 w-full flex flex-col gap-8 h-full'>
                        <div className='md:h-2/3 h-full p-6 bg-[rgba(126,214,223,.15)] rounded-3xl border gap-y-2 flex flex-col justify-between'>
                            <p>{"Working with this Texas-based web agency was a game-changer for my small business. They delivered a stunning website that truly represents my brand and has increased customer engagement dramatically!"}</p>
                            <div className='flex items-center gap-4'>
                                <div>
                                    <p className='text-sm' >Emily T.</p>
                                    <p className='text-sm'>Boutique Owner</p>
                                </div>
                            </div>
                        </div>
                        <div className='md:h-1/3 h-full p-6 bg-[rgba(126,214,223,.15)] rounded-3xl border gap-y-2 flex flex-col justify-between'>
                            <p>{"Their expertise in SEO and social media integration helped us gain more visibility online. Now, we're attracting more customers than ever before!"}</p>
                            <div className='flex items-center gap-4'>
                                <div>
                                    <p className='text-sm' >John P.</p>
                                    <p className='text-sm'>Restaurant Owner</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/3 w-full flex flex-col gap-8 h-full'>
                        <div className='h-1/3 p-6 bg-[rgba(126,214,223,.15)] rounded-3xl border gap-y-2 flex flex-col justify-between'>
                            <p>{"The provided outstanding support and design expertise. Our website now looks professional and is easy to navigate."}</p>
                            <div className='flex items-center gap-4'>
                                <div>
                                    <p className='text-sm' >Carlos M.</p>
                                    <p className='text-sm'>Gym Owner</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-2/3 p-6 bg-[rgba(126,214,223,.15)] rounded-3xl border gap-y-2 flex flex-col justify-between'>
                            <p>{"Our sales increased after launching our new website. The professional design and SEO improvements really made a difference!"}</p>
                            <div className='flex items-center gap-4'>
                                <div>
                                    <p className='text-sm' >Sophia L.</p>
                                    <p className='text-sm'>Handmade Crafts Seller</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/3 w-full flex flex-col gap-8 h-full'>
                        <div className='h-2/3 p-6 bg-[rgba(126,214,223,.15)] rounded-3xl border gap-y-2 flex flex-col justify-between'>
                            <p>{"Our renovation business skyrocketed after this website! 💻 Client inquiries tripled, and the online booking system cut our scheduling chaos by half. Finally, a site that actually works for contractors!"}</p>
                            <div className='flex items-center gap-4'>
                                <div>
                                    <p className='text-sm' >Jake & Clara M.</p>
                                    <p className='text-sm'>Owner, Kitchen Specialists</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-1/3 p-6 bg-[rgba(126,214,223,.15)] rounded-3xl border gap-y-2 flex flex-col justify-between'>
                            <p>{"The SEO service brought us 50% more bathroom remodel requests! 🚽 Now I spend less time marketing and more time doing what I love – transforming homes."}</p>
                            <div className='flex items-center gap-4'>
                                <div>
                                    <p className='text-sm' >Sarah L.</p>
                                    <p className='text-sm'>Lead Designer, Bath Pros</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews