import { createServer } from './createServer';
var port = 3000;
createServer().listen(port, function () {
  console.log('Server running at http://localhost:'.concat(port));
});
