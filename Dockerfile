FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps


WORKDIR /app


# Copy all files for local dependencies
# ⚠️ IGNORE_CACHE
COPY yarn*.lock package*.json pnpm-lock*.yaml .yarnrc*.yml ./
RUN corepack enable
RUN yarn set version stable
RUN yarn install

RUN \
  if [ -f yarn.lock ]; then yarn --immutable; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn dlx add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules

COPY ./ ./

RUN npm run build


# Production image, copy all the files and run next
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public /app/public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/out ./

USER nextjs

EXPOSE 80

ENV PORT 80

WORKDIR /app
# Next.js is hiding running env vars in the newest version
# It works if copied to a env file
#RUN echo "#!/bin/ash" > load-environment.sh
#RUN echo "env > .env.local" >> load-environment.sh
#RUN echo "exec \"\$@\"" >> load-environment.sh
#RUN chmod +x load-environment.sh
#ENTRYPOINT ["./load-environment.sh"]
#CMD
ENTRYPOINT ["node", "server.js"]
