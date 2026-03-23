import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { menuImages, menuItems } from "../data/SiteData";
import type { JSX } from "react";

export default function MenuPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-[#f4fbf5] text-[#35543a]">
      <Header title="メニュー詳細" />

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="fade-up mb-10 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-[#dcecdf] sm:p-8">
          <p className="text-sm tracking-[0.25em] text-[#6a8f71]">MENU DETAIL</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">メニュー詳細ページ</h2>
          <p className="mt-4 max-w-3xl leading-8 text-[#5f7a64]">
            森のひとときで提供している人気メニューの詳細をご紹介します。味わいだけでなく、過ごしたい時間やおすすめの組み合わせもわかるページにしました。
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex rounded-full border border-[#b8d9bd] bg-[#f7fff8] px-5 py-3 font-medium text-[#4d6a53] transition hover:bg-white"
          >
            ホームへ戻る
          </Link>
        </div>

        <div className="grid gap-6">
          {menuItems.map((item, index) => (
            <article
              key={item.name}
              className={`fade-up grid gap-6 rounded-[2rem] border border-[#dcecdf] bg-white p-5 shadow-sm transition hover:shadow-lg sm:p-8 md:grid-cols-[320px_1fr] ${
                index === 1 ? "fade-delay-1" : index === 2 ? "fade-delay-2" : ""
              }`}
            >
              <div className="overflow-hidden rounded-[1.5rem] bg-[#e7f5e9] pulse-glow">
                <img
                  src={menuImages[item.name]}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="rounded-full bg-[#dff0e2] px-3 py-1 text-xs font-semibold text-[#4d6a53]">
                      {item.badge}
                    </span>
                    <h3 className="mt-3 text-2xl font-bold">{item.name}</h3>
                  </div>
                  <p className="text-xl font-bold text-[#6ba476]">{item.price}</p>
                </div>

                <p className="mt-4 leading-8 text-[#5f7a64]">{item.detail}</p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] bg-[#f6fcf7] p-4 ring-1 ring-[#e1efe3]">
                    <p className="text-sm font-semibold text-[#4d6a53]">主な素材</p>
                    <p className="mt-2 text-sm leading-7 text-[#5f7a64]">
                      {item.ingredients}
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] bg-[#f6fcf7] p-4 ring-1 ring-[#e1efe3]">
                    <p className="text-sm font-semibold text-[#4d6a53]">
                      おすすめの楽しみ方
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#5f7a64]">
                      {item.recommendation}
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-[1.5rem] bg-[#edf8ef] p-4 text-sm leading-7 text-[#5f7a64]">
                  セット提案：
                  {item.name === "森のブレンド" && " 木の実タルトとのセットで、香ばしさの余韻をより楽しめます。"}
                  {item.name === "抹茶ラテ" && " 季節の焼き菓子と合わせると、やさしい甘さが引き立ちます。"}
                  {item.name === "木の実タルト" && " 森のブレンドと合わせることで、ナッツの香りがより深く楽しめます。"}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}