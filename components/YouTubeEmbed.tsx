type Props = { url: string; title?: string };

function youtubeId(url: string) {
  const m = url.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/);
  return m ? m[1] : "";
}

export default function YouTubeEmbed({ url, title = "Video" }: Props) {
  return (
    <div className="nb-ig-frame" style={{ maxWidth: 640 }}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${youtubeId(url)}`}
        title={title}
        style={{ aspectRatio: "16 / 9" }}
        loading="lazy"
        allow="accelerometer; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
