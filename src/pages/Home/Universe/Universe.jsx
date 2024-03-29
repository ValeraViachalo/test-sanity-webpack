import React from "react";

import "./Universe.scss";

import { Heart } from '../../../components/Heart/Heart'
import { Button } from '../../../components/Button/Button'

export default function Universe() {
  return (
    <section className="universe container">
      <div className="top-title">
        <h3>
          <span className="first-line">
            I’m here to help you see and build your own
          </span>
          <br />
          Universe - an ecosystem of products on the basis{" "}
          <span className="figure">of</span> your
          <br />
          mission, vision and existing.
        </h3>
      </div>

      <div className="universe-video">
        <div className="left body-text-4">
          <p>
            <span className="body-text qoute">“</span>
            you`re the first person I ever trusted with my vision
          </p>

          <div className="heart">
            <Heart color="black" />
          </div>

          <p>
            #lovemark #growth #strategy #ecosystem #marketing #startup #business
            #community
          </p>
        </div>

        <div className="right">
          <div className="subtitles body-text-4">
            <p className="paragraph">
              <p>
                But beyond the annals of history and the stories of legend, in
                the lived reality of our world, women with their innate beauty
                tame the chaos that often surrounds us.
              </p>
              <p>
                This isn’t to say that the value of a woman lies solely in her
                beauty, nor is it to pigeonhole her into a singular role of a
                siren or muse. Instead, it is to acknowledge that there exists a
                particular power in the beauty she carries — a power that is
                capable of turning discord into harmony, desolation into hope.
                It is an alchemy that transforms the mundane into
              </p>
            </p>
            <p className="paragraph">
              <p>
                The mystique of a deep ocean. The beauty of women is not just
                skin-deep; it is an essence that transcends the tangible, an
                ethereal quality that is both delicate and powerful, bridging
                the chasm between the corporeal and the spiritual.
              </p>
              <p>
                In the tapestry of existence, women emerge as radiant threads,
                weaving tales of grace, strength, and sublime beauty. From the
                earliest myths to modern narratives
              </p>
            </p>
          </div>
          <div className="video">
            <div className="video__wrapper">
              <img
                src="/images/Home/universe.webp"
                className="video__item"
                alt="video"
              />
              <div className="play-btn" />
            </div>
            <div className="video__subscription">
              <p className="body-text-4 first-line-book uppercase concept">
                Concept born in Melbourne in
              </p>
              <p className="body-text-4 first-line-book uppercase">July 2022</p>
            </div>
          </div>
          <div className="video__contact-button">
            <Button>Contact Me.</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
