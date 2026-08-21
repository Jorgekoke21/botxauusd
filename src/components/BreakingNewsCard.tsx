import Image from "next/image";
import { Icon } from "@/components/Icon";
import { publicAsset } from "@/lib/public-asset";

const goldNews = [
  { date: "22 AGO 2026", dateTime: "2026-08-22", place: "Nueva York",
    title: "El oro sube ante la cautela del mercado y la debilidad del dólar." },
  { date: "22 AGO 2026", dateTime: "2026-08-22", place: "Londres",
    title: "Los inversores refuerzan posiciones en oro tras nuevos datos macro." },
  { date: "21 AGO 2026", dateTime: "2026-08-21", place: "Zúrich",
    title: "La demanda de activos refugio impulsa el interés por el oro físico." },
] as const;

export function BreakingNewsCard() {
  return (
    <aside className="breaking-news-card" aria-labelledby="gold-news-title">
      <Image
        className="breaking-news-stamp"
        src={publicAsset("/images/bots/breakingnews.png")}
        alt=""
        width={2172}
        height={724}
        sizes="(max-width: 860px) 100vw, (max-width: 1180px) 48vw, 30vw"
        loading="eager"
      />

      <div className="breaking-news-panel">
        <h2 className="visually-hidden" id="gold-news-title">
          Últimas noticias sobre el oro
        </h2>
        <div className="gold-news-list">
          {goldNews.map((item) => (
            <article className="gold-news-item" key={item.place}>
              <div className="gold-news-meta">
                <Icon name="calendar" className="gold-news-calendar" />
                <time dateTime={item.dateTime}>{item.date}</time>
                <span aria-hidden="true">·</span>
                <span>{item.place}</span>
              </div>
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
        <p className="gold-news-updated">Actualizado hoy</p>
      </div>
    </aside>
  );
}
