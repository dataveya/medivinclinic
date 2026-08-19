import Image from "next/image";
import { Faq } from "@/components/faq";
import { Header } from "@/components/header";
import { Logo } from "@/components/logo";
import {
  carePathways, clinic, clinicJsonLd, doctors, journey,
  navigation, reviews, services,
} from "@/data/clinic";

function Arrow() { return <span aria-hidden="true">↗</span>; }

function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-intro"><p className="eyebrow">{eyebrow}</p><div><h2>{title}</h2>{copy ? <p className="section-copy">{copy}</p> : null}</div></div>;
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content">
        <section className="hero" id="top">
          <div className="container hero__grid">
            <div className="hero__content">
              <p className="eyebrow hero__eyebrow">Women’s Health <span /> Pregnancy <span /> Pediatrics <span /> Newborn Care</p>
              <h1>Care that grows with your family.</h1>
              <p className="hero__copy">Specialist care for women, newborns and children in one familiar clinic in Manish Nagar, Nagpur.</p>
              <div className="hero__actions">
                <a className="button" href={clinic.whatsappHref} target="_blank" rel="noreferrer">Book an appointment <Arrow /></a>
                <a className="text-link" href={clinic.phoneHref}>Call {clinic.phoneDisplay} <Arrow /></a>
              </div>
              <div className="hero__proof" aria-label="Clinic highlights">
                <p><strong>Two specialists</strong><span>One continuity of care</span></p>
                <p><strong>Afternoon & evening</strong><span>Consultation availability</span></p>
              </div>
            </div>
            <div className="hero__visual" aria-label="Mother and child care at Medivin Clinic">
              <div className="hero__portrait-card">
                <Image
                  className="hero__artwork"
                  src="/mother_child_exact_no_green.svg"
                  alt="Editorial illustration representing connected care for women, newborns and children"
                  fill
                  priority
                  sizes="(max-width: 860px) 84vw, 42vw"
                />
                <div className="hero__card-caption"><span>Medivin Clinic</span><strong>Modern care, personally delivered.</strong></div>
              </div>
              <div className="hero__location"><span aria-hidden="true">⌖</span><p><small>Visit us in</small><strong>{clinic.location}</strong></p></div>
            </div>
          </div>
          <div className="container hero__footnote"><p>Mother & child care under one roof</p><a href="#care">Explore our care <span aria-hidden="true">↓</span></a></div>
        </section>

        <section className="care section" id="care"><div className="container">
          <SectionIntro eyebrow="Care, connected" title="Two paths of care. One trusted clinic." copy="Dedicated consultation for the health journeys that matter most to growing families." />
          <div className="pathways">{carePathways.map((pathway, index) => <article className={`pathway pathway--${pathway.tone}`} key={pathway.title}>
            <div className="pathway__number">0{index + 1}</div><p className="eyebrow">{pathway.eyebrow}</p><h3>{pathway.title}</h3><p>{pathway.description}</p>
            <ul>{pathway.services.map((service) => <li key={service}>{service}</li>)}</ul><a href="#doctors">Meet your specialist <Arrow /></a>
          </article>)}</div>
        </div></section>

        <section className="doctors section" id="doctors"><div className="container">
          <SectionIntro eyebrow="Our doctors" title="Expertise you can feel at ease with." copy="Dedicated specialists supporting women, babies and children with clear, evidence-based guidance." />
          <div className="doctor-list">{doctors.map((doctor, index) => <article className={`doctor doctor--${doctor.tone}`} key={doctor.name}>
            <div className="doctor__portrait" aria-label={`Profile panel for ${doctor.name}`}>
              <span className="doctor__photo">
                <Image
                  className="doctor__photo-image"
                  src={doctor.image}
                  alt={`Portrait of ${doctor.name}`}
                  fill
                  sizes="(max-width: 650px) 240px, 310px"
                />
              </span>
              <i aria-hidden="true" />
            </div>
            <div className="doctor__content"><p className="eyebrow">Lead specialist · 0{index + 1}</p><h3>{doctor.name}</h3><p className="doctor__role">{doctor.role}</p>
              <div className="doctor__credentials"><strong>{doctor.experience}</strong><span>{doctor.credentials}</span></div><p className="doctor__bio">{doctor.bio}</p>
              <ul className="tag-list" aria-label={`${doctor.name} care areas`}>{doctor.focus.map((item) => <li key={item}>{item}</li>)}</ul>
              <a className="text-link" href={clinic.whatsappHref} target="_blank" rel="noreferrer">Request an appointment <Arrow /></a>
            </div>
          </article>)}</div>
        </div></section>

        <section className="services section" id="services"><div className="container">
          <SectionIntro eyebrow="Care areas" title="Practical support for everyday health and important milestones." />
          <div className="service-list">{services.map((service) => <article className="service" key={service.title}><span className="service__number">{service.number}</span><div><p>{service.category}</p><h3>{service.title}</h3></div><p className="service__description">{service.description}</p></article>)}</div>
        </div></section>

        <section className="journey section" id="about"><div className="container journey__grid">
          <div className="journey__intro"><p className="eyebrow">Continuity of care</p><h2>One clinic for the moments that shape a family.</h2><p>From women’s consultation and pregnancy support to newborn guidance and pediatric follow-up, Medivin is here across every stage of care.</p><a className="button button--light" href={clinic.whatsappHref} target="_blank" rel="noreferrer">Talk to our clinic <Arrow /></a></div>
          <ol className="journey__steps">{journey.map((step, index) => <li key={step}><span>0{index + 1}</span><p>{step}</p></li>)}</ol>
        </div></section>

        <section className="reviews section" aria-labelledby="reviews-title"><div className="container">
          <div className="reviews__heading"><div><p className="eyebrow">Patient feedback</p><h2 id="reviews-title">Kind words from families.</h2></div><div className="reviews__rating"><strong>4.8</strong><span>Rating on Google</span></div></div>
          <div className="review-grid">{reviews.map((review) => <blockquote key={review}><span className="quote-mark" aria-hidden="true">“</span><p>{review}</p><footer>Google review</footer></blockquote>)}</div>
          <div className="reviews__links"><a className="text-link" href={clinic.directions} target="_blank" rel="noreferrer">View Google profile <Arrow /></a><a className="text-link" href={clinic.practo} target="_blank" rel="noreferrer">Read Practo reviews <Arrow /></a></div>
        </div></section>

        <section className="timings section"><div className="container">
          <SectionIntro eyebrow="Consultation timings" title="Choose a time and location that works for you." copy="Appointments are recommended for a smooth consultation experience." />
          <div className="timing-grid">{doctors.map((doctor) => <article className="timing-card" key={doctor.name}><div className="timing-card__header"><span>{doctor.initials}</span><div><h3>{doctor.name}</h3><p>{doctor.role}</p></div></div><dl>{doctor.consultations.map((consultation) => <div key={consultation.location}><dt>{consultation.location}</dt><dd>{consultation.hours}</dd></div>)}</dl></article>)}</div>
        </div></section>

        <section className="faq section" id="faq"><div className="container faq__grid"><div className="faq__intro"><p className="eyebrow">Helpful information</p><h2>Before your visit.</h2><p>Clear answers to common questions about consultations at Medivin Clinic.</p><a className="text-link" href={clinic.phoneHref}>Still have a question? Call us <Arrow /></a></div><Faq /></div></section>

        <section className="contact section" id="contact"><div className="container contact__grid">
          <div className="contact__map" aria-label="Location illustration for Medivin Clinic in Manish Nagar, Nagpur"><div className="map__roads" aria-hidden="true"><i /><i /><i /></div><div className="map__pin"><span aria-hidden="true">●</span><strong>Medivin Clinic</strong><small>Manish Nagar</small></div></div>
          <div className="contact__content"><p className="eyebrow">Visit Medivin</p><h2>Care, close to home.</h2><p className="contact__lead">Find our mother and child clinic in Manish Nagar, Nagpur. Call or message before visiting to confirm your appointment.</p>
            <dl className="contact__details"><div><dt>Location</dt><dd>{clinic.location}</dd></div><div><dt>Phone</dt><dd><a href={clinic.phoneHref}>{clinic.phoneDisplay}</a></dd></div><div><dt>Clinic hours</dt><dd>12:00 PM – 2:00 PM<br />7:00 PM – 9:00 PM</dd></div></dl>
            <div className="contact__actions"><a className="button" href={clinic.directions} target="_blank" rel="noreferrer">Get directions <Arrow /></a><a className="text-link" href={clinic.phoneHref}>Call clinic <Arrow /></a></div>
          </div>
        </div></section>

        <section className="closing-cta"><div className="container closing-cta__inner"><div><p className="eyebrow">Ready when you are</p><h2>Need to speak with a doctor?</h2></div><div><p>Appointments are recommended. Reach the clinic directly by WhatsApp or phone.</p><div className="closing-cta__actions"><a className="button button--light" href={clinic.whatsappHref} target="_blank" rel="noreferrer">Book an appointment <Arrow /></a><a href={clinic.phoneHref}>Call {clinic.phoneDisplay}</a></div></div></div></section>
      </main>

      <footer className="footer"><div className="container footer__grid"><div className="footer__brand"><a href="#top" aria-label="Medivin Clinic home"><Logo inverse /></a><p>Specialist care for women, newborns and children in Manish Nagar, Nagpur.</p></div><div><h2>Explore</h2><nav aria-label="Footer navigation">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav></div><div><h2>Care</h2><a href="#care">Women’s health</a><a href="#care">Pregnancy care</a><a href="#care">Pediatrics</a><a href="#care">Newborn care</a></div><div><h2>Contact</h2><a href={clinic.phoneHref}>{clinic.phoneDisplay}</a><a href={clinic.directions} target="_blank" rel="noreferrer">{clinic.location}</a><a href={clinic.practo} target="_blank" rel="noreferrer">Practo profile</a></div></div><div className="container footer__bottom"><p>© 2026 Medivin Clinic.</p><p>Mother & Child Care · Nagpur</p></div></footer>
      <div className="mobile-actions" aria-label="Appointment actions"><a href={clinic.phoneHref}>Call clinic</a><a href={clinic.whatsappHref} target="_blank" rel="noreferrer">Book appointment <Arrow /></a></div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
