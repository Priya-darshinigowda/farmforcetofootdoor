import { Sprout, ShoppingCart, Globe, Leaf, Phone, MapPin, Mail, Facebook, Twitter, Instagram, TrendingDown, BadgeIndianRupee } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";
import aboutImage from "@/assets/about-farm.jpg";
import { Button } from "@/components/ui/button";

// Karnataka-specific vegetables & fruits with dual pricing
type Produce = {
  emoji: string;
  name: string;
  nameKn: string;
  unit: string;
  marketPrice: number;
  farmForcePrice: number;
};

const vegetables: Produce[] = [
  { emoji: "🥦", name: "Cauliflower", nameKn: "ಹೂಕೋಸು", unit: "kg", marketPrice: 60, farmForcePrice: 35 },
  { emoji: "🍅", name: "Tomato", nameKn: "ಟೊಮೆಟೊ", unit: "kg", marketPrice: 50, farmForcePrice: 25 },
  { emoji: "🥒", name: "Cucumber", nameKn: "ಸೌತೆಕಾಯಿ", unit: "kg", marketPrice: 40, farmForcePrice: 20 },
  { emoji: "🌶️", name: "Green Chilli", nameKn: "ಹಸಿ ಮೆಣಸಿನಕಾಯಿ", unit: "kg", marketPrice: 80, farmForcePrice: 45 },
  { emoji: "🥕", name: "Carrot", nameKn: "ಗಜ್ಜರಿ", unit: "kg", marketPrice: 55, farmForcePrice: 30 },
  { emoji: "🫛", name: "Beans", nameKn: "ಹುರುಳಿಕಾಯಿ", unit: "kg", marketPrice: 70, farmForcePrice: 40 },
  { emoji: "🧅", name: "Onion", nameKn: "ಈರುಳ್ಳಿ", unit: "kg", marketPrice: 45, farmForcePrice: 22 },
  { emoji: "🥔", name: "Potato", nameKn: "ಆಲೂಗಡ್ಡೆ", unit: "kg", marketPrice: 35, farmForcePrice: 18 },
  { emoji: "🍆", name: "Brinjal", nameKn: "ಬದನೆಕಾಯಿ", unit: "kg", marketPrice: 45, farmForcePrice: 25 },
  { emoji: "🥬", name: "Cabbage", nameKn: "ಎಲೆಕೋಸು", unit: "kg", marketPrice: 30, farmForcePrice: 15 },
  { emoji: "🌿", name: "Drumstick", nameKn: "ನುಗ್ಗೆಕಾಯಿ", unit: "kg", marketPrice: 90, farmForcePrice: 50 },
  { emoji: "🫑", name: "Capsicum", nameKn: "ದೊಣ್ಣೆ ಮೆಣಸಿನಕಾಯಿ", unit: "kg", marketPrice: 80, farmForcePrice: 45 },
];

const fruits: Produce[] = [
  { emoji: "🥭", name: "Mango (Badami)", nameKn: "ಮಾವಿನಹಣ್ಣು", unit: "kg", marketPrice: 120, farmForcePrice: 70 },
  { emoji: "🍌", name: "Banana (Nanjangud)", nameKn: "ಬಾಳೆಹಣ್ಣು", unit: "dozen", marketPrice: 60, farmForcePrice: 35 },
  { emoji: "🍇", name: "Grapes", nameKn: "ದ್ರಾಕ್ಷಿ", unit: "kg", marketPrice: 90, farmForcePrice: 55 },
  { emoji: "🍈", name: "Muskmelon", nameKn: "ಖರ್ಬೂಜ", unit: "kg", marketPrice: 50, farmForcePrice: 28 },
  { emoji: "🍉", name: "Watermelon", nameKn: "ಕಲ್ಲಂಗಡಿ", unit: "kg", marketPrice: 25, farmForcePrice: 12 },
  { emoji: "🥥", name: "Coconut", nameKn: "ತೆಂಗಿನಕಾಯಿ", unit: "piece", marketPrice: 35, farmForcePrice: 18 },
  { emoji: "🍊", name: "Orange (Coorg)", nameKn: "ಕಿತ್ತಳೆ", unit: "kg", marketPrice: 80, farmForcePrice: 45 },
  { emoji: "🍋", name: "Lemon", nameKn: "ನಿಂಬೆಹಣ್ಣು", unit: "kg", marketPrice: 60, farmForcePrice: 30 },
  { emoji: "🍎", name: "Pomegranate", nameKn: "ದಾಳಿಂಬೆ", unit: "kg", marketPrice: 150, farmForcePrice: 90 },
  { emoji: "🫐", name: "Sapota (Chikoo)", nameKn: "ಸಪೋಟ", unit: "kg", marketPrice: 70, farmForcePrice: 40 },
  { emoji: "🍑", name: "Guava", nameKn: "ಸೀಬೆಹಣ್ಣು", unit: "kg", marketPrice: 60, farmForcePrice: 30 },
  { emoji: "🥝", name: "Papaya", nameKn: "ಪಪ್ಪಾಯ", unit: "kg", marketPrice: 40, farmForcePrice: 20 },
];

const ProduceCard = ({ item }: { item: Produce }) => {
  const savings = Math.round(((item.marketPrice - item.farmForcePrice) / item.marketPrice) * 100);
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
      <div className="p-5 text-center">
        <span className="text-4xl block mb-3">{item.emoji}</span>
        <h3 className="text-base font-display font-semibold text-foreground">{item.name}</h3>
        <p className="text-xs text-muted-foreground mb-3">{item.nameKn}</p>

        {/* Pricing */}
        <div className="space-y-2">
          <div className="flex items-center justify-between px-2 py-1.5 bg-destructive/5 rounded-lg">
            <span className="text-xs text-muted-foreground">Market Price</span>
            <span className="text-sm font-semibold text-destructive line-through">₹{item.marketPrice}/{item.unit}</span>
          </div>
          <div className="flex items-center justify-between px-2 py-1.5 bg-secondary/10 rounded-lg">
            <span className="text-xs text-accent-foreground font-medium">FarmForce</span>
            <span className="text-sm font-bold text-secondary">₹{item.farmForcePrice}/{item.unit}</span>
          </div>
        </div>

        <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded-full">
          <TrendingDown className="h-3 w-3" />
          Save {savings}%
        </div>
      </div>
    </div>
  );
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
    <div className="container mx-auto flex items-center justify-between h-16 px-4">
      <a href="#" className="flex items-center gap-2">
        <Leaf className="h-7 w-7 text-secondary" />
        <span className="text-xl font-display font-bold text-foreground">FormForce<span className="text-primary"> Market</span></span>
      </a>
      <div className="hidden md:flex items-center gap-8">
        <a href="#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Home</a>
        <a href="#vegetables" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Vegetables</a>
        <a href="#fruits" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Fruits</a>
        <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">About</a>
        <a href="#how-it-works" className="text-sm font-medium text-foreground hover:text-primary transition-colors">How It Works</a>
        <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contact</a>
      </div>
      <div className="flex items-center gap-2">
        <span className="hidden lg:inline text-xs text-muted-foreground border border-border rounded-full px-3 py-1">📍 Mysuru, Karnataka</span>
        <Button variant="hero" size="lg">Sell Produce</Button>
      </div>
    </div>
  </nav>
);

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImage} alt="Fresh farm produce from Karnataka" className="w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(150, 30%, 10%, 0.75), hsla(25, 50%, 20%, 0.55))" }} />
    </div>
    <div className="relative z-10 container mx-auto px-4 py-32">
      <div className="max-w-2xl animate-fade-up">
        <div className="inline-flex items-center gap-2 bg-card/15 backdrop-blur-sm border border-card/20 rounded-full px-4 py-2 mb-6">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-card">Mysuru, Karnataka</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-card leading-tight mb-6">
          Fresh Vegetables & Fruits Direct from Karnataka Farms
        </h1>
        <p className="text-lg md:text-xl text-card/80 font-body mb-4 leading-relaxed">
          Buy fresh farm produce at prices lower than market rates — directly from farmers in Mysuru & across Karnataka.
        </p>
        <div className="flex items-center gap-3 mb-10">
          <div className="flex items-center gap-1.5 text-card/90 text-sm">
            <BadgeIndianRupee className="h-4 w-4 text-primary" />
            <span>Save 30-50% vs market prices</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button variant="hero" size="lg" className="text-base px-8 py-6">Browse Produce</Button>
          <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">Sell Your Harvest</Button>
        </div>
      </div>
    </div>
  </section>
);

const features = [
  { icon: ShoppingCart, title: "Buy Fresh Produce", desc: "Buy vegetables & fruits directly from Karnataka farmers at prices well below market rates." },
  { icon: Sprout, title: "Sell Your Harvest", desc: "Farmers in Mysuru & Karnataka — sell your produce without middlemen, earn better profits." },
  { icon: Globe, title: "Across Karnataka", desc: "From Mysuru to Bengaluru, Hubli to Mangaluru — fresh produce available across the state." },
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

const ProduceSection = ({ id, title, subtitle, items }: { id: string; title: string; subtitle: string; items: Produce[] }) => (
  <section id={id} className="py-20 bg-section-alt">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">FormForce Market — Karnataka</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">{title}</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">{subtitle}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {items.map((item, i) => (
          <ProduceCard key={i} item={item} />
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
          <img src={aboutImage} alt="Fresh Karnataka produce" className="w-full h-80 object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">About</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Welcome to FormForce Market
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-4">
            <strong className="text-foreground">Fresh Vegetables & Fruits from Karnataka Farms to Your Doorstep</strong> — at prices lower than your local market.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed mb-6">
            FormForce Market connects farmers in Mysuru and across Karnataka directly with buyers. No middlemen, no inflated prices. We specialize exclusively in fresh vegetables and fruits, ensuring quality produce reaches you at farm-gate prices.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="text-xs font-medium bg-secondary/10 text-accent-foreground px-3 py-1.5 rounded-full">🌾 Karnataka Farmers</span>
            <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1.5 rounded-full">📍 Mysuru Based</span>
            <span className="text-xs font-medium bg-secondary/10 text-accent-foreground px-3 py-1.5 rounded-full">🥬 Veg & Fruits Only</span>
          </div>
          <Button variant="default" size="lg">Learn More</Button>
        </div>
      </div>
    </div>
  </section>
);

const steps = [
  { num: "01", title: "Register Your Account", desc: "Karnataka farmers register with their details to start selling fresh produce." },
  { num: "02", title: "List Your Produce", desc: "Upload photos and set your farm-gate price for vegetables or fruits." },
  { num: "03", title: "Get Direct Buyers", desc: "Buyers from Mysuru & Karnataka contact you directly — no middlemen." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">FormForce Market</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">How It Works</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Farmers across Karnataka can sell vegetables & fruits through FormForce Market.</p>
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
  { title: "Lower Than Market Price", desc: "Every product on FormForce Market is priced below local market rates — save 30-50% on fresh produce." },
  { title: "Empowering Karnataka Farmers", desc: "Directly support farmers in Mysuru, Mandya, Hassan & across Karnataka by buying from the source." },
  { title: "Only Fresh Veg & Fruits", desc: "We focus exclusively on vegetables and fruits — ensuring freshness, quality, and farm-to-table trust." },
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
  { name: "Rajkumar B", location: "Mysuru, Karnataka", text: "I sell my vegetables directly to customers now. No more depending on middlemen at the Mysuru mandi. My income has increased by 40%!" },
  { name: "Lakshmi D", location: "Mandya, Karnataka", text: "Fresh fruits at prices lower than the market! I buy weekly from FormForce Market and the quality is always excellent." },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-section-alt">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Reviews from Karnataka Users</h2>
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
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Karnataka's Farm-Fresh Marketplace</h2>
      <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">Buy vegetables & fruits at prices lower than market — directly from farmers in Mysuru & Karnataka.</p>
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
          <p className="text-card/70 text-sm leading-relaxed">Connecting Karnataka's farmers directly with buyers. Fresh vegetables & fruits at below-market prices from Mysuru and beyond.</p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            <a href="#home" className="text-sm text-card/70 hover:text-primary transition-colors">Home</a>
            <a href="#vegetables" className="text-sm text-card/70 hover:text-primary transition-colors">Vegetables</a>
            <a href="#fruits" className="text-sm text-card/70 hover:text-primary transition-colors">Fruits</a>
            <a href="#about" className="text-sm text-card/70 hover:text-primary transition-colors">About</a>
            <a href="#how-it-works" className="text-sm text-card/70 hover:text-primary transition-colors">How It Works</a>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm text-card/70"><Phone className="h-4 w-4 text-primary" /> +91 98765 43210</div>
            <div className="flex items-center gap-2 text-sm text-card/70"><Mail className="h-4 w-4 text-primary" /> info@formforcemarket.com</div>
            <div className="flex items-center gap-2 text-sm text-card/70"><MapPin className="h-4 w-4 text-primary" /> Mysuru, Karnataka, India</div>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-card/50 hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="text-card/50 hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-card/50 hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-card/10 mt-12 pt-6 text-center">
        <p className="text-xs text-card/50">© 2025 FormForce Market. All rights reserved. Made for Karnataka 🇮🇳</p>
      </div>
    </div>
  </footer>
);

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <ProduceSection
      id="vegetables"
      title="Fresh Vegetables"
      subtitle="Karnataka-grown vegetables at farm-gate prices — compare and save!"
      items={vegetables}
    />
    <AboutSection />
    <ProduceSection
      id="fruits"
      title="Fresh Fruits"
      subtitle="Seasonal Karnataka fruits — Badami mangoes, Nanjangud bananas & more"
      items={fruits}
    />
    <HowItWorksSection />
    <WhySection />
    <TestimonialsSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
