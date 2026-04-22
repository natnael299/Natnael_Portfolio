const content = {
  en: {
    meta: {
      pageTitle: "My Portfolio"
    },
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      intro: "Hello, I'm",
      role: "Frontend Developer",
      downloadCv: "Download CV",
      contactInfo: "Contact Info"
    },
    about: {
      eyebrow: "Get To Know More",
      title: "About Me",
      experienceLabel: "Experience",
      experienceValue: "1.5+ years",
      experienceField: "Frontend Development",
      educationLabel: "Education",
      educationValue: "Turun Ammatti-Instituutti",
      educationField: "Web Development",
      description:
        "I'm Natnael Beyene, a frontend developer passionate about turning ideas into responsive and interactive web experiences. I enjoy working with modern web technologies, learning new tools, and improving both design and functionality in every project I build. My goal is to create websites and applications that are simple, fast, and useful for real users."
    },
    experience: {
      eyebrow: "Explore My",
      title: "Experience",
      frontendTitle: "Frontend Development",
      backendTitle: "Backend Development",
      aiTitle: "AI Skills",
      levels: {
        experienced: "Experienced",
        intermediate: "Intermediate",
        basic: "Basic"
      }
    },
    projects: {
      eyebrow: "Browse My Recent",
      title: "Projects",
      github: "Github",
      liveDemo: "Live Demo",
      items: [
        {
          title: "Project One"
        },
        {
          title: "Project One"
        },
        {
          title: "Project One"
        }
      ]
    },
    contact: {
      eyebrow: "Get in Touch",
      title: "Contact Me",
      linkedin: "LinkedIn"
    },
    footer: {
      copyright: "Copyright © 2026 Natnael Beyene"
    }
  },
  fi: {
    meta: {
      pageTitle: "Portfolioni"
    },
    nav: {
      about: "Minusta",
      experience: "Osaaminen",
      projects: "Projektit",
      contact: "Yhteystiedot"
    },
    hero: {
      intro: "Hei, olen",
      role: "Frontend-kehittäjä",
      downloadCv: "Lataa CV",
      contactInfo: "Yhteystiedot"
    },
    about: {
      eyebrow: "Lue lisää",
      title: "Minusta",
      experienceLabel: "Kokemus",
      experienceValue: "1,5+ vuotta",
      experienceField: "Frontend-kehitys",
      educationLabel: "Koulutus",
      educationValue: "Turun Ammatti-Instituutti",
      educationField: "Web Development",
      description:
        "Olen Natnael Beyene, frontend-kehittäjä, joka on intohimoinen rakentamaan responsiivisia ja interaktiivisia verkkokokemuksia. Nautin modernien web-teknologioiden käytöstä, uusien työkalujen oppimisesta sekä suunnittelun ja toiminnallisuuden kehittämisestä jokaisessa projektissa. Tavoitteeni on rakentaa verkkosivustoja ja sovelluksia, jotka ovat selkeitä, nopeita ja hyödyllisiä oikeille käyttäjille."
    },
    experience: {
      eyebrow: "Tutustu",
      title: "Osaaminen",
      frontendTitle: "Frontend-kehitys",
      backendTitle: "Backend-kehitys",
      aiTitle: "Tekoälytaidot",
      levels: {
        experienced: "Kokenut",
        intermediate: "Keskitaso",
        basic: "Perustaso"
      }
    },
    projects: {
      eyebrow: "Tutustu viimeisimpiin",
      title: "Projektit",
      github: "Github",
      liveDemo: "Live Demo",
      items: [
        {
          title: "Projekti Yksi"
        },
        {
          title: "Projekti Yksi"
        },
        {
          title: "Projekti Yksi"
        }
      ]
    },
    contact: {
      eyebrow: "Ota yhteyttä",
      title: "Yhteystiedot",
      linkedin: "LinkedIn"
    },
    footer: {
      copyright: "Copyright © 2026 Natnael Beyene"
    }
  }
};


function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const bars = document.querySelector(".bars");
  const cancell = document.querySelector(".cancell");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  bars.classList.toggle("hide");
  cancell.classList.toggle("hide");
}