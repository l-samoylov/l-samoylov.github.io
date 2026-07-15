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
            },},{id: "news-my-paper-on-modelling-lean-code-embeddings-was-accepted-to-the-mathnlp-workshop-emnlp-this-is-my-first-paper-to-be-accepted-for-publication-see-you-in-suzhou",
          title: 'My paper on modelling Lean-code embeddings was accepted to the MathNLP Workshop @...',
          description: "",
          section: "News",},{id: "news-i-ll-be-working-at-kungfu-ai-as-a-machine-learning-engineer-intern-this-spring",
          title: 'I’ll be working at KUNGFU.AI as a Machine Learning Engineer Intern this Spring!...',
          description: "",
          section: "News",},{id: "news-my-paper-on-representing-lean-proofs-in-latent-space-has-been-accepted-to-acl-srw-see-you-in-san-diego",
          title: 'My paper on representing Lean proofs in latent space has been accepted to...',
          description: "",
          section: "News",},{id: "news-i-m-joining-booko-yc-w26-as-a-machine-learning-engineer-this-summer-i-ll-be-working-on-dynamic-pricing-and-end-to-end-model-deployment",
          title: 'I’m joining Booko (YC W26) as a Machine Learning Engineer this summer! I’ll...',
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
