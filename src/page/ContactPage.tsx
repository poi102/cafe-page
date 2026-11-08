import Header from "../components/Header";
import type { JSX } from "react";

export default function ContactPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-[#f4fbf5] text-[#35543a]">
      <Header title="お問い合わせ" />
      <main>
        {/* ================= CONTACT ================= */}
        <section
          id="contact"
          className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20"
        >
          <div className="mb-10 text-center">
            <p className="text-sm tracking-[0.25em] text-[#6a8f71]">CONTACT</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              お問い合わせ
            </h2>
            <p className="mt-4 text-sm text-[#5f7a64]">
              ※現在このフォームはダミーです
            </p>
          </div>

          <form className="rounded-4xl border bg-white p-6 shadow-sm">
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
    </div>
  );
}