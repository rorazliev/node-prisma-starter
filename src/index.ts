import app from './app';

const port = process.env.PORT || 3000;
// Start the server
app.listen(Number(port), () => {
  console.log(`Listening: http://localhost:${port}`);
});
