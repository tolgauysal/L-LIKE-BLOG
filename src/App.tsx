import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import Hero from "./components/Hero";
import LegalPage, { type LegalPageId } from "./components/LegalPage";
import PostCard from "./components/PostCard";
import ScrollFilm from "./components/ScrollFilm";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { posts, type BlogPost } from "./data/posts";

const categories = ["Tümü", ...new Set(posts.map((post) => post.category))];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [searchText, setSearchText] = useState("");
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [activeLegalPage, setActiveLegalPage] = useState<LegalPageId | null>(
    () => getLegalPageFromUrl(),
  );

  useEffect(() => {
    const syncLegalPage = () => setActiveLegalPage(getLegalPageFromUrl());
    window.addEventListener("popstate", syncLegalPage);
    return () => window.removeEventListener("popstate", syncLegalPage);
  }, []);

  useEffect(() => {
    if (activeLegalPage === "kvkk") {
      document.title = "KVKK ve Gizlilik — Tolga'nın Blogu";
    } else if (activeLegalPage === "guvenlik") {
      document.title = "Güvenlik Politikası — Tolga'nın Blogu";
    } else if (activePost) {
      document.title = `${activePost.title} — Tolga'nın Blogu`;
    } else {
      document.title = "Tolga'nın Blogu — Genç yazılımcının blogu";
    }
  }, [activeLegalPage, activePost]);

  const visiblePosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "Tümü" || post.category === selectedCategory;
    const searchTerm = searchText.trim().toLocaleLowerCase("tr-TR");
    const matchesSearch =
      searchTerm.length === 0 ||
      `${post.title} ${post.summary} ${post.category}`
        .toLocaleLowerCase("tr-TR")
        .includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  function showHome() {
    window.history.pushState({}, "", window.location.pathname);
    setActivePost(null);
    setActiveLegalPage(null);
    setSelectedCategory("Tümü");
    setSearchText("");
  }

  function openLegalPage(page: LegalPageId) {
    window.history.pushState({}, "", `?sayfa=${page}`);
    setActivePost(null);
    setActiveLegalPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function closeLegalPage() {
    window.history.pushState({}, "", window.location.pathname);
    setActiveLegalPage(null);
  }

  return (
    <>
      <SiteHeader onHome={showHome} />
      <main>
        {activeLegalPage ? (
          <LegalPage page={activeLegalPage} onBack={closeLegalPage} />
        ) : activePost ? (
          <article className="wrap article-view" aria-labelledby="article-title">
            <button
              className="back-link"
              type="button"
              onClick={() => setActivePost(null)}
            >
              <span aria-hidden="true">←</span> Tüm yazılara dön
            </button>
            <div className="article-heading">
              <span className="tag">{activePost.category}</span>
              <span className="article-reading">
                {activePost.readingTime} dk okuma
              </span>
            </div>
            <h1 id="article-title">{activePost.title}</h1>
            <p className="article-summary">{activePost.summary}</p>
            <div className="article-body">
              {activePost.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ) : (
          <>
            <Hero />
            <ScrollFilm />
            <section
              className="wrap section"
              id="yazilar"
              aria-labelledby="posts-title"
            >
              <div className="section-head">
                <div>
                  <p className="eyebrow">Not defterimden</p>
                  <h2 id="posts-title">Son yazılar</h2>
                </div>
                <label className="search-box">
                  <span className="sr-only">Yazılarda ara</span>
                  <span aria-hidden="true">⌕</span>
                  <input
                    type="search"
                    placeholder="Yazılarda ara..."
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                  />
                </label>
              </div>
              <div className="filters" aria-label="Yazı kategorileri">
                {categories.map((category) => (
                  <button
                    className={`filter-button${selectedCategory === category ? " is-active" : ""}`}
                    key={category}
                    type="button"
                    aria-pressed={selectedCategory === category}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              {visiblePosts.length > 0 ? (
                <div className="post-grid">
                  {visiblePosts.map((post) => (
                    <PostCard
                      key={post.id}
                      post={post}
                      onRead={setActivePost}
                    />
                  ))}
                </div>
              ) : (
                <p className="empty-state">
                  Aramana uygun yazı bulamadım. Başka bir kelime deneyebilirsin.
                </p>
              )}
            </section>
            <AboutSection />
          </>
        )}
      </main>
      <SiteFooter onOpenLegal={openLegalPage} />
    </>
  );
}

function getLegalPageFromUrl(): LegalPageId | null {
  const page = new URLSearchParams(window.location.search).get("sayfa");
  return page === "kvkk" || page === "guvenlik" ? page : null;
}
