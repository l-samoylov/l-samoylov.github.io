// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "🚀 Incoming!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "⛏️ Under construction",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "CV",
          section: "Navigation",
          handler: () => {
            window.location.href = "/assets/pdf/LisaSamoylovResume.pdf";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-️-made-this-website",
          title: '⛏️ Made this website!',
          description: "",
          section: "News",},{id: "news-my-paper-on-modelling-lean-code-embeddings-was-accepted-to-emnlp-mathnlp-workshop-this-is-my-first-first-author-paper-to-be-accepted-for-publication-see-you-in-suzhou",
          title: 'My paper on modelling Lean-code embeddings was accepted to EMNLP (MathNLP Workshop)! This...',
          description: "",
          section: "News",},{id: "news-i-ll-be-working-at-kungfu-ai-as-a-machine-learning-engineer-intern-this-spring",
          title: 'I’ll be working at KUNGFU.AI as a Machine Learning Engineer Intern this Spring!...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
