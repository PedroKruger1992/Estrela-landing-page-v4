# Estrela Terraplenagem

Site institucional para uma empresa real de terraplenagem de Londrina/PR.
Feito para gerar orçamentos pelo WhatsApp.

🔗 **Ao vivo:** https://estrelaterraplenagem.com

![Prévia do site](docs/preview.png)

## O que o site tem
- Layout responsivo (celular e computador)
- Seções: serviços, antes e depois, orçamento, sobre a empresa
- Botão flutuante de WhatsApp
- SEO: título e descrição, canonical, sitemap, robots, dados estruturados (JSON-LD)
- Perfil da empresa no Google e indexação no Search Console

## Resultados (Lighthouse, mobile)
| Performance | Acessibilidade | Boas práticas | SEO |
| 99 | 95 | 100 | 100 |
## Resultados (Lighthouse, desktop)
| Performance | Acessibilidade | Boas práticas | SEO 

## Tecnologias
React · Vite · Tailwind CSS v4 · JavaScript · Hostinger (deploy automático pelo GitHub)

## Como rodar
```bash
npm install
npm run dev
```

## Desafios e o que aprendi
- **Contraste de cores:** o Lighthouse apontou texto difícil de ler. Criei uma cor de ação com contraste mínimo de 4,5:1.
- **Indexação:** configurei sitemap, robots e Search Console para o Google encontrar o site.
- **Publicação:** domínio próprio, SSL e deploy automático a cada push.
- **Cliente real:** ajustar o texto e os contatos conforme o que o cliente precisa, não só o que é bonito.
- Usei IA como assistente e revisei o código que entrou no projeto.

## Próximos passos
- Banner de cookies e política de privacidade
- Otimização de imagens (WebP)

## Contato
Pedro Kruger · [LinkedIn] · pedrofakruger@gmail.com