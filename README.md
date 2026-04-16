# Node API Service

Lightweight REST API service built with Express.

## Getting Started

```bash
npm install
npm run dev
```

## Endpoints

- `GET /health` - Health check
- `GET /api/items` - List items
- `GET /api/users` - List users
- `POST /api/users` - Create user

## Docker

```bash
docker build -t api-service .
docker run -p 3000:3000 api-service
```

## Testing

```bash
npm test
```

## License

MIT