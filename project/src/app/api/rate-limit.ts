import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Redis } from '@upstash/redis';

// Initialize Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
});

// Rate limit configuration
const RATE_LIMIT_WINDOW = 60; // 1 minute
const MAX_REQUESTS = 60; // 60 requests per minute

export async function rateLimit(request: NextRequest) {
  const ip = request.ip || '127.0.0.1';
  const key = `rate-limit:${ip}`;

  try {
    // Get current requests count
    const currentRequests = await redis.get<number>(key) || 0;

    if (currentRequests >= MAX_REQUESTS) {
      return new NextResponse(JSON.stringify({
        error: 'Too many requests',
        message: 'Please try again later'
      }), {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': RATE_LIMIT_WINDOW.toString()
        }
      });
    }

    // Increment request count and set expiry
    await redis.pipeline()
      .incr(key)
      .expire(key, RATE_LIMIT_WINDOW)
      .exec();

    return null; // Continue with the request
  } catch (error) {
    console.error('Rate limiting error:', error);
    return null; // Continue with the request if rate limiting fails
  }
}