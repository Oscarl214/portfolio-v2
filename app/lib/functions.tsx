'use server';
import { prisma } from '@/lib/prisma';

export const getRepo = async () => {
  try {
    const lastBlog = await prisma.blogPost.findFirst({
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

    return lastBlog;
  } catch (error) {
    console.error('Error fetching blog:', error);
    throw error;
  }
};
