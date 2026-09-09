import os
import re

files = [os.path.join(dp, f) for dp, dn, filenames in os.walk('src') for f in filenames if f.endswith('.tsx')]

colors = set()
for file in files:
    with open(file, 'r') as f:
        content = f.read()
        matches = re.findall(r'\b(?:bg|text|border|shadow|ring|from|via|to)-(?:white|black|blue|emerald|gray|slate|zinc|neutral|stone|red|orange|amber|yellow|lime|green|teal|cyan|sky|indigo|violet|purple|fuchsia|pink|rose)(?:-[0-9]+)?(?:/[0-9]+)?\b', content)
        matches += re.findall(r'\b(?:bg|text|border|shadow|ring)-\[#[0-9a-fA-F]+\](?:/[0-9]+)?\b', content)
        colors.update(matches)

print(sorted(list(colors)))
