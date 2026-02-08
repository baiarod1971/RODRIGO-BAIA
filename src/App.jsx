import React from 'react';
import DecisionCard from './components/DecisionCard';
import './App.css';

/**
 * App - Componente principal da aplicação Agent Inbox.
 *
 * Renderiza o painel de cartões de decisão com dados de exemplo
 * representando cenários reais de gestão bancária.
 */
function App() {
  // Dados dos cartões de decisão — simulam alertas gerados pelo sistema Agent Inbox
  const cartoes = [
    // ---- CARTÃO 1: Pilar Risco — Inadimplência PF ----
    {
      pilar: 'Risco',
      titulo: 'Aumento de Inadimplência - Pessoa Física',
      alerta:
        'Detectado crescimento de 18% na inadimplência PF nos últimos 30 dias, concentrado em clientes com score 300-500',
      metricas: [
        { nome: 'Taxa Inadimplência', valor: '4.2', unidade: '%', variacao: 18 },
        { nome: 'Volume em Risco', valor: 'R$ 2.3M', unidade: '', variacao: 22 },
        { nome: 'Clientes Afetados', valor: '1.247', unidade: '', variacao: 15 },
      ],
      acoesSugeridas: [
        'Acionar régua de cobrança antecipada para clientes score < 450',
        'Revisar política de crédito para novos contratos PF',
        'Agendar reunião com gerentes de relacionamento zona sul',
      ],
      prioridade: 'alta',
      dataGeracao: '08/02/2026 — 09:15',
    },

    // ---- CARTÃO 2: Pilar Clientes — Queda de Satisfação ----
    {
      pilar: 'Clientes',
      titulo: 'Queda de Satisfação - Carteira 36 (Gerente Roberto)',
      alerta:
        'Score Likert médio caiu de 5 (Muito Satisfeito) para 3 (Neutro) entre clientes que responderam pesquisa de experiência nos últimos 30 dias',
      metricas: [
        { nome: 'Score Likert Atual', valor: '3.0', unidade: '', variacao: -40 },
        { nome: 'Clientes Respondentes', valor: '47', unidade: '', variacao: 12 },
        { nome: 'Taxa de Resposta', valor: '18', unidade: '%', variacao: 3 },
        { nome: 'Risco de Churn', valor: 'Alto', unidade: '', variacao: 65 },
      ],
      acoesSugeridas: [
        'Agendar reunião individual Roberto para entender causas da queda',
        'Realizar pesquisa qualitativa com 10 clientes insatisfeitos da carteira',
        'Analisar reclamações/ouvidoria dos últimos 60 dias',
        'Implementar plano de recuperação com contato proativo',
      ],
      prioridade: 'alta',
      dataGeracao: '08/02/2026 — 08:42',
    },

    // ---- CARTÃO 3: Pilar Produção — Meta Seguros de Vida ----
    {
      pilar: 'Produção',
      titulo: 'Produção Abaixo da Meta - Seguros de Vida',
      alerta:
        'No dia 15 do mês, produção acumulada de R$ 250 em prêmios representa apenas 25% da meta mensal (média: R$ 1.000/mês)',
      metricas: [
        { nome: 'Prêmio Acumulado (MTD)', valor: 'R$ 250', unidade: '', variacao: -75 },
        { nome: 'Meta Mensal', valor: 'R$ 1.000', unidade: '', variacao: 0 },
        { nome: 'Projeção Fim do Mês', valor: 'R$ 500', unidade: '', variacao: -50 },
        { nome: 'Apólices Vendidas', valor: '2', unidade: '', variacao: -60 },
      ],
      acoesSugeridas: [
        'Verificar se gerente está oferecendo seguros em negociações de crédito',
        'Revisar script de abordagem e treinamento em venda consultiva',
        'Analisar conversão de propostas (leads vs. vendas efetivadas)',
        'Comparar performance com outros gerentes da agência',
      ],
      prioridade: 'alta',
      dataGeracao: '08/02/2026 — 10:30',
    },
  ];

  return (
    <div className="app">
      {/* Cabeçalho do sistema */}
      <header className="app__header">
        <div className="app__header-conteudo">
          <h1 className="app__titulo">Agent Inbox</h1>
          <p className="app__subtitulo">
            Painel de Decisões — Insights e ações para gestores bancários
          </p>
        </div>
      </header>

      {/* Área principal com os cartões de decisão */}
      <main className="app__conteudo">
        <div className="app__painel-info">
          <h2 className="app__painel-titulo">Cartões de Decisão Pendentes</h2>
          <span className="app__painel-contador">
            {cartoes.length} alerta{cartoes.length !== 1 ? 's' : ''} ativo
            {cartoes.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Renderiza cada cartão de decisão */}
        <div className="app__grid-cards">
          {cartoes.map((cartao, index) => (
            <DecisionCard
              key={index}
              pilar={cartao.pilar}
              titulo={cartao.titulo}
              alerta={cartao.alerta}
              metricas={cartao.metricas}
              acoesSugeridas={cartao.acoesSugeridas}
              prioridade={cartao.prioridade}
              dataGeracao={cartao.dataGeracao}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
