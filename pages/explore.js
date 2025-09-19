import React from 'react'
import Layout from '../components/layout'
import styles from "../styles/explore.module.css"
import { useRouter } from 'next/router'
import Image from 'next/image'


function Gallery() {

    const images = [
        {
            id: 1,
            image: require('../public/assets/gallery-images/2x2_2.png').default,
            likes: 5,
            size: '2x2',
            description: 'somthing got here in the description'
        },
        {
            id: 2,
            image: require('../public/assets/gallery-images/2x3_6.jpg').default,
            likes: 5,
            size: '2x3',
            description: 'somthing got here in the description'
        },
        {
            id: 3,
            image: require('../public/assets/gallery-images/1x1_3.png').default,
            likes: 5,
            size: '1x1',
            description: 'somthing got here in the description'
        },
        {
            id: 4,
            image: require('../public/assets/gallery-images/1x1_1.jpg').default,
            likes: 5,
            size: '1x2',
            description: 'somthing got here in the description'
        },
        {
            id: 5,
            image: require('../public/assets/gallery-images/1x1_2.jpg').default,
            likes: 5,
            size: '2x2',
            description: 'somthing got here in the description'
        },
        {
            id: 6,
            image: require('../public/assets/gallery-images/2x2_3.jpg').default,
            likes: 5,
            size: '2x2',
            description: 'somthing got here in the description'
        },
        {
            id: 7,
            image: require('../public/assets/gallery-images/2x2_1.jpg').default,
            likes: 5,
            size: '2x2',
            description: 'somthing got here in the description'
        },
        {
            id: 8,
            image: require('../public/assets/gallery-images/2x3_1.jpg').default,
            likes: 5,
            size: '2x3',
            description: 'somthing got here in the description'
        },
        {
            id: 9,
            image: require('../public/assets/gallery-images/2x3_2.jpg').default,
            likes: 5,
            size: '2x3',
            description: 'somthing got here in the description'
        },
        {
            id: 10,
            image: require('../public/assets/gallery-images/2x3_3.jpg').default,
            likes: 5,
            size: '2x2',
            description: 'somthing got here in the description'
        },
        {
            id: 11,
            image: require('../public/assets/gallery-images/2x3_4.jpg').default,
            likes: 5,
            size: '1x3',
            description: 'somthing got here in the description'
        },
        {
            id: 12,
            image: require('../public/assets/gallery-images/2x3_5.jpg').default,
            likes: 5,
            size: '1x3',
            description: 'somthing got here in the description'
        },


    ]

    function getSpanEstimate(size) {
        if (size === '1x1' || size === 'undefined') return { gridColumnEnd: 'span 1', gridRowEnd: 'span 1' }
        if (size === '1x2') return { gridColumnEnd: 'span 1', gridRowEnd: 'span 2' }
        if (size === '1x3') return { gridColumnEnd: 'span 1', gridRowEnd: 'span 3' }
        if (size === '2x1') return { gridColumnEnd: 'span 2', gridRowEnd: 'span 1' }
        if (size === '2x2') return { gridColumnEnd: 'span 2', gridRowEnd: 'span 2' }
        if (size === '2x3') return { gridColumnEnd: 'span 2', gridRowEnd: 'span 3' }
    }

    const router = useRouter();
    return (
        <Layout title='Gallery'>
            <section className={styles.gallery}>
                <div className={`${styles.container} container`}>
                    {
                        images.map((img) => (
                            <article style={getSpanEstimate(img.size)} className={styles.imageContainer} key={img.id}>
                                {/* <img className={styles.img} src={img.url} alt={img.alt} loading="lazy" /> */}
                                <Image className={styles.img} src={img.image} layout='responsive' alt={`Gallery image ${img.id}`}></Image>
                                {/* <p className={styles.description}>{img.description}</p> */}
                            </article>
                        ))
                    }
                </div>
            </section>
        </Layout>

    )
}

export default Gallery