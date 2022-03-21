import React from "react";
import { Icon } from "@iconify/react";

export default function Contact({ t }) {
  return (
    <section id="socials">
      <div>
        <div className="logo-contact">
          <img src={require("../images/icon-image.png")} alt="Icon Image" />
        </div>
        <span className="moto">{t("MOTTO")}</span>

        <div className="social-icons">
          <div className="contact-title">{t("CONTACT_TITLE")}</div>
          <a
            href="https://www.linkedin.com/in/sreelakshmys/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-links"
          >
            <Icon className="social-media-icons" icon="line-md:linkedin" />
          </a>

          <a
            href="  https://github.com/sreelakshmys"
            target="_blank"
            rel="noopener noreferrer"
            className="social-links"
          >
            <Icon className="social-media-icons" icon="fontisto:github" />
          </a>
          <Icon
            className="social-media-icons"
            icon="ant-design:mail-twotone"
            onClick={() => {
              window.open(
                `mailto:sreelakshmys.mec@gmail.com?subject=Hi there 👋!`
              );
            }}
          />
        </div>
      </div>
    </section>
  );
}
