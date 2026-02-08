import React, { useState } from 'react';
import './DecisionCard.css';

/**
 * DecisionCard - Componente de Cartão de Decisão para o Agent Inbox.
 *
 * Exibe alertas, métricas e ações sugeridas para gestores bancários,
 * organizados por pilar estratégico (Produção, Resultados, Clientes, Pessoas, Risco).
 *
 * @param {Object} props
 * @param {string} props.pilar - Pilar estratégico do cartão
 * @param {string} props.titulo - Título do alerta/decisão
 * @param {string} props.alerta - Descrição detalhada do insight detectado
 * @param {Array}  props.metricas - Lista de métricas relevantes
 * @param {Array}  props.acoesSugeridas - Lista de ações recomendadas
 * @param {string} props.prioridade - Nível de prioridade (alta | media | baixa)
 * @param {string} props.dataGeracao - Data em que o insight foi gerado
 */
function DecisionCard({
  pilar,
  titulo,
  alerta,
  metricas,
  acoesSugeridas,
  prioridade,
  dataGeracao,
}) {
  // Estado para controlar quais ações foram marcadas como concluídas
  const [acoesMarcadas, setAcoesMarcadas] = useState(
    new Array(acoesSugeridas.length).fill(false)
  );

  // Normaliza o nome do pilar para uso como classe CSS (sem acentos, minúsculo)
  const pilarNormalizado = pilar
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  // Alterna o estado de uma ação específica (marcada/desmarcada)
  const toggleAcao = (index) => {
    setAcoesMarcadas((prev) => {
      const novoEstado = [...prev];
      novoEstado[index] = !novoEstado[index];
      return novoEstado;
    });
  };

  /**
   * Renderiza o indicador de variação de uma métrica.
   * Positivo: seta para cima (verde) | Negativo: seta para baixo (vermelho) | Zero: neutro
   */
  const renderVariacao = (variacao) => {
    if (variacao > 0) {
      return (
        <span className="decision-card__metrica-variacao decision-card__metrica-variacao--positiva">
          ↑ +{variacao}%
        </span>
      );
    } else if (variacao < 0) {
      return (
        <span className="decision-card__metrica-variacao decision-card__metrica-variacao--negativa">
          ↓ {variacao}%
        </span>
      );
    }
    return (
      <span className="decision-card__metrica-variacao decision-card__metrica-variacao--neutra">
        — 0%
      </span>
    );
  };

  // Mapeamento dos rótulos de prioridade para exibição
  const labelPrioridade = {
    alta: 'Alta',
    media: 'Média',
    baixa: 'Baixa',
  };

  return (
    <div className={`decision-card decision-card--${pilarNormalizado}`}>
      {/* ---- Cabeçalho: título + badge de prioridade ---- */}
      <div className="decision-card__header">
        <h3 className="decision-card__titulo">{titulo}</h3>
        <span
          className={`decision-card__prioridade decision-card__prioridade--${prioridade}`}
        >
          {labelPrioridade[prioridade] || prioridade}
        </span>
      </div>

      {/* ---- Descrição do alerta / insight ---- */}
      <div className="decision-card__alerta">
        <span className="decision-card__alerta-icone">⚠️</span>
        {alerta}
      </div>

      {/* ---- Grid de métricas (2 colunas) ---- */}
      <div className="decision-card__metricas">
        {metricas.map((metrica, index) => (
          <div className="decision-card__metrica" key={index}>
            <div className="decision-card__metrica-nome">{metrica.nome}</div>
            <div className="decision-card__metrica-valor">
              {metrica.valor}
              {metrica.unidade && (
                <span style={{ fontSize: '12px', fontWeight: 400, marginLeft: '2px' }}>
                  {metrica.unidade}
                </span>
              )}
            </div>
            {renderVariacao(metrica.variacao)}
          </div>
        ))}
      </div>

      {/* ---- Lista de ações sugeridas com checkboxes ---- */}
      <div className="decision-card__acoes">
        <div className="decision-card__acoes-titulo">Ações Sugeridas</div>
        {acoesSugeridas.map((acao, index) => (
          <div className="decision-card__acao-item" key={index}>
            <input
              type="checkbox"
              className="decision-card__checkbox"
              checked={acoesMarcadas[index]}
              onChange={() => toggleAcao(index)}
              id={`acao-${pilarNormalizado}-${index}`}
            />
            <label
              className={`decision-card__acao-texto ${
                acoesMarcadas[index] ? 'decision-card__acao-texto--checked' : ''
              }`}
              htmlFor={`acao-${pilarNormalizado}-${index}`}
            >
              {acao}
            </label>
          </div>
        ))}
      </div>

      {/* ---- Rodapé: data de geração + pilar ---- */}
      <div className="decision-card__footer">
        <span className="decision-card__data">Gerado em: {dataGeracao}</span>
        <span className="decision-card__pilar-badge">{pilar}</span>
      </div>
    </div>
  );
}

export default DecisionCard;
