import { Sprout, ShoppingCart, Globe, Leaf, Phone, MapPin, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";
import aboutImage from "@/assets/about-farm.jpg";
import { Button } from "@/components/ui/button";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
    <div className="container mx-auto flex items-center justify-between h-16 px-4">
      <a href="#" className="flex items-center gap-2">
        <Leaf className="h-7 w-7 text-secondary" />
        <span className="text-xl font-display font-bold text-foreground">FormForce<span className="text-primary"> Market</span></span>
      </a>
      <div className="hidden md:flex items-center gap-8">
        <a href="#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Home</a>
        <a href="#categories" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Categories</a>
        <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">About</a>
        <a href="#how-it-works" className="text-sm font-medium text-foreground hover:text-primary transition-colors">How It Works</a>
        <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contact</a>
      </div>
      <Button variant="hero" size="lg">Submit Ad</Button>
    </div>
  </nav>
);

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImage} alt="Fresh farm produce" className="w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(150, 30%, 10%, 0.75), hsla(25, 50%, 20%, 0.55))" }} />
    </div>
    <div className="relative z-10 container mx-auto px-4 py-32">
      <div className="max-w-2xl animate-fade-up">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-card leading-tight mb-6">
          Buy and Sell Agriculture Produce Online
        </h1>
        <p className="text-lg md:text-xl text-card/80 font-body mb-10 leading-relaxed">
          Buy / Sell Agricultural, Farming, Gardening, Livestock Products & Services in India
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="hero" size="lg" className="text-base px-8 py-6">Publish Ad</Button>
          <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">All Listings</Button>
        </div>
      </div>
    </div>
  </section>
);

const features = [
  { icon: ShoppingCart, title: "Buy Agri Produce", desc: "Now farmers can sell their produce directly to end consumers — no more middlemen." },
  { icon: Sprout, title: "Sell Agri Produce", desc: "Sell your agriculture products without any mediator and earn better profits." },
  { icon: Globe, title: "Anywhere, Anytime", desc: "India's No.1 marketplace for farmers to buy and sell their agriculture produce." },
];

const FeaturesSection = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="text-center p-8 rounded-xl bg-accent/50 hover:bg-accent transition-colors duration-300 group">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
              <f.icon className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-3">{f.title}</h3>
            <p className="text-muted-foreground font-body leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img src={aboutImage} alt="Fresh produce" className="w-full h-80 object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">About</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Welcome to FormForce Market
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-4">
            <strong className="text-foreground">Buy and Sell Your Agricultural Produce Online</strong> — Where Farmers Meet Buyers Directly.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed mb-6">
            FormForce Market is a free platform that empowers farmers to sell their produce directly to buyers — eliminating middlemen and ensuring better profits. India is home to one of the largest agricultural markets in the world, and there's a growing need for a unified digital space that connects farmers across regions.
          </p>
          <Button variant="default" size="lg">Learn More</Button>
        </div>
      </div>
    </div>
  </section>
);

const categories = [
  "🥦 Vegetables", "🍎 Fruits", "🌶️ Spices", "🌸 Flowers",
  "☕ Coffee/Tea", "🐟 Fishery", "🌱 Seeds", "🌿 Manure",
  "🔧 Agri Tools", "🧪 Fertilizers", "🏵️ Cotton", "🏠 Home Made",
  "🐄 Cattle & Sheep", "🐔 Poultry", "🌳 Nursery Plants", "🪵 Wood & Timber",
  "🏞️ Agriculture Land", "📦 Any Other",
];

const CategoriesSection = () => (
  <section id="categories" className="py-20 bg-section-alt">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">FormForce Market</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Buy and Sell Categories</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((cat, i) => (
          <button key={i} className="p-5 bg-card rounded-xl text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-border group cursor-pointer">
            <span className="text-2xl block mb-2">{cat.split(" ")[0]}</span>
            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{cat.split(" ").slice(1).join(" ")}</span>
          </button>
        ))}
      </div>
      <div className="text-center mt-10">
        <Button variant="outline" size="lg">Explore More</Button>
      </div>
    </div>
  </section>
);

const steps = [
  { num: "01", title: "Register Your Account", desc: "Farmers need to register their contact details to create an account." },
  { num: "02", title: "Publish Listing", desc: "Sell products through FormForce Market — publish your particular produce." },
  { num: "03", title: "Get Direct Calls from Buyers", desc: "Buyers contact you directly through your available contact details." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">FormForce Market</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">How It Works</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Farmers can sell all products through FormForce Market.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <div key={i} className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-2xl font-display font-bold text-primary">{s.num}</span>
            </div>
            <h3 className="text-lg font-display font-semibold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Button variant="hero" size="lg" className="px-10">Register Now</Button>
      </div>
    </div>
  </section>
);

const whyReasons = [
  { title: "Anywhere, Anytime", desc: "A mobile-first, farmer-friendly experience so you can sell or buy from any corner of India." },
  { title: "Empowering Farmers", desc: "Not just a platform; it's a movement to build a more equitable, transparent agricultural ecosystem." },
  { title: "Smart Search for Buyers", desc: "Use our smart search to find local or bulk suppliers of the exact product you need." },
];

const WhySection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">FormForce Market</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Why FormForce Market</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {whyReasons.map((r, i) => (
          <div key={i} className="p-8 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow duration-300">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
              <Leaf className="h-5 w-5 text-secondary" />
            </div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-3">{r.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const testimonials = [
  { name: "Rajkumar B", location: "Karnataka", text: "Many thanks for your great service! Post Ad/Listing in one minute. Take a snap, enter details, submit and your Ad is live instantly." },
  { name: "Manohar", location: "Kerala", text: "Great site for farmers! Sell anything related to agriculture. People can connect to buy or sell, helping maximize profits by selling locally." },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-section-alt">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Reviews from Users</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="p-8 bg-card rounded-xl shadow-md border border-border">
            <p className="text-muted-foreground italic leading-relaxed mb-6">"{t.text}"</p>
            <div>
              <p className="font-display font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-primary">{t.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-20 bg-secondary text-secondary-foreground">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">India's No.1 Online Agriculture Marketplace</h2>
      <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">Buy & Sell Agricultural Produce — Directly. Locally. Profitably.</p>
      <Button variant="hero" size="lg" className="px-10 text-base">Register Now</Button>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="py-16 bg-foreground text-card">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-xl font-display font-bold">FormForce<span className="text-primary"> Market</span></span>
          </div>
          <p className="text-card/70 text-sm leading-relaxed">Empowering farmers to sell their produce directly to buyers — eliminating middlemen and ensuring better profits.</p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            <a href="#home" className="text-sm text-card/70 hover:text-primary transition-colors">Home</a>
            <a href="#categories" className="text-sm text-card/70 hover:text-primary transition-colors">Categories</a>
            <a href="#about" className="text-sm text-card/70 hover:text-primary transition-colors">About</a>
            <a href="#how-it-works" className="text-sm text-card/70 hover:text-primary transition-colors">How It Works</a>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm text-card/70"><Phone className="h-4 w-4 text-primary" /> +91 98765 43210</div>
            <div className="flex items-center gap-2 text-sm text-card/70"><Mail className="h-4 w-4 text-primary" /> info@formforcemarket.com</div>
            <div className="flex items-center gap-2 text-sm text-card/70"><MapPin className="h-4 w-4 text-primary" /> Bengaluru, India</div>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-card/50 hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="text-card/50 hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-card/50 hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-card/10 mt-12 pt-6 text-center">
        <p className="text-xs text-card/50">© 2025 FormForce Market. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <AboutSection />
    <CategoriesSection />
    <HowItWorksSection />
    <WhySection />
    <TestimonialsSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
