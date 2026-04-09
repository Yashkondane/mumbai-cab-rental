import { seoRoutes, SeoRouteData } from "@/lib/seoData";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FloatingButtons from "@/components/FloatingButtons";
import SeoContent from "@/components/SeoContent";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import CTASection from "@/components/CTASection";

interface PageProps {
  params: Promise<{ route: string }>;
}

export async function generateStaticParams() {
  return seoRoutes.map((route) => ({
    route: route.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const routeData = seoRoutes.find((r) => r.slug === resolvedParams.route);

  if (!routeData) {
    return { title: "Not Found" };
  }

  return {
    title: routeData.metaTitle,
    description: routeData.metaDescription,
    keywords: routeData.keywords,
    alternates: {
      canonical: `https://www.mumbaicabsservice.com/${routeData.slug}`,
    },
  };
}

export default async function SeoPage({ params }: PageProps) {
  const resolvedParams = await params;
  const routeData = seoRoutes.find((r) => r.slug === resolvedParams.route);

  if (!routeData) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <Hero
          h1Title={routeData.h1Title}
          h1Highlight={routeData.h1Highlight}
          heroSubtitle={routeData.heroSubtitle}
          seoMode={true}
        />
        <TrustBar />
        <SeoContent
          routeTitle={routeData.routeTitle}
          price={routeData.price}
          distance={routeData.distance}
          duration={routeData.duration}
          content={routeData.content}
          keyword={routeData.keyword}
        />
        <Services />
        <Fleet />

        {/* Dynamic Keyword Cloud (Related Searches) */}
        {routeData.keywordList && routeData.keywordList.length > 0 && (
          <section style={{ padding: "4rem 0", background: "#f9f9f9", borderTop: "1px solid #eee" }}>
            <div className="container-custom">
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "1.5rem", color: "#333", textAlign: "center" }}>
                Related Popular Searches
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", justifyContent: "center" }}>
                {routeData.keywordList.map((kw, i) => (
                  <span 
                    key={i} 
                    style={{ 
                      background: "#fff", 
                      padding: "0.5rem 1rem", 
                      borderRadius: "6px",
                      fontSize: "0.85rem",
                      color: "#666",
                      textTransform: "capitalize",
                      border: "1px solid #eee",
                      boxShadow: "0 2px 5px rgba(0,0,0,0.02)"
                    }}
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTASection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
