"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";

const techLinks = [
  { href:"#about",    label:"About"    },
  { href:"#skills",   label:"Skills"   },
  { href:"#projects", label:"Projects" },
  { href:"#design",   label:"Design"   },
  { href:"#services", label:"Services" },
];

const worldLinks = [
  { href:"/tech",     label:"Tech"     },
  { href:"/design",   label:"Design"   },
  { href:"/writing",  label:"Blog"     },
  { href:"/ministry", label:"Ministry" },
  { href:"/about",    label:"About"    },
];

function LogoImg() {
  const { theme } = useTheme();
  const src = theme === "dark" ? "/jaa-logo-white.png" : "/jaa-logo-dark.png";
  return (
    <Image src={src} alt="JAA — John Ayomide Akinola" width={64} height={30}
      style={{ objectFit:"contain", height:30, width:"auto" }} priority/>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState("");
  const pathname  = usePathname();
  const router    = useRouter();
  const isTech    = pathname === "/tech";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (!isTech) return;
      const ids = ["about","skills","projects","design","services","contact"];
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isTech]);

  const handleTechNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#","");
    if (isTech) {
      document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });
    } else {
      router.push(`/tech${href}`);
    }
    setOpen(false);
  };

  const links    = isTech ? techLinks : worldLinks;
  const isTechHref = (href: string) => href.startsWith("#");

  return (
    <>
      <style>{`
        .nav-desktop{display:flex}
        .nav-mobile{display:none}
        @media(max-width:767px){
          .nav-desktop{display:none!important}
          .nav-mobile{display:flex!important}
        }
        html.dark .jaa-nav{background:${scrolled?"rgba(5,10,18,0.95)":"rgba(5,10,18,0.78)"}!important;}
      `}</style>

      <motion.nav className="jaa-nav"
        initial={{ y:-80, opacity:0 }} animate={{ y:0, opacity:1 }}
        transition={{ duration:0.55, ease:"easeOut" }}
        style={{
          position:"fixed", top:0, left:0, right:0, zIndex:50,
          padding:"0 5%", height:68,
          display:"flex", alignItems:"center", justifyContent:"space-between",
          background:scrolled?"rgba(245,247,255,0.94)":"rgba(245,247,255,0.76)",
          backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)",
          borderBottom:scrolled?"1px solid var(--border)":"1px solid transparent",
          boxShadow:scrolled?"var(--shadow-sm)":"none",
          transition:"background 0.3s, border-color 0.3s, box-shadow 0.3s",
        }}>

        {/* Logo → always home */}
        <Link href="/" style={{ textDecoration:"none", display:"flex", alignItems:"center", cursor:"pointer", padding:"8px 4px", position:"relative", zIndex:10 }}>
          <span style={{ pointerEvents:"none", display:"flex", alignItems:"center" }}>
            <LogoImg/>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="nav-desktop" style={{ gap:"0.2rem", listStyle:"none", alignItems:"center", margin:0, padding:0 }}>
          {links.map((l)=>{
            const isActive = isTech ? active===l.href.slice(1) : pathname===l.href;
            return (
              <li key={l.href}>
                {isTechHref(l.href) ? (
                  <a href={l.href} onClick={(e)=>handleTechNav(e,l.href)}
                    style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.72rem", letterSpacing:"0.08em", textTransform:"uppercase", textDecoration:"none", padding:"0.4rem 0.85rem", borderRadius:"6px", color:isActive?"var(--cyan)":"var(--text2)", background:isActive?"var(--cyan-dim)":"transparent", fontWeight:isActive?600:400, transition:"all 0.2s", display:"inline-block" }}
                    onMouseEnter={e=>{if(!isActive){(e.currentTarget as HTMLElement).style.color="var(--cyan)";(e.currentTarget as HTMLElement).style.background="var(--cyan-dim)";}}}
                    onMouseLeave={e=>{if(!isActive){(e.currentTarget as HTMLElement).style.color="var(--text2)";(e.currentTarget as HTMLElement).style.background="transparent";}}}>
                    {l.label}
                  </a>
                ):(
                  <Link href={l.href}
                    style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.72rem", letterSpacing:"0.08em", textTransform:"uppercase", textDecoration:"none", padding:"0.4rem 0.85rem", borderRadius:"6px", color:isActive?"var(--cyan)":"var(--text2)", background:isActive?"var(--cyan-dim)":"transparent", fontWeight:isActive?600:400, transition:"all 0.2s", display:"inline-block" }}
                    onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.color="var(--cyan)";(e.currentTarget as HTMLElement).style.background="var(--cyan-dim)";}}
                    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.color=isActive?"var(--cyan)":"var(--text2)";(e.currentTarget as HTMLElement).style.background=isActive?"var(--cyan-dim)":"transparent";}}>
                    {l.label}
                  </Link>
                )}
              </li>
            );
          })}
          {isTech && (
            <li style={{ marginLeft:"0.75rem" }}>
              <a href="#contact" onClick={(e)=>handleTechNav(e,"#contact")}
                style={{ fontFamily:"'Syne',sans-serif", fontSize:"0.82rem", fontWeight:700, textDecoration:"none", padding:"0.5rem 1.3rem", background:"var(--cyan)", color:"#fff", borderRadius:"8px", boxShadow:"var(--shadow-cyan)", transition:"all 0.2s", display:"inline-block" }}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.opacity="0.88";(e.currentTarget as HTMLElement).style.transform="translateY(-1px)";}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.opacity="1";(e.currentTarget as HTMLElement).style.transform="translateY(0)";}}>
                Hire Me
              </a>
            </li>
          )}
          {!isTech && (
            <li style={{ marginLeft:"0.5rem" }}>
              <Link href="/"
                style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.65rem", color:"var(--text3)", textDecoration:"none", padding:"0.35rem 0.8rem", border:"1px solid var(--border)", borderRadius:"6px", background:"var(--surface)", letterSpacing:"0.06em", transition:"all 0.2s", display:"inline-block" }}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.color="var(--cyan)";(e.currentTarget as HTMLElement).style.borderColor="var(--cyan)";}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.color="var(--text3)";(e.currentTarget as HTMLElement).style.borderColor="var(--border)";}}>
                ⌂ Home
              </Link>
            </li>
          )}
          <li style={{ marginLeft:"0.4rem" }}><ThemeToggle/></li>
        </ul>

        {/* Mobile */}
        <div className="nav-mobile" style={{ alignItems:"center", gap:"0.5rem" }}>
          <ThemeToggle/>
          <button onClick={()=>setOpen(!open)} style={{ background:"var(--surface)", border:"1px solid var(--border)", color:"var(--text)", cursor:"pointer", padding:"7px", borderRadius:"8px", display:"flex", boxShadow:"var(--shadow-sm)" }}>
            {open?<X size={20}/>:<Menu size={20}/>}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open&&(
          <motion.div initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-10 }} transition={{ duration:0.2 }}
            style={{ position:"fixed", top:68, left:0, right:0, zIndex:40, display:"flex", flexDirection:"column", gap:"0.3rem", padding:"1rem 5%", background:"var(--bg)", borderBottom:"1px solid var(--border)", boxShadow:"var(--shadow-md)" }}>
            <Link href="/" onClick={()=>setOpen(false)} style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.75rem", letterSpacing:"0.08em", textTransform:"uppercase", color:"var(--cyan)", textDecoration:"none", padding:"0.5rem 0.9rem", borderRadius:"8px" }}>⌂ All Worlds</Link>
            {links.map((l)=>(
              isTechHref(l.href)?(
                <a key={l.href} href={l.href} onClick={(e)=>handleTechNav(e,l.href)}
                  style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.8rem", letterSpacing:"0.08em", textTransform:"uppercase", color:"var(--text2)", textDecoration:"none", padding:"0.7rem 0.9rem", borderRadius:"8px", transition:"all 0.2s" }}>
                  {l.label}
                </a>
              ):(
                <Link key={l.href} href={l.href} onClick={()=>setOpen(false)}
                  style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.8rem", letterSpacing:"0.08em", textTransform:"uppercase", color:"var(--text2)", textDecoration:"none", padding:"0.7rem 0.9rem", borderRadius:"8px", transition:"all 0.2s" }}>
                  {l.label}
                </Link>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
