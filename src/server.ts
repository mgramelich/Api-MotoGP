import { createApp } from './app';

console.clear();

const port = process.env.PORT || 3000;
const app = createApp();

app.listen(port, () => {
  console.log(`\nServer is running on http://localhost:${port} - (${Date.now()})\n`);
});