import { Link } from 'react-router-dom';

export default function SiyaHome() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-12 pt-6 sm:px-6">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-400 via-blue-400 to-cyan-400 p-6 text-white shadow-xl shadow-sky-200">
        <div className="absolute -right-6 -top-6 text-8xl opacity-20 animate-float">✨</div>
        <div className="absolute -bottom-8 left-1/2 text-7xl opacity-10 animate-float">🐦</div>
        <p className="relative text-sm font-semibold text-sky-50">Hi Siya! 👋</p>
        <h1 className="relative mt-1 font-display text-2xl font-extrabold leading-tight sm:text-3xl">
          Choose Your Subject
        </h1>
        <p className="relative mt-2 max-w-sm text-sm text-sky-50">
          Class 3 learning games are organised by subject.
        </p>
      </section>

      <h2 className="mt-7 mb-3 text-center font-display text-lg font-bold text-slate-700">Subjects 📚</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Link
          to="/siya/science"
          className="group overflow-hidden rounded-3xl bg-gradient-to-br from-sky-400 via-blue-400 to-cyan-400 p-5 text-white shadow-xl shadow-sky-200 transition active:scale-[0.97]"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-sky-50">Subject</p>
              <h3 className="mt-1 font-display text-2xl font-extrabold">Science</h3>
              <p className="mt-2 text-sm text-white/85">Chapters 4, 5 &amp; 6 revision games</p>
              <p className="mt-4 rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur-sm">33 games</p>
            </div>
            <span className="text-5xl drop-shadow-sm transition group-active:scale-90">🔬</span>
          </div>
        </Link>

        <Link
          to="/siya/maths"
          className="group overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 p-5 text-white shadow-xl shadow-purple-200 transition active:scale-[0.97]"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-purple-100">Subject</p>
              <h3 className="mt-1 font-display text-2xl font-extrabold">Maths Tables</h3>
              <p className="mt-2 text-sm text-white/85">Learn tables 1 to 20!</p>
              <p className="mt-4 rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur-sm">105 games</p>
            </div>
            <span className="text-5xl drop-shadow-sm transition group-active:scale-90">🔢</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

