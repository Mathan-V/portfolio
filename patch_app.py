import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

# Add useEffect import
content = content.replace("import React, { useState } from 'react';", "import React, { useState, useEffect } from 'react';")

# Add theme state
theme_state = """  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);"""

content = content.replace("  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);", theme_state)

# Add props to Navbar
content = content.replace("<Navbar onOpenResume={handleOpenResume} />", "<Navbar onOpenResume={handleOpenResume} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />")

# Update App.tsx root classes
content = content.replace('className="min-h-screen bg-[#0A0A0B]', 'className="min-h-screen bg-slate-50 dark:bg-[#0A0A0B]')
content = content.replace('selection:text-slate-900 dark:text-white', 'selection:text-white dark:selection:text-slate-900')

with open('src/App.tsx', 'w') as f:
    f.write(content)
