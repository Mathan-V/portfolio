import os
import re

files = [os.path.join(dp, f) for dp, dn, filenames in os.walk('src/components') for f in filenames if f.endswith('.tsx')]

for file in files:
    with open(file, 'r') as f:
        content = f.read()

    # Fix buttons: if text-slate-900 dark:text-white is near bg-blue-600 or bg-blue-500, we should just use text-white
    # But wait, it's easier to just replace 'text-slate-900 dark:text-white' with 'text-white' if they are on blue buttons.
    # Actually, let's just globally replace 'text-slate-900 dark:text-white' back to 'text-white' if it's on a dark background
    # Let's write a smarter regex or just do it by finding common patterns:
    content = content.replace("bg-blue-600 text-slate-900 dark:text-white", "bg-blue-600 text-white")
    content = content.replace("bg-blue-600/20 text-slate-900 dark:text-white", "bg-blue-600/20 text-blue-700 dark:text-white")
    content = content.replace("bg-blue-500 text-slate-900 dark:text-white", "bg-blue-500 text-white")
    content = content.replace("bg-blue-600 hover:bg-blue-500 text-slate-900 dark:text-white", "bg-blue-600 hover:bg-blue-500 text-white")
    
    # Let's fix specific files:
    if "Hero.tsx" in file:
        # Code block syntax colors:
        content = content.replace("text-blue-300", "text-blue-700 dark:text-blue-300")
        content = content.replace("text-purple-400", "text-purple-700 dark:text-purple-400")
        content = content.replace("text-yellow-300", "text-yellow-700 dark:text-yellow-300")
        content = content.replace("text-emerald-300", "text-emerald-700 dark:text-emerald-300")
        content = content.replace("text-emerald-400", "text-emerald-700 dark:text-emerald-400")
        content = content.replace("text-amber-300", "text-amber-700 dark:text-amber-300")
        content = content.replace("text-white dark:text-slate-900", "text-slate-900 dark:text-white")
        # api.py tab text
        content = content.replace("text-slate-900 dark:text-white bg-blue-500/20", "text-blue-700 dark:text-white bg-blue-500/20")
        
        # View My Work button might be: "text-slate-900 dark:text-white bg-white dark:bg-black hover:bg-slate-100"
        # Wait, View my work is bg-white? If it's bg-white, text-slate-900 is fine.
        
    if "ProjectDetailModal.tsx" in file:
        content = content.replace("bg-[#0E0E12]", "bg-white dark:bg-[#0E0E12]")
        
    if "Projects.tsx" in file:
        # KJ Reporting System card has dark bg?
        # Maybe bg-[#09090D]?
        content = content.replace("bg-[#09090D]", "bg-white dark:bg-[#09090D]")
        content = content.replace("bg-[#0A0A0B]", "bg-white dark:bg-[#0A0A0B]")
        # View Architecture button
        content = content.replace("bg-white dark:bg-[#0A0A0B]/80", "bg-slate-100 dark:bg-[#0A0A0B]/80")
        
    if "Experience.tsx" in file:
        # Milestones Background: a dark gradient? "from-slate-900 dark:from-white" -> wait, inverting from-white made it from-slate-900!
        # Ah, "from-white/5" became "from-slate-900/5 dark:from-white/5"
        # But maybe there's a "from-black/40"? The script inverted "bg-black/40" to "bg-slate-100/40 dark:bg-black/40".
        pass

    with open(file, 'w') as f:
        f.write(content)

