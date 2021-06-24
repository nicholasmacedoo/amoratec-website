import { GetStaticProps } from "next";
import Head from "next/head";
import Link from 'next/link';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';

import styles from './styles.module.scss';
import { AiOutlineCalendar, AiOutlineUser } from 'react-icons/ai';
import { getPrismicClient } from "../../services/prismic";

interface PostProps {
    slug: string;
    title: string;
    excerpt: string;
    updated_at: string;
}

interface BlogProps {
    posts: PostProps[];
}
export default function Blog({ posts }: BlogProps) {
    return (
        <>
            <Head>
                <title>Conteúdos | Amoratec - Agência</title>
                <meta name="description" content="Aumente suas vendas, consiga fidelizar e ganhar mais clientes 
                    e fazer do seu negócio uma referência de mercado na construção." />
            </Head>
            <main style={{marginBottom: 64}}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h1>Conteúdos</h1>
                    </div>
                    <div className={styles.posts}>
                       {posts.map(post => (
                            <article key={post.slug}>
                                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                <p>{post.excerpt}</p>
                                <div>
                                    <span><AiOutlineCalendar /> {post.updated_at}</span>
                                    <span><AiOutlineUser /> Nicholas Macedo</span>
                                </div>
                            </article>
                       ))}
                    </div>
                </div>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const prismic = getPrismicClient();
    const response = await prismic.query(
        Prismic.predicates.at('document.type', 'posts'),
        { 
            fetch: ['posts.title', 'posts.content'], 
            pageSize: 100,
        }
    );
    
    const posts = response.results.map(post => {
        return {
            slug: post.uid,
            title: RichText.asText(post.data.title),
            excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
            updated_at: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            }),
        }
    })

    return {
        props: {
            posts,
        }
    }
}