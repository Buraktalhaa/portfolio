import createNextIntlPlugin from 'next-intl/plugin';

// Dosya src/i18n/request.ts adresindeyse bu satır çalışır:
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);