import { Metadata } from 'next'
// import Image from 'next/image'
import { notFound } from 'next/navigation'
import { OstDocument } from 'outstatic'
import { getDocumentSlugs, load } from 'outstatic/server'
import React from 'react'

import PostHeader from '@/app/components/portfolio/details/PostHeader'

import LayoutContainer from '../../components/LayoutContainer'
import absoluteUrl from '../../utils/absoluteUrl'
import markdownToHtml from '../../utils/markdownToHtml'

type Post = OstDocument

interface Params {
  params: {
    slug: string
  }
}

export async function generateMetadata(params: Params): Promise<Metadata> {
  const post = await getData(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: absoluteUrl(`/portfolio/${post.slug}`),
      images: [
        {
          url: absoluteUrl(post?.coverImage || '/images/og-image.png'),
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: absoluteUrl(post?.coverImage || '/images/og-image.png')
    }
  }
}

export default async function Portfolio(params: Params) {
  const post = await getData(params)

  return (
    <LayoutContainer>
      <main className='flex min-h-screen flex-col'>
        <PostHeader
          title={post.title}
          desc={post.description}
          publishedAt={post.publishedAt}
        />
        <div className='w-full whitespace-pre-wrap break-words py-5 text-left'>
          {post.content}
        </div>
      </main>
    </LayoutContainer>
  )
}

async function getData({ params }: Params) {
  const db = await load()

  const post = await db
    .find<Post>({ collection: 'portfolio', slug: params.slug }, [
      'title',
      'publishedAt',
      'description',
      'slug',
      'author',
      'content',
      'coverImage',
      'tags'
    ])
    .first()

  if (!post) {
    notFound()
  }

  const content = markdownToHtml(post.content)

  return {
    ...post,
    content
  }
}

export async function generateStaticParams() {
  const posts = getDocumentSlugs('portfolio')
  return posts.map(slug => ({ slug }))
}
