import client from '@/lib/api/client';

export const uploadImage = (image: FormData) => client.post('/image', image);

export const uploadMultiImage = (images: FormData) => client.post('/image/multiple', images);
