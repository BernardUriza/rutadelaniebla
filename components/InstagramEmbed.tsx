type Props = { url: string; height?: number };

function toEmbedUrl(url: string) {
  const clean = url.split("?")[0].replace(/\/$/, "");
  return `${clean}/embed/captioned/`;
}

export default function InstagramEmbed({ url, height = 720 }: Props) {
  return (
    <div className="nb-ig-frame">
      <iframe
        src={toEmbedUrl(url)}
        title="Reel del Senderito del Bosque de Niebla en Instagram"
        height={height}
        loading="lazy"
        allow="encrypted-media; clipboard-write"
        allowFullScreen
        scrolling="no"
      />
    </div>
  );
}
