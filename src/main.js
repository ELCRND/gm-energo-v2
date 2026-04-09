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
    import("./scss/main.scss");

    document
      .querySelectorAll(
        "img[data-loading='lazy'], picture[data-loading='lazy']",
      )
      .forEach((el) => {
        if (el.localName === "picture") {
          el.querySelectorAll("source").forEach((source) => {
            if (source.dataset.srcset) {
              source.srcset = source.dataset.srcset;
            }
          });
        }

        if (el.localName === "img" && el.dataset.src) {
          el.src = el.dataset.src;
        }
      });
  });

  ProjectsSlider();

  new RequestForm();

  new ContactsForm();

  // popup / consultation form
  new ConsultationForm();
});
