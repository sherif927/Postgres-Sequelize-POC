import app from './app';

function main() {
  let port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Application is running on PORT ${port}`))
}

main();
