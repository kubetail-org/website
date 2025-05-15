FROM node:22.11.0-alpine3.20 AS builder

WORKDIR /app

# enable pnpm
RUN corepack enable
RUN corepack prepare pnpm@9.14.2 --activate

# fetch dependencies
COPY pnpm-lock.yaml ./
RUN pnpm fetch

# copy code
COPY . .

# build
RUN pnpm install --frozen-lockfile
RUN pnpm build

ENTRYPOINT []
CMD []

# -----------------------------------------------------------------------------

FROM node:22.11.0-alpine3.20

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# run as `nextjs`
RUN addgroup --system --gid 1001 nextjs
RUN adduser --system --uid 1001 nextjs
RUN chown -R nextjs:nextjs /app
USER nextjs:nextjs

# environment
ENV NODE_ENV="production"
ENV NEXT_TELEMETRY_DISABLED="1"
ENV PORT="3000"

EXPOSE 3000

ENTRYPOINT ["node", "server.js"]
CMD []
