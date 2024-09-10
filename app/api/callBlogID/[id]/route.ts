import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

interface Params {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: Params) {
  const { id } = params;

  try {
    const blog = await prisma.blogPost.findUnique({
      where: { id },
      select: {
        id: true,
        title: true,
        content: true,
        tags: true,
        status: true,
        images: true,
        author: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }
    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}
