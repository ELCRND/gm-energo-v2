import "./scss/main.scss";
import { BgVideo } from "./js/BgVideo";
import { Header } from "./js/Header";
import { Animation } from "./js/Animation";
import { ConsultationForm } from "./js/ConsultationForm";
import { HeroSlider, ProjectsSlider } from "./js/Sliders";
import { RequestForm } from "./js/RequestForm";
import { ContactsForm } from "./js/ContactsForm";

document.addEventListener("DOMContentLoaded", () => {
  // new BgVideo(); // hero bg video

  new Header();

  new Animation(); // scroll animation

  HeroSlider();

  window.addEventListener("load", () => {
    document
      .querySelectorAll(
        "img[data-loading='lazy'], picture[data-loading='lazy']",
      )
      .forEach((el) => {
        if (el.localName === "img" && el.dataset.src) {
          el.src = el.dataset.src;
        }

        if (el.localName === "picture" && el.dataset.src) {
          picture.querySelectorAll("source[data-src]").forEach((source) => {
            if (source.dataset.src) {
              source.srcset = source.dataset.srcset;
            }
          });
        }

        // if (el.dataset.src) {
        //   el.src = img.dataset.src;
        // }
      });

    document.querySelectorAll(".complex__steps picture").forEach((picture) => {
      picture.querySelectorAll("source[data-src]").forEach((source) => {
        // source.srcset = source.dataset.srcset;
        // const img = picture.querySelector("img");
        // if (img && img.dataset.src) {
        //   img.src = img.dataset.src;
        // }
      });
    });
  });

  ProjectsSlider();

  new RequestForm();

  new ContactsForm();

  // popup / consultation form
  new ConsultationForm();
});
