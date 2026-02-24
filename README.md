# portfolio

Personal site at [www.aashraymehta.com](https://www.aashraymehta.com). Built with Astro and Tailwind CSS. Statically generated — served by Nginx in production with no Node runtime.

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:4321`.

## Local Docker

```bash
docker compose up --build
```

## Adding a project

Edit `src/data/projects.ts` and add an entry:

```typescript
{
  name: 'My New Project',
  description: 'What it does.',
  url: 'https://project.aashraymehta.com',
  tags: ['Tech', 'Stack'],
  status: 'live',
}
```

Push to `main` — the site rebuilds and redeploys automatically.

## First-time server setup

```bash
ssh deploy@YOUR_DROPLET_IP

sudo mkdir -p /opt/portfolio
sudo chown deploy:deploy /opt/portfolio
cd /opt/portfolio
git clone https://github.com/aashraymehta/portfolio.git .
docker compose up -d --build
```

The Caddy reverse proxy in the `infra` repo routes `www.aashraymehta.com` to this container.

## Deployment

Automatic on push to `main` via GitHub Actions. The workflow SSHs into the droplet, pulls the latest code, and rebuilds the Docker container.

### GitHub secrets required

| Secret           | Value                      |
|------------------|----------------------------|
| `DROPLET_IP`     | Server IP address          |
| `DROPLET_USER`   | `deploy`                   |
| `SSH_PRIVATE_KEY` | Private key for SSH access |
