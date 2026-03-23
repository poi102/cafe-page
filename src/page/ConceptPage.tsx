import { Link } from "react-router-dom";
import Header from "../components/Header";
import type { JSX } from "react";

export default function ConceptPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-[#f4fbf5] text-[#35543a]">
      <Header title="コンセプト" />

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <section className="fade-up rounded-4xl bg-white p-6 shadow-sm ring-1 ring-[#dcecdf] sm:p-8">
          <p className="text-sm tracking-[0.25em] text-[#6a8f71]">CONCEPT DETAIL</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">店の紹介ページ</h2>

          <p className="mt-5 leading-8 text-[#5f7a64]">
            森のひとときは、森林浴の心地よさとカフェのくつろぎをひとつにした小さなお店です。木漏れ日が差し込む空間で、自然の香りや静けさを感じながら、ていねいに淹れたドリンクやスイーツを楽しめます。
          </p>

          <p className="mt-4 leading-8 text-[#5f7a64]">
            店内はやわらかなパステルグリーンを基調に、肩の力を抜いて過ごせる雰囲気に整えています。ひとりで静かに過ごしたい日にも、大切な人とゆっくり話したい日にも寄り添える場所を目指しています。
          </p>

          <p className="mt-4 leading-8 text-[#5f7a64]">
            忙しい日常のなかで、深呼吸するように立ち寄れる場所。森の空気を感じるひとときと、やさしい一杯で、心を整える時間を届けます。
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl bg-[#f6fcf7] p-5 ring-1 ring-[#e1efe3]">
              <h3 className="text-lg font-semibold">空間づくり</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f7a64]">
                木の温もりを感じる家具と自然光を活かした、落ち着きのある店内デザイン。
              </p>
            </div>

            <div className="rounded-3xl bg-[#f6fcf7] p-5 ring-1 ring-[#e1efe3]">
              <h3 className="text-lg font-semibold">メニューへの想い</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f7a64]">
                森の景色に合うやさしい味わいを大切にし、飲みやすさと香りの余韻を意識しています。
              </p>
            </div>

            <div className="rounded-3xl bg-[#f6fcf7] p-5 ring-1 ring-[#e1efe3]">
              <h3 className="text-lg font-semibold">過ごし方</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f7a64]">
                読書、会話、ひと休み。どんな時間にも自然になじむ、やさしい居場所を提供します。
              </p>
            </div>
          </div>

          <Link
            to="/"
            className="mt-8 inline-flex rounded-2xl border border-[#b8d9bd] bg-[#f7fff8] px-5 py-3 font-medium text-[#4d6a53] transition hover:bg-white"
          >
            ホームへ戻る
          </Link>
        </section>
      </main>
    </div>
  );
}