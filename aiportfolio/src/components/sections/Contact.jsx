export default function Contact() {
  return (
    <section className="py-24 px-16 grid md:grid-cols-2 gap-16">
      <div>
        <h2 className="text-4xl font-bold mb-4">Let’s Connect</h2>
        <p className="text-gray-400">
          Got a project in mind? Let’s talk.
        </p>
      </div>

      <form className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl space-y-4">
        <input className="w-full p-3 rounded bg-black/30" placeholder="Name" />
        <input className="w-full p-3 rounded bg-black/30" placeholder="Email" />
        <textarea className="w-full p-3 rounded bg-black/30" placeholder="Message" />
        <button className="w-full py-3 bg-purple-600 rounded-xl">
          Send Message
        </button>
      </form>
    </section>
  );
}
