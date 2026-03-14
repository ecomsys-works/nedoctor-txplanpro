export function formatHeader(title?: string) {
  if (!title) return null;
  const parts = title.split(/\[br\]|\n/);
  return parts.map((line, i) => (
    <span key={i}>
      {line}
      {i !== parts.length - 1 && <br />}
    </span>
  ));
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