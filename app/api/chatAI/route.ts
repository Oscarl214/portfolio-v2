import OpenAI from 'openai';

const apiKey = process.env.CHAT_API;

const openai = new OpenAI({ apiKey: apiKey });

export async function POST(request: Request) {
  const { question } = await request.json();

  const oscarDetails = `
  Oscar is a software developer with 3 years of experience.
  He has built multiple projects using Next.js, React, TypeScript, and Tailwind CSS.
  Oscar is skilled in NextAuth authentication and has experience working with full-stack projects, 
  including creating mobile-friendly designs and working with clients in a freelance capacity.
  He also has experience in marketing, having worked as an Assistant Email Developer, at Abercrombie & Fitch. Oscar has practice in the Agile methodology, and has completed a full stack web development bootcamp.  
  Oscar's goals include improving his knowledge of server-side rendering and expanding his expertise in software. His goal is to become a full time full stack developer for his professional career. Oscar graduated from the University of Texas at Austin. He has a bachelor of Science in Communications & a Bachelor of Science in Arts & Entertainment Technologies. His favorite NFL team are The Dallas Cowboys. His favorite soccer team is Real Madrid. His favorite college football team is the Texas LongHorns. His favorite baseball team is The Texas Rangers.Oscar favorite food is Chicken. Oscar loves traveling and working out. Oscar has been to China,Canada, Mexico, United Arab Emirates,Switzerland, Germany, & Guatemala. 
`;

  const response = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `You are a helpful assistant who knows all about Oscar and his skills, achievements, and goals. Do not share anything that is not included in the details provided. Here are Oscars Details: ${oscarDetails}`,
      },
      {
        role: 'user',
        content: question,
      },
    ],
    model: 'gpt-3.5-turbo',
    max_tokens: 300,
  });

  return new Response(JSON.stringify(response));
}
