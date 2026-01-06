import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Sadece dil önekli yolları (tr/en) ve anasayfayı yakalar
  matcher: ['/', '/(tr|en)/:path*']
};