export default function GlowButton({ text }) {
  return (
    <button className="px-8 py-3 rounded-full bg-purple-600 shadow-[0_0_25px_#7f5cff] hover:scale-105 transition">
      {text}
    </button>
  );
}
