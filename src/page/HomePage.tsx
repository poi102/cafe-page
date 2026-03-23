import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import heroImage from "../assets/forest-cafe-hero.png";

import { menuItems, menuImages, features } from "../data/SiteData";
import type { JSX } from "react";

export default function HomePage(): JSX.Element {
  return (
    <div className="min-h-screen bg-[#f4fbf5] text-[#35543a]">
      <Header />

      <main>
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-linear-to-br from-[#e6f7ea] via-[#d8f0de] to-[#cfead6]">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center md:py-28">
            
            {/* 左 */}
            <div className="fade-up">

              <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
                森の静けさと、
                <br />
                やさしい一杯を。
              </h2>

              <p className="mt-6 max-w-lg text-base leading-8 text-[#56715b] sm:text-lg">
                自然に包まれながら過ごす、特別なカフェ時間。
                日常を忘れて、心を整えるひとときを。
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/menu"
                  className="rounded-full bg-[#7fbf8f] px-8 py-3 text-center font-semibold text-white shadow-lg transition hover:scale-105"
                >
                  メニューを見る
                </Link>

                <Link
                  to="/concept"
                  className="rounded-full border border-[#9ccfad] bg-white px-8 py-3 text-center font-semibold text-[#4d6a53] transition hover:bg-[#f3fbf5]"
                >
                  コンセプト
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#5d7b62]">
                <span className="rounded-full bg-white/70 px-4 py-2 shadow-sm">
                  🌿 テラス席あり
                </span>
                <span className="rounded-full bg-white/70 px-4 py-2 shadow-sm">
                  ☕ 自家焙煎コーヒー
                </span>
                <span className="rounded-full bg-white/70 px-4 py-2 shadow-sm">
                  🍰 季節限定スイーツ
                </span>
              </div>
            </div>

            {/* 右（画像） */}
            <div className="fade-up fade-delay-1 mt-10 md:mt-0">
              <div className="rounded-[2rem] bg-white/60 p-5 shadow-2xl backdrop-blur">
                <div className="overflow-hidden rounded-[1.5rem] bg-white p-3 shadow-lg">
                  <img
                    src={heroImage}
                    alt="森のひとときのテラス席"
                    className="h-80 w-full rounded-[1.25rem] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section className="bg-[#edf8ef] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-12 text-center">
              <p className="text-sm tracking-[0.25em] text-[#6a8f71]">ABOUT</p>
              <h3 className="mt-2 text-3xl font-bold sm:text-4xl">
                森とカフェが出会う場所
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {features.map((item: { title: string; text: string }, index: number) => (
                <div
                  key={item.title}
                  className={`fade-up rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-[#deefe1] transition hover:-translate-y-1 hover:shadow-lg ${
                    index === 1 ? "fade-delay-1" : index === 2 ? "fade-delay-2" : ""
                  }`}
                >
                  <div className="mb-4 text-2xl">
                    {index === 0 ? "🌲" : index === 1 ? "☕" : "✨"}
                  </div>

                  <h4 className="mb-3 text-xl font-semibold">
                    {item.title}
                  </h4>

                  <p className="leading-7 text-[#5f7a64]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= MENU ================= */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-12 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <div>
              <p className="text-sm tracking-[0.25em] text-[#6a8f71]">MENU</p>
              <h3 className="mt-2 text-3xl font-bold sm:text-4xl">
                おすすめメニュー
              </h3>
            </div>

            <Link
              to="/menu"
              className="rounded-full border border-[#b8d9bd] bg-white px-6 py-3 font-medium text-[#4d6a53] shadow-sm transition hover:bg-[#f7fff8]"
            >
              すべてのメニューを見る
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {menuItems.map((item, index) => (
              <div
                key={item.name}
                className={`group fade-up rounded-[1.9rem] border border-[#dcecdf] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  index === 1 ? "fade-delay-1" : index === 2 ? "fade-delay-2" : ""
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-[#dff0e2] px-3 py-1 text-xs font-semibold text-[#4d6a53]">
                    {item.badge}
                  </span>

                  <span className="text-sm font-bold text-[#6ba476]">
                    {item.price}
                  </span>
                </div>

                {/* 画像 */}
                <div className="overflow-hidden rounded-[1.25rem]">
                  <img
                    src={menuImages[item.name]}
                    alt={item.name}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <h4 className="mt-5 text-xl font-semibold">
                  {item.name}
                </h4>

                <p className="mt-2 leading-7 text-[#5f7a64]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section
          id="contact"
          className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20"
        >
          <div className="mb-10 text-center">
            <p className="text-sm tracking-[0.25em] text-[#6a8f71]">CONTACT</p>
            <h3 className="mt-2 text-3xl font-bold sm:text-4xl">
              お問い合わせ
            </h3>
            <p className="mt-4 text-sm text-[#5f7a64]">
              ※現在このフォームはダミーです
            </p>
          </div>

          <form className="rounded-[2rem] border bg-white p-6 shadow-sm">
            <input
              type="text"
              placeholder="お名前"
              disabled
              className="mb-4 w-full rounded-xl border p-3"
            />

            <input
              type="email"
              placeholder="メール"
              disabled
              className="mb-4 w-full rounded-xl border p-3"
            />

            <textarea
              placeholder="内容"
              disabled
              className="mb-4 w-full rounded-xl border p-3"
            />

            <button
              disabled
              className="rounded-full bg-gray-300 px-6 py-3 text-white"
            >
              送信
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}