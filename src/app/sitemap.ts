import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabaseClient';
import { hrmsSelect } from '@/lib/hrmsClient';
import { industryReportsData } from '@/data/industryReportsData';
import { SITE_URL } from '@/lib/siteUrl';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL;
  const now = new Date().toISOString();

  // 1. Core static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/who-we-are',
    '/contact',
    '/careers',
    '/book-a-consultation',
    '/trustcenter',
    '/ascenduspartner',
    '/blog',
    '/case-studies',
    '/industry-reports',
    '/whitepapers',
    '/legal/privacy',
    '/legal/terms',
    '/legal/privacyCommitment',
    '/legal/security',
    '/legal/cookies',
    '/what-we-do/enterprise-transformation',
    '/what-we-do/enterprise-transformation/broader-technology-services',
    '/what-we-do/enterprise-transformation/microsoft-services',
    '/what-we-do/enterprise-transformation/sap-transformation',
    '/what-we-do/artificial-intelligence',
    '/what-we-do/business-advisory',
    '/what-we-do/cloud-infrastructure',
    '/what-we-do/customer-experience',
    '/what-we-do/cybersecurity-digital-trust',
    '/what-we-do/data-intelligence',
    '/what-we-do/digital-engineering',
    '/what-we-do/experience-design',
    '/what-we-do/innovation-emerging-technologies',
    '/what-we-do/intelligent-automation',
    '/what-we-do/managed-services',
    '/services',
    '/services/rise-with-sap',
    '/services/grow-with-sap',
    '/services/sap-successfactors',
    '/services/sap-ariba',
    '/services/sap-cx',
    '/services/sap-analytics-cloud',
    '/services/sap-ams',
    '/services/sap-conversion-ecc-to-s4hana',
    '/services/sap-rollout',
    '/services/sap-migration',
    '/services/sap-tm',
    '/services/microsoft-dynamics-365',
    '/services/power-bi',
    '/services/microsoft-ams',
    '/services/microsoft-migration',
    '/services/microsoft-rollout',
    '/services/google-cloud-platform',
    '/services/amazon-web-services',
    '/services/azure',
    '/services/robotic-process-automation',
    '/services/ai-ml',
    '/services/e-invoicing',
    '/services/internet-of-things',
    '/services/big-data',
    '/services/cyber-security',
    '/services/full-stack-development',
    '/services/ui-ux-design',
    '/services/software-development',
    '/solutions',
    '/solutions/s4hana-on-premise',
    '/solutions/s4hana-public-cloud',
    '/solutions/s4hana-private-cloud',
    '/solutions/business-technology-platform',
    '/solutions/analytics-cloud',
    '/solutions/customer-relationship-management',
    '/solutions/finance-and-controlling',
    '/solutions/human-capital-management',
    '/solutions/successfactors',
    '/solutions/procurement',
    '/solutions/supply-chain-management',
  ].map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 3. Industry reports — static data
  const industryReportRoutes: MetadataRoute.Sitemap = industryReportsData.map((report) => ({
    url: `${baseUrl}/industry-reports/${report.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // 4. Dynamic content from Supabase (blog, case studies, whitepapers)
  const dynamicRoutes: MetadataRoute.Sitemap = [];

  try {
    const { data: blogs } = await supabase.from('blogs').select('slug, updated_at');
    (blogs || []).forEach((row: any) => {
      dynamicRoutes.push({
        url: `${baseUrl}/blog/${row.slug}/`,
        lastModified: row.updated_at ? new Date(row.updated_at).toISOString() : now,
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      });
    });
  } catch (error) {
    console.error('Sitemap: blogs fetch failed', error);
  }

  try {
    const { data: caseStudies } = await supabase.from('case_studies').select('slug, updated_at');
    (caseStudies || []).forEach((row: any) => {
      dynamicRoutes.push({
        url: `${baseUrl}/case-studies/${row.slug}/`,
        lastModified: row.updated_at ? new Date(row.updated_at).toISOString() : now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      });
    });
  } catch (error) {
    console.error('Sitemap: case studies fetch failed', error);
  }

  try {
    const { data: whitepapers } = await supabase.from('white_papers').select('slug, updated_at');
    (whitepapers || []).forEach((row: any) => {
      dynamicRoutes.push({
        url: `${baseUrl}/whitepapers/${row.slug}/`,
        lastModified: row.updated_at ? new Date(row.updated_at).toISOString() : now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      });
    });
  } catch (error) {
    console.error('Sitemap: whitepapers fetch failed', error);
  }

  try {
    const jobs = await hrmsSelect('jobs', { select: 'slug,updated_at', status: 'eq.published' });
    (jobs || []).forEach((row: any) => {
      dynamicRoutes.push({
        url: `${baseUrl}/careers/${row.slug}/`,
        lastModified: row.updated_at ? new Date(row.updated_at).toISOString() : now,
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      });
    });
  } catch (error) {
    console.error('Sitemap: jobs fetch failed', error);
  }

  return [...staticRoutes, ...industryReportRoutes, ...dynamicRoutes];
}
