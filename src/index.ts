import http from 'http';
import app from './config';

const server = http.createServer(app);

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
