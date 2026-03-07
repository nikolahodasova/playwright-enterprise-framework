FROM mcr.microsoft.com/playwright:v1.42.1-jammy

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npx playwright install --with-deps

CMD ["npx", "playwright", "test"]