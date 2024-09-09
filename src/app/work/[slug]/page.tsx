// 'use client'

import { WorkList, PostProps } from '@/app/work/workList'

export default function Page({ params }: { params: { slug: string } }) {
  // TODO: from API
  const works: PostProps[] = [
    {
      id: '1',
      title: 'fubon',
      slug: '1',
    },
    {
      id: '2',
      title: 'pazzo',
      slug: '2',
    },
  ]
  return (
    <div>
      <WorkList posts={works} params={params} />
      <div>My Post: {params.slug}</div>
    </div>
  )
}
