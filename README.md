# Agent Inbox — DecisionCard

Sistema de **Cartões de Decisão** para gestores bancários, desenvolvido em React. Cada cartão apresenta alertas inteligentes, métricas relevantes e ações sugeridas organizadas por pilar estratégico.

## Visão geral

O componente `DecisionCard` faz parte do sistema **Agent Inbox**, que centraliza insights e recomendações geradas por agentes de IA para apoiar a tomada de decisão de gestores bancários. Os cartões são categorizados em cinco pilares:

| Pilar | Cor | Descrição |
|-------|-----|-----------|
| Produção | Azul (#2563eb) | Metas de vendas, produção e volumes |
| Resultados | Verde (#16a34a) | Indicadores financeiros e de performance |
| Clientes | Laranja (#f59e0b) | Satisfação, retenção e experiência do cliente |
| Pessoas | Roxo (#8b5cf6) | Equipe, treinamentos e gestão de pessoas |
| Risco | Vermelho (#dc2626) | Inadimplência, compliance e riscos operacionais |

## Instalação

```bash
npm install
```

## Executando o projeto

```bash
npm start
```

O aplicativo será aberto em [http://localhost:3000](http://localhost:3000).

## Estrutura do projeto

```
├── public/
│   └── index.html              # Página HTML principal
├── src/
│   ├── components/
│   │   ├── DecisionCard.jsx    # Componente do cartão de decisão
│   │   └── DecisionCard.css    # Estilos do cartão
│   ├── App.jsx                 # Componente principal com dados de exemplo
│   ├── App.css                 # Estilos globais e layout
│   └── index.js                # Ponto de entrada React
├── package.json
└── README.md
```

## Componente DecisionCard

### Props

| Prop | Tipo | Descrição |
|------|------|-----------|
| `pilar` | `string` | Pilar estratégico: Produção, Resultados, Clientes, Pessoas ou Risco |
| `titulo` | `string` | Título do alerta ou insight |
| `alerta` | `string` | Descrição detalhada do insight detectado |
| `metricas` | `array` | Lista de objetos `{nome, valor, variacao, unidade}` |
| `acoesSugeridas` | `array` | Lista de strings com ações recomendadas |
| `prioridade` | `string` | Nível de prioridade: `alta`, `media` ou `baixa` |
| `dataGeracao` | `string` | Data e hora em que o insight foi gerado |

### Exemplo de uso

```jsx
<DecisionCard
  pilar="Risco"
  titulo="Aumento de Inadimplência - Pessoa Física"
  alerta="Detectado crescimento de 18% na inadimplência PF nos últimos 30 dias"
  metricas={[
    { nome: 'Taxa Inadimplência', valor: '4.2', unidade: '%', variacao: 18 },
    { nome: 'Volume em Risco', valor: 'R$ 2.3M', unidade: '', variacao: 22 },
  ]}
  acoesSugeridas={[
    'Acionar régua de cobrança antecipada para clientes score < 450',
    'Revisar política de crédito para novos contratos PF',
  ]}
  prioridade="alta"
  dataGeracao="08/02/2026 — 09:15"
/>
```

### Como adicionar novos cartões

1. No arquivo `src/App.jsx`, localize o array `cartoes`
2. Adicione um novo objeto seguindo a estrutura existente:

```jsx
{
  pilar: 'Pessoas',          // Pilar desejado
  titulo: 'Título do alerta',
  alerta: 'Descrição do insight...',
  metricas: [
    { nome: 'Métrica', valor: '100', unidade: '%', variacao: -10 },
  ],
  acoesSugeridas: [
    'Ação recomendada 1',
    'Ação recomendada 2',
  ],
  prioridade: 'media',       // alta | media | baixa
  dataGeracao: '08/02/2026 — 14:00',
}
```

3. O novo cartão será renderizado automaticamente no grid.

## Tecnologias

- **React 18** — Biblioteca de UI
- **CSS puro** — Sem dependências de bibliotecas de estilos
- **Fonte Inter** — Tipografia profissional via Google Fonts
