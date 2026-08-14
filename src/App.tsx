import { useEffect, useMemo, useState, type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Activity,
  Apple,
  ArrowRight,
  Award,
  BarChart3,
  Bell,
  CalendarDays,
  Check,
  ChevronDown,
  Coins,
  Dumbbell,
  Heart,
  Home,
  Mail,
  Menu,
  MessageCircle,
  Play,
  Plus,
  Shield,
  Sparkles,
  Star,
  Trophy,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import homeScreen from "./assets/Home.png";
import logFoodScreen from "./assets/LogFood.png";
import loginPageScreen from "./assets/LoginPage.png";
import logo from "./assets/logo.png";
import rewardsScreen from "./assets/rewards.png";
import socialScreen from "./assets/Social.png";
import userProfileScreen from "./assets/userProfile.png";
import workoutScreen from "./assets/Workout.png";

const supportEmail = "dracxperaryan@gmail.com";

const brandAssets = {
  logo,
  screenshots: [
    {
      id: "welcome",
      title: "Welcome experience",
      src: loginPageScreen,
      alt: "Original RepClub Fitness welcome screen screenshot",
    },
    {
      id: "workouts",
      title: "Workout tracking",
      src: workoutScreen,
      alt: "Original RepClub Fitness workout tracking screenshot",
    },
    {
      id: "calories",
      title: "Nutrition dashboard",
      src: homeScreen,
      alt: "Original RepClub Fitness calorie tracker screenshot",
    },
    {
      id: "logFood",
      title: "Food logging",
      src: logFoodScreen,
      alt: "Original RepClub Fitness food logging screenshot",
    },
    {
      id: "community",
      title: "Gym communities",
      src: socialScreen,
      alt: "Original RepClub Fitness gym community screenshot",
    },
    {
      id: "feed",
      title: "Community feed",
      src: socialScreen,
      alt: "Original RepClub Fitness social feed screenshot",
    },
    {
      id: "profile",
      title: "Fitness profile",
      src: userProfileScreen,
      alt: "Original RepClub Fitness profile screenshot",
    },
    {
      id: "rewards",
      title: "Rewards experience",
      src: rewardsScreen,
      alt: "Original RepClub Fitness rewards screenshot",
    },
  ],
};

type ScreenshotAsset = (typeof brandAssets.screenshots)[number];

const screenshotById = (id: ScreenshotAsset["id"]) =>
  brandAssets.screenshots.find((screenshot) => screenshot.id === id) ?? brandAssets.screenshots[0];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const features: Array<{ icon: LucideIcon; title: string; description: string }> = [
  {
    icon: Dumbbell,
    title: "Workout Management",
    description:
      "Plan and manage your weekly workouts, follow exercise demonstrations, and stay consistent with your training.",
  },
  {
    icon: Apple,
    title: "Nutrition Tracking",
    description: "Track your daily calories, log food, and manage your nutrition goals.",
  },
  {
    icon: BarChart3,
    title: "Fitness Progress",
    description: "Monitor your fitness progress and keep track of important fitness information.",
  },
  {
    icon: Users,
    title: "Gym Communities",
    description:
      "Create or join gym communities, connect with gym members, and interact with community content.",
  },
  {
    icon: Shield,
    title: "Membership Management",
    description: "Manage gym membership information and keep important membership details organized.",
  },
  {
    icon: Coins,
    title: "Rewards",
    description:
      "Participate in eligible activities and earn coins through the RepClub rewards experience.",
  },
];

const benefits = [
  "Keep workouts organized",
  "Track daily nutrition",
  "Monitor fitness progress",
  "Stay connected with your gym",
  "Build consistency",
  "Keep your fitness journey simple",
];

const faqs = [
  {
    question: "What is RepClub Fitness?",
    answer:
      "RepClub Fitness is a fitness mobile application for organizing workouts, tracking nutrition, monitoring progress, connecting with gym communities, and using eligible rewards experiences.",
  },
  {
    question: "How can RepClub help with workouts?",
    answer:
      "RepClub helps users plan weekly workouts, manage training routines, and follow exercise demonstrations so their training stays organized.",
  },
  {
    question: "Can I track my nutrition?",
    answer:
      "Yes. RepClub Fitness supports daily calorie tracking, food logging, and nutrition goal management.",
  },
  {
    question: "Can I track my fitness progress?",
    answer:
      "Yes. The app is designed to help users monitor fitness progress and keep important fitness information organized.",
  },
  {
    question: "What are Gym Communities?",
    answer:
      "Gym Communities let users create or join gym communities, connect with members, share community content, and stay engaged.",
  },
  {
    question: "How does the rewards system work?",
    answer:
      "RepClub Fitness includes a rewards experience where users can participate in eligible activities and earn coins. Rewards availability may vary and no monetary reward is guaranteed.",
  },
  {
    question: "How can I contact RepClub support?",
    answer: `You can contact RepClub support by emailing ${supportEmail}.`,
  },
  {
    question: "How can I request account deletion?",
    answer:
      "Open RepClub, go to Profile, tap Delete Account, and confirm the deletion. If you cannot access your account, email support with the subject Delete My RepClub Account.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};

function App() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const title = "RepClub Fitness – Your Personal Fitness Companion";
    document.title = title;
    const description =
      "RepClub Fitness helps you manage workouts, track nutrition, monitor fitness progress, and connect with your gym community.";
    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription?.setAttribute("content", description);
  }, []);

  if (hash === "#privacy-policy") {
    return <LegalPage page="privacy" />;
  }

  if (hash === "#delete-account") {
    return <LegalPage page="delete" />;
  }

  return <LandingPage />;
}

function LandingPage() {
  useEffect(() => {
    if (window.location.hash && !["#privacy-policy", "#delete-account"].includes(window.location.hash)) {
      window.setTimeout(() => {
        document.querySelector(window.location.hash)?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-[#050506] text-white selection:bg-red-500 selection:text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-black"
      >
        Skip to content
      </a>
      <SiteBackground />
      <Header />
      <main id="main-content">
        <HeroSection />
        <FeaturesSection />
        <ShowcaseSection />
        <HowItWorksSection />
        <AboutSection />
        <CommunitySection />
        <RewardsSection />
        <BenefitsSection />
        <FaqSection />
        <TestimonialsSection />
        <FinalCtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function SiteBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-red-600/20 blur-3xl ambient-one" />
      <div className="absolute right-0 top-[38rem] h-96 w-96 rounded-full bg-rose-500/10 blur-3xl ambient-two" />
      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-zinc-500/10 blur-3xl ambient-three" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] [background-size:34px_34px] opacity-[0.08]" />
    </div>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/55 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:px-6"
        aria-label="Primary navigation"
      >
        <a href="#home" onClick={closeMenu} className="group flex items-center gap-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400">
          <BrandLogo size="nav" />
          <span className="text-base font-black tracking-tight sm:text-lg">
            RepClub <span className="text-red-400">Fitness</span>
          </span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href="#contact" size="sm">
            Get RepClub
          </ButtonLink>
        </div>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-black/85 p-3 shadow-2xl shadow-black/40 backdrop-blur-2xl lg:hidden"
        >
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-zinc-200 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
              >
                {link.label}
              </a>
            ))}
            <ButtonLink href="#contact" className="mt-2 justify-center" onClick={closeMenu}>
              Get RepClub
            </ButtonLink>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}

function HeroSection() {
  return (
    <section id="home" className="relative z-10 min-h-screen overflow-hidden pt-28 sm:pt-32">
      <img
        src="https://images.pexels.com/photos/32695898/pexels-photo-32695898.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800"
        alt="Athletes resting in a modern gym environment"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#050506_0%,rgba(5,5,6,0.86)_42%,rgba(5,5,6,0.44)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(239,68,68,0.24),transparent_34%),linear-gradient(180deg,transparent_70%,#050506_100%)]" />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[linear-gradient(125deg,transparent_0%,transparent_45%,rgba(220,38,38,0.35)_46%,rgba(127,29,29,0.12)_82%,transparent_83%)]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:pb-24">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
          <motion.div variants={fadeUp} className="mb-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.28em] text-red-300">
            <Sparkles className="h-4 w-4" /> Fitness • Workout • Nutrition • Gym Community
          </motion.div>
          <motion.div variants={fadeUp} className="mb-5 flex items-center gap-4">
            <BrandLogo size="hero" />
            <p className="text-2xl font-black tracking-tight text-white sm:text-3xl">RepClub Fitness</p>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl font-black leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Train Smarter.
            <span className="block text-red-400">Track Better.</span>
            <span className="block">Become Stronger.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-zinc-200 sm:text-xl">
            RepClub Fitness brings your workouts, nutrition, fitness progress, and gym community together in one simple fitness experience.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#contact" className="justify-center">
              Get RepClub <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="#features" variant="secondary" className="justify-center">
              Explore Features
            </ButtonLink>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto flex w-full max-w-[420px] justify-center lg:max-w-none"
        >
          <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <OriginalDeviceShot
              asset={screenshotById("welcome")}
              className="w-[300px] sm:w-[340px] lg:w-[390px]"
              fallback={
                <PhoneFrame label="RepClub Fitness home dashboard mockup" className="w-[300px] sm:w-[340px] lg:w-[390px]">
                  <DashboardScreen />
                </PhoneFrame>
              }
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <Section id="features" className="pt-24 sm:pt-32">
      <SectionHeader
        eyebrow="Features"
        title="Everything You Need for Your Fitness Journey"
        description="A focused fitness companion for planning, tracking, community engagement, and staying consistent."
      />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {features.map((feature) => (
          <motion.article
            key={feature.title}
            variants={fadeUp}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-red-400/40 hover:bg-white/[0.07]"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="mb-8 flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-900 text-white shadow-lg shadow-red-950/40">
              <feature.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-black tracking-tight text-white">{feature.title}</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-300">{feature.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}

function ShowcaseSection() {
  const screens = useMemo(
    () => [
      { asset: screenshotById("welcome"), fallback: <MiniDashboard /> },
      { asset: screenshotById("workouts"), fallback: <MiniWorkout /> },
      { asset: screenshotById("calories"), fallback: <MiniNutrition /> },
      { asset: screenshotById("profile"), fallback: <MiniProgress /> },
      { asset: screenshotById("community"), fallback: <MiniCommunity /> },
      { asset: screenshotById("rewards"), fallback: <MiniRewards /> },
    ],
    [],
  );

  return (
    <Section className="pt-24 sm:pt-32">
      <SectionHeader
        eyebrow="App showcase"
        title="Your Fitness Journey, In One Place"
        description="Visual website mockups representing the RepClub Fitness experience across training, nutrition, progress, community, and rewards."
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
        variants={stagger}
        className="relative mt-14 overflow-hidden rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_50%_0%,rgba(239,68,68,0.24),transparent_34%),rgba(255,255,255,0.035)] px-4 py-10 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-8 lg:px-10"
      >
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent,rgba(255,255,255,0.06),transparent)] showcase-sheen" aria-hidden="true" />
        <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {screens.map((screen, index) => (
            <motion.div
              key={screen.asset.id}
              variants={fadeUp}
              animate={{ y: index % 2 === 0 ? [0, -8, 0] : [0, 8, 0] }}
              transition={{ duration: 5 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
              className="flex justify-center"
            >
              <OriginalScreenshotCard asset={screen.asset} fallback={screen.fallback} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Set up your RepClub Fitness profile and get started.",
    },
    {
      number: "02",
      title: "Track Your Journey",
      description: "Manage workouts, nutrition and fitness progress in one place.",
    },
    {
      number: "03",
      title: "Stay Consistent",
      description: "Use your progress and gym community to stay motivated.",
    },
  ];

  return (
    <Section id="how-it-works" className="pt-24 sm:pt-32">
      <SectionHeader eyebrow="How it works" title="Simple. Focused. Consistent." description="A straightforward flow designed to keep the fitness journey manageable." />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-12 grid gap-5 lg:grid-cols-3"
      >
        {steps.map((step) => (
          <motion.article key={step.number} variants={fadeUp} className="group relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition hover:border-red-400/40">
            <div className="mb-10 flex items-center justify-between">
              <span className="text-5xl font-black tracking-[-0.06em] text-white/15 transition group-hover:text-red-400/40">{step.number}</span>
              <span className="h-3 w-3 rounded-full bg-red-400 shadow-[0_0_30px_rgba(248,113,113,0.75)]" />
            </div>
            <h3 className="text-2xl font-black tracking-tight text-white">{step.title}</h3>
            <p className="mt-4 leading-7 text-zinc-300">{step.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}

function AboutSection() {
  return (
    <Section id="about" className="pt-24 sm:pt-32">
      <div className="grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr]">
        <Reveal>
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-6 rounded-full bg-red-500/20 blur-3xl" aria-hidden="true" />
            <OriginalDeviceShot
              asset={screenshotById("profile")}
              className="relative w-[290px] sm:w-[340px]"
              fallback={
                <PhoneFrame label="RepClub profile mockup" className="relative w-[290px] sm:w-[340px]">
                  <ProgressScreen />
                </PhoneFrame>
              }
            />
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-red-300">About RepClub</p>
            <h2 className="text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">Built to Make Fitness Easier</h2>
            <div className="mt-7 space-y-5 text-lg leading-8 text-zinc-300">
              <p>
                RepClub Fitness is designed to make workout management, nutrition tracking, fitness progress tracking, and gym community engagement easier.
              </p>
              <p>
                Our goal is to give users a simple and convenient platform that helps them stay organized and consistent throughout their fitness journey.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function CommunitySection() {
  return (
    <Section className="pt-24 sm:pt-32">
      <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <Reveal>
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-red-300">Community</p>
            <h2 className="text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">Your Gym. Your Community. Your Progress.</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Connect with your gym community, share posts, interact with other members, and stay engaged throughout your fitness journey.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <FeatureScreenshotPanel asset={screenshotById("feed")} fallback={<CommunityVisual />} />
        </Reveal>
      </div>
    </Section>
  );
}

function RewardsSection() {
  return (
    <Section className="pt-24 sm:pt-32">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <FeatureScreenshotPanel asset={screenshotById("rewards")} fallback={<RewardsVisual />} />
        </Reveal>
        <Reveal delay={0.12}>
          <div className="max-w-2xl lg:ml-auto">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-red-300">Rewards</p>
            <h2 className="text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">Stay Active. Earn Rewards.</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              RepClub Fitness includes a rewards experience where users can participate in eligible activities and earn coins.
            </p>
            <p className="mt-5 text-sm leading-7 text-zinc-500">
              Rewards availability can vary. RepClub Fitness does not promise guaranteed monetary rewards.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function BenefitsSection() {
  return (
    <Section className="pt-24 sm:pt-32">
      <SectionHeader eyebrow="Benefits" title="Why RepClub?" description="A clean way to keep the core parts of your fitness journey organized." />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {benefits.map((benefit) => (
          <motion.div
            variants={fadeUp}
            key={benefit}
            className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition hover:border-red-400/40 hover:bg-white/[0.065]"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-500/15 text-red-300 ring-1 ring-red-400/30 transition group-hover:bg-red-500 group-hover:text-white">
              <Check className="h-5 w-5" />
            </span>
            <span className="font-bold text-zinc-100">{benefit}</span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function FaqSection() {
  return (
    <Section id="faq" className="pt-24 sm:pt-32">
      <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" description="Clear answers about what RepClub Fitness is designed to do." />
      <div className="mx-auto mt-12 max-w-4xl space-y-3">
        {faqs.map((faq, index) => (
          <Reveal key={faq.question} delay={index * 0.025}>
            <details className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl open:border-red-400/30 open:bg-white/[0.06]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-black text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 sm:text-lg">
                {faq.question}
                <ChevronDown className="h-5 w-5 shrink-0 text-red-300 transition group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-4 max-w-3xl leading-7 text-zinc-300">{faq.answer}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function TestimonialsSection() {
  return (
    <Section className="pt-24 sm:pt-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_50%_0%,rgba(248,113,113,0.22),transparent_38%),rgba(255,255,255,0.04)] p-8 text-center shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-red-300 ring-1 ring-white/10">
            <MessageCircle className="h-7 w-7" aria-hidden="true" />
          </div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-300">Testimonials</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">Real RepClub member stories coming soon.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-zinc-300">
            This section is ready for genuine testimonials once real RepClub member stories are available.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

function FinalCtaSection() {
  return (
    <Section className="pt-24 sm:pt-32">
      <Reveal>
        <div id="get-repclub" className="relative overflow-hidden rounded-[2.75rem] border border-red-400/20 bg-[linear-gradient(135deg,rgba(239,68,68,0.34),rgba(255,255,255,0.06)_42%,rgba(5,5,6,0.9))] p-8 shadow-2xl shadow-red-950/20 sm:p-12 lg:p-14">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-red-500/20 blur-3xl" aria-hidden="true" />
          <div className="relative max-w-3xl">
            <h2 className="text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">Your Fitness Journey Starts Here.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-200">
              Plan your workouts, track your nutrition, monitor your progress, and stay connected with your gym community.
            </p>
            <ButtonLink href="#contact" className="mt-9 inline-flex">
              Get RepClub <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function ContactSection() {
  return (
    <Section id="contact" className="py-24 sm:py-32">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-red-300">Contact</p>
            <h2 className="text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">Need Help?</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              Have a question, suggestion, or need help with RepClub Fitness? Our support team is here to help.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="rounded-[2.25rem] border border-white/10 bg-white/[0.05] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/15 text-red-300 ring-1 ring-red-400/30">
                  <Mail className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">Support email</p>
                  <a className="mt-1 block break-all text-lg font-black text-white transition hover:text-red-300" href={`mailto:${supportEmail}`}>
                    {supportEmail}
                  </a>
                </div>
              </div>
              <ButtonLink href={`mailto:${supportEmail}`} variant="secondary" className="justify-center">
                Email Support
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Footer() {
  const footerLinks = [
    ...navLinks,
    { label: "Privacy Policy", href: "#privacy-policy" },
    { label: "Delete Account", href: "#delete-account" },
  ];

  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/40 px-4 py-12 backdrop-blur-xl sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_1fr_0.9fr]">
        <div>
          <a href="#home" className="inline-flex items-center gap-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400">
            <BrandLogo size="nav" />
            <span className="text-lg font-black tracking-tight">RepClub Fitness</span>
          </a>
          <p className="mt-5 max-w-sm leading-7 text-zinc-400">Your personal fitness companion for workouts, nutrition, progress and gym communities.</p>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.22em] text-zinc-500">Links</h2>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {footerLinks.map((link) => (
              <a key={`${link.label}-${link.href}`} href={link.href} className="text-sm font-semibold text-zinc-300 transition hover:text-red-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.22em] text-zinc-500">Contact</h2>
          <a className="mt-5 block break-all text-sm font-semibold text-zinc-300 transition hover:text-red-300" href={`mailto:${supportEmail}`}>
            {supportEmail}
          </a>
          <p className="mt-8 text-sm text-zinc-500">© 2026 RepClub Fitness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function LegalPage({ page }: { page: "privacy" | "delete" }) {
  const isPrivacy = page === "privacy";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div className="min-h-screen bg-[#050506] text-white selection:bg-red-500 selection:text-white">
      <SiteBackground />
      <Header />
      <main className="relative z-10 mx-auto max-w-4xl px-4 pb-24 pt-36 sm:px-6">
        <Reveal>
          <a href="#home" className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-zinc-200 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400">
            Back to home
          </a>
          <article className="rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-7 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-red-300">RepClub Fitness</p>
            <h1 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl">{isPrivacy ? "Privacy Policy" : "Delete Account"}</h1>
            {isPrivacy ? <PrivacyPolicyContent /> : <DeleteAccountContent />}
          </article>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}

function PrivacyPolicyContent() {
  return (
    <div className="mt-8 space-y-8 text-zinc-300">
      <p className="leading-8">
        This page provides privacy information for the RepClub Fitness mobile application. It is intended to help users understand how support and account requests can be handled by RepClub Fitness.
      </p>
      <LegalSection title="Information Related to App Use">
        <p>
          RepClub Fitness is designed around workout management, nutrition tracking, fitness progress, gym communities, membership information, and rewards features. Information you choose to add in the app may be used to provide those app experiences.
        </p>
      </LegalSection>
      <LegalSection title="Support Contact">
        <p>
          If you contact support, your email address and message are used to respond to your request. You can contact support at <a href={`mailto:${supportEmail}`} className="font-bold text-red-300 hover:text-red-200">{supportEmail}</a>.
        </p>
      </LegalSection>
      <LegalSection title="Account Deletion">
        <p>
          Users can delete their account from inside the RepClub app by going to Profile and tapping Delete Account. If they cannot access their account, they can contact support directly.
        </p>
      </LegalSection>
      <LegalSection title="Questions">
        <p>
          For privacy questions, please email <a href={`mailto:${supportEmail}`} className="font-bold text-red-300 hover:text-red-200">{supportEmail}</a>.
        </p>
      </LegalSection>
    </div>
  );
}

function DeleteAccountContent() {
  return (
    <div className="mt-8 space-y-8 text-zinc-300">
      <p className="leading-8">
        If you want to permanently delete your RepClub account and associated data, follow these steps.
      </p>
      <LegalSection title="Delete from the App">
        <ol className="space-y-3 pl-5 text-zinc-300 [list-style:decimal]">
          <li>Open RepClub.</li>
          <li>Go to Profile.</li>
          <li>Tap Delete Account.</li>
          <li>Confirm the deletion.</li>
        </ol>
      </LegalSection>
      <LegalSection title="If You Cannot Access Your Account">
        <p>
          Contact us at <a href={`mailto:${supportEmail}?subject=Delete%20My%20RepClub%20Account`} className="font-bold text-red-300 hover:text-red-200">{supportEmail}</a> with the subject line <span className="font-bold text-white">Delete My RepClub Account</span>. Include the email address associated with your RepClub account.
        </p>
      </LegalSection>
      <LegalSection title="Data That Will Be Deleted">
        <ul className="space-y-3 pl-5 text-zinc-300 [list-style:disc]">
          <li>Account information</li>
          <li>Profile information</li>
          <li>Workout history</li>
          <li>Posts and comments</li>
          <li>Uploaded images</li>
          <li>Firebase Authentication account</li>
        </ul>
      </LegalSection>
      <LegalSection title="Data Retention">
        <p>
          Some information may be retained for up to <span className="font-bold text-white">30 days</span> for security, fraud prevention, or legal compliance before being permanently deleted.
        </p>
      </LegalSection>
    </div>
  );
}

function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-black text-white">{title}</h2>
      <div className="mt-3 leading-8 text-zinc-300">{children}</div>
    </section>
  );
}

function Section({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`relative z-10 px-4 sm:px-6 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <Reveal>
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-red-300">{eyebrow}</p>
        <h2 className="text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">{title}</h2>
        {description ? <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-300">{description}</p> : null}
      </div>
    </Reveal>
  );
}

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  className?: string;
  onClick?: () => void;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full font-black transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black";
  const sizes = size === "sm" ? "px-5 py-2.5 text-sm" : "px-7 py-4 text-base";
  const variants =
    variant === "primary"
      ? "bg-gradient-to-r from-red-500 to-red-700 text-white shadow-2xl shadow-red-950/40 hover:-translate-y-0.5 hover:shadow-red-800/30"
      : "border border-white/15 bg-white/5 text-white backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white/10";

  return (
    <a href={href} onClick={onClick} className={`${base} ${sizes} ${variants} ${className}`}>
      {children}
    </a>
  );
}

function AssetImage({
  src,
  alt,
  className,
  fallback,
}: {
  src: string;
  alt: string;
  className?: string;
  fallback?: ReactNode;
}) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (hasError) {
    return fallback ? <>{fallback}</> : null;
  }

  return <img src={src} alt={alt} className={className} onError={() => setHasError(true)} loading="lazy" />;
}

function BrandLogo({ size = "nav" }: { size?: "nav" | "hero" }) {
  const classes =
    size === "hero"
      ? "h-16 w-16 rounded-2xl shadow-2xl shadow-red-950/40 sm:h-20 sm:w-20"
      : "h-10 w-10 rounded-full shadow-lg shadow-red-900/30";

  return (
    <span className={`${classes} inline-flex shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br from-red-500 to-red-900 text-sm font-black ring-1 ring-white/15`}>
      <AssetImage src={brandAssets.logo} alt="RepClub Fitness app logo" className="h-full w-full object-cover" fallback={<span>R</span>} />
    </span>
  );
}

function OriginalDeviceShot({ asset, className = "", fallback }: { asset: ScreenshotAsset; className?: string; fallback: ReactNode }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-5 rounded-[3rem] bg-red-500/20 blur-3xl" aria-hidden="true" />
      <AssetImage
        src={asset.src}
        alt={asset.alt}
        className="relative aspect-[943/1676] w-full rounded-[2.4rem] border border-white/15 object-cover shadow-[0_30px_90px_rgba(0,0,0,0.62)] ring-1 ring-white/10"
        fallback={fallback}
      />
    </div>
  );
}

function OriginalScreenshotCard({ asset, fallback }: { asset: ScreenshotAsset; fallback: ReactNode }) {
  return (
    <div className="group w-full max-w-[230px]">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 p-2 shadow-2xl shadow-black/30 transition duration-300 group-hover:-translate-y-1 group-hover:border-red-400/40">
        <AssetImage
          src={asset.src}
          alt={asset.alt}
          className="aspect-[943/1676] w-full rounded-[1.55rem] object-cover"
          fallback={
            <PhoneFrame label={`${asset.title} visual mockup`} compact className="mx-auto w-[154px]">
              {fallback}
            </PhoneFrame>
          }
        />
      </div>
      <p className="mt-4 text-center text-sm font-black text-white">{asset.title}</p>
    </div>
  );
}

function FeatureScreenshotPanel({ asset, fallback }: { asset: ScreenshotAsset; fallback: ReactNode }) {
  return (
    <div className="relative mx-auto max-w-md">
      <OriginalDeviceShot asset={asset} className="mx-auto w-[290px] sm:w-[340px]" fallback={fallback} />
      <div className="pointer-events-none absolute -bottom-6 left-1/2 w-[78%] -translate-x-1/2 rounded-full bg-black/70 px-5 py-3 text-center text-sm font-black text-white shadow-2xl shadow-black/40 backdrop-blur-xl ring-1 ring-white/10">
        {asset.title}
      </div>
    </div>
  );
}

function PhoneFrame({ children, label, compact = false, className = "" }: { children: ReactNode; label: string; compact?: boolean; className?: string }) {
  return (
    <div className={`relative aspect-[9/18.8] rounded-[2.4rem] border border-white/20 bg-zinc-950 p-[2.2%] shadow-[0_30px_80px_rgba(0,0,0,0.55)] ring-2 ring-white/10 ${className}`} role="img" aria-label={label}>
      <div className="absolute left-1/2 top-[1.4%] z-20 h-[1.4%] w-16 -translate-x-1/2 rounded-full bg-zinc-800" />
      <div className="absolute left-1/2 top-[3.6%] z-20 h-3 w-3 -translate-x-1/2 rounded-full bg-sky-950 ring-2 ring-zinc-800" />
      <div className="h-full overflow-hidden rounded-[2rem] border border-white/10 bg-black">
        <div className={`${compact ? "p-3 text-[9px]" : "p-5 text-xs sm:p-6"} h-full bg-[radial-gradient(circle_at_50%_0%,rgba(239,68,68,0.16),transparent_30%),#020203]`}>
          {children}
        </div>
      </div>
    </div>
  );
}

function AppHeaderMini({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <div className={compact ? "text-sm font-black" : "text-2xl font-black"}>
        <span className="text-red-400">Rep</span>Club
      </div>
      <div className={`${compact ? "h-6 w-6 text-[10px]" : "h-10 w-10 text-sm"} flex items-center justify-center rounded-full bg-red-700 font-black`}>R</div>
    </div>
  );
}

function BottomNav({ compact = false }: { compact?: boolean }) {
  const items = [
    { icon: Home, label: "Home" },
    { icon: Dumbbell, label: "Workout" },
    { icon: Plus, label: "" },
    { icon: Users, label: "Feed" },
    { icon: Activity, label: "Progress" },
  ];

  return (
    <div className={`${compact ? "mt-2 px-1 py-1" : "mt-auto px-2 py-2"} grid grid-cols-5 items-end rounded-3xl bg-black/70 text-zinc-400`}>
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center gap-1">
          <div className={`${index === 2 ? (compact ? "-mt-3 h-9 w-9 bg-red-700 text-white" : "-mt-6 h-14 w-14 bg-red-700 text-white") : compact ? "h-5 w-5" : "h-7 w-7"} flex items-center justify-center rounded-full`}>
            <item.icon className={compact ? "h-3.5 w-3.5" : "h-5 w-5"} />
          </div>
          {item.label ? <span className={compact ? "text-[7px]" : "text-[10px]"}>{item.label}</span> : null}
        </div>
      ))}
    </div>
  );
}

function DashboardScreen() {
  return (
    <div className="flex h-full flex-col text-white">
      <AppHeaderMini />
      <div className="mt-8">
        <p className="text-sm font-bold text-red-300">Today</p>
        <h3 className="mt-2 text-3xl font-black tracking-tight">Ready to train smarter?</h3>
      </div>
      <div className="mt-7 grid grid-cols-2 gap-3">
        <MiniMetric icon={Dumbbell} label="Workout" value="Plan" />
        <MiniMetric icon={Apple} label="Nutrition" value="Track" />
        <MiniMetric icon={BarChart3} label="Progress" value="Review" />
        <MiniMetric icon={Users} label="Community" value="Connect" />
      </div>
      <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.06] p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-zinc-400">Weekly focus</p>
            <p className="mt-1 font-black">Stay consistent</p>
          </div>
          <CalendarDays className="h-6 w-6 text-red-300" />
        </div>
        <div className="mt-4 h-2 rounded-full bg-white/10">
          <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-red-500 to-red-300" />
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

function ProgressScreen() {
  return (
    <div className="flex h-full flex-col text-white">
      <div className="flex items-center justify-between">
        <button type="button" className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-red-300" aria-label="Back visual button">
          <ArrowRight className="h-5 w-5 rotate-180" />
        </button>
        <div className="rounded-full border border-yellow-300/25 bg-yellow-300/10 px-3 py-1 text-xs font-black text-yellow-200">Coins</div>
      </div>
      <div className="mt-8 flex items-center gap-5">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-900 text-4xl font-black ring-4 ring-red-400/30">A</div>
        <div>
          <p className="text-2xl font-black">Your Profile</p>
          <p className="mt-1 text-sm text-zinc-400">Lift. Eat. Sleep. Repeat.</p>
        </div>
      </div>
      <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.05] p-4">
        <div className="flex items-center justify-between">
          <p className="font-black"><span className="text-red-300">Level</span> Focus</p>
          <Trophy className="h-5 w-5 text-red-300" />
        </div>
        <div className="mt-4 h-2 rounded-full bg-white/10">
          <div className="h-full w-1/2 rounded-full bg-red-400" />
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        {[
          [Trophy, "Achievements"],
          [BarChart3, "My Stats"],
          [Heart, "Saved"],
          [Activity, "Progress"],
        ].map(([Icon, label]) => (
          <div key={label as string} className="rounded-3xl border border-white/10 bg-white/[0.045] p-4 text-center">
            <Icon className="mx-auto h-6 w-6 text-red-300" />
            <p className="mt-2 text-xs text-zinc-300">{label as string}</p>
          </div>
        ))}
      </div>
      <BottomNav />
    </div>
  );
}

function MiniMetric({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-4">
      <Icon className="h-5 w-5 text-red-300" />
      <p className="mt-4 text-xs text-zinc-400">{label}</p>
      <p className="mt-1 font-black">{value}</p>
    </div>
  );
}

function MiniDashboard() {
  return (
    <div className="h-full text-white">
      <AppHeaderMini compact />
      <div className="mt-4 text-lg font-black leading-tight">Home dashboard</div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <TinyTile icon={Dumbbell} label="Workout" />
        <TinyTile icon={Apple} label="Food" />
        <TinyTile icon={Activity} label="Progress" />
        <TinyTile icon={Users} label="Gym" />
      </div>
      <div className="mt-3 rounded-2xl bg-white/[0.06] p-3">
        <div className="h-1.5 rounded-full bg-white/10"><div className="h-full w-3/5 rounded-full bg-red-400" /></div>
      </div>
      <BottomNav compact />
    </div>
  );
}

function MiniWorkout() {
  return (
    <div className="h-full text-white">
      <div className="text-lg font-black">Workout tracking</div>
      <CircleProgress label="Kcal burn" />
      {[
        "Shoulders",
        "Chest + Triceps",
        "Back + Biceps",
        "Legs",
      ].map((item) => (
        <div key={item} className="mt-2 rounded-xl bg-white/[0.06] px-3 py-2 font-bold">{item}</div>
      ))}
      <BottomNav compact />
    </div>
  );
}

function MiniNutrition() {
  return (
    <div className="h-full text-white">
      <div className="text-lg font-black">Nutrition tracking</div>
      <CircleProgress label="Calories" />
      <div className="mt-3 grid grid-cols-3 gap-1.5 text-center">
        {['Carbs', 'Protein', 'Fats'].map((item) => <div key={item} className="rounded-xl bg-white/[0.06] p-2 text-[8px] text-zinc-300">{item}</div>)}
      </div>
      <div className="mt-3 rounded-2xl bg-white/[0.06] p-3 font-bold text-red-300">Log food</div>
      <BottomNav compact />
    </div>
  );
}

function MiniProgress() {
  return (
    <div className="h-full text-white">
      <div className="text-lg font-black">Progress tracking</div>
      <div className="mt-4 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-700 text-xl font-black">A</div>
        <div>
          <p className="font-black">Profile</p>
          <p className="text-[8px] text-zinc-400">Progress hub</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <TinyTile icon={Trophy} label="Achievements" />
        <TinyTile icon={BarChart3} label="Stats" />
      </div>
      <BottomNav compact />
    </div>
  );
}

function MiniCommunity() {
  return (
    <div className="h-full text-white">
      <div className="text-lg font-black">Gym community</div>
      <div className="mt-3 rounded-2xl bg-white/[0.06] p-3">
        <div className="flex items-center gap-2"><div className="h-6 w-6 rounded-full bg-red-700" /><span className="font-bold">Community post</span></div>
        <div className="mt-3 h-16 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900" />
        <div className="mt-3 flex gap-2 text-red-300"><Heart className="h-3 w-3" /><MessageCircle className="h-3 w-3" /></div>
      </div>
      <BottomNav compact />
    </div>
  );
}

function MiniRewards() {
  return (
    <div className="h-full text-white">
      <div className="flex items-center justify-between"><div className="text-lg font-black">Rewards</div><Coins className="h-4 w-4 text-yellow-300" /></div>
      {["Eligible activity", "Coin balance", "Reward options"].map((item) => (
        <div key={item} className="mt-3 flex items-center gap-2 rounded-2xl bg-white/[0.06] p-3">
          <Play className="h-4 w-4 text-red-300" />
          <span className="font-bold">{item}</span>
        </div>
      ))}
      <BottomNav compact />
    </div>
  );
}

function TinyTile({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="rounded-2xl bg-white/[0.06] p-2.5">
      <Icon className="h-4 w-4 text-red-300" />
      <p className="mt-2 text-[8px] font-bold text-zinc-300">{label}</p>
    </div>
  );
}

function CircleProgress({ label }: { label: string }) {
  return (
    <div className="mx-auto mt-4 flex h-20 w-20 items-center justify-center rounded-full border-[9px] border-red-500/30 border-t-red-400 text-center">
      <div>
        <p className="text-lg font-black">78</p>
        <p className="text-[7px] text-zinc-400">{label}</p>
      </div>
    </div>
  );
}

function CommunityVisual() {
  return (
    <div className="relative mx-auto max-w-xl">
      <div className="absolute -inset-4 rounded-[3rem] bg-red-500/10 blur-3xl" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-7">
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-300">Community feed</p>
            <h3 className="mt-2 text-2xl font-black tracking-tight">Example gym updates</h3>
          </div>
          <Bell className="h-6 w-6 text-red-300" />
        </div>
        <div className="mt-5 space-y-4">
          <CommunityPost title="Workout check-in" body="Shared a completed training session with the gym community." icon={Dumbbell} />
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/80">
            <img
              src="https://images.pexels.com/photos/15415401/pexels-photo-15415401.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              alt="Healthy meal bowl representing nutrition content in a community post"
              className="h-44 w-full object-cover opacity-85"
            />
            <div className="p-5">
              <div className="flex items-center justify-between">
                <p className="font-black">Nutrition share</p>
                <span className="rounded-full bg-red-500/15 px-3 py-1 text-xs font-bold text-red-300">Community</span>
              </div>
              <div className="mt-4 flex gap-3 text-zinc-400">
                <span className="inline-flex items-center gap-1"><Heart className="h-4 w-4 text-red-300" /> Like</span>
                <span className="inline-flex items-center gap-1"><MessageCircle className="h-4 w-4 text-red-300" /> Comment</span>
              </div>
            </div>
          </div>
          <CommunityPost title="Gym announcement" body="A community update area for important gym information." icon={Users} />
        </div>
      </div>
    </div>
  );
}

function CommunityPost({ title, body, icon: Icon }: { title: string; body: string; icon: LucideIcon }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-5">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-500/15 text-red-300 ring-1 ring-red-400/30">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="font-black text-white">{title}</p>
          <p className="mt-1 leading-6 text-zinc-400">{body}</p>
        </div>
      </div>
    </div>
  );
}

function RewardsVisual() {
  return (
    <div className="relative mx-auto max-w-lg">
      <div className="absolute -inset-6 rounded-full bg-yellow-400/10 blur-3xl" aria-hidden="true" />
      <div className="relative rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_25%_15%,rgba(250,204,21,0.14),transparent_30%),rgba(255,255,255,0.05)] p-7 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-200">Rewards wallet</p>
            <h3 className="mt-2 text-2xl font-black tracking-tight">Coins and achievements</h3>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-300/15 text-yellow-200 ring-1 ring-yellow-200/30">
            <Coins className="h-7 w-7" />
          </div>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-3">
          {[Star, Trophy, Award].map((Icon, index) => (
            <motion.div
              key={index}
              animate={{ y: [0, index === 1 ? -8 : -4, 0] }}
              transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
              className="flex aspect-square items-center justify-center rounded-3xl border border-yellow-200/15 bg-yellow-300/10 text-yellow-200"
            >
              <Icon className="h-8 w-8" />
            </motion.div>
          ))}
        </div>
        <div className="mt-8 space-y-3">
          {["Eligible activity", "Coin earning experience", "Reward options"].map((item) => (
            <div key={item} className="flex items-center justify-between rounded-3xl border border-white/10 bg-black/35 p-4">
              <span className="font-bold text-zinc-100">{item}</span>
              <span className="rounded-full bg-red-500/15 px-3 py-1 text-xs font-bold text-red-300">RepClub</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
