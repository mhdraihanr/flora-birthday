import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";

const data = [
  {
    title: "A Love to Remember",
    img: image1,
  },
  {
    title: "About Time",
    img: image2,
  },
  {
    title: "Moments With You",
    img: image3,
  },
  {
    title: "Endless Affection",
    img: image4,
  },
  {
    title: "Growing Together",
    img: image5,
  },
  {
    title: "Stranger to Soulmate",
    img: image6,
  },
  {
    title: "Love in the Air",
    img: image7,
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
