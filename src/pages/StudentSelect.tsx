import StudentCard from '../components/StudentCard';

export default function StudentSelect() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-12 pt-6 sm:px-6">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-500 p-6 text-center text-white shadow-xl shadow-purple-200">
        <div className="absolute -right-6 -top-6 text-8xl opacity-20 animate-float">✨</div>
        <div className="absolute -bottom-8 left-1/2 text-7xl opacity-10 animate-float">🎮</div>
        <p className="relative font-display text-2xl font-extrabold leading-tight sm:text-3xl">
          Welcome to Learning Games! ✨
        </p>
        <p className="relative mt-2 text-sm text-purple-100">Whose turn is it to play and learn today?</p>
      </section>

      <h2 className="mt-7 mb-3 text-center font-display text-lg font-bold text-slate-700">Choose Your Profile 🙋</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <StudentCard
          to="/riya"
          name="Riya"
          classLabel="Class 6"
          subtitle="Subject: Computer Science · Chapter 4 & 6 revision games!"
          emoji="👧"
          img="profile-riya"
          gradient="from-fuchsia-500 via-purple-500 to-indigo-500"
        />
        <StudentCard
          to="/siya"
          name="Siya"
          classLabel="Class 3"
          subtitle="Subject: Science · Chapter 4 & 6 revision games!"
          emoji="👧"
          img="profile-siya"
          gradient="from-amber-400 via-orange-400 to-pink-500"
        />
      </div>
    </div>
  );
}
