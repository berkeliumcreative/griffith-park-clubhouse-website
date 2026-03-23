// @ts-nocheck
"use client";

import content from "../data/content.json";
import { MinimalNav } from "@/components/ui/minimal-nav";
import { HeroImageBg } from "@/components/ui/hero-image-bg";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatsSection } from "@/components/ui/stats-section";
import { HoursTable } from "@/components/ui/hours-table";
import { TestimonialMarquee } from "@/components/ui/testimonial-marquee";
import { MapEmbed } from "@/components/ui/map-embed";
import { CTABanner } from "@/components/ui/cta-banner";
import { FooterMinimal } from "@/components/ui/footer-minimal";
import { BlurFade } from "@/components/ui/blur-fade";
import { Flame, Sandwich, GlassWater, Coffee, MapPin, Phone } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <MinimalNav
        logo={<span><span style={{ color: "var(--theme-accent)" }}>Griffith Park</span> Clubhouse</span>}
        items={[
          { label: "About", href: "#about" },
          { label: "Menu", href: "#menu" },
          { label: "Reviews", href: "#reviews" },
          { label: "Hours", href: "#hours" },
          { label: "Find Us", href: "#contact" },
        ]}
        ctaText="📞 Call Ahead"
        ctaHref="tel:3236617212"
      />

      <HeroImageBg imageSrc={content.hero.backgroundImage} heading={content.hero.heading} subheading={content.hero.subheading} ctaText={content.hero.ctaText} ctaHref={content.hero.ctaLink} />

      <StatsSection stats={[{ value: 80, suffix: "+", label: "5-Star Reviews" }, { value: 4.4, label: "Google Rating" }, { value: 7, label: "Days a Week" }, { value: 10, suffix: "hrs", label: "Daily" }]} />

      <section id="about" className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        <BlurFade delay={0.1}>
          <SectionHeading title={content.about.heading} />
          {content.about.paragraphs.map((p: string, i: number) => (
            <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-5">{p}</p>
          ))}
        </BlurFade>
      </section>

      <section id="menu" className="py-20 md:py-28 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading title="The Menu" subtitle="Classic American fare in the park" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
            {content.services.map((item: any, i: number) => {
              const icons = [<Flame key="f" className="w-8 h-8" />, <Sandwich key="s" className="w-8 h-8" />, <GlassWater key="g" className="w-8 h-8" />, <Coffee key="c" className="w-8 h-8" />];
              return (
                <BlurFade key={i} delay={0.1 * i}>
                  <div className="flex gap-5 p-6 rounded-xl border border-border bg-background hover:shadow-lg transition-shadow">
                    <div className="flex-shrink-0 mt-1" style={{ color: "var(--theme-accent)" }}>{icons[i]}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 md:py-28">
        <SectionHeading title="Park-Goers Love Us" subtitle="80+ reviews from hikers, golfers & locals" />
        <div className="mt-12">
          <TestimonialMarquee testimonials={content.reviews.map((r: any) => ({ quote: r.text, author: r.name, rating: r.rating }))} />
        </div>
      </section>

      <CTABanner heading="Fuel Up at the Park" subheading="Open 7 AM daily — breakfast before your hike, lunch after your round." ctaText="Get Directions" ctaHref="https://www.google.com/maps/search/?api=1&query=Griffith+Park+Clubhouse" variant="filled" />

      <section id="hours" className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <SectionHeading title="Hours & Location" align="left" />
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: "var(--theme-accent)" }} />
                <p className="text-muted-foreground">{content.contact.address}</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: "var(--theme-accent)" }} />
                <a href="tel:3236617212" className="text-muted-foreground hover:underline">{content.contact.phone}</a>
              </div>
            </div>
            <div className="mt-8"><HoursTable hours={content.contact.hours} /></div>
          </div>
          <div id="contact" className="rounded-xl overflow-hidden">
            <MapEmbed query={content.contact.mapEmbedQuery} height={400} />
          </div>
        </div>
      </section>

      <FooterMinimal businessName={content.businessName} />
    </main>
  );
}