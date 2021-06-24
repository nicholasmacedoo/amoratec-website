import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { AiOutlineCalendar, AiOutlineUser } from 'react-icons/ai';
import styles from './post.module.scss';
import { GetServerSideProps } from 'next';
import { getPrismicClient } from '../../services/prismic';
import { RichText } from 'prismic-dom';

type PostProps = {
    post: {
        slug: string;
        title: string;
        thumbnail: string;
        excerpt: string;
        content: string;
        updatedAt: string;
    }
}

export default function Post({ post }: PostProps) {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <>
            <Head>
                <title>{post.title} | Amoratec - Agência</title>
                <meta name="description" content={post.excerpt} />
                {/* Tags - Facebook Open Graph */}
                <meta property="og:url" content={`https://amoratec.com.br/blog/${post.slug}`} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`Amoratec | ${post.title}`} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:image" content={post.thumbnail} />
                {/* Twitter */}
                
            </Head>
            <main className={styles.container}>   
                <div className={styles.thumbnail}>
                    <Image 
                        src={post.thumbnail} 
                        alt="Titulo do post" 
                        layout="fill"
                        // width={1980}
                        // height={960}
                    />
                </div>
                <article className={styles.content}>
                    <div className={styles.description}>
                        <h1>{post.title}</h1>
                        <time><AiOutlineCalendar /> {post.updatedAt}</time>
                        <span><AiOutlineUser /> Nicholas Macedo</span>
                    </div>
                    <div className={styles.body} dangerouslySetInnerHTML={{ __html: post.content }}/>
                </article>

            </main>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
    const { slug } = params;
    
    const prismic = getPrismicClient(req);

    const response = await prismic.getByUID('posts', String(slug), {});

    const post = {
        slug,
        title: RichText.asText(response.data.title),
        content: RichText.asHtml(response.data.content),
        excerpt: response.data.content.find(content => content.type === 'paragraph')?.text ?? '',
        thumbnail: response.data.thumbnail.url,
        updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        }),
    }

    return {
        props: {
            post,
        }
    }
}
