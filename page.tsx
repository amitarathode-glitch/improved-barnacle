import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Navigation */}
      <nav className="w-full py-6 z-10 glass border-b-0 border-[rgba(255,255,255,0.05)]">
        <div className="container flex justify-between items-center">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 font-heading">
            MotionSync
          </div>
          <div className="flex gap-6">
            <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
            <Link href="/login" className="text-gray-300 hover:text-white transition-colors">Login</Link>
            <Link href="/create" className="btn-primary">
              Start Creating
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center p-6 z-10 pt-20">
        <div className="max-w-4xl space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-1.5 rounded-full glass border border-indigo-500/30 text-indigo-300 text-sm mb-4">
            ✨ Next-Gen AI Motion Transfer
          </div>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Bring Your Images <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              To Life
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Upload a static image and a reference video. Our advanced AI transfers the motion instantly. Creating professional animations has never been easier.
          </p>

          <div className="flex gap-4 justify-center pt-8">
            <Link href="/create" className="btn-primary text-lg px-8 py-4">
              Try It Now
            </Link>
            <button className="btn-secondary text-lg px-8 py-4">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      </section>

      {/* Feature visual placeholder (glass card) */}
      <section className="container pb-24 z-10">
        <div className="glass-card p-1 rounded-2xl overflow-hidden shadow-2xl border border-white/10 mx-auto max-w-5xl">
          <div className="bg-[#050505] rounded-xl aspect-video w-full flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-50"></div>

            {/* Visual Representation of the tool */}
            <div className="grid grid-cols-3 gap-8 p-12 w-full h-full items-center">
              <div className="text-center space-y-4">
                <div className="w-full aspect-[3/4] rounded-lg bg-gray-800/50 border border-white/10 flex items-center justify-center">
                  <span className="text-gray-500">Static Image</span>
                </div>
              </div>
              <div className="flex justify-center text-4xl text-indigo-400">
                ➔
              </div>
              <div className="text-center space-y-4">
                <div className="w-full aspect-[3/4] rounded-lg bg-gray-800/50 border border-white/10 flex items-center justify-center relative">
                  <span className="text-gray-500">Animated Result</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-4">
                    <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
