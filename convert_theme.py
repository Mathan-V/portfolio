import os
import re

files = [os.path.join(dp, f) for dp, dn, filenames in os.walk('src') for f in filenames if f.endswith('.tsx')]

def process_match(m):
    cls = m.group(0)
    # If already has dark:, ignore it
    if 'dark:' in cls:
        return cls
    
    # Text
    if cls == 'text-white': return 'text-slate-900 dark:text-white'
    if cls.startswith('text-white/'): return cls.replace('text-white', 'text-slate-900') + ' dark:' + cls
    if cls == 'text-black': return 'text-white dark:text-black'

    # Background
    if cls == 'bg-black': return 'bg-white dark:bg-black'
    if cls.startswith('bg-black/'): return cls.replace('bg-black', 'bg-slate-100') + ' dark:' + cls
    if cls.startswith('bg-white/'): return cls.replace('bg-white', 'bg-slate-900') + ' dark:' + cls
    if cls.startswith('bg-[#0A0A0B]'): return cls.replace('bg-[#0A0A0B]', 'bg-white') + ' dark:' + cls
    if cls.startswith('bg-[#0A0A0E]'): return cls.replace('bg-[#0A0A0E]', 'bg-slate-50') + ' dark:' + cls
    if cls.startswith('bg-[#0C0C10]'): return cls.replace('bg-[#0C0C10]', 'bg-white') + ' dark:' + cls
    
    # Borders
    if cls == 'border-white': return 'border-slate-200 dark:border-white'
    if cls.startswith('border-white/'): return cls.replace('border-white', 'border-slate-300') + ' dark:' + cls
    if cls == 'border-black': return 'border-slate-200 dark:border-black'

    # Gradients
    if cls == 'from-white': return 'from-slate-900 dark:from-white'
    if cls == 'via-white': return 'via-slate-900 dark:via-white'
    if cls.startswith('via-white/'): return cls.replace('via-white', 'via-slate-900') + ' dark:' + cls
    if cls == 'to-white': return 'to-slate-900 dark:to-white'
    if cls.startswith('to-white/'): return cls.replace('to-white', 'to-slate-900') + ' dark:' + cls

    return cls

for file in files:
    with open(file, 'r') as f:
        content = f.read()

    # Regex to match class names
    new_content = re.sub(r'\b(text-white(?:/[0-9]+)?|text-black|bg-black(?:/[0-9]+)?|bg-white/[0-9]+|bg-\[#[0-9A-Fa-f]+\](?:/[0-9]+)?|border-white(?:/[0-9]+)?|border-black|from-white|via-white(?:/[0-9]+)?|to-white(?:/[0-9]+)?)\b', process_match, content)

    # Some hardcoded ones we might have missed
    new_content = new_content.replace('bg-[#09090D]', 'bg-white dark:bg-[#09090D]')

    with open(file, 'w') as f:
        f.write(new_content)

print("Conversion complete")
