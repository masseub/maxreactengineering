export type Locale = 'fr' | 'en';

type LayoutCopy = {
  brandName: string;
  logoAlt: string;
  skipToContent: string;
  backToTop: string;
  languageSwitcher: string;
};

type NavCopy = {
  approach: string;
  coverage: string;
  results: string;
  contact: string;
};

type HeroCopy = {
  label: string;
  title: string;
  subtitle: string;
  bullets: string[];
  primaryCta: string;
  secondaryCta: string;
  secondaryAnchor: string;
  cardTitle: string;
  cardSummary: string;
};

type ScaleUpCopy = {
  title: string;
  bullets: string[];
  pill: string;
};

type CoverageStep = {
  title: string;
  points: string[];
};

type CoverageCopy = {
  title: string;
  steps: CoverageStep[];
  intro: string;
};

type RoleCopy = {
  title: string;
  bullets: string[];
  cardTitle: string;
  coreMessageTitle: string;
  coreMessageBody: string;
};

type OutcomesCopy = {
  title: string;
  bullets: string[];
};

type AboutCopy = {
  title: string;
  body: string[];
  caption: string;
  photoAlt: string;
};

type ContactCopy = {
  title: string;
  summary: string;
  mailSubject: string;
  labels: {
    phone: string;
    email: string;
    location: string;
    linkedin: string;
  };
  ctaMail: string;
  ctaLinkedin: string;
};

type FooterCopy = {
  location: string;
  note: string;
  copyrightPrefix: string;
};

type MetaCopy = {
  title: string;
  description: string;
  locale: string;
};

type ContactData = {
  name: string;
  company: string;
  phone: string;
  email: string;
  linkedinUrl: string;
  location: string;
};

export type Copy = {
  layout: LayoutCopy;
  headerTagline: string;
  nav: NavCopy;
  hero: HeroCopy;
  scaleUp: ScaleUpCopy;
  coverage: CoverageCopy;
  role: RoleCopy;
  outcomes: OutcomesCopy;
  about: AboutCopy;
  contact: ContactCopy;
  footer: FooterCopy;
  meta: MetaCopy;
  contactData: ContactData;
};

const baseContact = {
  name: 'Maximilien Richald',
  company: 'MaxReact Engineering',
  phone: '+32 496 08 43 43',
  email: 'maximilien.richald@outlook.com',
  linkedinUrl: 'https://be.linkedin.com/in/maximilienrichald-process-quality'
};

const contactFr: ContactData = {
  ...baseContact,
  location: 'Genappe, Belgique'
};

const contactEn: ContactData = {
  ...baseContact,
  location: 'Genappe, Belgium'
};

export const content: Record<Locale, Copy> = {
  fr: {
    layout: {
      brandName: contactFr.company,
      logoAlt: `Logo ${contactFr.company}`,
      skipToContent: 'Aller au contenu principal',
      backToTop: 'Revenir en haut de la page',
      languageSwitcher: 'Sélecteur de langue'
    },
    headerTagline: 'From lab to plant.',
    nav: {
      approach: 'Approche',
      coverage: 'Cycle complet',
      results: 'Résultats',
      contact: 'Contact'
    },
    hero: {
      label: 'From lab to plant.',
      title: 'Ingénierie procédé – du laboratoire à l’usine',
      subtitle:
        'Transfert de votre procédé du labo vers l’usine et optimisation de celui-ci. Pont entre laboratoire, pilote et production.',
      bullets: [
        'Procédés chimiques complexes, contraintes réelles d’exploitation',
        'Passage laboratoire → pilote → usine sans perte de maîtrise',
        'Interface R&D, ingénierie et production pour sécuriser chaque jalon'
      ],
      primaryCta: 'Discuter de votre procédé',
      secondaryCta: 'Voir l’approche',
      secondaryAnchor: '#approach',
      cardTitle: 'Du concept à la mise en route',
      cardSummary: 'Passage laboratoire → pilote → usine accompagné étape par étape.'
    },
    scaleUp: {
      title: 'Pourquoi le passage à l’échelle est critique',
      bullets: [
        'Les équilibres thermiques et cinétiques évoluent quand le volume change',
        'Les équipements industriels imposent leurs propres limitations (matière, mélange, inertage, etc.)',
        'Les contraintes de sécurité et de disponibilité font apparaître des risques inexistants à l’échelle du laboratoire.',
        'La variabilité des matières premières et des opérations devient un facteur critique de la qualité lors du passage à l’échelle industrielle.',
        'Sans vision complète du procédé, les délais et CAPEX explosent'
      ],
      pill: 'Scale-up maîtrisé'
    },
    coverage: {
      title: 'Couverture complète du cycle de développement',
      steps: [
        {
          title: 'Procédé laboratoire',
          points: [
            'Clarification du schéma réactionnel et des paramètres critiques',
            'Masse et bilans énergétiques pour préparer le dimensionnement'
          ]
        },
        {
          title: 'Adaptation aux contraintes industrielles',
          points: [
            'Choix d’équipements réalistes (agitation, transfert thermique, sécurité procédé)',
            'Robustesse vis-à-vis des matières premières et des variations opératoires'
          ]
        },
        {
          title: 'Pilote / pré-industriel',
          points: [
            'Plans d’essais pour valider le scale-up et identifier les points de rupture',
            'Boucles d’amélioration courtes avec les équipes terrain'
          ]
        },
        {
          title: 'Transfert vers la production',
          points: [
            'Dossiers de procédé et logiques de contrôle exploitables',
            'Support au démarrage et passage de relais aux équipes exploitation'
          ]
        }
      ],
      intro: 'Laboratoire → pilote → usine, en alignant jalons techniques et opérationnels.'
    },
    role: {
      title: 'Rôle de MaxReact Engineering',
      bullets: [
        'Interface claire entre R&D, ingénierie et production',
        'Anticipation des risques techniques et des modes de défaillance',
        'Approche structurée mais pragmatique, centrée sur le procédé réel',
        'Décisions basées sur des données d’essais et des modèles simples, actionnables'
      ],
      cardTitle: 'Un interlocuteur unique',
      coreMessageTitle: 'Message central',
      coreMessageBody: 'From lab to plant : sécuriser le scale-up avant d’engager l’investissement.'
    },
    outcomes: {
      title: 'Résultat pour le client',
      bullets: [
        'Procédé industrialisable avec un mode opératoire maîtrisé',
        'Décisions techniques sécurisées (investissements, choix d’équipements, CAPEX/OPEX)',
        'Transition laboratoire → usine pilotée et documentée',
        'Base solide pour l’exploitation industrielle et la montée en cadence'
      ]
    },
    about: {
      title: 'À propos',
      body: [
        'Ingénieur chimiste avec double culture laboratoire et terrain industriel.',
        'Plus de 10 ans à faire dialoguer équipes R&D, engineering et production pour sécuriser les procédés.',
        'Culture sécurité et exploitation, orientation résultats.'
      ],
      caption: `${contactFr.name} – ${contactFr.company}`,
      photoAlt: `Portrait de ${contactFr.name}`
    },
    contact: {
      title: 'Contact',
      summary: 'Prêt à sécuriser votre passage laboratoire → usine ? Parlons de votre procédé.',
      mailSubject: 'Projet procédé - MaxReact',
      labels: {
        phone: 'Téléphone',
        email: 'Email',
        location: 'Localisation',
        linkedin: 'LinkedIn'
      },
      ctaMail: 'Discuter de votre procédé',
      ctaLinkedin: 'Voir le profil LinkedIn'
    },
    footer: {
      location: contactFr.location,
      note: 'Ingénierie procédé en chimie — du laboratoire à l’usine.',
      copyrightPrefix: '©'
    },
    meta: {
      title: 'MaxReact Engineering | Ingénierie procédé – du laboratoire à l’usine',
      description:
        'Consultant en ingénierie procédé pour le passage laboratoire → pilote → usine. Développement, mise au point et transfert de procédés chimiques industrialisables.',
      locale: 'fr_BE'
    },
    contactData: contactFr
  },
  en: {
    layout: {
      brandName: contactEn.company,
      logoAlt: `${contactEn.company} logo`,
      skipToContent: 'Skip to main content',
      backToTop: 'Back to top',
      languageSwitcher: 'Language switcher'
    },
    headerTagline: 'From lab to plant.',
    nav: {
      approach: 'Approach',
      coverage: 'Full cycle',
      results: 'Outcomes',
      contact: 'Contact'
    },
    hero: {
      label: 'From lab to plant.',
      title: 'Process engineering from lab to plant',
      subtitle:
        'Transfer your process from the lab to the plant and optimize it. Bridge between laboratory, pilot and production.',
      bullets: [
        'Complex chemical processes under real operating constraints',
        'Lab → pilot → plant without losing process knowledge',
        'Clear interface between R&D, engineering and production to secure each milestone'
      ],
      primaryCta: 'Discuss your process',
      secondaryCta: 'See the approach',
      secondaryAnchor: '#approach',
      cardTitle: 'From concept to start-up',
      cardSummary: 'Lab → pilot → plant, guided step by step.'
    },
    scaleUp: {
      title: 'Why scale-up is critical',
      bullets: [
        'Heat and mass transfer behave differently at production scale',
        'Industrial equipment imposes its own limits (materials, mixing, inerting, etc.)',
        'Safety and availability constraints reveal risks that are invisible at lab scale',
        'Raw-material and operating variability becomes a critical quality factor when scaling to industrial level.',
        'Without an end-to-end view, timelines and CAPEX spiral'
      ],
      pill: 'Scale-up under control'
    },
    coverage: {
      title: 'Full development cycle coverage',
      steps: [
        {
          title: 'Lab process',
          points: [
            'Clarify reaction scheme and critical parameters',
            'Mass and energy balances to prepare sizing decisions'
          ]
        },
        {
          title: 'Industrial constraints',
          points: [
            'Select realistic equipment (agitation, heat transfer, process safety)',
            'Robustness against raw material variability and operational drifts'
          ]
        },
        {
          title: 'Pilot / pre-industrial',
          points: [
            'Test plans to validate scale-up and expose failure modes',
            'Short learning loops with on-site teams'
          ]
        },
        {
          title: 'Transfer to production',
          points: [
            'Process dossiers and control logics ready for the shop floor',
            'Start-up support and handover to operations'
          ]
        }
      ],
      intro: 'Lab → pilot → plant with aligned technical and operational gates.'
    },
    role: {
      title: 'Role of MaxReact Engineering',
      bullets: [
        'Clear interface across R&D, engineering and production',
        'Anticipates technical risks and failure modes early',
        'Structured yet pragmatic approach, anchored in the real process',
        'Decisions backed by test data and simple, actionable models'
      ],
      cardTitle: 'One accountable interface',
      coreMessageTitle: 'Core message',
      coreMessageBody: 'From lab to plant: de-risk scale-up before committing capital.'
    },
    outcomes: {
      title: 'Outcome for you',
      bullets: [
        'An industrialisable process with a controlled operating envelope',
        'Safer technical decisions (equipment choices, CAPEX/OPEX impacts)',
        'Managed lab → plant transition with documented learnings',
        'Solid basis for reliable production and future ramp-up'
      ]
    },
    about: {
      title: 'About',
      body: [
        'Chemical engineer with a dual lab and plant mindset.',
        '10+ years translating between R&D, engineering and operations to secure processes.',
        'Safety-first and operations-focused, with a bias to tangible results.'
      ],
      caption: `${contactEn.name} – ${contactEn.company}`,
      photoAlt: `Portrait of ${contactEn.name}`
    },
    contact: {
      title: 'Contact',
      summary: 'Ready to secure your lab-to-plant move? Let’s talk about your process.',
      mailSubject: 'Process project - MaxReact',
      labels: {
        phone: 'Phone',
        email: 'Email',
        location: 'Location',
        linkedin: 'LinkedIn'
      },
      ctaMail: 'Discuss your process',
      ctaLinkedin: 'Open LinkedIn profile'
    },
    footer: {
      location: contactEn.location,
      note: 'Chemical process engineering — from lab to plant.',
      copyrightPrefix: '©'
    },
    meta: {
      title: 'MaxReact Engineering | Process engineering from lab to plant',
      description:
        'Consultant in chemical process engineering to take you from lab to pilot to plant. Development, optimization and transfer of industrial-ready processes.',
      locale: 'en_GB'
    },
    contactData: contactEn
  }
};

