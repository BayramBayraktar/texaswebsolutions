import React from 'react'
import Layout from '../layout/index'

import Reviews from '@/components/reviews'
import WeCreatedSlider from '@/components/weCreated'

const ReviewsPage = () => {
    return (
        <Layout
            title="Customer Reviews for Top Web Design & Development Services in Texas | Texsas Web Solutions"
            description="Read genuine customer reviews for Texsas Web Solutions, the leading web design and development company in Texas. See why small businesses trust us to create custom, high-performing websites."
            keywordContent="web design reviews Texas, web development reviews Texas, Texas web solutions reviews, customer feedback Texas, Texsas Web Solutions reviews, professional web services Texas" >
            <Reviews />
            <WeCreatedSlider />
        </Layout>
    )
}

export default ReviewsPage