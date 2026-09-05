import { useMemo, useState } from "react";
import {
  Search,
  Heart,
  ShieldCheck,
  Star,
  MessageCircle,
  Plus,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Upload,
  CheckCircle2,
  Package,
  Eye,
  Wallet,
  Users,
  LayoutDashboard,
  Store,
  User,
  Lock,
  ArrowRight,
} from "lucide-react";

const DEMO_LISTINGS = [
  {
    id: 1,
    title: "OG Veteran Collection",
    price: 2499,
    level: 72,
    rank: "Grandmaster",
    region: "India",
    seller: "ShadowX",
    verified: true,
    rating: 4.9,
    reviews: 28,
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=85",
    tags: ["OG", "Rare", "Grandmaster"],
  },
  {
    id: 2,
    title: "Rare Skin Collection",
    price: 1799,
    level: 68,
    rank: "Heroic",
    region: "India",
    seller: "DarkAdept",
    verified: true,
    rating: 4.8,
    reviews: 19,
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=85",
    tags: ["Rare", "Heroic"],
  },
  {
    id: 3,
    title: "Legendary Inventory",
    price: 3299,
    level: 75,
    rank: "Master",
    region: "India",
    seller: "TGASeller",
    verified: true,
    rating: 5,
    reviews: 41,
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=1200&q=85",
    tags: ["Legendary", "Rare"],
  },
  {
    id: 4,
    title: "Competitive Player ID",
    price: 1199,
    level: 61,
    rank: "Heroic",
    region: "India",
    seller: "NightWolf",
    verified: false,
    rating: 4.6,
    reviews: 12,
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85",
    tags: ["Competitive"],
  },
  {
    id: 5,
    title: "Premium Old Account",
    price: 2899,
    level: 70,
    rank: "Grandmaster",
    region: "India",
    seller: "AdeptStore",
    verified: true,
    rating: 4.9,
    reviews: 34,
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1200&q=85",
    tags: ["OG", "Premium"],
  },
  {
    id: 6,
    title: "Starter Collection",
    price: 799,
    level: 45,
    rank: "Diamond",
    region: "India",
    seller: "GameVault",
    verified: true,
    rating: 4.7,
    reviews: 8,
    image:
      "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=1200&q=85",
    tags: ["Starter"],
  },
];

function App() {
  const [page, setPage] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const navigate = (next) => {
    setPage(next);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      <Navbar
        page={page}
        navigate={navigate}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        userRole={userRole}
      />

      {page === "home" && <Home navigate={navigate} />}
      {page === "marketplace" && <Marketplace navigate={navigate} />}
      {page === "login" && (
        <Login navigate={navigate} setUserRole={setUserRole} />
      )}
      {page === "register" && (
        <Register navigate={navigate} setUserRole={setUserRole} />
      )}
      {page === "buyer" && <BuyerDashboard navigate={navigate} />}
      {page === "seller" && <SellerDashboard navigate={navigate} />}
      {page === "verification" && (
        <Verification navigate={navigate} />
      )}
      {page === "profile" && <Profile navigate={navigate} />}
    </div>
  );
}

function Navbar({
  page,
  navigate,
  mobileOpen,
  setMobileOpen,
  userRole,
}) {
  return (
    <header className="navbar">
      <div className="navInner">
        <button className="brand" onClick={() => navigate("home")}>
          <span className="brandMark">T</span>
          <span>
            TGA <b>SELLING</b>
          </span>
        </button>

        <nav className={mobileOpen ? "navLinks open" : "navLinks"}>
          <button
            className={page === "home" ? "navActive" : ""}
            onClick={() => navigate("home")}
          >
            Home
          </button>

          <button
            className={page === "marketplace" ? "navActive" : ""}
            onClick={() => navigate("marketplace")}
          >
            Marketplace
          </button>

          <button onClick={() => navigate("seller")}>Sell</button>

          {userRole ? (
            <>
              <button onClick={() => navigate(userRole)}>
                Dashboard
              </button>
              <button onClick={() => navigate("profile")}>
                Profile
              </button>
            </>
          ) : (
            <button onClick={() => navigate("login")}>Login</button>
          )}
        </nav>

        <div className="navRight">
          {!userRole && (
            <button
              className="navCreate"
              onClick={() => navigate("register")}
            >
              Create account
            </button>
          )}

          <button
            className="menuButton"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}

function Home({ navigate }) {
  return (
    <>
      <section className="hero">
        <div className="heroGlow heroGlowOne" />
        <div className="heroGlow heroGlowTwo" />

        <div className="heroContent">
          <div className="eyebrow">
            <span className="pulseDot" />
            THE NEXT GENERATION GAMING MARKETPLACE
          </div>

          <h1>
            BUY. SELL.
            <br />
            <span>GAME.</span>
          </h1>

          <p>
            A modern marketplace experience for discovering
            gaming listings and connecting with sellers.
          </p>

          <div className="heroActions">
            <button
              className="button primary large"
              onClick={() => navigate("marketplace")}
            >
              Explore Marketplace
              <ArrowRight size={18} />
            </button>

            <button
              className="button ghost large"
              onClick={() => navigate("register")}
            >
              Become a Seller
            </button>
          </div>

          <div className="heroTrust">
            <div className="trustAvatars">
              <span>G</span>
              <span>T</span>
              <span>A</span>
              <span>+</span>
            </div>

            <div>
              <strong>Growing gaming community</strong>
              <small>Built for buyers & sellers</small>
            </div>
          </div>
        </div>

        <div className="heroVisual">
          <div className="visualCard visualBack">
            <div className="visualLine" />
            <div className="visualLine short" />
          </div>

          <div className="visualCard visualMain">
            <div className="visualTop">
              <span className="miniBadge">FEATURED</span>
              <Heart size={18} />
            </div>

            <img src={DEMO_LISTINGS[0].image} />

            <div className="visualInfo">
              <div>
                <small>LEVEL 72</small>
                <strong>OG Veteran</strong>
              </div>

              <b>₹2,499</b>
            </div>
          </div>

          <div className="floatingBadge">
            <ShieldCheck size={18} />
            <div>
              <strong>Verified Seller</strong>
              <small>Trusted profile</small>
            </div>
          </div>
        </div>
      </section>

      <section className="featureStrip">
        <Feature
          icon={<ShieldCheck />}
          title="Seller verification"
          text="Profiles can go through verification."
        />

        <Feature
          icon={<Store />}
          title="Easy marketplace"
          text="Search and discover listings quickly."
        />

        <Feature
          icon={<MessageCircle />}
          title="Direct messaging"
          text="Connect with sellers through chat."
        />

        <Feature
          icon={<Lock />}
          title="Privacy first"
          text="Private verification information stays private."
        />
      </section>

      <section className="contentSection">
        <SectionHeading
          eyebrow="FEATURED LISTINGS"
          title="Trending right now"
          text="Explore some of the latest marketplace listings."
          action="View marketplace"
          onAction={() => navigate("marketplace")}
        />

        <ListingGrid listings={DEMO_LISTINGS.slice(0, 3)} />
      </section>

      <section className="ctaSection">
        <div>
          <small>START YOUR JOURNEY</small>
          <h2>Ready to enter the marketplace?</h2>
          <p>
            Create an account and explore what TGA SELLING
            INDUSTRY has to offer.
          </p>
        </div>

        <button
          className="button primary"
          onClick={() => navigate("register")}
        >
          Create account <ArrowRight size={17} />
        </button>
      </section>
    </>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="feature">
      <div className="featureIcon">{icon}</div>
      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  action,
  onAction,
}) {
  return (
    <div className="sectionHeading">
      <div>
        <small>{eyebrow}</small>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>

      {action && (
        <button className="textButton" onClick={onAction}>
          {action} <ChevronRight size={16} />
        </button>
      )}
    </div>
  );
}

function ListingGrid({ listings }) {
  return (
    <div className="listingGrid">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}

function ListingCard({ listing }) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="listingCard">
      <div className="listingImage">
        <img src={listing.image} alt={listing.title} />

        <div className="listingLabels">
          <span>FEATURED</span>
        </div>

        <button
          className={liked ? "likeButton liked" : "likeButton"}
          onClick={() => setLiked(!liked)}
        >
          <Heart size={17} fill={liked ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="listingContent">
        <div className="sellerRow">
          <div className="sellerAvatar">
            {listing.seller.charAt(0)}
          </div>

          <span>{listing.seller}</span>

          {listing.verified && (
            <ShieldCheck size={15} className="verifiedIcon" />
          )}

          <div className="rating">
            <Star size={13} fill="currentColor" />
            {listing.rating}
          </div>
        </div>

        <h3>{listing.title}</h3>

        <div className="tagRow">
          <span>LVL {listing.level}</span>
          <span>{listing.rank}</span>
          <span>{listing.region}</span>
        </div>

        <div className="listingFooter">
          <div>
            <small>PRICE</small>
            <strong>₹{listing.price.toLocaleString()}</strong>
          </div>

          <button className="smallButton">View</button>
        </div>
      </div>
    </article>
  );
}

function Marketplace() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    return DEMO_LISTINGS.filter((item) => {
      const query = search.toLowerCase();

      const matchesSearch =
        item.title.toLowerCase().includes(query) ||
        item.seller.toLowerCase().includes(query) ||
        item.rank.toLowerCase().includes(query);

      let matchesFilter = true;

      if (filter === "Under ₹1,000") {
        matchesFilter = item.price < 1000;
      }

      if (filter === "₹1,000 - ₹3,000") {
        matchesFilter = item.price >= 1000 && item.price <= 3000;
      }

      if (filter === "Grandmaster") {
        matchesFilter = item.rank === "Grandmaster";
      }

      if (filter === "Heroic") {
        matchesFilter = item.rank === "Heroic";
      }

      if (filter === "Rare") {
        matchesFilter = item.tags.includes("Rare");
      }

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  return (
    <main className="page">
      <div className="pageHero">
        <div>
          <small>MARKETPLACE</small>
          <h1>Find your next listing.</h1>
          <p>
            Search through available marketplace listings.
          </p>
        </div>

        <div className="marketStats">
          <strong>{DEMO_LISTINGS.length}</strong>
          <span>Listings shown</span>
        </div>
      </div>

      <div className="searchPanel">
        <Search size={19} />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title, seller or rank..."
        />
      </div>

      <div className="filterBar">
        {[
          "All",
          "Under ₹1,000",
          "₹1,000 - ₹3,000",
          "Grandmaster",
          "Heroic",
          "Rare",
        ].map((item) => (
          <button
            key={item}
            className={filter === item ? "filter active" : "filter"}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {filtered.length ? (
        <ListingGrid listings={filtered} />
      ) : (
        <div className="emptyState">
          <Search size={35} />
          <h3>No listings found</h3>
          <p>Try changing your search or filters.</p>
        </div>
      )}
    </main>
  );
}

function Login({ navigate, setUserRole }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!email || !password) return;

    setUserRole("buyer");
    navigate("buyer");
  };

  return (
    <AuthLayout
      eyebrow="WELCOME BACK"
      title="Sign in to TGA."
      text="Access your marketplace account."
    >
      <form onSubmit={submit}>
        <Field
          label="Email address"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={setEmail}
        />

        <Field
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={setPassword}
        />

        <div className="forgotRow">
          <label className="check">
            <input type="checkbox" />
            Remember me
          </label>

          <button type="button" className="linkButton">
            Forgot password?
          </button>
        </div>

        <button className="button primary fullButton">
          Sign in <ArrowRight size={17} />
        </button>

        <AuthBottom
          text="Don't have an account?"
          action="Create one"
          onClick={() => navigate("register")}
        />
      </form>
    </AuthLayout>
  );
}

function Register({ navigate, setUserRole }) {
  const [role, setRole] = useState("buyer");

  const submit = (e) => {
    e.preventDefault();

    setUserRole(role);

    if (role === "seller") {
      navigate("verification");
    } else {
      navigate("buyer");
    }
  };

  return (
    <AuthLayout
      eyebrow="JOIN TGA"
      title="Create your account."
      text="Choose how you want to use the marketplace."
      wide
    >
      <form onSubmit={submit}>
        <div className="twoFields">
          <Field label="Full name" placeholder="Your name" />
          <Field label="Company name" placeholder="Optional" />
        </div>

        <Field
          label="Email address"
          type="email"
          placeholder="you@example.com"
        />

        <Field
          label="Password"
          type="password"
          placeholder="Create a password"
        />

        <label className="fieldLabel">Profile picture</label>

        <label className="uploadBox">
          <Upload size={19} />
          <span>Upload profile picture</span>
          <input type="file" accept="image/*" />
        </label>

        <label className="fieldLabel">Account type</label>

        <div className="roleCards">
          <button
            type="button"
            className={role === "buyer" ? "roleCard selected" : "roleCard"}
            onClick={() => setRole("buyer")}
          >
            <div className="roleIcon">
              <Store size={20} />
            </div>

            <strong>Buyer</strong>
            <small>Browse marketplace listings</small>
          </button>

          <button
            type="button"
            className={
              role === "seller" ? "roleCard selected" : "roleCard"
            }
            onClick={() => setRole("seller")}
          >
            <div className="roleIcon">
              <Package size={20} />
            </div>

            <strong>Seller</strong>
            <small>Create and manage listings</small>
          </button>
        </div>

        <button className="button primary fullButton">
          Continue <ArrowRight size={17} />
        </button>

        <AuthBottom
          text="Already have an account?"
          action="Sign in"
          onClick={() => navigate("login")}
        />
      </form>
    </AuthLayout>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="field">
      <label className="fieldLabel">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        required={Boolean(onChange)}
      />
    </div>
  );
}

function AuthLayout({
  eyebrow,
  title,
  text,
  children,
  wide = false,
}) {
  return (
    <main className="authPage">
      <div className={wide ? "authCard wide" : "authCard"}>
        <div className="authBrand">
          <span>TGA</span>
        </div>

        <small>{eyebrow}</small>
        <h1>{title}</h1>
        <p>{text}</p>

        {children}
      </div>
    </main>
  );
}

function AuthBottom({ text, action, onClick }) {
  return (
    <div className="authBottom">
      <span>{text}</span>

      <button type="button" className="linkButton" onClick={onClick}>
        {action}
      </button>
    </div>
  );
}

function Verification({ navigate }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <main className="authPage">
        <div className="successCard">
          <div className="successIcon">
            <CheckCircle2 size={35} />
          </div>

          <small>SUBMITTED</small>

          <h1>Verification received.</h1>

          <p>
            Your seller verification request has been submitted
            for review.
          </p>

          <button
            className="button primary fullButton"
            onClick={() => navigate("seller")}
          >
            Go to Seller Center
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="authPage">
      <div className="authCard wide">
        <div className="authBrand">
          <span>✓</span>
        </div>

        <small>SELLER VERIFICATION</small>

        <h1>Verify your seller profile.</h1>

        <p>
          Verification information is private and should only
          be used for review.
        </p>

        <div className="progressSteps">
          <div className="progressStep active">
            <span>1</span>
            Profile
          </div>

          <div className="progressLine" />

          <div className="progressStep">
            <span>2</span>
            Verification
          </div>

          <div className="progressLine" />

          <div className="progressStep">
            <span>3</span>
            Review
          </div>
        </div>

        <div className="twoFields">
          <Field label="Phone number" placeholder="+91 XXXXX XXXXX" />
          <Field label="Country" placeholder="India" />
        </div>

        <Field
          label="Seller / business name"
          placeholder="Your seller name"
        />

        <label className="fieldLabel">Seller description</label>

        <textarea
          className="largeInput"
          placeholder="Tell buyers about your seller profile..."
        />

        <label className="fieldLabel">Verification document</label>

        <label className="uploadBox documentUpload">
          <Lock size={20} />
          <span>Upload private document</span>
          <small>Accepted formats depend on your setup</small>
          <input type="file" />
        </label>

        <div className="privacyNotice">
          <ShieldCheck size={18} />
          <span>
            Private verification data must never be shown on
            public seller profiles.
          </span>
        </div>

        <button
          className="button primary fullButton"
          onClick={() => setSubmitted(true)}
        >
          Submit for review
        </button>
      </div>
    </main>
  );
}

function BuyerDashboard({ navigate }) {
  return (
    <DashboardLayout
      eyebrow="BUYER DASHBOARD"
      title="Welcome back."
      subtitle="Manage your marketplace activity."
      action={
        <button
          className="button primary"
          onClick={() => navigate("marketplace")}
        >
          Browse marketplace
        </button>
      }
    >
      <div className="statsGrid">
        <DashboardStat
          icon={<Heart />}
          label="Favorites"
          value="0"
        />

        <DashboardStat
          icon={<MessageCircle />}
          label="Messages"
          value="0"
        />

        <DashboardStat
          icon={<Package />}
          label="Purchases"
          value="0"
        />
      </div>

      <SectionHeading
        eyebrow="RECOMMENDED"
        title="Featured listings"
        text="Explore the latest marketplace additions."
      />

      <ListingGrid listings={DEMO_LISTINGS.slice(0, 3)} />
    </DashboardLayout>
  );
}

function SellerDashboard({ navigate }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <DashboardLayout
      eyebrow="SELLER CENTER"
      title="Manage your store."
      subtitle="Create and manage marketplace listings."
      action={
        <button
          className="button primary"
          onClick={() => setShowForm(!showForm)}
        >
          <Plus size={17} />
          New listing
        </button>
      }
    >
      <div className="statsGrid">
        <DashboardStat
          icon={<Package />}
          label="Active listings"
          value="0"
        />

        <DashboardStat
          icon={<Eye />}
          label="Total views"
          value="0"
        />

        <DashboardStat
          icon={<Wallet />}
          label="Sold"
          value="0"
        />

        <DashboardStat
          icon={<Star />}
          label="Rating"
          value="—"
        />
      </div>

      {showForm ? (
        <ListingForm onCancel={() => setShowForm(false)} />
      ) : (
        <div className="emptyDashboard">
          <div className="emptyIcon">
            <Package />
          </div>

          <h2>No listings yet</h2>

          <p>
            Create your first marketplace listing to get
            started.
          </p>

          <button
            className="button primary"
            onClick={() => setShowForm(true)}
          >
            <Plus size={17} />
            Create listing
          </button>
        </div>
      )}
    </DashboardLayout>
  );
}

function DashboardLayout({
  eyebrow,
  title,
  subtitle,
  action,
  children,
}) {
  return (
    <main className="dashboardPage">
      <div className="dashboardHeader">
        <div>
          <small>{eyebrow}</small>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>

        {action}
      </div>

      {children}
    </main>
  );
}

function DashboardStat({ icon, label, value }) {
  return (
    <div className="dashboardStat">
      <div className="dashboardStatIcon">{icon}</div>

      <small>{label}</small>

      <strong>{value}</strong>
    </div>
  );
}

function ListingForm({ onCancel }) {
  const [images, setImages] = useState([]);

  const handleImages = (e) => {
    setImages([...e.target.files]);
  };

  return (
    <section className="listingForm">
      <div className="formHeading">
        <div>
          <small>NEW LISTING</small>
          <h2>Create marketplace listing</h2>
        </div>

        <button className="iconButton" onClick={onCancel}>
          <X size={18} />
        </button>
      </div>

      <div className="formGrid">
        <Field
          label="Listing title"
          placeholder="Example: OG Veteran Collection"
        />

        <Field label="Price" placeholder="₹ 0" />

        <Field label="Level" placeholder="Account level" />

        <Field label="Rank" placeholder="Grandmaster / Heroic" />

        <Field label="Region" placeholder="India" />

        <Field label="Rare items" placeholder="Describe rare items" />
      </div>

      <label className="fieldLabel">Description</label>

      <textarea
        className="largeInput"
        placeholder="Describe your listing..."
      />

      <label className="fieldLabel">Listing photos</label>

      <label className="photoDrop">
        <Upload size={26} />

        <strong>
          {images.length
            ? `${images.length} photo(s) selected`
            : "Upload listing photos"}
        </strong>

        <small>Drag files here or tap to browse</small>

        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImages}
        />
      </label>

      <div className="formNotice">
        <ShieldCheck size={18} />

        <span>
          Only upload information you're allowed to publish.
          Follow the game's current terms and applicable rules.
        </span>
      </div>

      <div className="formActions">
        <button className="button ghost" onClick={onCancel}>
          Cancel
        </button>

        <button className="button primary">
          Publish listing <ArrowRight size={17} />
        </button>
      </div>
    </section>
  );
}

function Profile() {
  return (
    <main className="dashboardPage">
      <div className="profileHeader">
        <div className="profileAvatar">T</div>

        <div>
          <small>MY PROFILE</small>
          <h1>TGA User</h1>
          <p>Member since 2026</p>
        </div>

        <button className="button ghost">
          <Settings size={17} />
          Edit profile
        </button>
      </div>

      <div className="profileGrid">
        <div className="profileCard">
          <div className="cardIcon">
            <User />
          </div>

          <h3>Account information</h3>

          <ProfileRow label="Name" value="TGA User" />
          <ProfileRow label="Email" value="user@example.com" />
          <ProfileRow label="Account" value="Buyer" />
        </div>

        <div className="profileCard">
          <div className="cardIcon">
            <ShieldCheck />
          </div>

          <h3>Security</h3>

          <ProfileRow label="Email" value="Verified" />
          <ProfileRow label="Password" value="••••••••" />
          <ProfileRow label="2FA" value="Not configured" />
        </div>
      </div>
    </main>
  );
}

function ProfileRow({ label, value }) {
  return (
    <div className="profileRow">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export default App;
