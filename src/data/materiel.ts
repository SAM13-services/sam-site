import type { Materiel } from '../types/materiel'

export const CATALOGUE: Materiel[] = [

  // ─────────────────────────────────────────────────────────────
  // ÉQUIPEMENTS DE TRANSFERT
  // ─────────────────────────────────────────────────────────────
  {
    id: 'leve-personnes-rails',
    nom: 'Lève-personnes sur rails (configuration en H)',
    description: 'Transfert de patients sur rails plafonniers.',
    descriptionComplete: 'Le lève-personnes sur rails en configuration H est un équipement de manutention fixe destiné aux établissements sanitaires et médico-sociaux. Il permet de transférer des résidents ou patients entre différents points d\'une chambre (lit, fauteuil, sanitaires) sans recourir au port de charges. Ce système supprime les contraintes posturales et réduit drastiquement les risques de TMS pour les soignants.',
    subvention: 'FIPU',
    categorie: 'equipements-transfert',
    secteurs: ['sanitaire-medico-social'],
    icon: 'ArrowUpDown',
    eligibilite: {
      conception: [
        'Marquage CE obligatoire — directive Machines 2006/42/CE',
        'Capacité de charge nominale minimale de 200 kg',
        'Système de blocage anti-chute en cas de panne électrique',
        'Dispositif de descente de secours manuelle',
        'Rails en configuration H couvrant au minimum la zone lit–fauteuil–sanitaires',
        'Châssis et rails en acier traité anti-corrosion ou inox',
        'Vitesse de levage inférieure ou égale à 0,15 m/s',
        'Commande par télécommande filaire ou sans fil à défilement lent',
      ],
      formation: [
        'Formation obligatoire du personnel soignant à l\'utilisation du lève-personnes (minimum 1 session par établissement)',
        'Notice d\'utilisation en français fournie par le fabricant',
        'Registre de sécurité tenu à jour avec les vérifications périodiques',
        'Attestation de formation remise à l\'employeur',
      ],
      amenagement: [
        'Vérification de la résistance de la structure plafonnière avant installation',
        'Installation par un professionnel agréé avec remise d\'un procès-verbal de réception',
        'Contrôle annuel obligatoire par un organisme habilité',
        'Entretien préventif selon préconisations du fabricant',
      ],
      exclusions: [
        'Lève-personnes mobiles sur roulettes (catégorie distincte)',
        'Rails en configuration I ou L seuls',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'potence-levage-fixe',
    nom: 'Potences de levage fixes (≤ 2 T)',
    description: 'Bras articulé fixe pour levage jusqu\'à 2 T.',
    descriptionComplete: 'La potence de levage fixe est un équipement de manutention à poste de travail permettant de soulever et déplacer des charges lourdes dans un rayon défini autour du point d\'ancrage. Elle supprime le port manuel de charges et réduit les contraintes lombaires et articulaires des opérateurs. Applicable à tous les secteurs industriels et logistiques.',
    subvention: 'FIPU',
    categorie: 'equipements-transfert',
    secteurs: ['industrie', 'construction-btp'],
    icon: 'Wrench',
    eligibilite: {
      conception: [
        'Marquage CE obligatoire — directive Machines 2006/42/CE et directive Équipements de travail',
        'Capacité de charge nominale de 2 tonnes maximum',
        'Système anti-surcharge avec limiteur de charge',
        'Pivot avec roulement à billes ou à rouleaux (rotation fluide sans effort)',
        'Bras articulé ou en porte-à-faux selon configuration',
        'Ancrage au sol ou au plafond selon calcul de structure par bureau d\'études',
        'Finition anticorrosion (peinture époxy ou galvanisation)',
      ],
      formation: [
        'Formation du ou des utilisateurs à la manutention mécanique assistée',
        'Notice d\'utilisation et de maintenance en français',
        'Carnet de maintenance tenu à jour',
      ],
      amenagement: [
        'Étude de sol / structure avant installation — fournie par un bureau d\'études agréé',
        'Installation par un professionnel avec remise d\'une déclaration de conformité',
        'Vérification générale périodique annuelle par organisme habilité',
        'Balisage de la zone de rotation de la potence',
      ],
      exclusions: [
        'Potences à capacité supérieure à 2 tonnes',
        'Potences mobiles sur trépied (équipement distinct)',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'portique-levage',
    nom: 'Portiques de levage (≤ 2 T)',
    description: 'Portique autoportant pour levage jusqu\'à 2 T.',
    descriptionComplete: 'Le portique de levage est une structure autoportante sur roulettes ou fixe permettant la manutention mécanisée de charges lourdes sans infrastructure aérienne. Il se déplace sur le sol et s\'adapte à des espaces variés (atelier, quai, chantier). Cette solution supprime totalement le port manuel de charges volumineuses ou lourdes et peut être déplacée selon les besoins.',
    subvention: 'FIPU',
    categorie: 'equipements-transfert',
    secteurs: ['industrie', 'construction-btp'],
    icon: 'Maximize2',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines 2006/42/CE',
        'Capacité de charge maximale 2 tonnes',
        'Limiteur de charge électronique ou mécanique',
        'Commande par boîtier filaire ou radiocommande homologuée',
        'Structure calculée par bureau d\'études pour la charge nominale',
        'Stabilisateurs ou roulettes verrouillables',
      ],
      formation: [
        'Formation du personnel à l\'utilisation du portique',
        'Habilitation interne des utilisateurs (registre nominatif)',
        'Notice d\'utilisation et plan de maintenance en français',
      ],
      amenagement: [
        'Vérification de la résistance du sol avant utilisation',
        'Installation par entreprise spécialisée avec PV de réception',
        'Contrôle initial et vérifications annuelles par organisme habilité',
        'Délimitation de la zone d\'évolution des charges suspendues',
      ],
      exclusions: [
        'Portiques de capacité supérieure à 2 tonnes',
        'Grues à tour et grues mobiles',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'pont-roulant',
    nom: 'Ponts roulants (≤ 2 T)',
    description: 'Pont roulant aérien pour levage jusqu\'à 2 T.',
    descriptionComplete: 'Le pont roulant est un système de manutention mécanisée aérien se déplaçant sur des voies fixées à la charpente ou à des consoles murales. Il offre une couverture bidirectionnelle complète de la surface de travail et supprime totalement le port manuel de charges lourdes ou volumineuses. Particulièrement adapté aux ateliers industriels, entrepôts et zones de production.',
    subvention: 'FIPU',
    categorie: 'equipements-transfert',
    secteurs: ['industrie'],
    icon: 'Maximize2',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines 2006/42/CE',
        'Capacité de charge maximale 2 tonnes',
        'Limiteur de charge électronique ou mécanique',
        'Fins de course sur tous les axes de déplacement',
        'Commande par boîtier filaire ou radiocommande homologuée',
        'Vitesse de translation lente (anti-balancement de charge)',
        'Structure calculée par bureau d\'études pour la charge nominale',
      ],
      formation: [
        'Formation du personnel à la conduite de pont roulant',
        'Habilitation interne des utilisateurs (registre nominatif)',
        'Notice d\'utilisation et plan de maintenance en français',
      ],
      amenagement: [
        'Calcul de résistance de la structure porteuse (charpente ou console) avant installation',
        'Installation par entreprise spécialisée avec PV de réception',
        'Contrôle initial et vérifications annuelles par organisme habilité',
        'Délimitation au sol de la zone d\'évolution des charges suspendues',
      ],
      exclusions: [
        'Ponts roulants de capacité supérieure à 2 tonnes',
        'Grues à tour et grues mobiles',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'palonnier',
    nom: 'Palonniers (≤ 2 T)',
    description: 'Palonnier de levage pour charges sans manutention manuelle.',
    descriptionComplete: 'Le palonnier est un accessoire de levage conçu pour répartir les efforts de levage sur plusieurs points de préhension simultanés. Il s\'adapte à des charges longues, planes ou fragiles (tôles, vitres, profilés) et se raccorde à tout système de levage existant (pont roulant, potence, chariot élévateur). Il supprime le contact manuel direct avec la charge et réduit les risques de TMS.',
    subvention: 'FIPU',
    categorie: 'equipements-transfert',
    secteurs: ['industrie', 'construction-btp'],
    icon: 'PackageOpen',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines et directive Équipements de levage',
        'Charge maximale d\'utilisation (CMU) clairement indiquée sur l\'équipement',
        'Compatibilité avec les systèmes de levage existants (crochets normalisés)',
        'Matériaux résistant aux conditions d\'utilisation (chimie, agroalimentaire, etc.)',
      ],
      formation: [
        'Formation du personnel aux accessoires de levage et contrôles avant utilisation',
        'Notice d\'utilisation en français',
        'Carnet d\'entretien à disposition sur le poste de travail',
      ],
      amenagement: [
        'Vérification de la compatibilité CMU avec le système de levage existant',
        'Contrôle visuel systématique avant chaque utilisation',
        'Remplacement des éléments usés selon préconisations fabricant',
      ],
      exclusions: [
        'Accessoires dont la CMU dépasse 2 tonnes',
        'Câbles, chaînes et élingues simples sans préhenseur',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'prehenseur',
    nom: 'Préhenseurs à ventouses (≤ 2 T)',
    description: 'Préhenseur à ventouses pour saisie sans contact manuel.',
    descriptionComplete: 'Le préhenseur à ventouses est un accessoire de levage permettant de saisir et déplacer des charges lisses (cartons, vitres, tôles, pièces plastiques) sans contact manuel direct. Il intègre un système de sécurité anti-lâché par double ventouse ou alarme de dépression. Il se raccorde aux systèmes de levage existants et supprime les gestes de force et les contraintes posturales lors des manutentions répétitives.',
    subvention: 'FIPU',
    categorie: 'equipements-transfert',
    secteurs: ['industrie'],
    icon: 'PackageOpen',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines et directive Équipements de levage',
        'Charge maximale d\'utilisation (CMU) clairement indiquée sur l\'équipement',
        'Système de sécurité anti-lâché (double sécurité ou alarme de dépression)',
        'Compatibilité avec les systèmes de levage existants (crochets normalisés)',
        'Matériaux résistant aux conditions d\'utilisation (chimie, agroalimentaire, etc.)',
      ],
      formation: [
        'Formation du personnel aux accessoires de levage et contrôles avant utilisation',
        'Notice d\'utilisation en français',
        'Carnet d\'entretien à disposition sur le poste de travail',
      ],
      amenagement: [
        'Vérification de la compatibilité CMU avec le système de levage existant',
        'Contrôle visuel systématique avant chaque utilisation',
        'Remplacement des éléments usés selon préconisations fabricant',
      ],
      exclusions: [
        'Accessoires dont la CMU dépasse 2 tonnes',
        'Câbles, chaînes et élingues simples sans préhenseur',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'tube-levage',
    nom: 'Tubes de levage (≤ 2 T)',
    description: 'Tube de levage ergonomique pour charges légères répétitives.',
    descriptionComplete: 'Le tube de levage (ou vérin pneumatique de manutention) est un accessoire de levage assisté permettant de soulever, orienter et déposer des charges légères à moyennes de façon répétitive sans effort musculaire. L\'opérateur guide la charge à la main tandis que le tube compense le poids. Particulièrement adapté aux postes de conditionnement, palettisation et assemblage.',
    subvention: 'FIPU',
    categorie: 'equipements-transfert',
    secteurs: ['industrie'],
    icon: 'PackageOpen',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines et directive Équipements de levage',
        'Charge maximale d\'utilisation (CMU) clairement indiquée sur l\'équipement',
        'Système de sécurité anti-lâché intégré',
        'Compatibilité avec les systèmes de levage existants (crochets normalisés)',
      ],
      formation: [
        'Formation du personnel aux accessoires de levage et contrôles avant utilisation',
        'Notice d\'utilisation en français',
        'Carnet d\'entretien à disposition sur le poste de travail',
      ],
      amenagement: [
        'Vérification de la compatibilité CMU avec le système de levage existant',
        'Contrôle visuel systématique avant chaque utilisation',
        'Remplacement des éléments usés selon préconisations fabricant',
      ],
      exclusions: [
        'Accessoires dont la CMU dépasse 2 tonnes',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'monte-meubles',
    nom: 'Monte-meubles',
    description: 'Levage motorisé de meubles en façade.',
    descriptionComplete: 'Le monte-meubles est un équipement de levage motorisé spécifiquement conçu pour les entreprises de déménagement. Il permet de hisser des meubles et objets encombrants depuis l\'extérieur du bâtiment, évitant ainsi le port de charges dans les escaliers — principal facteur de TMS dans ce secteur.',
    subvention: 'FIPU',
    categorie: 'equipements-transfert',
    secteurs: ['demenagement'],
    icon: 'TruckIcon',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines 2006/42/CE',
        'Capacité de charge nominale ≥ 200 kg',
        'Dispositif anti-chute et arrêt d\'urgence accessible',
        'Stabilisateurs / calages de sécurité du véhicule support',
        'Vitesse de levage contrôlée (≤ 0,25 m/s en charge)',
        'Plate-forme ou tapis de guidage anti-glissement',
        'Commande depuis le bas et depuis la plate-forme',
      ],
      formation: [
        'Formation à la conduite et à la mise en sécurité du monte-meubles',
        'Habilitation des opérateurs par l\'employeur',
        'Notice d\'utilisation en français',
      ],
      amenagement: [
        'Vérification de l\'état du sol avant déploiement (portance)',
        'Balisage de la zone au sol sous la charge',
        'Vérification périodique annuelle par organisme habilité',
        'Contrôle de l\'état des câbles et courroies avant chaque chantier',
      ],
      exclusions: [
        'Nacelles élévatrices de personnel',
        'Grues auxiliaires de camion (HIAB)',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'monte-plats',
    nom: 'Monte-plats',
    description: 'Transport vertical mécanisé entre étages.',
    descriptionComplete: 'Le monte-plats est un équipement de manutention verticale destiné au transport de charges entre les étages d\'un établissement. Il supprime le port de charges dans les escaliers et réduit les déplacements répétitifs avec charges pour le personnel de restauration, d\'hôtellerie ou d\'établissements de santé.',
    subvention: 'FIPU',
    categorie: 'equipements-transfert',
    secteurs: ['restauration-metiers-bouche'],
    icon: 'ChefHat',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines 2006/42/CE',
        'Cabine ou plateau avec capacité de charge ≥ 50 kg',
        'Portes ou grilles de sécurité aux paliers (condamnation électrique)',
        'Dispositif anti-surcharge',
        'Arrêt d\'urgence accessible à chaque niveau',
        'Matériaux alimentaires (inox ou revêtement compatible hygiène)',
      ],
      formation: [
        'Formation du personnel utilisateur',
        'Notice d\'utilisation affichée à proximité de l\'équipement',
        'Registre d\'entretien tenu à jour',
      ],
      amenagement: [
        'Installation par entreprise agréée avec remise d\'un dossier technique',
        'Contrôle initial par organisme habilité',
        'Vérifications périodiques selon réglementation ascenseurs/monte-charges',
        'Nettoyage et désinfection réguliers selon protocole hygiène',
      ],
      exclusions: [
        'Monte-charges accessibles aux personnes (ascenseurs)',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'monte-materiaux',
    nom: 'Monte-matériaux',
    description: 'Levage vertical de matériaux de chantier.',
    descriptionComplete: 'Le monte-matériaux est un appareil de levage de chantier motorisé destiné au transport vertical de matériaux (parpaings, sacs de ciment, plâtre, tuiles, etc.). Il supprime le port répétitif de charges lourdes dans les escaliers de chantier, réduisant les risques de TMS dorsaux et articulaires des compagnons.',
    subvention: 'FIPU',
    categorie: 'equipements-transfert',
    secteurs: ['construction-btp'],
    icon: 'Building',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines 2006/42/CE',
        'Capacité de charge nominale ≥ 150 kg',
        'Système anti-chute de plate-forme ou de nacette',
        'Stabilisateurs de pied réglables en hauteur',
        'Commande unimanuelle avec maintien de l\'action',
        'Limiteur de course en position haute',
      ],
      formation: [
        'Formation à l\'utilisation et à la mise en sécurité du monte-matériaux',
        'Notice d\'utilisation en français disponible sur le chantier',
        'Contrôle avant première mise en service sur chaque chantier',
      ],
      amenagement: [
        'Ancrage ou lestage selon préconisations fabricant',
        'Balisage de la zone de chute potentielle',
        'Contrôle de l\'état du câble de levage avant chaque montage',
        'Vérification générale périodique annuelle',
      ],
      exclusions: [
        'Engins de chantier (grues à tour, grues mobiles)',
        'Nacelles de personnes',
      ],
    },
    distributeurs: [],
  },

  // ─────────────────────────────────────────────────────────────
  // ÉQUIPEMENTS ROULANTS
  // ─────────────────────────────────────────────────────────────
  {
    id: 'tracteur-pousseur',
    nom: 'Tracteur pousseur électrique',
    description: 'Tracteur électrique pour charges roulantes.',
    descriptionComplete: 'Le tracteur pousseur électrique est un engin motorisé indépendant qui vient s\'accoupler aux charges roulantes pour les tracter ou les pousser. Il permet de déplacer des rolls, chariots, remorques et palettes sur roues sans effort musculaire, supprimant les contraintes de poussée et traction manuelle — facteur majeur de TMS des membres supérieurs et du dos dans les secteurs logistiques, industriels et alimentaires.',
    subvention: 'FIPU',
    categorie: 'equipements-roulants',
    secteurs: ['logistique-entreposage', 'industrie'],
    icon: 'Zap',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines 2006/42/CE',
        'Capacité de traction ≥ 500 kg',
        'Batterie rechargeable (lithium-ion ou plomb-acide étanche) — autonomie ≥ 4h',
        'Frein automatique à l\'arrêt de la commande (homme-mort)',
        'Vitesse maximale ≤ 6 km/h en charge',
        'Protection IP ≥ 54 (résistance aux projections)',
        'Système d\'attelage ou d\'accouplement normalisé',
      ],
      formation: [
        'Formation à la conduite et à la recharge de la batterie',
        'Notice d\'utilisation en français',
        'Carnet d\'entretien',
      ],
      amenagement: [
        'Sol en bon état (sans obstacles, revêtement adapté)',
        'Station de charge dédiée avec prise électrique dédiée',
        'Entretien selon préconisations du fabricant',
      ],
      exclusions: [
        'Engins à conducteur porté (chariots élévateurs — catégorie séparée)',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'timon-electrique',
    nom: 'Timon électrique',
    description: 'Bras motorisé pour propulsion de chariots.',
    descriptionComplete: 'Le timon électrique est un dispositif motorisé qui s\'adapte sur un chariot existant ou une palette pour en assurer la propulsion. Contrairement au tracteur pousseur, il reste solidaire de la charge et ne nécessite pas d\'attelage séparé. Il supprime les efforts de poussée répétitifs, particulièrement présents dans la logistique, la distribution et l\'industrie.',
    subvention: 'FIPU',
    categorie: 'equipements-roulants',
    secteurs: ['logistique-entreposage', 'industrie'],
    icon: 'Zap',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines 2006/42/CE',
        'Capacité de poussée adaptée à la charge nominale du chariot',
        'Batterie rechargeable intégrée — autonomie ≥ 4h',
        'Commande de type "homme-mort" (arrêt automatique au lâcher)',
        'Vitesse maximale ≤ 6 km/h en charge',
        'Fixation sécurisée sur le chariot ou la palette support',
      ],
      formation: [
        'Formation à l\'utilisation et à la recharge de la batterie',
        'Notice d\'utilisation en français',
        'Carnet d\'entretien',
      ],
      amenagement: [
        'Sol en bon état (sans obstacles, revêtement adapté)',
        'Station de charge dédiée',
        'Entretien selon préconisations du fabricant',
      ],
      exclusions: [
        'Chariots élévateurs à conducteur porté (catégorie séparée)',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'roues-motorisees',
    nom: 'Roues motorisées',
    description: 'Module électrique pour motoriser un chariot.',
    descriptionComplete: 'Les roues motorisées sont des modules électriques qui se fixent ou remplacent les roues directrices d\'un chariot existant, lui conférant une propulsion électrique. Elles transforment n\'importe quel chariot manuel en chariot motorisé, supprimant les efforts de poussée sur sol plat et en pente.',
    subvention: 'FIPU',
    categorie: 'equipements-roulants',
    secteurs: ['industrie'],
    icon: 'Circle',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines',
        'Batterie rechargeable intégrée — autonomie ≥ 8h d\'utilisation normale',
        'Commande de type "homme-mort" (arrêt automatique au lâcher)',
        'Vitesse limitée ≤ 4 km/h en charge',
        'Fixation robuste et irréversible sur le chariot support',
        'Compatibilité vérifiée avec la charge nominale du chariot support',
      ],
      formation: [
        'Formation à l\'utilisation et à la recharge',
        'Notice en français',
      ],
      amenagement: [
        'Vérification de la compatibilité du chariot support',
        'Sol adapté à la circulation du chariot motorisé',
        'Entretien préventif selon préconisations fabricant',
      ],
      exclusions: [
        'Modules de propulsion pour véhicules de manutention à conducteur porté',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'diable-monte-escalier',
    nom: 'Diables monte-escaliers électriques',
    description: 'Diable électrique pour escaliers chargés.',
    descriptionComplete: 'Le diable monte-escalier électrique est équipé d\'un système de roues en chenille ou triangulé qui lui permet de monter et descendre des escaliers avec des charges lourdes. Il supprime l\'effort musculaire intense du transport de charges dans les escaliers, très fréquent dans les secteurs du déménagement, de la livraison et du BTP.',
    subvention: 'FIPU',
    categorie: 'equipements-roulants',
    secteurs: ['demenagement', 'construction-btp', 'logistique-entreposage'],
    icon: 'MoveUp',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines 2006/42/CE',
        'Capacité de charge ≥ 100 kg',
        'Mécanisme d\'assistance électrique pour la montée et la descente d\'escaliers',
        'Système d\'accrochage ou de sangles pour maintien de la charge',
        'Batterie rechargeable — autonomie ≥ 3h',
        'Frein de descente contrôlé (pas de chute libre)',
        'Poignées ergonomiques antidérapantes',
      ],
      formation: [
        'Formation à la conduite sur escalier (gestes et postures)',
        'Notice d\'utilisation en français',
      ],
      amenagement: [
        'Vérification de la largeur des escaliers (≥ 80 cm recommandé)',
        'Entretien des roues et de la batterie',
      ],
      exclusions: [
        'Diables manuels sans assistance électrique',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'brouette-electrique',
    nom: 'Brouettes électriques',
    description: 'Brouette motorisée pour matériaux lourds.',
    descriptionComplete: 'La brouette électrique est motorisée pour la propulsion et parfois pour le basculement de la benne. Elle supprime les efforts de poussée et de levage répétitifs, causes fréquentes de TMS lombaires et des membres supérieurs sur les chantiers BTP et dans les espaces verts.',
    subvention: 'FIPU',
    categorie: 'equipements-roulants',
    secteurs: ['construction-btp', 'industrie'],
    icon: 'Leaf',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines',
        'Capacité de charge ≥ 150 kg',
        'Motorisation électrique de la propulsion (avant ou arrière)',
        'Vitesse maximale ≤ 5 km/h sur terrain plat',
        'Batterie rechargeable — autonomie ≥ 4h',
        'Frein de sécurité automatique',
        'Option benne basculante motorisée (préférable)',
      ],
      formation: [
        'Formation à la conduite et à l\'entretien de la batterie',
        'Notice d\'utilisation en français',
      ],
      amenagement: [
        'Sol adapté (pas de terrain trop accidenté dépassant les spécifications)',
        'Station de charge dédiée',
      ],
      exclusions: [
        'Brouettes manuelles',
        'Mini-dumpers à conducteur porté (catégorie engins de chantier)',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'transpalette-electrique',
    nom: 'Transpalette électrique (≤ 2 T)',
    description: 'Transpalette électrique pour palettes, ≤ 2 T.',
    descriptionComplete: 'Le transpalette électrique permet de déplacer des charges palettisées sur sol plat sans aucun effort. Le conducteur marche derrière l\'engin et pilote via la poignée de traction. Idéal pour les entrepôts, grandes surfaces et industries de logistique, il supprime les contraintes lombaires liées à la manutention manuelle.',
    subvention: 'FIPU',
    categorie: 'equipements-roulants',
    secteurs: ['logistique-entreposage', 'industrie'],
    icon: 'Package',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines 2006/42/CE',
        'Capacité de charge ≤ 2 000 kg',
        'Motorisation électrique (batterie plomb ou lithium)',
        'Dispositif "homme-mort" sur poignée de conduite',
        'Frein automatique à l\'arrêt',
      ],
      formation: [
        'CACES R489 catégorie 1A obligatoire pour les conducteurs',
        'Autorisation de conduite délivrée par l\'employeur',
        'Notice d\'utilisation en français',
      ],
      amenagement: [
        'Sol en béton ou revêtement adapté à la charge nominale',
        'Station de charge sécurisée',
        'Entretien périodique par technicien agréé',
      ],
      exclusions: [
        'Transpalettes manuels',
        'Chariots de capacité supérieure à 2 tonnes',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'gerbeur-electrique',
    nom: 'Gerbeur électrique (≤ 2 T)',
    description: 'Gerbeur électrique pour palettes en hauteur.',
    descriptionComplete: 'Le gerbeur électrique permet de soulever et d\'empiler des charges palettisées en hauteur sans effort physique. Le conducteur accompagne l\'engin à pied. Il est indispensable dans les entrepôts à racks pour limiter les TMS liés au port de charges et aux postures contraignantes.',
    subvention: 'FIPU',
    categorie: 'equipements-roulants',
    secteurs: ['logistique-entreposage', 'industrie'],
    icon: 'Package',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines 2006/42/CE',
        'Capacité de charge ≤ 2 000 kg',
        'Motorisation électrique (batterie plomb ou lithium)',
        'Hauteur de levée ≥ 1,60 m',
        'Dispositif "homme-mort" sur poignée de conduite',
        'Frein automatique à l\'arrêt',
      ],
      formation: [
        'CACES R489 catégorie 1B obligatoire pour les conducteurs',
        'Autorisation de conduite délivrée par l\'employeur',
        'Notice d\'utilisation en français',
      ],
      amenagement: [
        'Sol en béton ou revêtement adapté à la charge nominale',
        'Allées de circulation adaptées à la largeur de l\'engin',
        'Station de charge sécurisée',
        'Entretien périodique par technicien agréé',
      ],
      exclusions: [
        'Gerbeurs manuels',
        'Chariots de capacité supérieure à 2 tonnes',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'chariot-conducteur-porte',
    nom: 'Chariot Élévateur (≤ 2 T)',
    description: 'Chariot élévateur à conducteur porté, ≤ 2 T.',
    descriptionComplete: 'Le chariot à conducteur porté (transpalette à plateforme, gerbeur à nacelle) transporte le conducteur sur l\'engin, réduisant la fatigue sur les longues distances. Il est adapté aux grands entrepôts et plateformes logistiques. La motorisation électrique supprime toute pénibilité de manutention.',
    subvention: 'FIPU',
    categorie: 'equipements-roulants',
    secteurs: ['logistique-entreposage', 'industrie'],
    icon: 'Truck',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines 2006/42/CE',
        'Capacité de charge ≤ 2 000 kg',
        'Plateforme conducteur avec protection latérale et garde-corps',
        'Détecteur de présence conducteur (homme-mort)',
        'Vitesse maximale adaptée à la configuration',
        'Frein automatique et dispositif anti-renversement',
      ],
      formation: [
        'CACES R489 catégorie 1B obligatoire pour les conducteurs',
        'Autorisation de conduite délivrée par l\'employeur',
        'Formation aux règles de circulation interne',
        'Notice d\'utilisation en français',
      ],
      amenagement: [
        'Sol en béton ou revêtement adapté',
        'Allées de circulation dimensionnées pour le gabarit de l\'engin',
        'Station de charge dédiée et ventilée',
        'Vérifications générales périodiques annuelles',
      ],
      exclusions: [
        'Chariots de capacité supérieure à 2 tonnes',
        'Chariots thermiques',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'roll-niveau-constant',
    nom: 'Rolls à niveau constant',
    description: 'Roll auto-remontant pour éviter les flexions en picking.',
    descriptionComplete: 'Le roll à niveau constant (ou roll auto-remontant) maintient automatiquement le fond du roll à hauteur constante grâce à un système de ressort ou pneumatique. Il évite les flexions répétitives du dos lors du picking, du chargement et du déchargement. Particulièrement utilisé en logistique et dans les plateformes de distribution.',
    subvention: 'FIPU',
    categorie: 'equipements-roulants',
    secteurs: ['restauration-metiers-bouche'],
    icon: 'Layers',
    eligibilite: {
      conception: [
        'Marquage CE',
        'Système de compensation de charge (ressort ou pneumatique) maintenant le fond à hauteur fixe (± 5 cm)',
        'Capacité de charge utile ≥ 100 kg',
        'Roulettes pivotantes avec freins sur au moins 2 roues',
        'Structure acier ou inox — résistance à la corrosion',
      ],
      formation: [
        'Information du personnel sur le bon usage des niveaux constants',
        'Notice d\'utilisation disponible sur le poste de travail',
      ],
      amenagement: [
        'Sol plat et propre (revêtement adapté aux roulettes)',
        'Vérification régulière de l\'état du mécanisme de compensation',
      ],
      exclusions: [
        'Rolls manuels sans système de compensation de charge',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'bac-niveau-constant',
    nom: 'Bacs à niveau constant',
    description: 'Bac auto-remontant à niveau constant pour le picking.',
    descriptionComplete: 'Le bac à niveau constant maintient automatiquement les pièces ou articles à hauteur de prise constante grâce à un système de ressort ou pneumatique intégré sous le fond. Il supprime les postures en flexion profonde lors du picking répétitif et améliore les conditions ergonomiques aux postes de préparation de commandes et de conditionnement.',
    subvention: 'FIPU',
    categorie: 'equipements-roulants',
    secteurs: ['restauration-metiers-bouche'],
    icon: 'Layers',
    eligibilite: {
      conception: [
        'Marquage CE',
        'Système de compensation de charge (ressort ou pneumatique) maintenant le fond à hauteur fixe (± 5 cm)',
        'Capacité de charge utile ≥ 50 kg',
        'Structure acier ou inox — résistance à la corrosion',
      ],
      formation: [
        'Information du personnel sur le bon usage des niveaux constants',
        'Notice d\'utilisation disponible sur le poste de travail',
      ],
      amenagement: [
        'Vérification régulière de l\'état du mécanisme de compensation',
      ],
      exclusions: [
        'Bacs fixes sans système de compensation de charge',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'chariot-picking-niveau-constant',
    nom: 'Chariots de picking à niveau constant',
    description: 'Chariot de picking à plan de travail constant.',
    descriptionComplete: 'Le chariot de picking à niveau constant maintient automatiquement la surface de préparation à hauteur optimale de travail grâce à un système de ressort ou pneumatique. Il évite les flexions répétitives du dos lors des opérations de picking en entrepôt ou en cuisine. Sa mobilité sur roulettes permet de déplacer le poste de travail au plus près des zones de prélèvement.',
    subvention: 'FIPU',
    categorie: 'equipements-roulants',
    secteurs: ['restauration-metiers-bouche'],
    icon: 'Layers',
    eligibilite: {
      conception: [
        'Marquage CE',
        'Système de compensation de charge (ressort ou pneumatique) maintenant le plan de travail à hauteur fixe (± 5 cm)',
        'Capacité de charge utile ≥ 100 kg',
        'Roulettes pivotantes avec freins sur au moins 2 roues',
        'Structure acier ou inox — résistance à la corrosion',
      ],
      formation: [
        'Information du personnel sur le bon usage des niveaux constants',
        'Notice d\'utilisation disponible sur le poste de travail',
      ],
      amenagement: [
        'Sol plat et propre (revêtement adapté aux roulettes)',
        'Vérification régulière de l\'état du mécanisme de compensation',
      ],
      exclusions: [
        'Chariots manuels sans système de compensation de charge',
      ],
    },
    distributeurs: [],
  },

  // ─────────────────────────────────────────────────────────────
  // PLANS DE TRAVAIL RÉGLABLES EN HAUTEUR
  // ─────────────────────────────────────────────────────────────
  {
    id: 'table-elevatrice-motorisee',
    nom: 'Tables élévatrices motorisées — Industrie / Construction',
    description: 'Table motorisée réglable pour l\'industrie.',
    descriptionComplete: 'La table élévatrice motorisée permet de régler en hauteur le plan de travail pour l\'adapter à chaque opérateur et à chaque tâche (debout, assis-debout, assis). Elle supprime les postures en flexion ou extension du tronc, principales causes de TMS dorsaux et cervicaux dans l\'industrie et le BTP.',
    subvention: 'FIPU',
    categorie: 'plans-travail-reglables',
    secteurs: ['industrie', 'construction-btp'],
    icon: 'SlidersHorizontal',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines 2006/42/CE',
        'Plage de réglage en hauteur ≥ 400 mm (ex : 650–1050 mm)',
        'Motorisation électrique (pas de manivelle ou vérin hydraulique manuel)',
        'Vitesse de déplacement ≤ 0,08 m/s',
        'Dispositif anti-écrasement sous le plateau (protection des membres inférieurs)',
        'Charge nominale ≥ 200 kg sur le plateau',
        'Stabilité garantie à toutes les hauteurs d\'utilisation',
        'Commande par bouton-poussoir ou pédale de commande',
      ],
      formation: [
        'Formation du personnel à la réglementation du poste de travail',
        'Notice d\'utilisation en français',
        'Carnet de maintenance',
      ],
      amenagement: [
        'Alimentation électrique sécurisée (câble protégé ou rail de sol)',
        'Dégagement suffisant autour du poste pour l\'ensemble de la plage de réglage',
        'Contrôle annuel du système motorisé',
      ],
      exclusions: [
        'Tables élévatrices à commande manuelle (manivelle, pédale hydraulique)',
        'Tables uniquement destinées au levage de charges sans opérateur',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'table-elevatrice-veterinaire',
    nom: 'Tables élévatrices vétérinaires',
    description: 'Table motorisée réglable pour vétérinaires.',
    descriptionComplete: 'La table vétérinaire élévatrice motorisée permet au praticien de régler la hauteur d\'examen selon la taille de l\'animal et sa propre morphologie. Elle supprime les flexions prolongées du rachis lors des consultations et opérations, très fréquentes dans ce secteur.',
    subvention: 'FIPU',
    categorie: 'plans-travail-reglables',
    secteurs: ['veterinaire'],
    icon: 'Stethoscope',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines et directive Dispositifs médicaux si applicable',
        'Plage de réglage en hauteur ≥ 350 mm',
        'Motorisation électrique avec commande pédale ou interrupteur',
        'Surface antidérapante et lavable',
        'Résistance à la désinfection par produits chimiques',
        'Capacité de charge ≥ 100 kg',
        'Stabilité latérale garantie (pas de basculement)',
      ],
      formation: [
        'Formation à l\'ajustement ergonomique du poste de travail',
        'Notice d\'utilisation',
      ],
      amenagement: [
        'Alimentation électrique sécurisée (commande au pied)',
        'Nettoyage et désinfection selon protocole vétérinaire',
      ],
      exclusions: [
        'Tables à hauteur fixe',
        'Tables à réglage manuel uniquement',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'table-elevatrice-sport',
    nom: 'Tables élévatrices sportives mobiles',
    description: 'Table de massage motorisée et mobile.',
    descriptionComplete: 'La table sportive élévatrice motorisée est conçue pour les kinésithérapeutes du sport, masseurs et préparateurs physiques intervenant sur le terrain ou en salle. Sa légèreté et sa mobilité la distinguent des tables fixes, tout en offrant un réglage motorisé de la hauteur de travail.',
    subvention: 'FIPU',
    categorie: 'plans-travail-reglables',
    secteurs: ['sport'],
    icon: 'Activity',
    eligibilite: {
      conception: [
        'Marquage CE',
        'Réglage motorisé en hauteur — plage ≥ 300 mm',
        'Poids de la table ≤ 25 kg (mobilité)',
        'Roulettes ou poignées de transport',
        'Surface rembourrée lavable',
        'Batterie rechargeable (autonomie ≥ 8h) ou alimentation secteur',
        'Capacité de charge ≥ 180 kg',
      ],
      formation: [
        'Formation à l\'ergonomie du poste de massage/kinésithérapie',
        'Notice d\'utilisation',
      ],
      amenagement: [
        'Vérification régulière de la batterie et du mécanisme de réglage',
        'Nettoyage et désinfection réguliers',
      ],
      exclusions: [
        'Tables de massage à hauteur fixe',
        'Tables à réglage manuel (manivelle ou vérin hydraulique à pédale)',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'table-elevatrice-medicale',
    nom: 'Tables élévatrices médicales, paramédicales et de massage',
    description: 'Table d\'examen motorisée pour soins médicaux.',
    descriptionComplete: 'La table d\'examen médicale ou paramédicale motorisée permet au praticien de régler la hauteur de travail selon la tâche et sa morphologie. Elle réduit les flexions du dos lors des soins prolongés (ostéopathie, kinésithérapie, soins infirmiers) et améliore le confort du patient.',
    subvention: 'FIPU',
    categorie: 'plans-travail-reglables',
    secteurs: ['medical-paramedical'],
    icon: 'Heart',
    eligibilite: {
      conception: [
        'Marquage CE — directive Dispositifs médicaux (MDR 2017/745) si applicable',
        'Plage de réglage en hauteur ≥ 350 mm',
        'Commande par interrupteur au pied ou à la main',
        'Surface lavable et résistante aux désinfectants',
        'Capacité de charge ≥ 150 kg',
        'Sections inclinables (dossier, pied) pour certaines spécialités',
      ],
      formation: [
        'Formation à l\'ajustement du poste de soins',
        'Notice d\'utilisation en français',
      ],
      amenagement: [
        'Alimentation secteur sécurisée ou batterie rechargeable',
        'Entretien du mécanisme selon préconisations fabricant',
      ],
      exclusions: [
        'Tables à réglage manuel',
        'Tables à hauteur fixe',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'table-elevatrice-puericulture',
    nom: 'Tables élévatrices puériculture',
    description: 'Table à langer motorisée réglable.',
    descriptionComplete: 'La table à langer motorisée permet au professionnel de la petite enfance de régler la hauteur du plan de soins selon sa morphologie, supprimant les flexions prolongées du rachis lors du change et des soins aux nourrissons — l\'une des causes majeures de TMS dans le secteur de la puériculture.',
    subvention: 'FIPU',
    categorie: 'plans-travail-reglables',
    secteurs: ['puericulture'],
    icon: 'Baby',
    eligibilite: {
      conception: [
        'Marquage CE',
        'Plage de réglage ≥ 300 mm',
        'Motorisation électrique avec commande au genou ou au pied (mains libres)',
        'Rebords de sécurité latéraux pour le nourrisson',
        'Surface imperméable et lavable',
        'Capacité de charge ≥ 30 kg (nourrisson + matériel)',
        'Matériaux non toxiques certifiés',
      ],
      formation: [
        'Formation à l\'ergonomie du change et des soins',
        'Notice d\'utilisation',
      ],
      amenagement: [
        'Alimentation électrique sécurisée',
        'Nettoyage et désinfection selon protocole établissement',
      ],
      exclusions: [
        'Tables à langer à hauteur fixe',
        'Tables à réglage manuel',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'plateforme-maconner',
    nom: 'Plateformes à maçonner',
    description: 'Plate-forme réglable en hauteur pour maçons.',
    descriptionComplete: 'La plate-forme à maçonner réglable en hauteur permet d\'adapter en permanence le plan de travail à la hauteur du mur en cours d\'élévation. Elle supprime les postures extrêmes (travail les bras levés ou en flexion profonde) et réduit les risques de chute de plain-pied.',
    subvention: 'FIPU',
    categorie: 'plans-travail-reglables',
    secteurs: ['construction-btp'],
    icon: 'Layers',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines et/ou directive EPI selon configuration',
        'Plage de réglage en hauteur ≥ 600 mm',
        'Garde-corps ou lisse de sécurité si hauteur > 1 m',
        'Surface de travail antidérapante',
        'Système de blocage à chaque palier (anti-affaissement)',
        'Capacité de charge ≥ 250 kg/m²',
        'Roues de déplacement avec blocage',
      ],
      formation: [
        'Formation à l\'utilisation des équipements de travail en hauteur',
        'Notice d\'utilisation',
      ],
      amenagement: [
        'Vérification de la stabilité du sol avant utilisation',
        'Contrôle de l\'état des éléments porteurs avant chaque montage',
      ],
      exclusions: [
        'Échafaudages fixes de grande hauteur (réglementation distincte)',
        'Tréteaux sans système de réglage en hauteur',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'recette-materiaux',
    nom: 'Recettes à matériaux',
    description: 'Plate-forme pour réception de matériaux.',
    descriptionComplete: 'La recette à matériaux est une plate-forme de chantier intégrée à l\'échafaudage permettant de réceptionner les matériaux livrés par la grue ou le monte-matériaux. Les modèles à réglage motorisé supprimant les manutentions manuelles répétitives lors du déchargement.',
    subvention: 'FIPU',
    categorie: 'plans-travail-reglables',
    secteurs: ['construction-btp'],
    icon: 'Construction',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines',
        'Capacité de charge nominale ≥ 500 kg',
        'Bordures anti-chute des matériaux sur 3 côtés',
        'Dispositif de blocage en position de travail',
        'Système de fixation sécurisé à l\'échafaudage',
      ],
      formation: [
        'Formation à la sécurité des plates-formes de chantier',
        'Notice d\'utilisation',
      ],
      amenagement: [
        'Vérification de la fixation à chaque dépose',
        'Contrôle des éléments de suspension ou d\'ancrage',
      ],
      exclusions: [
        'Plates-formes sans délimitation de charge nominale',
      ],
    },
    distributeurs: [],
  },

  // ─────────────────────────────────────────────────────────────
  // OUTILS PORTATIFS ET ÉQUIPEMENTS ANTI-VIBRATIONS
  // ─────────────────────────────────────────────────────────────
  {
    id: 'meuleuse-portative',
    nom: 'Meuleuses portatives à faibles vibrations',
    description: 'Meuleuse portative anti-vibrations main-bras.',
    descriptionComplete: 'Les meuleuses portatives à faibles vibrations intègrent des systèmes d\'isolation dynamique (masse amortissante, poignées découplées) qui réduisent la transmission des vibrations aux mains et bras de l\'opérateur. L\'exposition aux vibrations main-bras (VMB) est l\'une des causes du syndrome du canal carpien et de la maladie des os et articulations.',
    subvention: 'FIPU',
    categorie: 'outils-portatifs-vibrations',
    secteurs: ['industrie', 'construction-btp'],
    icon: 'Settings',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines 2006/42/CE',
        'Valeur d\'émission des vibrations main-bras ≤ 5 m/s² (valeur déclarée constructeur)',
        'Poignée supplémentaire anti-vibrations découplée',
        'Déclencheur de sécurité (coupe-circuit au lâcher)',
        'Disques de meulage CE et adaptés à la vitesse de l\'outil',
        'Protège-disque réglable',
      ],
      formation: [
        'Formation aux risques vibratoires et gestes de prévention',
        'Notice d\'utilisation incluant les niveaux de vibrations',
        'Évaluation de l\'exposition quotidienne (calcul A(8))',
      ],
      amenagement: [
        'Rotation des postes de travail pour limiter les durées d\'exposition',
        'Entretien régulier des disques et roulements',
        'Remplacement des disques usés systématique',
      ],
      exclusions: [
        'Meuleuses non équipées de système anti-vibrations',
        'Tronçonneuses et scies circulaires (catégorie distincte)',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'ponceuse-polisseuse',
    nom: 'Ponceuses et polisseuses portatives à faibles vibrations',
    description: 'Ponceuses portatives anti-vibrations.',
    descriptionComplete: 'Les ponceuses orbitales, excentrées et les polisseuses à faibles vibrations permettent de réduire l\'exposition aux vibrations main-bras lors des opérations de ponçage et finition. Elles réduisent les risques de troubles vasculaires (syndrome de Raynaud) et ostéo-articulaires.',
    subvention: 'FIPU',
    categorie: 'outils-portatifs-vibrations',
    secteurs: ['industrie', 'construction-btp'],
    icon: 'Wind',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines',
        'Niveau de vibrations main-bras ≤ 4 m/s² (valeur déclarée)',
        'Poignée ergonomique avec isolation anti-vibrations',
        'Système d\'aspiration intégré ou connexion aspirateur',
        'Interrupteur de sécurité',
      ],
      formation: [
        'Formation aux risques vibratoires',
        'Notice d\'utilisation avec données vibratoires',
        'Évaluation de l\'exposition quotidienne',
      ],
      amenagement: [
        'Rotation des postes et limitation des durées d\'exposition',
        'Entretien des plateaux et abrasifs',
      ],
      exclusions: [
        'Ponceuses sans système anti-vibrations déclaré',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'machine-serrage-portative',
    nom: 'Machines de serrage portatives à faibles vibrations',
    description: 'Visseuses portatives à vibrations réduites.',
    descriptionComplete: 'Les machines de serrage portatives à faibles vibrations (boulonneuses, visseuses à impulsion) réduisent à la fois les vibrations transmises et la force de réaction lors du serrage. Elles protègent les poignets, les coudes et les épaules des techniciens de maintenance et des mécaniciens.',
    subvention: 'FIPU',
    categorie: 'outils-portatifs-vibrations',
    secteurs: ['industrie', 'automobile'],
    icon: 'Wrench',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines',
        'Valeur de vibrations ≤ 2,5 m/s² en fonctionnement normal',
        'Limiteur de couple intégré (protection anti-rebond)',
        'Technologie à impulsion hydraulique ou autre système de réduction de la réaction',
        'Prise en main ergonomique',
      ],
      formation: [
        'Formation aux risques vibratoires et TMS membres supérieurs',
        'Notice d\'utilisation avec données vibratoires',
        'Évaluation A(8)',
      ],
      amenagement: [
        'Entretien régulier du mécanisme de frappe',
        'Remplacement des accessoires usés',
      ],
      exclusions: [
        'Outils à choc sans limiteur de réaction',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'siege-suspension',
    nom: 'Sièges à suspension',
    description: 'Siège à suspension anti-vibrations sol.',
    descriptionComplete: 'Les sièges à suspension sont conçus pour les conducteurs d\'engins de chantier, de chariots élévateurs, de camions ou pour les postes de travail avec vibrations du sol. Ils filtrent les vibrations basses fréquences (corps entier) qui causent les lombalgies et pathologies discales.',
    subvention: 'FIPU',
    categorie: 'outils-portatifs-vibrations',
    secteurs: ['transport', 'industrie', 'construction-btp', 'logistique-entreposage'],
    icon: 'Armchair',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines',
        'Fréquence de résonance du siège ≤ 1,5 Hz',
        'Valeur de transmissibilité des vibrations (SEAT value) ≤ 1 (atténuation effective)',
        'Réglage en hauteur et profondeur d\'assise',
        'Réglage de la dureté de suspension selon le poids du conducteur',
        'Ceinture de sécurité 3 points si requis',
        'Accoudoirs réglables',
      ],
      formation: [
        'Formation au réglage du siège selon le poids et la morphologie',
        'Notice d\'utilisation',
      ],
      amenagement: [
        'Contrôle régulier de l\'état du mécanisme de suspension',
        'Remplacement si dégradation de la suspension',
      ],
      exclusions: [
        'Sièges sans système de suspension anti-vibrations',
        'Sièges de bureau sédentaires',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'compactage-telecommande',
    nom: 'Matériels de compactage télécommandés',
    description: 'Engins de compactage télécommandés.',
    descriptionComplete: 'Les engins de compactage télécommandés (plaques vibrantes, rouleaux tandem) permettent à l\'opérateur de rester à distance de la source vibratoire. Cette suppression à la source est la mesure de prévention la plus efficace contre les vibrations corps entier et main-bras sur les chantiers de voirie et terrassement.',
    subvention: 'FIPU',
    categorie: 'outils-portatifs-vibrations',
    secteurs: ['construction-btp'],
    icon: 'Radio',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines',
        'Système de télécommande homologué CE (portée ≥ 50 m)',
        'Arrêt d\'urgence sur la télécommande et sur l\'engin',
        'Sécurité en cas de perte de signal (arrêt automatique)',
        'Absence de vibrations sur le boîtier de télécommande (<2,5 m/s²)',
      ],
      formation: [
        'Formation à la conduite à distance et aux risques résiduels',
        'Notice d\'utilisation',
        'Formation aux situations d\'urgence (défaillance de la télécommande)',
      ],
      amenagement: [
        'Entretien du système de télécommande et des antennes',
        'Vérification de la portée radio sur le chantier',
      ],
      exclusions: [
        'Engins de compactage à conducteur marchant non télécommandés',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'demolition-electrique-telecommande',
    nom: 'Matériels de démolition électriques télécommandés',
    description: 'Robots de démolition télécommandés.',
    descriptionComplete: 'Les robots de démolition électriques télécommandés permettent d\'effectuer des travaux de démolition (piquage, cassage, dépose) à distance, supprimant l\'exposition aux vibrations, à la poussière et aux risques de chute de matériaux pour l\'opérateur. Ils sont particulièrement adaptés aux travaux en espaces confinés ou en hauteur.',
    subvention: 'FIPU',
    categorie: 'outils-portatifs-vibrations',
    secteurs: ['construction-btp'],
    icon: 'Hammer',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines',
        'Motorisation 100% électrique (zéro émission, faible bruit)',
        'Télécommande CE avec arrêt d\'urgence et sécurité perte de signal',
        'Stabilisation automatique sur terrain en pente',
        'Absence de vibrations sur la télécommande',
      ],
      formation: [
        'Formation à la conduite à distance de robot de démolition',
        'Formation aux risques résiduels (projection de matériaux)',
        'Notice d\'utilisation',
      ],
      amenagement: [
        'Balisage de la zone de projection des matériaux',
        'Entretien régulier de l\'équipement et de la télécommande',
        'Recharge de la batterie sur secteur dédié',
      ],
      exclusions: [
        'Engins de démolition thermiques',
        'Marteaux-piqueurs portés par opérateur',
      ],
    },
    distributeurs: [],
  },

  // ─────────────────────────────────────────────────────────────
  // ÉQUIPEMENTS SPÉCIFIQUES
  // ─────────────────────────────────────────────────────────────
  {
    id: 'filmeuse-housseuse',
    nom: 'Filmeuses et housseuses automatiques',
    description: 'Filmeuse automatique de palettes.',
    descriptionComplete: 'Les filmeuses et housseuses automatiques ou semi-automatiques remplacent le filmage manuel à la ronde des palettes. Elles suppriment les déplacements répétitifs et les gestes en torsion du tronc lors du filmage, prévenant les TMS lombaires et des membres supérieurs dans les entrepôts et les industries agro-alimentaires.',
    subvention: 'FIPU',
    categorie: 'equipements-specifiques',
    secteurs: ['logistique-entreposage', 'industrie'],
    icon: 'PackageCheck',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines 2006/42/CE',
        'Automatisation du cycle de filmage (pas d\'intervention manuelle pendant le cycle)',
        'Capteur de présence et arrêt d\'urgence accessibles',
        'Hauteur de la tour réglable ou tête rotative couvrant l\'ensemble de la palette',
        'Tension du film réglable sans effort',
        'Pré-étirement du film ≥ 200% (économie de film)',
      ],
      formation: [
        'Formation à la conduite, au changement de bobine et au nettoyage',
        'Notice d\'utilisation en français',
      ],
      amenagement: [
        'Dégagement de 1 m autour de la machine pendant le cycle',
        'Sol plat et propre',
        'Entretien du bras et des rouleaux selon préconisations',
      ],
      exclusions: [
        'Filmeuses manuelles (sans motorisation de rotation)',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'pont-de-carrossier',
    nom: 'Pont de carrossier',
    description: 'Pont de carrossier pour véhicule léger ≤ 3,5 T.',
    descriptionComplete: 'Le pont de carrossier permet de travailler sur la carrosserie d\'un véhicule léger (≤ 3,5 tonnes) en position ergonomique, supprimant les postures contraignantes lors des opérations de débosselage, peinture et réparation carrosserie. Sont exclus du financement : les ponts élévateurs pour opérations de réparation, les ponts à colonnes et les ponts de redressage à usage exclusif de redressage.',
    subvention: 'FIPU',
    categorie: 'equipements-specifiques',
    secteurs: ['automobile'],
    icon: 'Car',
    eligibilite: {
      conception: [
        'Équipement neuf',
        'Conforme à la directive Machines 2006/42/CE',
        'Conforme à la norme NF EN 1493 « Élévateurs de véhicules »',
        'Capacité de levage limitée aux véhicules ≤ 3,5 tonnes',
        'Hauteur maximum d\'élévation de 1,60 mètre garantie',
        'Système de verrouillage des bras (type « à prise sous coque » avec bras)',
        'Butées de calage et butées de prise sous roues (type « à prise sous roues »)',
      ],
      formation: [
        'Formation à l\'utilisation et aux consignes de sécurité',
        'Notice d\'utilisation en français',
      ],
      amenagement: [
        'Sol adapté aux prescriptions du fabricant',
        'Dégagement conforme autour du pont',
        'Entretien périodique selon les préconisations constructeur',
      ],
      exclusions: [
        'Ponts élévateurs pour opérations de réparation mécanique',
        'Ponts à colonnes',
        'Ponts de redressage à usage exclusif de redressage',
        'Véhicules de plus de 3,5 tonnes',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'bachage-debachage-automatique',
    nom: 'Systèmes de bâchage et débâchage automatiques',
    description: 'Bâchage motorisé depuis le sol ou la cabine.',
    descriptionComplete: 'Les systèmes de bâchage automatique (enrouleurs motorisés, bâches à lames) permettent de couvrir et découvrir les bennes, semi-remorques et billards depuis le sol ou depuis la cabine sans monter sur le véhicule. Ils suppriment les risques de chute de hauteur et les efforts de manutention de la bâche.',
    subvention: 'FIPU',
    categorie: 'equipements-specifiques',
    secteurs: ['transport'],
    icon: 'Layers',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines',
        'Motorisation électrique ou hydraulique de l\'enrouleur',
        'Commande à distance (télécommande ou depuis la cabine)',
        'Arrêt automatique en fin de course',
        'Tension automatique de la bâche',
        'Résistance aux intempéries (IP ≥ 44)',
      ],
      formation: [
        'Formation à l\'utilisation du système et à la sécurité lors des manœuvres',
        'Notice d\'utilisation',
      ],
      amenagement: [
        'Montage sur le véhicule par un installateur agréé',
        'Entretien du mécanisme et de la bâche',
      ],
      exclusions: [
        'Bâches manuelles sans aucune assistance',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'auto-laveuse-compacte',
    nom: 'Auto-laveuses compactes',
    description: 'Auto-laveuse sans effort de lavage.',
    descriptionComplete: 'L\'auto-laveuse compacte combine lavage et séchage du sol en un seul passage. Elle supprime le port de seaux, les gestes répétitifs de lavage et les postures penchées prolongées qui causent les TMS lombaires et des membres supérieurs dans le secteur de la propreté. Les modèles compacts sont accessibles aux petits locaux.',
    subvention: 'FIPU',
    categorie: 'equipements-specifiques',
    secteurs: ['proprete', 'restauration-metiers-bouche', 'logistique-entreposage'],
    icon: 'Sparkles',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines',
        'Motorisation électrique (batterie ou secteur)',
        'Largeur de travail ≥ 40 cm',
        'Aspiration intégrée de l\'eau sale',
        'Poids total en ordre de marche ≤ 60 kg (accessibilité / posture)',
        'Réservoir d\'eau claire et d\'eau sale séparés',
        'Commande ergonomique accessible sans flexion du poignet',
      ],
      formation: [
        'Formation à l\'utilisation, au remplissage et à l\'entretien',
        'Notice d\'utilisation en français',
      ],
      amenagement: [
        'Point d\'eau et d\'évacuation accessible pour remplissage/vidange',
        'Nettoyage quotidien des brosses et de la raclette',
      ],
      exclusions: [
        'Balayeuses sans fonction lavage',
        'Machines à traction thermique',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'demonte-pneus-equilibreuse-leve-roues',
    nom: 'Démonte-pneus, équilibreuses et lève-roues',
    description: 'Poste de pneumaticien motorisé complet.',
    descriptionComplete: 'Le poste complet de pneumaticien comprend le démonte-pneus électrique/pneumatique, l\'équilibreuse électronique et le lève-roue électrique ou pneumatique. Ces équipements suppriment la manutention manuelle de roues lourdes (jusqu\'à 40 kg pour les roues de SUV/utilitaires) et les gestes de force lors du montage et de l\'équilibrage.',
    subvention: 'FIPU',
    categorie: 'equipements-specifiques',
    secteurs: ['automobile'],
    icon: 'CircleDot',
    eligibilite: {
      conception: [
        'Marquage CE sur chaque équipement — directive Machines',
        'Démonte-pneus : bras motorisé, tête plastique (protection jante)',
        'Équilibreuse : mesure dynamique et statique, balourd direct en grammes et position',
        'Lève-roue : capacité ≥ 50 kg, motorisé (électrique ou pneumatique), réglage en hauteur',
        'Raccordement air comprimé ou électrique selon modèle',
      ],
      formation: [
        'Formation au montage/démontage et à l\'équilibrage des pneumatiques',
        'Notice d\'utilisation de chaque équipement',
      ],
      amenagement: [
        'Alimentation air comprimé ou électrique suffisante',
        'Entretien des mâchoires, têtes et capteurs',
      ],
      exclusions: [
        'Démonte-pneus manuels sans assistance motorisée',
        'Équipements pour poids lourds (catégorie distincte)',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'lave-verres-osmoseur',
    nom: 'Lave-verres avec osmoseur',
    description: 'Lave-verres avec osmoseur intégré.',
    descriptionComplete: 'Le lave-verres avec osmoseur intégré permet de laver et rincer les verres à l\'eau osmosée pour un séchage parfait sans essuyage. Il supprime l\'essuyage manuel répétitif, cause de TMS des poignets et des épaules dans la restauration, ainsi que les risques de coupures.',
    subvention: 'FIPU',
    categorie: 'equipements-specifiques',
    secteurs: ['restauration-metiers-bouche'],
    icon: 'GlassWater',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines et directive Basse tension',
        'Osmoseur intégré (TDS eau de rinçage ≤ 10 ppm)',
        'Cycle de lavage complet ≤ 2 minutes',
        'Panier adapté aux verres de différentes tailles',
        'Matériaux inox alimentaire',
        'Température de rinçage ≥ 82°C (désinfection)',
      ],
      formation: [
        'Formation à l\'entretien et au changement des filtres osmoseur',
        'Notice d\'utilisation en français',
      ],
      amenagement: [
        'Raccordement eau et évacuation conforme',
        'Remplacement des membranes osmoseur selon préconisations',
        'Nettoyage quotidien selon protocole HACCP',
      ],
      exclusions: [
        'Lave-verres sans osmoseur (essuyage manuel nécessaire)',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'bac-shampoing-siege-coupe-electrique',
    nom: 'Bacs à shampoing et sièges de coupe électriques',
    description: 'Bacs et sièges motorisés pour coiffeurs.',
    descriptionComplete: 'Les bacs à shampoing motorisés (réglage électrique de la nuque et de l\'inclinaison) et les sièges de coupe électriques (réglage en hauteur) permettent aux coiffeurs d\'adapter le poste de travail à leur morphologie et à celle du client. Ils réduisent les contraintes du rachis cervical et lombaire lors des shampoings et de la coupe.',
    subvention: 'FIPU',
    categorie: 'equipements-specifiques',
    secteurs: ['coiffure'],
    icon: 'Scissors',
    eligibilite: {
      conception: [
        'Marquage CE — directive Basse tension et Machines selon le cas',
        'Bac à shampoing : réglage motorisé de la nuque et/ou de l\'inclinaison',
        'Siège de coupe : réglage électrique en hauteur (plage ≥ 15 cm)',
        'Revêtement lavable, résistant aux produits coiffants',
        'Stabilité garantie à toutes les positions',
        'Câbles électriques protégés contre l\'humidité',
      ],
      formation: [
        'Formation à l\'ajustement ergonomique du poste de coiffure',
        'Notice d\'utilisation en français',
      ],
      amenagement: [
        'Alimentation électrique sécurisée (prise avec mise à la terre)',
        'Nettoyage et entretien régulier selon préconisations fabricant',
      ],
      exclusions: [
        'Bacs à shampoing manuels sans réglage motorisé',
        'Sièges à réglage hydraulique à pédale (non motorisé)',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'vitrine-metiers-bouche',
    nom: 'Vitrines réfrigérées métiers de bouche',
    description: 'Vitrine réfrigérée réglable en hauteur.',
    descriptionComplete: 'Les vitrines réfrigérées à hauteur réglable motorisée permettent aux professionnels des métiers de bouche d\'approvisionner et de présenter leurs produits sans flexions répétitives du rachis. Le réglage en hauteur s\'adapte à la morphologie du vendeur et à la configuration du point de vente.',
    subvention: 'FIPU',
    categorie: 'equipements-specifiques',
    secteurs: ['restauration-metiers-bouche'],
    icon: 'Store',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines et directive Équipements frigorifiques',
        'Réglage motorisé de la hauteur du plan de travail ou d\'accès (≥ 150 mm)',
        'Température de conservation conforme aux normes alimentaires (0–4°C)',
        'Éclairage LED interne adapté à la présentation',
        'Facilité de nettoyage (éléments démontables)',
        'Fluide frigorigène respectueux de l\'environnement',
      ],
      formation: [
        'Formation au réglage et à l\'entretien de la vitrine réfrigérée',
        'Notice d\'utilisation',
        'Formation HACCP si applicable',
      ],
      amenagement: [
        'Raccordement électrique conforme',
        'Entretien du groupe frigorifique selon préconisations',
        'Nettoyage selon protocole hygiène alimentaire',
      ],
      exclusions: [
        'Vitrines réfrigérées à hauteur fixe sans système de réglage',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'rails-manutention-carcasses',
    nom: 'Rails de manutention de carcasses de viande',
    description: 'Rails pour carcasses en chambre froide.',
    descriptionComplete: 'Les rails de manutention de carcasses permettent de faire glisser les quartiers et carcasses de viande horizontalement et verticalement sans porter de charges. Associés à des chariots électriques ou des systèmes de poussée motorisée, ils suppriment les manutentions manuelles de carcasses pouvant atteindre 150 kg.',
    subvention: 'FIPU',
    categorie: 'equipements-specifiques',
    secteurs: ['restauration-metiers-bouche'],
    icon: 'Move',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines',
        'Rails et accessoires en acier inoxydable (contact alimentaire)',
        'Capacité de charge par rail ≥ charge maximale des carcasses manipulées',
        'Roulettes de charge avec blocage antidérive',
        'Raccordement aux systèmes de chambre froide sans rupture thermique',
        'Motorisation possible pour descente des voies obliques',
      ],
      formation: [
        'Formation à la manutention des carcasses sur rail',
        'Formation aux règles d\'hygiène en chambre froide',
        'Notice d\'utilisation et d\'entretien',
      ],
      amenagement: [
        'Vérification de la structure porteuse avant installation',
        'Nettoyage et désinfection selon protocole HACCP',
        'Contrôle périodique des fixations et des roulettes',
      ],
      exclusions: [
        'Crochets fixes sans système de déplacement',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'leve-lit-electrique',
    nom: 'Lève-lits électriques',
    description: 'Lit électrique réglable pour soins.',
    descriptionComplete: 'Le lève-lit électrique permet aux soignants de rehausser le lit à la hauteur optimale pour les soins (réfection du lit, soins infirmiers, kinésithérapie) et de l\'abaisser pour faciliter les entrées et sorties du patient. Il supprime les postures en flexion prolongée du rachis lombaire, cause principale des lombalgies professionnelles dans le secteur sanitaire.',
    subvention: 'FIPU',
    categorie: 'equipements-specifiques',
    secteurs: ['sanitaire-medico-social', 'proprete'],
    icon: 'BedDouble',
    eligibilite: {
      conception: [
        'Marquage CE — directive Machines et/ou directive Dispositifs médicaux selon l\'usage',
        'Plage de réglage en hauteur ≥ 400 mm (position basse ≤ 45 cm, position haute ≥ 85 cm)',
        'Motorisation électrique (pas de manivelle comme unique moyen de réglage)',
        'Commande par télécommande filaire ou à distance (utilisable par le soignant)',
        'Sécurité anti-écrasement sous le châssis',
        'Frein sur les 4 roulettes en position de soin',
        'Positions Trendelenburg et anti-Trendelenburg si applicable',
      ],
      formation: [
        'Formation du personnel soignant à la manipulation du lit et aux positions de travail',
        'Notice d\'utilisation affichée ou disponible',
        'Intégration dans le protocole de prévention des TMS de l\'établissement',
      ],
      amenagement: [
        'Chambre de dimensions suffisantes pour dégager 3 côtés du lit lors des soins',
        'Contrôle annuel du mécanisme motorisé',
        'Entretien et nettoyage selon protocole hygiène',
      ],
      exclusions: [
        'Lits à hauteur fixe',
        'Lits à réglage manuel uniquement (manivelle)',
      ],
    },
    distributeurs: [],
  },
]

export function filterCatalogue(
  catalogue: Materiel[],
  {
    search = '',
    subvention,
    categorie,
    secteurs = [],
  }: {
    search?: string
    subvention?: string
    categorie?: string
    secteurs?: string[]
  }
): Materiel[] {
  const results = catalogue.filter((item) => {
    if (search) {
      const q = search.toLowerCase()
      if (!item.nom.toLowerCase().includes(q) && !item.description.toLowerCase().includes(q)) {
        return false
      }
    }
    if (subvention && item.subvention !== subvention) return false
    if (categorie && item.categorie !== categorie) return false
    if (secteurs.length > 0) {
      const isTousSecteurs = item.secteurs.includes('tous-secteurs')
      const hasAny = secteurs.some((s) => item.secteurs.includes(s as any))
      if (!isTousSecteurs && !hasAny) return false
    }
    return true
  })

  // Si recherche active : titres en premier, descriptions en second
  if (search) {
    const q = search.toLowerCase()
    results.sort((a, b) => {
      const aInTitle = a.nom.toLowerCase().includes(q) ? 0 : 1
      const bInTitle = b.nom.toLowerCase().includes(q) ? 0 : 1
      return aInTitle - bInTitle
    })
  }

  const PINNED = ['chariot-conducteur-porte', 'transpalette-electrique', 'gerbeur-electrique', 'auto-laveuse-compacte', 'monte-plats', 'lave-verres-osmoseur']
  return [
    ...results.filter((m) => PINNED.includes(m.id)),
    ...results.filter((m) => !PINNED.includes(m.id)),
  ]
}
