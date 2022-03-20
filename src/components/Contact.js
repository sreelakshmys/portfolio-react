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
          <Icon className="social-media-icons" icon="line-md:linkedin" />

          <Icon className="social-media-icons" icon="fontisto:github" />

          <Icon className="social-media-icons" icon="ant-design:mail-twotone" />
        </div>
      </div>
    </section>
  );
}
