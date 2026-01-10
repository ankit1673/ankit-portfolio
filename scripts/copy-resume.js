#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const src = process.argv[2];
if (!src) {
  console.error('Usage: node scripts/copy-resume.js <path-to-resume.pdf>');
  process.exit(1);
}

const resolvedSrc = path.resolve(src);
const dest = path.resolve(__dirname, '..', 'public', 'resume.pdf');

try {
  if (!fs.existsSync(resolvedSrc)) {
    console.error('Source file not found:', resolvedSrc);
    process.exit(2);
  }
  if (!resolvedSrc.toLowerCase().endsWith('.pdf')) {
    console.error('Source file does not appear to be a PDF:', resolvedSrc);
    process.exit(3);
  }

  fs.copyFileSync(resolvedSrc, dest);
  console.log('✅ Resume copied to', dest);
} catch (err) {
  console.error('Error copying resume:', err.message);
  process.exit(4);
}