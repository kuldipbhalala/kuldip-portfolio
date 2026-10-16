import { useState } from "react";
import "./Home.css";

const NAV = [
  ["About", "#about"],
  ["Results", "#results"],
  ["Case Studies", "#case-studies"],
  ["Services", "#services"],
  ["Contact", "#contact"],
];

const STATS = [
  ["₹1L+", "Ad Spend Managed"],
  ["6,700+", "Leads Generated"],
  ["1,400+", "Messaging Conversations"],
  ["1+ Years", "Performance Marketing Experience"],
];

const SKILLS = [
  "Meta Ads",
  "Google Ads",
  "Full-Funnel Strategy",
  "Creative Strategy",
  "Retargeting",
  "Lead Generation",
  "Campaign Scaling",
];

const CASES = [
  {
    number: "01",
    type: "LEAD GENERATION CAMPAIGN",
    period: "Sep 1 – Sep 29, 2026",

    titleLines: [
      "6,700+ Leads Generated.",
      "₹15.96 Avg. CPL.",
      "Meta Lead Generation.",
    ],

    description:
      "Performance-focused Meta Ads campaigns built to generate qualified leads at scale while maintaining efficient cost per result.",

    metrics: [
      {
        label: "TOTAL LEADS",
        value: "6,700+",
        note: "Generated through Meta campaigns",
        color: "gold",
      },
      {
        label: "AVERAGE CPL",
        value: "₹15.96",
        note: "Cost per lead",
        color: "green",
      },
      {
        label: "TOTAL SPEND",
        value: "₹1L+",
        note: "Across active campaigns",
        color: "blue",
      },
      {
        label: "CAMPAIGN TYPE",
        value: "LEADS",
        note: "Meta Lead Form campaigns",
        color: "",
      },
    ],

    leftTitle: "WHAT I DID",

    leftPoints: [
      "Built structured Meta Lead Generation campaigns focused on qualified enquiries.",
      "Tested different audiences, creatives and messaging angles to identify high-performing combinations.",
      "Monitored CPL, lead volume, frequency and delivery to maintain consistent performance.",
      "Optimised budget allocation toward campaigns and creatives generating the strongest results.",
      "Used campaign-level performance data to continuously improve cost efficiency.",
    ],

    rightTitle: "KEY OUTCOMES",

    rightPoints: [
      "Generated more than 6,700 leads through active Meta campaigns.",
      "Maintained efficient lead acquisition with approximately ₹15.96 cost per lead on a major campaign.",
      "Scaled campaign reach while maintaining consistent lead generation.",
      "Focused campaign optimisation on real enquiries rather than vanity metrics.",
      "Built repeatable lead-generation systems around performance data.",
    ],

    screenshot: "result.png",
    screenshotLabel: "META ADS CAMPAIGN PERFORMANCE — ADS MANAGER",
  },

  {
    number: "02",
    type: "MESSAGING CAMPAIGN",
    period: "Sep 1 – Sep 29, 2026",

    titleLines: [
      "1,400+ Conversations.",
      "₹14.27 Cost Per Result.",
      "High-Volume Messaging.",
    ],

    description:
      "Messaging campaigns structured to drive direct customer conversations and enquiries through Meta Ads while maintaining efficient acquisition costs.",

    metrics: [
      {
        label: "CONVERSATIONS",
        value: "1,400+",
        note: "Messaging conversations",
        color: "gold",
      },
      {
        label: "COST PER RESULT",
        value: "₹14.27",
        note: "Per messaging conversation",
        color: "blue",
      },
      {
        label: "CAMPAIGN SPEND",
        value: "₹21K+",
        note: "Managed campaign budget",
        color: "green",
      },
      {
        label: "REACH",
        value: "4.5L+",
        note: "People reached",
        color: "",
      },
    ],

    leftTitle: "CAMPAIGN MANAGEMENT",

    leftPoints: [
      "Built messaging campaigns focused on generating direct customer conversations.",
      "Tested creatives and messaging hooks to improve response volume.",
      "Monitored cost per conversation and campaign frequency to protect efficiency.",
      "Optimised audience targeting based on campaign-level performance.",
      "Allocated budget toward the strongest-performing ads and audiences.",
    ],

    rightTitle: "SCALE INDICATORS",

    rightPoints: [
      "Generated more than 1,400 messaging conversations.",
      "Maintained approximately ₹14.27 cost per messaging result.",
      "Reached more than 4.5 lakh users through campaign delivery.",
      "Generated direct customer enquiries instead of only engagement.",
      "Maintained scalable campaign performance at increased volume.",
    ],

    screenshot: "/resulttwo.png",
    screenshotLabel:
      "MESSAGING CAMPAIGN PERFORMANCE — META ADS MANAGER",
  },

  {
    number: "03",
    type: "TRAFFIC & PERFORMANCE CAMPAIGN",
    period: "2026",

    titleLines: [
      "1,185+ Link Clicks.",
      "₹0.62 Cost Per LPV.",
      "Cost-Efficient Traffic.",
    ],

    description:
      "Traffic campaigns focused on generating website visits while testing campaign audiences, creatives and placement performance.",

    metrics: [
      {
        label: "LINK CLICKS",
        value: "1,185+",
        note: "Traffic generated",
        color: "gold",
      },
      {
        label: "COST PER LPV",
        value: "₹0.62",
        note: "Landing page view cost",
        color: "green",
      },
      {
        label: "TOTAL SPEND",
        value: "₹734+",
        note: "Campaign spend",
        color: "blue",
      },
      {
        label: "IMPRESSIONS",
        value: "9.9K+",
        note: "Campaign impressions",
        color: "",
      },
    ],

    leftTitle: "WHAT I DID",

    leftPoints: [
      "Structured traffic campaigns around measurable landing page activity.",
      "Tested audience segments and different creative combinations.",
      "Tracked link clicks, landing page views and CPC to identify efficiency.",
      "Reduced wasted delivery by shifting spend toward stronger-performing placements.",
      "Used traffic quality metrics to guide ongoing campaign optimisation.",
    ],

    rightTitle: "KEY OUTCOMES",

    rightPoints: [
      "Generated more than 1,185 link clicks.",
      "Maintained approximately ₹0.62 cost per landing page view.",
      "Delivered cost-efficient traffic through structured Meta campaigns.",
      "Improved visibility into website visitor acquisition costs.",
      "Created a strong traffic layer for further retargeting activity.",
    ],

    screenshot: "/resultthred.png",
    screenshotLabel: "TRAFFIC CAMPAIGN PERFORMANCE — ADS MANAGER",
  },
];

const icon = (children) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const SERVICES = [
  {
    title: "Meta Ads Management",
    text:
      "Full-funnel campaign architecture, creative testing, audience segmentation and continuous optimisation.",
    icon: icon(<path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />),
  },

  {
    title: "Google Ads & Shopping",
    text:
      "Search, Shopping and Performance Max campaigns focused on measurable growth and efficient acquisition.",
    icon: icon(
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </>
    ),
  },

  {
    title: "Full-Funnel Strategy",
    text:
      "TOF, MOF and BOF campaign structures designed around your audience, goals and conversion journey.",
    icon: icon(
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="0.8" />
      </>
    ),
  },

  {
    title: "Retargeting Systems",
    text:
      "Retargeting campaigns for website visitors, engaged audiences, warm leads and previous customers.",
    icon: icon(
      <>
        <path d="M21 12a9 9 0 1 1-3-6.7" />
        <path d="M21 4v5h-5" />
      </>
    ),
  },

  {
    title: "Lead Generation",
    text:
      "Meta Lead Form and WhatsApp campaigns designed to generate qualified enquiries at a sustainable CPL.",
    icon: icon(
      <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    ),
  },

  {
    title: "Campaign Scaling",
    text:
      "Scaling winning campaigns through structured budget increases, creative testing and performance analysis.",
    icon: icon(
      <>
        <path d="M4 19V9" />
        <path d="M10 19V5" />
        <path d="M16 19v-7" />
        <path d="M3 4l5 4 5-5 7 5" />
      </>
    ),
  },
];

const SPEND = [
  "Under ₹50,000 / month",
  "₹50K – ₹1L / month",
  "₹1L – ₹3L / month",
  "₹3L – ₹5L / month",
  "Above ₹5L / month",
];

const PLATFORMS = [
  "Meta Ads only",
  "Google Ads only",
  "Meta + Google both",
  "Not running any ads yet",
];

function SectionHead({ eyebrow, title, intro }) {
  return (
    <>
      <div className="eyebrow">{eyebrow}</div>

      <h2 className="h2">{title}</h2>

      {intro && <p className="intro">{intro}</p>}
    </>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    brand: "",
    email: "",
    whatsapp: "",
    spend: "",
    platform: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const update = (e) => {
    const { name } = e.target;
    let { value } = e.target;

    // WhatsApp: only digits, max 10 (removes +91 / 91 if pasted)
    if (name === "whatsapp") {
      let digits = value.replace(/\D/g, "");
      if (digits.length > 10 && digits.startsWith("91")) {
        digits = digits.slice(2);
      }
      value = digits.slice(0, 10);
    }

    setForm({ ...form, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    const err = {};
    const name = form.name.trim();
    const brand = form.brand.trim();
    const email = form.email.trim();
    const whatsapp = form.whatsapp.trim();

    if (!name) err.name = "Please enter your name.";
    else if (name.length < 2) err.name = "Name must be at least 2 characters.";

    if (!brand) err.brand = "Please enter your brand or company name.";
    else if (brand.length < 2)
      err.brand = "Brand name must be at least 2 characters.";

    if (!email) err.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      err.email = "Please enter a valid email address.";

    if (!whatsapp) err.whatsapp = "Please enter your WhatsApp number.";
    else if (!/^\d{10}$/.test(whatsapp))
      err.whatsapp = "WhatsApp number must be exactly 10 digits.";
    else if (!/^[6-9]/.test(whatsapp))
      err.whatsapp = "Enter a valid Indian mobile number (starts with 6-9).";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    if (!validate()) return;

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/adgrowza@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name.trim(),
            brand: form.brand.trim(),
            email: form.email.trim(),
            _replyto: form.email.trim(),
            whatsapp: form.whatsapp.trim(),
            "Monthly Ad Spend": form.spend || "Not specified",
            "Advertising Platform": form.platform || "Not specified",
            message: form.message.trim() || "Not specified",
            _subject: "New Free Audit Enquiry — Kuldip Portfolio",
            _template: "table",
            _captcha: "false",
            _url: window.location.href,
          }),
        }
      );
      const data = await response.json();
      if (!response.ok || ![true, "true"].includes(data.success)) {
        throw new Error(data.message || "Unable to submit. Please try again.");
      }
      setStatus("done");
    } catch (error) {
      setErrorMessage(
        error.message || "Please check your connection and try again."
      );
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className="form-done">
        <h3>Thank you.</h3>

        <p>
          Your enquiry has been submitted. I'll get back to you as soon as
          possible.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit} noValidate>
      <div className="row">
        <label>
          Your Name *
          <input
            name="name"
            value={form.name}
            onChange={update}
            className={errors.name ? "input-error" : ""}
            autoComplete="name"
          />
          {errors.name && <span className="field-error">{errors.name}</span>}
        </label>

        <label>
          Brand / Company *
          <input
            name="brand"
            value={form.brand}
            onChange={update}
            className={errors.brand ? "input-error" : ""}
            autoComplete="organization"
          />
          {errors.brand && <span className="field-error">{errors.brand}</span>}
        </label>
      </div>

      <div className="row">
        <label>
          Email Address *
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={update}
            className={errors.email ? "input-error" : ""}
            autoComplete="email"
          />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </label>

        <label>
          WhatsApp Number *
          <input
            type="tel"
            name="whatsapp"
            value={form.whatsapp}
            onChange={update}
            className={errors.whatsapp ? "input-error" : ""}
            inputMode="numeric"
            maxLength={10}
            placeholder="10-digit mobile number"
            autoComplete="tel-national"
          />
          {errors.whatsapp && (
            <span className="field-error">{errors.whatsapp}</span>
          )}
        </label>
      </div>

      <div className="row">
        <label>
          Monthly Ad Spend
          <select name="spend" value={form.spend} onChange={update}>
            <option value="">Select range</option>

            {SPEND.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>

        <label>
          Platform Currently Running
          <select name="platform" value={form.platform} onChange={update}>
            <option value="">Select platform</option>

            {PLATFORMS.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>

      <label>
        What's your biggest challenge right now?
        <textarea
          name="message"
          rows="4"
          value={form.message}
          onChange={update}
        />
      </label>

      <button
        className="btn btn-primary"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Book My Free Audit →"}
      </button>

      {status === "error" && (
        <p className="form-error" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
}

export default function Home() {
  return (
    <div className="page" id="top">

      {/* =========================
          NAVBAR
      ========================= */}

      <header className="nav-wrap">
        <div className="container nav">

          <a href="#top" className="logo">
            Kuldip Bhalala<span>.</span>
          </a>

          <nav className="nav-links">
            {NAV.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn btn-primary">
            Work with me
          </a>

        </div>
      </header>


      {/* =========================
    HERO
========================= */}

      <section className="container hero">
        <div className="hero-content">
          <div className="pill">
            Performance Marketing Specialist
          </div>

          <h1 className="hero-title">
            I don't run ads. I build{" "}
            <span className="accent">growth engines</span>{" "}
            for Leads & D2C brands.
          </h1>

          <p className="hero-sub">
            1+ years of hands-on experience building and scaling
            performance campaigns through Meta Ads. Every result shown
            here is backed by real ad account performance.
          </p>

          <div className="hero-cta">
            <a href="#case-studies" className="btn btn-primary">
              See Real Results
            </a>

            <a href="#contact" className="btn btn-ghost">
              Let's Work Together
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-wrap">
            <img
              src="/Kuldip bhalala.png"
              alt="Kuldip Bhalala — Performance Marketing Specialist"
              className="hero-photo"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>


      {/* =========================
          RESULTS
      ========================= */}

      <section
        id="results"
        className="stats-band"
      >

        <div className="container stats">

          {STATS.map(([value, label]) => (
            <div
              key={label}
              className="stat"
            >

              <div className="stat-value">
                {value}
              </div>

              <div className="stat-label">
                {label}
              </div>

            </div>
          ))}

        </div>

      </section>


      {/* =========================
          ABOUT
      ========================= */}

      <section
        id="about"
        className="container about"
      >

        <div className="about-left">

          <SectionHead
            eyebrow="About"
            title="Built for results, not vanity metrics."
          />

          <div className="about-copy">

            <p>
              I'm <strong>Kuldip Bhalala</strong> — a performance
              marketing specialist with 1+ years of hands-on experience
              running and scaling paid advertising campaigns.
            </p>

            <p>
              I specialise in building performance-driven campaigns
              focused on generating qualified leads, messaging
              conversations and measurable business growth through{" "}
              <strong>Meta Ads</strong>.
            </p>

            <p>
              My approach is simple — understand the audience, test the
              right creatives, analyse performance and scale what
              actually works. I focus on{" "}
              <strong>real business results</strong>, not vanity metrics.
            </p>

          </div>


          <div className="tags">

            {SKILLS.map((skill, index) => (
              <span
                key={skill}
                className={`tag ${index < 2 ? "highlight" : ""
                  }`}
              >
                {skill}
              </span>
            ))}

          </div>

        </div>


        <div className="about-stats">

          <div className="about-stat">
            <div className="about-stat-value">
              ₹1L+
            </div>

            <p className="about-stat-label">
              Total ad spend managed across campaigns
            </p>
          </div>


          <div className="about-stat">
            <div className="about-stat-value">
              6,700+
            </div>

            <p className="about-stat-label">
              Leads generated through Meta Ads
            </p>
          </div>


          <div className="about-stat">
            <div className="about-stat-value">
              1,400+
            </div>

            <p className="about-stat-label">
              Messaging conversations generated
            </p>
          </div>


          <div className="about-stat">
            <div className="about-stat-value">
              1+ Yrs
            </div>

            <p className="about-stat-label">
              Performance marketing experience
            </p>
          </div>

        </div>

      </section>


      {/* =========================
          CASE STUDIES
      ========================= */}

      <section
        id="case-studies"
        className="case-studies-section"
      >

        <div className="container">

          <div className="case-section-head">

            <div className="case-eyebrow">
              PROOF OF WORK
            </div>

            <h2 className="case-main-title">
              Real campaigns.
              <br />
              Real numbers.
            </h2>

            <p className="case-main-description">
              Every metric below is pulled directly from real
              Meta Ads Manager campaign data.
              <br />
              No inflated figures. Screenshots included.
            </p>

          </div>


          <div className="case-study-list">

            {CASES.map((item) => (

              <article
                className="premium-case"
                key={item.number}
              >

                {/* CASE TOP */}

                <div className="premium-case-top">

                  <div className="premium-case-intro">

                    <div className="case-label">
                      CASE STUDY {item.number}
                      <span> — </span>
                      {item.type}
                    </div>

                    <h3 className="premium-case-title">

                      {item.titleLines.map((line) => (
                        <span key={line}>
                          {line}
                          <br />
                        </span>
                      ))}

                    </h3>

                    <p className="premium-case-description">
                      {item.description}
                    </p>

                  </div>


                  <div className="campaign-period">

                    <span>
                      CAMPAIGN PERIOD
                    </span>

                    <strong>
                      {item.period}
                    </strong>

                  </div>

                </div>


                {/* METRICS */}

                <div className="case-metric-grid">

                  {item.metrics.map((metric) => (
                    <div
                      className="case-metric-box"
                      key={metric.label}
                    >

                      <div className="case-metric-label">
                        {metric.label}
                      </div>

                      <div
                        className={`case-metric-number ${metric.color}`}
                      >
                        {metric.value}
                      </div>

                      <div className="case-metric-note">
                        {metric.note}
                      </div>

                    </div>
                  ))}

                </div>


                {/* DETAILS */}

                <div className="case-details-grid">

                  <div className="case-detail-column">

                    <div className="case-detail-title">
                      {item.leftTitle}
                    </div>

                    <div className="case-detail-line" />

                    <ul>

                      {item.leftPoints.map((point) => (
                        <li key={point}>

                          <span className="case-arrow">
                            →
                          </span>

                          <span>
                            {point}
                          </span>

                        </li>
                      ))}

                    </ul>

                  </div>


                  <div className="case-detail-column">

                    <div className="case-detail-title">
                      {item.rightTitle}
                    </div>

                    <div className="case-detail-line" />

                    <ul>

                      {item.rightPoints.map((point) => (
                        <li key={point}>

                          <span className="case-arrow">
                            →
                          </span>

                          <span>
                            {point}
                          </span>

                        </li>
                      ))}

                    </ul>

                  </div>

                </div>


                {/* SCREENSHOT */}

                <div className="case-proof">

                  <div className="case-proof-heading">

                    <span>
                      {item.screenshotLabel}
                    </span>

                    <div />

                  </div>


                  <div className="case-proof-image">

                    <img
                      src={item.screenshot}
                      alt={`Case Study ${item.number} Meta Ads Manager`}
                    />

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          SERVICES
      ========================= */}

      <section
        id="services"
        className="container section"
      >

        <SectionHead
          eyebrow="What I Do"
          title="Services"
          intro="Performance marketing services focused on generating leads, sales and measurable growth."
        />


        <div className="services">

          {SERVICES.map((service) => (

            <div
              key={service.title}
              className="card service"
            >

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.text}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =========================
          CONTACT
      ========================= */}

      <section
        id="contact"
        className="container section"
      >

        <div className="contact">

          <div className="contact-left">

            <SectionHead
              eyebrow="Book a Free Audit"
              title="Ready to grow your business?"
              intro="Share a few details about your business and advertising goals. I'll review your requirements and get back to you."
            />

            <div className="contact-links">

              <a href="mailto:adgrowza@gmail.com">
                adgrowza@gmail.com
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

            </div>

          </div>


          <ContactForm />

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">

        <div className="container footer-in">

          <div>
            <span className="logo small-logo">
              Kuldip Bhalala<span>.</span>
            </span>

            {" "}· Performance Marketing
          </div>

          <div>
            © 2026 Kuldip Bhalala · Real campaigns. Real performance.
          </div>

        </div>

      </footer>

    </div>
  );
}