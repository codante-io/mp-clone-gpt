import { NextRequest, NextResponse } from 'next/server';
import { HttpStatusCode } from 'axios';
import openai from '@/utils/openai';

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ message: 'Hello World!' }, { status: HttpStatusCode.Ok });
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const { key, message } = await req.json();

  try {
    const chatCompletion = await openai(key).chat.completions.create({
      messages: [{ role: 'user', content: message }],
      model: 'gpt-3.5-turbo',
    });

    return NextResponse.json(chatCompletion.choices[0].message, { status: HttpStatusCode.Ok });
  } catch (error) {
    return NextResponse.json({ error }, { status: HttpStatusCode.InternalServerError });
  }
}
