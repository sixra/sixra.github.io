#!/usr/bin/env node

import { readdirSync, statSync, readFileSync } from 'fs';
import { gzipSync } from 'zlib';
import { join, extname } from 'path';

const DIST_DIR = 'dist';

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
}

function getGzipSize(filePath) {
  const content = readFileSync(filePath);
  return gzipSync(content).length;
}

function analyzeDirectory(dir, stats = { html: [], css: [], js: [], other: [] }) {
  const files = readdirSync(dir);

  for (const file of files) {
    const filePath = join(dir, file);
    const stat = statSync(filePath);

    if (stat.isDirectory()) {
      analyzeDirectory(filePath, stats);
    } else {
      const ext = extname(file);
      const size = stat.size;
      const gzipSize = getGzipSize(filePath);
      const fileInfo = {
        name: filePath.replace(`${DIST_DIR}/`, ''),
        size,
        gzipSize,
      };

      if (ext === '.html') stats.html.push(fileInfo);
      else if (ext === '.css') stats.css.push(fileInfo);
      else if (ext === '.js') stats.js.push(fileInfo);
      else stats.other.push(fileInfo);
    }
  }

  return stats;
}

function printStats() {
  console.log('\n📊 Build Size Analysis\n');
  console.log('═'.repeat(80));

  const stats = analyzeDirectory(DIST_DIR);

  // HTML files
  if (stats.html.length > 0) {
    console.log('\n📄 HTML Files (Top 10 by size):');
    stats.html
      .sort((a, b) => b.gzipSize - a.gzipSize)
      .slice(0, 10)
      .forEach((file) => {
        const status = file.gzipSize > 20480 ? '⚠️' : '✓';
        const compressionRatio = ((1 - file.gzipSize / file.size) * 100).toFixed(0);
        console.log(
          `  ${status} ${file.name.padEnd(40)} ${formatBytes(file.size).padStart(10)} → ${formatBytes(file.gzipSize).padStart(10)} (-${compressionRatio}%)`
        );
      });

    const totalHtml = stats.html.reduce((sum, f) => sum + f.size, 0);
    const totalHtmlGzip = stats.html.reduce((sum, f) => sum + f.gzipSize, 0);
    const htmlCompression = ((1 - totalHtmlGzip / totalHtml) * 100).toFixed(1);
    console.log(
      `  ${'Total:'.padEnd(40)} ${formatBytes(totalHtml).padStart(10)} → ${formatBytes(totalHtmlGzip).padStart(10)} (-${htmlCompression}%)`
    );
  }

  // CSS files
  if (stats.css.length > 0) {
    console.log('\n🎨 CSS Files:');
    stats.css.forEach((file) => {
      const compressionRatio = ((1 - file.gzipSize / file.size) * 100).toFixed(0);
      console.log(
        `  ✓ ${file.name.padEnd(40)} ${formatBytes(file.size).padStart(10)} → ${formatBytes(file.gzipSize).padStart(10)} (-${compressionRatio}%)`
      );
    });

    const totalCss = stats.css.reduce((sum, f) => sum + f.size, 0);
    const totalCssGzip = stats.css.reduce((sum, f) => sum + f.gzipSize, 0);
    const cssCompression = ((1 - totalCssGzip / totalCss) * 100).toFixed(1);
    console.log(
      `  ${'Total:'.padEnd(40)} ${formatBytes(totalCss).padStart(10)} → ${formatBytes(totalCssGzip).padStart(10)} (-${cssCompression}%)`
    );
  }

  // JS files
  if (stats.js.length > 0) {
    console.log('\n⚡ JavaScript Files:');
    stats.js.forEach((file) => {
      const compressionRatio = ((1 - file.gzipSize / file.size) * 100).toFixed(0);
      console.log(
        `  ✓ ${file.name.padEnd(40)} ${formatBytes(file.size).padStart(10)} → ${formatBytes(file.gzipSize).padStart(10)} (-${compressionRatio}%)`
      );
    });

    const totalJs = stats.js.reduce((sum, f) => sum + f.size, 0);
    const totalJsGzip = stats.js.reduce((sum, f) => sum + f.gzipSize, 0);
    const jsCompression = ((1 - totalJsGzip / totalJs) * 100).toFixed(1);
    console.log(
      `  ${'Total:'.padEnd(40)} ${formatBytes(totalJs).padStart(10)} → ${formatBytes(totalJsGzip).padStart(10)} (-${jsCompression}%)`
    );
  }

  // Summary
  console.log('\n' + '═'.repeat(80));
  const allFiles = [...stats.html, ...stats.css, ...stats.js, ...stats.other];
  const totalSize = allFiles.reduce((sum, f) => sum + f.size, 0);
  const totalGzip = allFiles.reduce((sum, f) => sum + f.gzipSize, 0);

  console.log(
    `\n📦 Total Build Size: ${formatBytes(totalSize)} → ${formatBytes(totalGzip)} (gzip)`
  );
  console.log(`📁 Total Files: ${allFiles.length}`);
  console.log(`📉 Overall Compression: ${((1 - totalGzip / totalSize) * 100).toFixed(1)}%`);

  console.log('\n' + '═'.repeat(80) + '\n');
}

printStats();
