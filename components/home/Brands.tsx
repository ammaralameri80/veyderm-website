import { homeContent } from "@/lib/content";
import { Arrow, SkinPrintMark, Icon } from "./Icons";
import { PhotoSlot } from "./PhotoSlot";

export function Brands() {
  const t = homeContent.brands;
  const m = t.match;
  return (
    <section className="vbrands" id="brands">
      <div className="wrap">
        <div className="vbrands-grid">
        <div className="vbrands-copy">
          <span className="v-kicker sage"><span className="dot" />{t.kicker}</span>
          <h2>{t.h2}</h2>
          <p>{t.p}</p>
          <ul className="vblist">
            {t.benefits.map((b) => (
              <li key={b.t}>
                <span className="bt">{b.t}</span>
                <span className="bd">{b.d}</span>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary btn-lg" href="#access" data-role={t.role} data-cta="brand_partner">
            {t.cta}<Arrow className="ar" />
          </a>
        </div>

        <div className="vbrands-visual">
          <div className="vmatch">
            <div className="vmatch-sp"><SkinPrintMark size={18} /><span>{m.skinprint}</span></div>
            <div className="vmatch-goal">{m.goal}</div>
            <div className="vmatch-link">
              <span className="vmatch-label">{m.label}</span>
              <span className="vmatch-line" />
            </div>
            <div className="vmatch-product">
              <div className="vmatch-p-top">
                <span className="pn">{m.product}</span>
                <span className="rank">{m.rank}</span>
              </div>
              <div className="vmatch-bar"><i /></div>
              <div className="vmatch-p-foot">
                <span className="ev"><Icon name="check" size={13} />{m.ev}</span>
                <span className="note">{m.productNote}</span>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="vshelf">
          <span className="vshelf-label">{t.shelf.label}<em> — {t.shelf.note}</em></span>
          <div className="vshelf-row">
            <PhotoSlot label="Product" file="product-1.jpg" ratio="3 / 4" />
            <PhotoSlot label="Product" file="product-2.jpg" ratio="3 / 4" />
            <PhotoSlot label="Product" file="product-3.jpg" ratio="3 / 4" />
          </div>
        </div>
      </div>
    </section>
  );
}
