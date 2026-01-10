export default function Footer() {
  const platforms = [
    { name: "LeetCode", url: "https://leetcode.com/u/Ankit1673/" },
    { name: "Code360", url: "https://www.naukri.com/code360/profile/b41cac65-802b-4633-b691-33217fe65013" },
    { name: "HackerRank", url: "https://www.hackerrank.com/profile/kumartiwarianki1" },
    { name: "Unstop", url: "https://unstop.com/u/ankittiw55324" }
  ];

  return (
    <footer className="py-16 px-6 bg-[#0f172a] border-t border-slate-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div>
          <h2 className="text-xl font-bold text-white uppercase tracking-tighter">ANKIT KUMAR <span className="text-cyan-400">TIWARI</span></h2>
          <p className="text-slate-500 text-xs mt-2">+91-7352085345 </p>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          {platforms.map(p => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-[10px] font-bold uppercase tracking-widest">
              {p.name}
            </a>
          ))}
        </div>
        <p className="text-slate-700 text-[10px] uppercase tracking-widest">© 2026 All Rights Reserved</p>
      </div>
    </footer>
  );
}