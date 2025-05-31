const data = [
  {
    title: "A Love to Remember",
    img: "src/assets/image1.jpg",
  },
  {
    title: "About Time",
    img: "src/assets/image2.jpg",
  },
  {
    title: "Moments With You",
    img: "src/assets/image3.jpg",
  },
  {
    title: "Endless Affection",
    img: "src/assets/image4.jpg",
  },
  {
    title: "Growing Together",
    img: "src/assets/image5.jpg",
  },
  {
    title: "Stranger to Soulmate",
    img: "src/assets/image6.jpg",
  },
  {
    title: "Love in the Air",
    img: "src/assets/image7.jpg",
  },
];

export default function TitleCards({ title = "Top Picks For You" }) {
  return (
    <section className="content-row">
      <h2 className="row-title">{title}</h2>
      <div className="row__posters">
        {data.map((item, idx) => (
          <div
            className="row__poster"
            key={idx}
            style={{ position: "relative" }}
          >
            <div
              style={{ position: "relative", width: "180px", height: "270px" }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="row__poster-img"
                style={
                  item.title === "Endless Affection"
                    ? {
                        transform: "scale(1.3) translateY(20px)",
                        transition: "transform 0.2s",
                      }
                    : item.title === "About Time"
                    ? {
                        transform:
                          "scale(1.1) translateY(8px) translateX(-12px)",
                        transition: "transform 0.2s",
                      }
                    : item.title === "A Love to Remember"
                    ? {
                        transform:
                          "scale(1.1) translateY(12px) translateX(-6px)",
                        transition: "transform 0.2s",
                      }
                    : item.title === "Growing Together"
                    ? {
                        transform: "scale(1.16) translateY(-6px)",
                        transition: "transform 0.2s",
                      }
                    : item.title === "Stranger to Soulmate"
                    ? {
                        transform: "scale(1.3) translateY(1px)",
                        transition: "transform 0.2s",
                      }
                    : item.title === "Love in the Air"
                    ? {
                        transform: "scale(1.1) translateY(11px)",
                        transition: "transform 0.2s",
                      }
                    : undefined
                }
              />
              {/* Judul overlay di dalam gambar, bagian bawah */}
              <div className="row__poster-title-bottom">{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
