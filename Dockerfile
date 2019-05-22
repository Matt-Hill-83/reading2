FROM ubuntu AS builder
WORKDIR /app
COPY . .
RUN yarn run build

FROM ubuntu
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]
