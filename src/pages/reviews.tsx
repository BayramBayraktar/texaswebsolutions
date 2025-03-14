import React from 'react'
import Layout from '../layout/index'

import Reviews from '@/components/reviews'
import WeCreatedSlider from '@/components/weCreated'
import VideoSlider from '@/components/videoSlider'

const ReviewsPage = () => {
    return (
        <Layout
            title="Customer Reviews for Top Web Design & Development Services | Texsas Web Solutions"
            description="Read genuine customer reviews for Texas Web Solutions, a leading web design and development company. Discover why businesses trust us to create custom, high-performing websites that drive results."
            keywordContent="web design reviews, web development reviews, custom website reviews, customer feedback web design, professional web services, SEO-friendly websites, responsive web design reviews" >
            <Reviews />
            <WeCreatedSlider />
            <VideoSlider/>
        </Layout>
    )
}

export default ReviewsPage