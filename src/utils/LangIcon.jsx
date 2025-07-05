import React from 'react';

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/\+/g, 'plus')
    .replace(/#/g, 'sharp')
    .replace(/\s+/g, '')
    .replace(/\./g, '');

const LangIcon = ({ name, size = 88 }) => {
  const aliasMap = {
    html: 'html5',
    css: 'css3',
    'objective-c': 'objectivec',
    'c#': 'csharp',
    'c++': 'cplusplus',
  };
  const raw = slugify(name || '');
  const slug = aliasMap[raw] || raw;
  const src = name ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-plain.svg` : '';
  const [err, setErr] = React.useState(false);
  if (!name) return <span className="text-6xl">🗂️</span>;
  return (
    err ? (
      <span className="text-6xl">🗂️</span>
    ) : (
      <img
        src={src}
        alt={name}
        width={size}
        height={size}
        onError={() => setErr(true)}
      />
    )
  );
};

export default LangIcon;  