1. Run `npm install`
2. Run `npx tsc --build -f --diagnostics`, notice compile takes > 10 seconds
3. Comment out line 4 in test.tsx
4. Run `npx tsc --build -f --diagnostics` again, notice compile is very fast
