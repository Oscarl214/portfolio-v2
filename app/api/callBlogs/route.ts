import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const allBlogs = await prisma.blogPost.findMany({
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
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json({
      message: 'Blogs Data fetched',
      BlogData: allBlogs,
    });
  } catch (error) {
    console.log('error', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
