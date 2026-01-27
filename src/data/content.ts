export type Locale = 'fr' | 'en';

const linkedinUrl = 'https://be.linkedin.com/in/maximilienrichald-process-quality';
const contact = {
  name: 'Maximilien Richald',
  company: 'MaxReact Engineering',
  phone: '+32 496 08 43 43',
  email: 'maximilien.richald@outlook.com',
  locationFr: 'Genappe, Belgique',
  locationEn: 'Genappe, Belgium',
  linkedinUrl
};

export const content: Record<Locale, any> = {
  fr: {
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
        'Développement, mise au point et transfert de procédés chimiques vers l’industrie. Pont entre laboratoire, pilote et production.',
      bullets: [
        'Procédés chimiques complexes, contraintes réelles d’exploitation',
        'Passage laboratoire → pilote → usine sans perte de maîtrise',
        'Interface R&D, ingénierie et production pour sécuriser chaque jalon'
      ],
      primaryCta: 'Discuter de votre procédé',
      secondaryCta: 'Voir l’approche',
      secondaryAnchor: '#approach'
    },
    scaleUp: {
      title: 'Pourquoi le passage à l’échelle est critique',
      bullets: [
        'Les équilibres thermiques et cinétiques évoluent quand le volume change',
        'Les équipements industriels imposent leurs propres limitations (matière, mélange, inertage, CIP/SIP)',
        'Les contraintes HSE et disponibilité font émerger des risques absents au labo',
        'Sans vision procédé complète, les délais et CAPEX explosent'
      ]
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
            'Robustesse vis‑à‑vis des matières premières et des variations opératoires'
          ]
        },
        {
          title: 'Pilote / pré‑industriel',
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
      ]
    },
    role: {
      title: 'Rôle de MaxReact Engineering',
      bullets: [
        'Interface claire entre R&D, ingénierie et production',
        'Anticipation des risques techniques et des modes de défaillance',
        'Approche structurée mais pragmatique, centrée sur le procédé réel',
        'Décisions basées sur des données d’essais et des modèles simples, actionnables'
      ]
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
      caption: `${contact.name} – ${contact.company}`
    },
    contact: {
      title: 'Contact & CTA final',
      summary: 'Prêt à sécuriser votre passage laboratoire → usine ? Parlons de votre procédé.',
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
      location: contact.locationFr,
      note: 'Ingénierie procédé en chimie — du laboratoire à l’usine.'
    },
    meta: {
      title: 'MaxReact Engineering | Ingénierie procédé – du laboratoire à l’usine',
      description:
        'Consultant en ingénierie procédé pour le passage laboratoire → pilote → usine. Développement, mise au point et transfert de procédés chimiques industrialisables.',
      locale: 'fr_BE'
    },
    contactData: contact
  },
  en: {
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
        'Development, optimization and transfer of chemical processes into industrial reality. Bridging laboratory, pilot and production.',
      bullets: [
        'Complex chemical processes under real-world operating constraints',
        'Lab → pilot → plant without losing process knowledge',
        'Clear interface between R&D, engineering and operations'
      ],
      primaryCta: 'Discuss your process',
      secondaryCta: 'See the approach',
      secondaryAnchor: '#approach'
    },
    scaleUp: {
      title: 'Why scale-up is critical',
      bullets: [
        'Heat and mass transfer behave differently at production scale',
        'Industrial equipment imposes its own limits (mixing, inerting, cleaning, containment)',
        'HSE, uptime and operability risks appear that are invisible in the lab',
        'Without an end-to-end view, timelines and CAPEX spiral'
      ]
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
          title: 'Pilot / pre‑industrial',
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
      ]
    },
    role: {
      title: 'Role of MaxReact Engineering',
      bullets: [
        'Clear interface across R&D, engineering and production',
        'Anticipates technical risks and failure modes early',
        'Structured yet pragmatic approach, anchored in the real process',
        'Decisions backed by test data and simple, actionable models'
      ]
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
      caption: `${contact.name} – ${contact.company}`
    },
    contact: {
      title: 'Contact & final CTA',
      summary: 'Ready to de-risk your lab-to-plant move? Let’s talk about your process.',
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
      location: contact.locationEn,
      note: 'Chemical process engineering — from lab to plant.'
    },
    meta: {
      title: 'MaxReact Engineering | Process engineering from lab to plant',
      description:
        'Consultant in chemical process engineering to take you from lab to pilot to plant. Development, optimization and transfer of industrial-ready processes.',
      locale: 'en_GB'
    },
    contactData: contact
  }
};
