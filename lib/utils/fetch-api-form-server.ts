'use server';

import { getSession } from './session';

interface FetchApiOptions extends RequestInit {
  cacheType?: RequestCache;
}

export const fetchApi = async (
  endpoint: string,
  options: FetchApiOptions = {}
): Promise<any> => {
  const session = await getSession();
  const token = session?.user?.token;

  const baseUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api`;
  const url = `${baseUrl}${endpoint}`;

  try {
    const response = await fetch(url, {
      ...options,
      cache: options.cacheType || 'no-cache',
      headers: {
        ...(options.headers || {}),
        Authorization: token ?? '',
      },
    });

    if (response.status === 401) {
      return {
        error: true,
        data: '',
        message: null,
        status: 401,
      };
    }

    return response;
  } catch (error: any) {
    console.error('Fetch error:', error);
    throw new Error(error?.message || 'Something went wrong');
  }
};

export const fetchApiSso = async (
  endpoint: string,
  options: FetchApiOptions = {}
): Promise<Response> => {
  const session = await getSession();
  const token = session?.user?.token;

  const baseUrl = `${process.env.NEXT_PUBLIC_API_SSO_URL}/api`;
  const url = `${baseUrl}${endpoint}`;

  try {
    const response = await fetch(url, {
      ...options,
      cache: options.cacheType || 'no-cache',
      headers: {
        ...(options.headers || {}),
        Authorization: token ?? '',
      },
    });

    return response;
  } catch (error: any) {
    throw new Error(error?.message || 'Something went wrong');
  }
};

export const fetchApiDatareferensi = async (
  endpoint: string,
  options: FetchApiOptions = {}
): Promise<any> => {
  const session = await getSession();
  const token = session?.user?.token;

  const baseUrl = `${process.env.NEXT_PUBLIC_API_DATA_REFERENSI_URL}/api`;
  const url = `${baseUrl}${endpoint}`;

  try {
    const response = await fetch(url, {
      ...options,
      cache: options.cacheType || 'no-cache',
      headers: {
        ...(options.headers || {}),
        Authorization: token ?? '',
      },
    });

    if (response.status === 401) {
      return {
        error: true,
        data: '',
        message: null,
        status: 401,
      };
    }

    return response;
  } catch (error: any) {
    console.error('Fetch error:', error);
    throw new Error(error?.message || 'Something went wrong');
  }
};
