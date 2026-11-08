"use client";

import { useState } from "react";
import { Activity, CheckCircle2, Cloud, ScanFace, Sparkles, SwatchBook, Waypoints } from "lucide-react";

const SIMULATOR_PROFILES = [
  {
    id: "color",
    code: "S_COR · 35%",
    label: "Harmonia Cromática (CIE L*a*b*)",
    icon: SwatchBook,
    description:
      "Calcula a distância euclidiana perceptual ΔE*ab nos eixos L* (luminosidade), a* (verde-vermelho) e b* (azul-amarelo) contra as 12 cartelas sazonais expandidas, imune às distorções de iluminação do RGB.",
    equation: "S_cor = exp( -ΔE*ab / 18.0 )  onde  ΔE*ab = √[(ΔL*)² + (Δa*)² + (Δb*)²]",
    metrics: [
      { label: "Peso na Equação", value: "w_c = 0.35 (35%)" },
      { label: "Espaço Colorimétrico", value: "CIE 1976 L*a*b*" },
      { label: "Fator de Decaimento", value: "σ_c = 18.0" },
    ],
    normalLogs: [
      "GET /v1/ihe/chromatic-distance · Peça #042 (Oliva Escuro L*38 a*-9 b*19)",
      "Cartela ativa do usuário: Outono Escuro · ΔE*ab = 4.12 (Alta afinidade)",
      "Score normalizado S_cor = 0.942 · Aprovado na ponderação cromática",
    ],
    parityLogs: [
      "SCAN ARARA · Peça em Loja (Azul Royal L*32 a*18 b*-54) vs. Cartela Outono",
      "Desvio perceptual ΔE*ab = 28.4 (Conflito de subtom frio vs. quente)",
      "Sugestão B2B2C acionada: variante Terracota no estoque parceiro (S_cor = 0.96)",
    ],
  },
  {
    id: "morpho",
    code: "S_BIO · 25%",
    label: "Compensação Morfológica",
    icon: ScanFace,
    description:
      "Avalia matematicamente se as linhas estruturais, recortes, caimentos e comprimentos da peça equilibram proporcionalmente um dos 5 biótipos corporais mapeados no onboarding.",
    equation: "S_bio = M_biotipos[b_usuario, c_modelagem, p_proporcao] ∈ [0, 1]",
    metrics: [
      { label: "Peso na Equação", value: "w_m = 0.25 (25%)" },
      { label: "Matriz de Silhuetas", value: "5 Biótipos Corporais" },
      { label: "Regra Áurea", value: "Proporção 1 : 1.618" },
    ],
    normalLogs: [
      "PERFIL MORFOLÓGICO · Biótipo: Triângulo Invertido · Objetivo: Equilíbrio Inferior",
      "Análise estrutural: Calça Alfaiataria Reta + Sobreposição estruturada",
      "Score morfológico S_bio = 0.895 · Compensação de ombros validada",
    ],
    parityLogs: [
      "PROVADOR AR · Sobreposição gráfica em tempo real (Espelho Inteligente)",
      "Alinhamento de cintura e volume inferior: +18% de harmonia visual",
      "Validação no provador: Peça compatível com 9 partes de baixo do armário",
    ],
  },
  {
    id: "context",
    code: "S_OCASION · 20%",
    label: "Contexto & Telemetria Climática",
    icon: Cloud,
    description:
      "Cruza o grau de formalidade intrínseco de cada peça e o isolamento térmico do tecido com a previsão meteorológica local em tempo real e a ocasião informada pelo usuário.",
    equation: "S_ocasion = f_formalidade(evento) × f_termica(T_local, chuva_prob)",
    metrics: [
      { label: "Peso na Equação", value: "w_o = 0.20 (20%)" },
      { label: "Telemetria Externa", value: "Clima & Geolocalização" },
      { label: "Filtro Térmico", value: "Gramatura & Tecido" },
    ],
    normalLogs: [
      "TELEMETRIA CLIMÁTICA · São Paulo: 22°C · Umidade 64% · Sem chuva",
      "Ocasião selecionada: Reunião Executiva / Casual Elegante",
      "Score contextual S_ocasion = 0.950 · Linho + Algodão respirável priorizados",
    ],
    parityLogs: [
      "SIMULAÇÃO DE VERSATILIDADE · Uso projetado nas 4 estações",
      "Peça em análise viabiliza looks para 3 ocasiões (Trabalho, Casual, Jantar)",
      "Custo por Uso (CPU) projetado cai 42% nos primeiros 60 dias",
    ],
  },
  {
    id: "vector",
    code: "S_COS · 20%",
    label: "Similaridade Vetorial (pgvector)",
    icon: Waypoints,
    description:
      "Calculada diretamente no motor PostgreSQL via extensão pgvector, mede o cosseno do ângulo entre o vetor latente de estilo do usuário e o embedding multidimensional da combinação.",
    equation: "S_cos = (u · v_look) / ( ||u|| · ||v_look|| )  via PostgreSQL pgvector",
    metrics: [
      { label: "Peso na Equação", value: "w_v = 0.20 (20%)" },
      { label: "Motor Vetorial", value: "PostgreSQL + pgvector" },
      { label: "Limiar de Match", value: "IHE ≥ 75% (Recomendado)" },
    ],
    normalLogs: [
      "PGVECTOR INDEX · Consulta de vizinhos mais próximos (HNSW Cosine Distance)",
      "Vetor de preferências u atualizado com 48 interações positivas",
      "Similaridade S_cos = 0.914 · IHE Global Consolidado = 92.4% (Match Forte)",
    ],
    parityLogs: [
      "PARIDADE PDV · Varredura vetorial contra 42 peças do acervo doméstico",
      "Encontradas 11 combinações com IHE ≥ 82% no guarda-roupa atual",
      "Decisão de compra validada: Risco de peça ociosa ou devolução < 4%",
    ],
  },
];

export function IheExecutiveSimulator() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [inStoreMode, setInStoreMode] = useState(false);

  const current = SIMULATOR_PROFILES[activeIdx] || SIMULATOR_PROFILES[0];
  const logs = inStoreMode ? current.parityLogs : current.normalLogs;
  const ActiveIcon = current.icon;

  return (
    <div
      className="mt-10 border border-[rgba(194,160,90,0.55)] bg-[rgba(10,14,24,0.72)] p-5 sm:p-8 backdrop-blur-md"
      aria-label="Simulador executivo do Motor Algorítmico IHE"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--gilt)]">
            INSPEÇÃO INTERATIVA DO ALGORITMO PROPRIETÁRIO · MOTOR IHE
          </span>
          <h3 className="mt-1 font-(family-name:--serif) text-[24px] sm:text-[30px] font-medium leading-tight text-[var(--paper)]">
            IHE = 0.35·S_cor + 0.25·S_bio + 0.20·S_ocasion + 0.20·S_cos
          </h3>
        </div>
        <span className="inline-flex items-center gap-1.5 border border-[var(--gilt)]/45 bg-[var(--gilt)]/10 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--gilt)]">
          <CheckCircle2 size={13} aria-hidden="true" /> Limiar de Recomendação: IHE ≥ 75%
        </span>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
        {/* Left Column: Dimension Selector Pills + Equation & Metrics */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Dimensões da equação IHE">
            {SIMULATOR_PROFILES.map((item, idx) => {
              const isSelected = idx === activeIdx;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveIdx(idx)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[var(--gilt)] text-[#121a2b] font-bold shadow-[0_0_18px_-3px_rgba(194,160,90,0.65)]"
                      : "border border-white/15 bg-white/[0.04] text-[#d2d3cb] hover:border-[var(--gilt)]/50 hover:text-white"
                  }`}
                >
                  <Icon size={14} aria-hidden="true" />
                  <span>{item.code}</span>
                </button>
              );
            })}
          </div>

          <div className="border border-white/12 bg-black/40 p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[10.5px] uppercase tracking-wider text-[var(--gilt)]">
                {current.code} · DIMENSÃO ATIVA
              </span>
              <ActiveIcon size={17} className="text-[var(--gilt)]" aria-hidden="true" />
            </div>

            <h4 className="m-0 font-(family-name:--serif) text-[24px] sm:text-[28px] font-medium text-white">
              {current.label}
            </h4>

            <p className="m-0 text-xs sm:text-[13px] leading-relaxed text-[#c5c2b6]">
              {current.description}
            </p>

            <code className="block overflow-x-auto border-l-2 border-[var(--gilt)] bg-[#090d16] px-3.5 py-2.5 font-mono text-[11px] sm:text-xs text-[#f5ebd2]">
              {current.equation}
            </code>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-4">
              {current.metrics.map((m) => (
                <div key={m.label}>
                  <span className="block font-mono text-[10px] uppercase text-white/45">
                    {m.label}
                  </span>
                  <strong className="mt-0.5 block font-(family-name:--serif) text-[18px] font-medium text-[var(--gilt)]">
                    {m.value}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Da Vinci Schematic & Live Telemetry Stream (adapted from @site FlagshipSection) */}
        <div className="lg:col-span-5 flex flex-col justify-between border border-white/12 bg-black/50 p-5 sm:p-6 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-medium text-white/75">
              <Activity size={14} className="text-[var(--gilt)]" aria-hidden="true" />
              TELEMETRIA DO MOTOR IHE
            </span>
            <div className="flex items-center gap-1 border border-white/15 bg-white/[0.04] p-0.5">
              <button
                type="button"
                onClick={() => setInStoreMode(false)}
                className={`px-2.5 py-1 text-[10px] font-mono uppercase transition-colors cursor-pointer ${
                  !inStoreMode
                    ? "bg-[var(--paper)] text-[#121a2b] font-bold"
                    : "text-white/55 hover:text-white"
                }`}
              >
                Acervo em Casa
              </button>
              <button
                type="button"
                onClick={() => setInStoreMode(true)}
                className={`px-2.5 py-1 text-[10px] font-mono uppercase transition-colors cursor-pointer ${
                  inStoreMode
                    ? "bg-[var(--gilt)] text-[#121a2b] font-bold"
                    : "text-white/55 hover:text-white"
                }`}
              >
                Provador / Loja
              </button>
            </div>
          </div>

          {/* Minimalist Architectural Proportions Diagram */}
          <div className="relative flex h-44 items-center justify-center border-y border-white/10">
            <svg
              viewBox="0 0 320 180"
              className="h-full w-full text-[#e9dfc8]"
              fill="none"
              aria-hidden="true"
            >
              <line
                x1="0"
                y1="90"
                x2="320"
                y2="90"
                stroke="currentColor"
                strokeOpacity="0.14"
                strokeWidth="1"
              />
              <line
                x1="160"
                y1="0"
                x2="160"
                y2="180"
                stroke="currentColor"
                strokeOpacity="0.14"
                strokeWidth="1"
              />
              <rect
                x="70"
                y="25"
                width="180"
                height="130"
                stroke="currentColor"
                strokeOpacity="0.18"
                strokeWidth="0.75"
              />
              <circle
                cx="160"
                cy="90"
                r={inStoreMode ? "76" : "62"}
                stroke="#c2a05a"
                strokeOpacity={inStoreMode ? "0.7" : "0.3"}
                strokeWidth="1"
                strokeDasharray="3 3"
                className="transition-all duration-500"
              />
              <circle
                cx="160"
                cy="90"
                r={40 + activeIdx * 4}
                stroke="#c2a05a"
                strokeOpacity="0.55"
                strokeWidth="1"
                className="transition-all duration-500"
              />
              <circle
                cx="160"
                cy="90"
                r="20"
                stroke="currentColor"
                strokeOpacity="0.85"
                strokeWidth="1.25"
              />
              <circle cx="160" cy="90" r="4" fill="#c2a05a" />
            </svg>
            <div className="absolute bottom-2 left-0 right-0 flex justify-between px-2 font-mono text-[10px] text-white/45">
              <span>{current.code}</span>
              <span className="text-[var(--gilt)]">
                {inStoreMode ? "MODO PARIDADE PDV / AR" : "MODO RECOMENDAÇÃO DIÁRIA"}
              </span>
            </div>
          </div>

          {/* Telemetry Log Stream */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-[var(--gilt)]">
              <span className="inline-flex items-center gap-1">
                <Sparkles size={11} aria-hidden="true" /> Pipeline Determinístico em Execução
              </span>
              <span>SLA ≤ 3,5s</span>
            </div>
            <div className="space-y-1.5 pt-1">
              {logs.map((line, i) => (
                <p
                  key={i}
                  className="m-0 border-l border-white/15 pl-2.5 font-mono text-[10.5px] leading-relaxed text-[#c5c2b6]"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
