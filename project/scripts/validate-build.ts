import { execSync } from 'child_process';
import { readFileSync } from 'fs';

// Validate package.json
const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));
const requiredFields = ['name', 'version', 'scripts', 'dependencies'];

requiredFields.forEach(field => {
  if (!pkg[field]) {
    throw new Error(`Missing required field in package.json: ${field}`);
  }
});

// Run type checking
console.log('Running type check...');
execSync('tsc --noEmit', { stdio: 'inherit' });

// Run linting
console.log('Running linter...');
execSync('npm run lint', { stdio: 'inherit' });

// Build the project
console.log('Building project...');
execSync('npm run build', { stdio: 'inherit' });

console.log('✅ Build validation complete');