import { Link } from 'react-router-dom';

export default function RiyaHome() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-12 pt-6 sm:px-6">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-500 p-6 text-white shadow-xl shadow-purple-200">
        <div className="absolute -right-6 -top-6 text-8xl opacity-20 animate-float">✨</div>
        <div className="absolute -bottom-8 left-1/2 text-7xl opacity-10 animate-float">🎮</div>
        <p className="relative text-sm font-semibold text-purple-100">Hi Riya! 👋</p>
        <h1 className="relative mt-1 font-display text-2xl font-extrabold leading-tight sm:text-3xl">
          Choose Your Subject
        </h1>
        <p className="relative mt-2 max-w-sm text-sm text-purple-100">
          Class 6 learning games are organised by subject.
        </p>
      </section>

      <h2 className="mt-7 mb-3 text-center font-display text-lg font-bold text-slate-700">Subjects 📚</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Link
          to="/riya/computer"
          className="group overflow-hidden rounded-3xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-500 p-5 text-white shadow-xl shadow-purple-200 transition active:scale-[0.97]"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-purple-100">Subject</p>
              <h3 className="mt-1 font-display text-2xl font-extrabold">Computer Science</h3>
              <p className="mt-2 text-sm text-white/85">Chapter 4 &amp; Chapter 6 revision games</p>
              <p className="mt-4 rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur-sm">25 games</p>
            </div>
            <span className="text-5xl drop-shadow-sm transition group-active:scale-90">💻</span>
          </div>
        </Link>

        <Link
          to="/riya/science"
          className="group overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 via-teal-500 to-sky-500 p-5 text-white shadow-xl shadow-emerald-200 transition active:scale-[0.97]"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-emerald-100">Subject</p>
              <h3 className="mt-1 font-display text-2xl font-extrabold">Science</h3>
              <p className="mt-2 text-sm text-white/85">Chapters 2, 3, 4, 5 &amp; 6 revision games</p>
              <p className="mt-4 rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur-sm">25 games</p>
            </div>
            <span className="text-5xl drop-shadow-sm transition group-active:scale-90">🔬</span>
          </div>
        </Link>

        <Link
          to="/riya/maths"
          className="group overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 p-5 text-white shadow-xl shadow-purple-200 transition active:scale-[0.97] sm:col-span-2"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-purple-100">Subject</p>
              <h3 className="mt-1 font-display text-2xl font-extrabold">Maths Tables</h3>
              <p className="mt-2 text-sm text-white/85">Tables 1-20 + Squares &amp; Cubes of Numbers</p>
              <p className="mt-4 rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur-sm">115 games</p>
            </div>
            <span className="text-5xl drop-shadow-sm transition group-active:scale-90">🔢</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
