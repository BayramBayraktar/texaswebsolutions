import React, { useState } from "react";
import Image from "next/image";

export default function WeCreatedSlider() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    const videos = [
        { 
            src: "/video/edit-1.mp4", 
            thumbnail: "/images/profile-2.png", 
            alt: "Customer Review Video 1", 
            description: "Michelle shares her satisfaction with our service. Learn more about our quality and reliable service!"
        },
        { 
            src: "/video/edit-2.mp4", 
            thumbnail: "/images/profile-1.png", 
            alt: "Customer Review Video 2", 
            description: "Jacqueline talks about the unique experience our company offers. Watch to see our satisfaction rate!"
        },
        { 
            src: "/video/edit-3.mp4", 
            thumbnail: "/images/profile-3.png", 
            alt: "Customer Review Video 3", 
            description: "David shares his amazing journey with our team. See why he recommends us!"
        },
    ];

    return (
        <div className="container mx-auto px-4">
            <h2 className='text-center my-8 font-Font1 text-xl md:text-2xl font-bold text-gray-700'>
            Customer Reviews - Real Experiences About Our Services
            </h2>
            <p className='text-center mb-6 text-gray-500'>
                {"Learn about our service quality by watching our real customers' experiences with us."}
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {videos.map((video, index) => (
                    <div 
                        key={index} 
                        className="cursor-pointer transition-transform transform hover:scale-105 text-center"
                        onClick={() => setSelectedVideo(video.src)}
                    >
                        <Image 
                            src={video.thumbnail} 
                            alt={video.alt} 
                            width={600} 
                            height={400} 
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                        <p className="mt-3 text-gray-600 text-sm md:text-base">{video.description}</p>
                    </div>
                ))}
            </div>

            {selectedVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
                    <div
                        className="absolute flex items-center justify-center cursor-pointer top-4 right-4 bg-white md:w-16 md:h-16 w-10 h-10  text-3xl rounded-full md:text-4xl"
                        onClick={() => setSelectedVideo(null)}
                    >
                        ✕
                    </div>
                    <div className="relative w-full max-w-4xl">
                        <video 
                            src={selectedVideo} 
                            controls 
                            autoPlay 
                            className="w-full max-h-[80vh] rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
