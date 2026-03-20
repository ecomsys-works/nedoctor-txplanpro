// Поддерживаемый синтаксис

// [br] → всегда
// [br-md] → md+
// [br-md-down] → до md
// [br-md_lg] → между md и lg
// [br-md-only] → только md
// [br-lg_xl] → диапазон
// [br-2xl] → 2xl+
// ...
export function formatHeader(title?: string) {
  if (!title) return null;

  const breakpoints = ["sm", "xs", "md", "lg", "xl", "2xl", "3xl"];

  const getNext = (bp: string) => {
    const i = breakpoints.indexOf(bp);
    return breakpoints[i + 1];
  };

  // добавили [grey] в сплит
  const parts = title.split(/(\[grey\]|\[br[^\]]*\]|\n)/i);

  let isGrey = false;

  return parts.map((part, i) => {
    if (!part) return null;

    // --- GREY TOGGLE
    if (/^\[grey\]$/i.test(part)) {
      isGrey = !isGrey;
      return null;
    }

    // --- NEW LINE
    if (part === "\n") return <br key={i} />;

    const match = part.match(/^\[br(?:-([a-z0-9_-]+))?\]$/i);

    // --- TEXT
    if (!match) {
      return (
        <span key={i} className={isGrey ? "text-[#A0A0A0]" : undefined}>
          {part}
        </span>
      );
    }

    const rule = match[1];

    // [br]
    if (!rule) return <br key={i} />;

    // --- RANGE: [br-md_lg]
    if (rule.includes("_")) {
      const [from, to] = rule.split("_");

      if (!breakpoints.includes(from) || !breakpoints.includes(to)) {
        return null;
      }

      return (
        <br key={i} className={`hidden ${from}:block ${to}:hidden`} />
      );
    }

    // --- DOWN: [br-md-down]
    if (rule.endsWith("down")) {
      const bp = rule.replace("-down", "");

      if (!breakpoints.includes(bp)) return null;

      return (
        <br key={i} className={`block ${bp}:hidden`} />
      );
    }

    // --- ONLY: [br-md-only]
    if (rule.endsWith("only")) {
      const bp = rule.replace("-only", "");
      const next = getNext(bp);

      if (!breakpoints.includes(bp)) return null;

      return (
        <br
          key={i}
          className={`hidden ${bp}:block ${next ? `${next}:hidden` : ""}`}
        />
      );
    }

    // --- UP: [br-md-up]
    if (rule.endsWith("up")) {
      const bp = rule.replace("-up", "");

      if (!breakpoints.includes(bp)) return null;

      return <br key={i} className={`hidden ${bp}:block`} />;
    }

    // --- DEFAULT: [br-md]
    if (breakpoints.includes(rule)) {
      return <br key={i} className={`hidden ${rule}:block`} />;
    }

    return null;
  });
}

export function formatHeaderNo(title?: string) {
  if (!title) return null;
  const parts = title.split(/\[br\]|\n/);
  return parts.map((line, i) => (
    <span key={i}>
      {line}
      {i !== parts.length - 1 && " "}
    </span>
  ));
}

export function formatHeaderGrey(title?: string) {
  if (!title) return null;

  // Разбиваем текст на куски: [grey] и [br] отдельно, всё остальное как обычный текст
  const parts = title.split(/(\[grey\]|\[br-lg\]|\[br\])/i);

  let grey = false;

  return parts.map((part, i) => {
    if (!part) return null;

    if (/^\[grey\]$/i.test(part)) {
      grey = !grey; // переключаем состояние серого
      return null; // сам тег не выводим
    }
    
    if (/^\[br\]$/i.test(part)) {
      return <br key={i} />;
    }

    if (/^\[br-lg\]$/i.test(part)) {
      return <br className="hidden lg:block" key={i} />;
    }

    return grey ? (
      <span key={i} className="text-[#A0A0A0]">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    );
  });
}