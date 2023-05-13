import { NextRequest } from 'next/server';
import EmailData from './email.json';

export async function GET(_request: NextRequest) {
    console.log('Email GET Request');
    return new Response(JSON.stringify(EmailData), {
        status: 200
    })
}