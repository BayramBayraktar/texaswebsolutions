import React from 'react'
import Layout from '../layout/index'

import Reviews from '@/components/reviews'
import WeCreatedSlider from '@/components/weCreated'
import VideoSlider from '@/components/videoSlider'

const ReviewsPage = () => {
    return (
        <Layout
            title="Bursa Web Tasarım Hizmetlerimiz Hakkında Müşteri Yorumları | Web Tasarım ve Kodlama"
            description="Bursa'da web tasarım ve SEO hizmetlerimizden faydalanan gerçek müşterilerimizin yorumlarını inceleyin. Profesyonel çözümlerimizle işletmelerin dijital dönüşüm hikayelerini keşfedin."
            keywordContent="Bursa web tasarım yorumları, Bursa web sitesi memnuniyet, Bursa SEO hizmetleri değerlendirme, profesyonel web tasarım geri bildirim, Bursa dijital ajans referanslar, e-ticaret sitesi müşteri yorumları" >
            <Reviews />
            <WeCreatedSlider />
            <VideoSlider />
        </Layout>
    )
}

export default ReviewsPage