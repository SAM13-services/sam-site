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

  // ─────────────────────────────────────────────────────────────
  // PRÉVENTION CHUTE
  // ─────────────────────────────────────────────────────────────

  {
    id: 'revetement-sol-antiderapant',
    nom: 'Revêtement de sol antidérapant nettoyable',
    description: 'Sol antidérapant certifié CNAM R46-2A pour locaux alimentaires.',
    descriptionComplete: 'Revêtement de sol antidérapant et nettoyable destiné aux locaux alimentaires : fabrication, manipulation, conditionnement ou stockage de produits alimentaires, cuisines de restauration et restauration collective. Le sol doit figurer sur la liste limitative CNAM garantissant un coefficient de frottement dynamique μd ≥ 0,30. Pour les sols coulés (mortier, résine), le poseur doit être référencé ou une attestation fabricant fournie. La mise en place implique l\'équipement en moyen de nettoyage renforcé (laveuse de sol).',
    subvention: 'PREVENTION_CHUTE',
    categorie: 'sols-antiderapants',
    secteurs: ['restauration-metiers-bouche', 'industrie', 'logistique-entreposage'],
    icon: 'Layers',
    eligibilite: {
      conception: [
        'Figurant sur la liste limitative CNAM des sols sécurisés pour l\'agroalimentaire',
        'Coefficient de frottement dynamique μd ≥ 0,30 garanti',
        'Pour sols coulés : poseur/applicateur référencé par le fabricant',
      ],
      formation: [
        'Attestation du fabricant justifiant l\'aptitude du poseur si non référencé',
      ],
      amenagement: [
        'Locaux couverts : fabrication, manipulation, conditionnement, stockage de produits alimentaires',
        'Locaux adjacents à risque de transfert (couloirs, escaliers, zones administratives intégrées)',
        'Cuisines de restauration et restauration collective en entreprise',
        'Prévoir un équipement de nettoyage renforcé (laveuse de sol) — les sols antidérapants ne se nettoient pas à la raclette',
      ],
      exclusions: [
        'Sols ne figurant pas sur la liste limitative CNAM',
        'Locaux sans lien avec la manipulation de produits alimentaires',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'pir-plateforme-roulante',
    nom: 'PIR — Plateforme Individuelle Roulante',
    description: 'Plateforme roulante NF pour travail en hauteur sécurisé.',
    descriptionComplete: 'La PIR (Plateforme Individuelle Roulante) est un équipement de travail en hauteur mobile permettant d\'accéder en sécurité à des postes élevés. Elle doit être neuve, admise à la marque NF et conforme à la norme NF P 93-352 : 2016.',
    subvention: 'PREVENTION_CHUTE',
    categorie: 'travail-en-hauteur',
    secteurs: ['logistique-entreposage', 'industrie', 'restauration-metiers-bouche', 'tous-secteurs'],
    icon: 'ArrowUp',
    eligibilite: {
      conception: [
        'Équipement neuf',
        'Admis à la marque NF',
        'Conforme à la norme NF P 93-352 : 2016',
      ],
      formation: [
        'Attestation sur l\'honneur du chef d\'entreprise de délivrance d\'une information sur les risques',
        'Formation des salariés au montage et à l\'utilisation de l\'équipement',
      ],
      amenagement: [],
      exclusions: [
        'Équipements d\'occasion',
        'Équipements sans marque NF',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'pirl-plateforme-roulante-legere',
    nom: 'PIRL — Plateforme Individuelle Roulante Légère',
    description: 'Plateforme roulante légère NF pour accès en hauteur.',
    descriptionComplete: 'La PIRL (Plateforme Individuelle Roulante Légère) est une version allégée de la PIR, adaptée aux espaces plus réduits. Elle doit être neuve, admise à la marque NF et conforme à la norme NF P 93-353 : 2016.',
    subvention: 'PREVENTION_CHUTE',
    categorie: 'travail-en-hauteur',
    secteurs: ['logistique-entreposage', 'restauration-metiers-bouche', 'industrie', 'tous-secteurs'],
    icon: 'ArrowUp',
    eligibilite: {
      conception: [
        'Équipement neuf',
        'Admis à la marque NF',
        'Conforme à la norme NF P 93-353 : 2016',
      ],
      formation: [
        'Attestation sur l\'honneur du chef d\'entreprise de délivrance d\'une information sur les risques',
        'Formation des salariés au montage et à l\'utilisation de l\'équipement',
      ],
      amenagement: [],
      exclusions: [
        'Équipements d\'occasion',
        'Équipements sans marque NF',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'micro-pemp-nacelle',
    nom: 'Micro PEMP — Nacelle élévatrice compacte',
    description: 'Micro-nacelle électrique ≤ 90 cm pour accès en hauteur par une porte.',
    descriptionComplete: 'La micro PEMP (Plateforme Élévatrice Mobile de Personnes) de faible largeur est une nacelle compacte permettant de travailler en hauteur dans des espaces confinés. Elle doit mesurer 90 cm de large maximum pour passer par une porte standard, être équipée d\'une motorisation électrique et être conforme à la directive machines 2006/42/CE et aux normes NF EN 280-1 et NF EN 280-2 : 2022.',
    subvention: 'PREVENTION_CHUTE',
    categorie: 'travail-en-hauteur',
    secteurs: ['logistique-entreposage', 'industrie', 'construction-btp', 'tous-secteurs'],
    icon: 'ArrowUp',
    eligibilite: {
      conception: [
        'Équipement neuf',
        'Type : micro-nacelle ciseaux sur mâts, à bras, ou micro-nacelle araignée',
        'Largeur maximale 90 cm (passage de porte)',
        'Motorisation électrique',
        'Conforme à la directive machines 2006/42/CE',
        'Conforme aux normes NF EN 280-1 : 2022 et NF EN 280-2 : 2022',
      ],
      formation: [
        'Attestation sur l\'honneur du chef d\'entreprise de délivrance d\'une information sur les risques',
        'Formation des salariés à l\'utilisation (référence : recommandation CACES R486)',
      ],
      amenagement: [],
      exclusions: [
        'Équipements d\'occasion',
        'Largeur supérieure à 90 cm',
        'Motorisation thermique',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'emer-mise-en-rayon',
    nom: 'EMER — Équipement Mobile de Mise en Rayon',
    description: 'Plateforme sécurisée de mise en rayon jusqu\'à 0,5 m de hauteur.',
    descriptionComplete: 'L\'EMER (Équipement Mobile de Mise en Rayon) est une plateforme individuelle créant un espace de travail sécurisé d\'une hauteur maximale de 0,5 m (0,3 m lorsqu\'elle ne possède qu\'une seule marche). Destinée à la mise en rayon en grande distribution ou commerce, elle doit être neuve et conforme à la norme NF E85-301 : 2020.',
    subvention: 'PREVENTION_CHUTE',
    categorie: 'travail-en-hauteur',
    secteurs: ['restauration-metiers-bouche', 'logistique-entreposage', 'industrie'],
    icon: 'Package',
    eligibilite: {
      conception: [
        'Équipement neuf',
        'Hauteur de travail maximale 0,5 m (0,3 m si une seule marche)',
        'Conforme à la norme NF E85-301 : 2020',
      ],
      formation: [
        'Attestation sur l\'honneur du chef d\'entreprise de délivrance d\'une information sur les risques',
        'Formation des salariés à l\'utilisation de l\'équipement',
      ],
      amenagement: [],
      exclusions: [
        'Équipements d\'occasion',
        'Hauteur de travail supérieure à 0,5 m',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'barriere-ecluse-securite',
    nom: 'Barrière écluse de sécurité',
    description: 'Sas de protection collective pour manutentions en hauteur sur plateforme.',
    descriptionComplete: 'La barrière écluse est une protection collective formant un sas sécurisé lors des transferts de marchandises en hauteur. Elle garantit la sécurité des opérateurs sur la plateforme en évitant tout risque de chute lors des opérations de manutention. L\'équipement doit être neuf et conforme à la norme NF EN ISO 14122-3 : 2017.',
    subvention: 'PREVENTION_CHUTE',
    categorie: 'travail-en-hauteur',
    secteurs: ['logistique-entreposage', 'industrie', 'tous-secteurs'],
    icon: 'Shield',
    eligibilite: {
      conception: [
        'Équipement neuf',
        'Conforme à la norme NF EN ISO 14122-3 : 2017',
        'Forme un sas garantissant la sécurité des opérateurs sur la plateforme',
      ],
      formation: [
        'Attestation sur l\'honneur du chef d\'entreprise de délivrance d\'une information sur les risques',
        'Formation des salariés à l\'utilisation de l\'équipement',
      ],
      amenagement: [],
      exclusions: [
        'Équipements d\'occasion',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'garde-corps-prevention',
    nom: 'Garde-corps',
    description: 'Protection collective contre les chutes de hauteur, pour plateformes et machines.',
    descriptionComplete: 'Le garde-corps est une protection collective destinée à prévenir les chutes de hauteur. Il doit être neuf et conforme à la norme NF E85-015 pour les usages généraux, ou à la norme NF EN ISO 14122-3 : 2017 lorsqu\'il équipe des machines. Il s\'installe en bordure de plateformes, mezzanines, passerelles ou de part et d\'autre d\'un élément de liaison de quai.',
    subvention: 'PREVENTION_CHUTE',
    categorie: 'travail-en-hauteur',
    secteurs: ['logistique-entreposage', 'industrie', 'construction-btp', 'transport', 'tous-secteurs'],
    icon: 'Shield',
    eligibilite: {
      conception: [
        'Équipement neuf',
        'Conforme à la norme NF E85-015 (usage général)',
        'Ou conforme à la norme NF EN ISO 14122-3 : 2017 (garde-corps sur machines)',
      ],
      formation: [],
      amenagement: [
        'Installé en bordure de zone exposant au risque de chute de hauteur',
      ],
      exclusions: [
        'Équipements d\'occasion',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'passerelle-securisee',
    nom: 'Passerelle sécurisée',
    description: 'Passerelle de circulation sécurisée entre zones en hauteur.',
    descriptionComplete: 'La passerelle sécurisée est un équipement de circulation permettant de relier deux zones en hauteur en toute sécurité. Elle doit être neuve et conforme à la norme NF E 85-014 pour les usages généraux, ou à la norme NF EN ISO 14122-2 : 2017 lorsqu\'elle sert d\'accès à des machines.',
    subvention: 'PREVENTION_CHUTE',
    categorie: 'travail-en-hauteur',
    secteurs: ['logistique-entreposage', 'industrie', 'construction-btp', 'tous-secteurs'],
    icon: 'GitBranch',
    eligibilite: {
      conception: [
        'Équipement neuf',
        'Conforme à la norme NF E 85-014 (usage général)',
        'Ou conforme à la norme NF EN ISO 14122-2 : 2017 (accès aux machines)',
      ],
      formation: [],
      amenagement: [],
      exclusions: [
        'Équipements d\'occasion',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'grille-anti-chutes-lanterneau',
    nom: 'Grille anti-chutes pour lanterneau',
    description: 'Grille de protection sous lanterneau, résistance minimale 1 200 joules.',
    descriptionComplete: 'La grille anti-chutes pour lanterneau est un dispositif de protection installé sous une verrière ou un lanterneau afin d\'arrêter la chute d\'une personne en cas de bris de la surface vitrée. L\'équipement doit être neuf et garantir une résistance minimale de 1 200 joules.',
    subvention: 'PREVENTION_CHUTE',
    categorie: 'travail-en-hauteur',
    secteurs: ['industrie', 'logistique-entreposage', 'construction-btp', 'tous-secteurs'],
    icon: 'Grid',
    eligibilite: {
      conception: [
        'Équipement neuf',
        'Résistance minimale garantie de 1 200 joules',
      ],
      formation: [],
      amenagement: [
        'Installation sous lanterneau ou verrière exposant à un risque de chute à travers la surface vitrée',
      ],
      exclusions: [
        'Équipements d\'occasion',
        'Résistance inférieure à 1 200 joules',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'dispositif-jonction-quai-camion',
    nom: 'Dispositif motorisé de jonction quai–camion',
    description: 'Ensemble niveleur + pont motorisé + tampons + garde-corps pour quai sécurisé.',
    descriptionComplete: 'Le dispositif motorisé de jonction quai–camion est un ensemble complet de sécurisation des opérations de chargement/déchargement. Il comprend obligatoirement : un niveleur à lèvre télescopique (course min. 800 mm, appui min. 150 mm), un pont de liaison motorisé (appui min. 150 mm), des tampons/butées de quai (espace de sauvegarde 500 mm) et des garde-corps latéraux. L\'ensemble doit être conforme à la directive 2006/42/CE. Référence : brochure INRS ED 6059.',
    subvention: 'PREVENTION_CHUTE',
    categorie: 'securite-quais',
    secteurs: ['logistique-entreposage', 'transport', 'industrie'],
    icon: 'Truck',
    eligibilite: {
      conception: [
        'Niveleur à lèvre télescopique : course minimum 800 mm, intégré dans le quai ou sur châssis solidaire, appui minimal 150 mm sur plancher du véhicule',
        'Pont de liaison motorisé : solidaire du quai, appui minimal 150 mm sur plancher du véhicule',
        'Tampons / butées de quai : espace de sauvegarde de 500 mm entre véhicule et structure du quai',
        'Garde-corps installés de part et d\'autre de l\'élément de liaison',
        'Conforme à la directive machines 2006/42/CE et aux normes de référence',
      ],
      formation: [],
      amenagement: [
        'Référence documentaire : brochure INRS ED 6059 « conception et rénovation des quais »',
      ],
      exclusions: [
        'Dispositifs non motorisés',
        'Ensemble incomplet (les 4 composants sont obligatoires)',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'calage-blocage-vehicule',
    nom: 'Dispositif de calage et blocage du véhicule',
    description: 'Système asservi de calage/blocage du camion pendant les opérations de quai.',
    descriptionComplete: 'Le dispositif asservi de calage et blocage du véhicule empêche le départ intempestif d\'un camion lors des opérations de chargement/déchargement. Il peut être automatique ou à positionnement manuel, avec asservissement entre la mise à quai et le système de liaison quai/camion, et une alerte sonore et visuelle intégrée. Conforme à la directive 2006/42/CE. Référence : brochure INRS ED 6059.',
    subvention: 'PREVENTION_CHUTE',
    categorie: 'securite-quais',
    secteurs: ['logistique-entreposage', 'transport', 'industrie'],
    icon: 'Lock',
    eligibilite: {
      conception: [
        'Équipement neuf',
        'Système automatique ou à positionnement manuel',
        'Asservissement entre mise à quai effective et fonctionnement du système de liaison quai/camion',
        'Alerte sonore et visuelle intégrée en cas de perte d\'information',
        'Conforme à la directive machines 2006/42/CE',
      ],
      formation: [],
      amenagement: [
        'Référence documentaire : brochure INRS ED 6059 « conception et rénovation des quais »',
      ],
      exclusions: [
        'Équipements d\'occasion',
        'Systèmes sans asservissement',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'barriere-quai-motorisee',
    nom: 'Barrière de quai motorisée',
    description: 'Barrière motorisée asservie à la présence du véhicule, anti-chute personne/engin.',
    descriptionComplete: 'La barrière de quai motorisée est un dispositif anti-chutes pour personnes et engins. Elle doit être neuve, motorisée et asservie à la présence effective d\'un véhicule sur le quai, implantée pour ne laisser aucun espace d\'accès au vide, et résister à la chute d\'une personne — et si besoin d\'un engin de manutention. Référence : brochure INRS ED 6059.',
    subvention: 'PREVENTION_CHUTE',
    categorie: 'securite-quais',
    secteurs: ['logistique-entreposage', 'transport', 'industrie'],
    icon: 'Shield',
    eligibilite: {
      conception: [
        'Équipement neuf',
        'Motorisée et asservie à la présence effective d\'un véhicule sur le quai',
        'Implantée pour ne laisser aucun espace d\'accès au vide',
        'Résistance à la chute d\'une personne (et d\'un engin si nécessaire)',
      ],
      formation: [],
      amenagement: [
        'Référence documentaire : brochure INRS ED 6059 « conception et rénovation des quais »',
      ],
      exclusions: [
        'Équipements d\'occasion',
        'Barrières non motorisées',
        'Barrières non asservies à la présence du véhicule',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'porte-sectionnelle-quai',
    nom: 'Porte sectionnelle automatique (quai)',
    description: 'Porte motorisée asservie au véhicule, conforme directive machines.',
    descriptionComplete: 'La porte sectionnelle automatique est un dispositif anti-chutes pour quai de chargement. Elle doit être neuve, motorisée, asservie à la présence effective d\'un véhicule sur le quai et conforme à la directive machines 2006/42/CE. Référence : brochure INRS ED 6059.',
    subvention: 'PREVENTION_CHUTE',
    categorie: 'securite-quais',
    secteurs: ['logistique-entreposage', 'transport', 'industrie'],
    icon: 'DoorOpen',
    eligibilite: {
      conception: [
        'Équipement neuf',
        'Motorisée et asservie à la présence effective d\'un véhicule sur le quai',
        'Conforme à la directive machines 2006/42/CE',
      ],
      formation: [],
      amenagement: [
        'Référence documentaire : brochure INRS ED 6059 « conception et rénovation des quais »',
      ],
      exclusions: [
        'Équipements d\'occasion',
        'Portes non asservies à la présence du véhicule',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'butees-roues-quai',
    nom: 'Butées de roues (quai)',
    description: 'Butées empêchant la chute d\'un engin de manutention en bord de quai.',
    descriptionComplete: 'Les butées de roues sont des dispositifs anti-chutes destinés à s\'opposer à la chute d\'un engin de manutention (chariot élévateur, transpalette) au bord d\'un quai. Elles doivent être neuves. Références : brochure INRS ED 6059 et article R4323-59 du Code du Travail.',
    subvention: 'PREVENTION_CHUTE',
    categorie: 'securite-quais',
    secteurs: ['logistique-entreposage', 'transport', 'industrie'],
    icon: 'CircleOff',
    eligibilite: {
      conception: [
        'Équipement neuf',
        'Capacité à s\'opposer à la chute d\'un engin de manutention',
      ],
      formation: [],
      amenagement: [
        'Références : brochure INRS ED 6059 — article R4323-59 du Code du Travail',
      ],
      exclusions: [
        'Équipements d\'occasion',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'escalier-acces-quai',
    nom: 'Escalier d\'accès au quai',
    description: 'Escalier neuf côté conducteur avec protections anti-chute.',
    descriptionComplete: 'L\'escalier d\'accès au quai est un équipement permettant aux conducteurs d\'accéder et de descendre du quai en toute sécurité. Il doit être neuf, droit ou à défaut à courbe balancée, implanté côté conducteur et équipé de protections contre les chutes de hauteur. Référence : brochure INRS ED 6059.',
    subvention: 'PREVENTION_CHUTE',
    categorie: 'securite-quais',
    secteurs: ['logistique-entreposage', 'transport', 'industrie'],
    icon: 'ArrowDown',
    eligibilite: {
      conception: [
        'Équipement neuf',
        'Escalier droit ou à défaut à courbe balancée',
        'Implanté côté conducteur',
        'Équipé de protections contre les chutes de hauteur',
      ],
      formation: [],
      amenagement: [
        'Référence documentaire : brochure INRS ED 6059 « conception et rénovation des quais »',
      ],
      exclusions: [
        'Équipements d\'occasion',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'protection-laterale-hayon',
    nom: 'Protection collective latérale solidaire du hayon',
    description: 'Garde-corps latéral intégrant la commande du hayon élévateur.',
    descriptionComplete: 'La protection collective latérale solidaire du hayon est un dispositif de sécurité pour poids lourds permettant d\'éviter les chutes lors des opérations de chargement/déchargement avec hayon élévateur. Elle doit être neuve, solidaire du hayon et intégrer la commande du hayon. Référence : brochures INRS ED 6095 et ED 6189.',
    subvention: 'PREVENTION_CHUTE',
    categorie: 'securite-camions',
    secteurs: ['transport', 'logistique-entreposage'],
    icon: 'Shield',
    eligibilite: {
      conception: [
        'Équipement neuf',
        'Solidaire du hayon élévateur',
        'Intègre la commande du hayon',
      ],
      formation: [],
      amenagement: [
        'Références : INRS ED 6095 « transport routier de marchandises » — INRS ED 6189 « rouler et manutentionner en sécurité »',
      ],
      exclusions: [
        'Équipements d\'occasion',
        'Dispositifs non solidaires du hayon',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'marchepied-escamotable-remorque',
    nom: 'Marche pied escamotable pour remorque',
    description: 'Escalier ou marchepied escamotable antidérapant pour accéder à la remorque.',
    descriptionComplete: 'Le marche pied escamotable pour remorque permet d\'accéder en sécurité à l\'arrière ou sur le côté d\'une remorque. L\'équipement doit être neuf, escamotable, constitué de marches larges et antidérapantes. Références : brochures INRS ED 6095 et ED 6189.',
    subvention: 'PREVENTION_CHUTE',
    categorie: 'securite-camions',
    secteurs: ['transport', 'logistique-entreposage'],
    icon: 'Footprints',
    eligibilite: {
      conception: [
        'Équipement neuf',
        'Escamotable',
        'Marches larges et antidérapantes',
        'Accès à l\'arrière ou sur le côté de la remorque',
      ],
      formation: [],
      amenagement: [
        'Références : INRS ED 6095 — INRS ED 6189',
      ],
      exclusions: [
        'Équipements d\'occasion',
        'Équipements fixes non escamotables',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'sellette-securite',
    nom: 'Sellette de sécurité',
    description: 'Sellette 3 capteurs à ouverture automatique depuis la cabine.',
    descriptionComplete: 'La sellette de sécurité est un dispositif de raccordement sécurisé entre la remorque et la cabine du tracteur. Elle doit être neuve, équipée de 3 capteurs et à ouverture automatique depuis la cabine, évitant ainsi au chauffeur d\'avoir à descendre pour vérifier ou décrocher l\'attelage. Références : brochures INRS ED 6095 et ED 6189.',
    subvention: 'PREVENTION_CHUTE',
    categorie: 'securite-camions',
    secteurs: ['transport'],
    icon: 'Link',
    eligibilite: {
      conception: [
        'Équipement neuf',
        'À 3 capteurs',
        'Ouverture automatique depuis la cabine',
      ],
      formation: [],
      amenagement: [
        'Références : INRS ED 6095 — INRS ED 6189',
      ],
      exclusions: [
        'Équipements d\'occasion',
        'Sellettes sans capteurs ou sans ouverture automatique',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'bras-suiveur-raccordement',
    nom: 'Bras suiveur (raccordement remorque/cabine)',
    description: 'Bras coulissant monté sur remorque pour raccorder les flexibles depuis le sol.',
    descriptionComplete: 'Le bras suiveur est un dispositif de raccordement sécurisé permettant au chauffeur de connecter les flexibles pneumatiques entre la remorque et la cabine sans avoir à grimper sur le véhicule. Il doit être neuf, monté sur la remorque et coulissant. Références : brochures INRS ED 6095 et ED 6189.',
    subvention: 'PREVENTION_CHUTE',
    categorie: 'securite-camions',
    secteurs: ['transport'],
    icon: 'GitMerge',
    eligibilite: {
      conception: [
        'Équipement neuf',
        'Monté sur la remorque',
        'Coulissant',
        'Permet le raccordement des flexibles depuis le sol',
      ],
      formation: [],
      amenagement: [
        'Références : INRS ED 6095 — INRS ED 6189',
      ],
      exclusions: [
        'Équipements d\'occasion',
        'Dispositifs fixes non coulissants',
      ],
    },
    distributeurs: [],
  },

  // ─────────────────────────────────────────────────────────────
  // TOP BTP — ÉCHAFAUDAGES & ACCÈS EN HAUTEUR
  // ─────────────────────────────────────────────────────────────

  {
    id: 'echafaudage-pied-mds',
    nom: 'Échafaudage de pied MDS',
    description: 'Échafaudage à montage et démontage en sécurité depuis le plancher inférieur.',
    descriptionComplete: 'L\'échafaudage de pied MDS (Montage et Démontage en Sécurité) est la solution de référence pour les travaux en façade dans le BTP. Il se distingue par son système de garde-corps intégré posé depuis le plancher inférieur, assurant une protection collective permanente à chaque niveau sans travail en hauteur non protégé. Seuls les modèles admis à la marque NF sont éligibles à la Subvention Prévention TOP BTP.',
    subvention: 'TOP_BTP',
    categorie: 'travail-en-hauteur',
    secteurs: ['construction-btp'],
    icon: 'Building2',
    eligibilite: {
      conception: [
        'Admis à la marque NF — liste disponible sur le site AFNOR (NF096.pdf)',
        'Montage et démontage des garde-corps depuis le plancher inférieur (sécurité intrinsèque)',
        'Garde-corps latéraux et d\'extrémité tous MDS sans exception',
        'Les garde-corps MDS représentent au minimum 20 % du montant HT total',
        'Fabrication dans un établissement doté d\'un système de management qualité adapté',
        'Évaluation par un organisme indépendant du fabricant',
        'Conforme aux normes NF EN 12810-1/2 et NF EN 12811',
        'Non concerné par un signalement « problème de prévention » CARSAT',
      ],
      formation: [
        'Formation obligatoire au montage, utilisation et démontage (recommandation Cnam R.408)',
        'Attestation de formation au travail en hauteur délivrée aux opérateurs',
        'Notice d\'utilisation en français fournie par le fabricant',
      ],
      amenagement: [
        'Installation et montage par personnel formé uniquement',
        'Vérification de la stabilité du sol d\'appui avant installation',
        'Contrôle du matériel avant chaque montage selon les préconisations du fabricant',
      ],
      exclusions: [
        'Échafaudages montés par tubes et colliers',
        'Échafaudages avec garde-corps provisoires de montage (non MDS)',
        'Matériels signalés « problème de prévention » par la CARSAT',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'echafaudage-roulant-mds',
    nom: 'Échafaudage roulant MDS',
    description: 'Échafaudage mobile sur roulettes à montage en sécurité collective.',
    descriptionComplete: 'L\'échafaudage roulant MDS est, par conception, à montage et démontage en sécurité collective : les garde-corps sont posés depuis le plancher inférieur ou depuis le sol. Adaptable à toutes hauteurs de travail, il permet d\'intervenir rapidement sur différentes zones du chantier tout en maintenant la protection collective des opérateurs.',
    subvention: 'TOP_BTP',
    categorie: 'travail-en-hauteur',
    secteurs: ['construction-btp'],
    icon: 'Building2',
    eligibilite: {
      conception: [
        'Admis à la marque NF — liste disponible sur le site AFNOR (NF096.pdf)',
        'Montage et démontage des garde-corps depuis le plancher inférieur ou le sol',
        'Sécurité collective par conception (pas de travail non protégé lors du montage)',
        'Conforme NF P 93-520, NF EN 1004 parties 1 et 2',
        'Roulettes avec système de blocage individuel',
        'Fabrication dans un établissement doté d\'un système de management qualité adapté',
        'Non concerné par un signalement « problème de prévention » CARSAT',
      ],
      formation: [
        'Formation obligatoire au montage, utilisation et démontage (recommandation Cnam R.457)',
        'Attestation de formation au travail en hauteur délivrée aux opérateurs',
        'Notice d\'utilisation en français fournie par le fabricant',
      ],
      amenagement: [
        'Sol de chantier plan et stable lors de chaque utilisation',
        'Blocage des roulettes obligatoire dès l\'arrêt de l\'échafaudage',
        'Contrôle du matériel avant chaque montage selon les préconisations du fabricant',
      ],
      exclusions: [
        'Échafaudages roulants sans garde-corps MDS intégrés',
        'Matériels signalés « problème de prévention » par la CARSAT',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'remorque-rack-echafaudage',
    nom: 'Remorque avec rack pour transport d\'échafaudage',
    description: 'Remorque équipée d\'un rack de rangement pour transport sécurisé des échafaudages.',
    descriptionComplete: 'La remorque avec rack permet le transport, le rangement et le stockage d\'un échafaudage MDS prêt à l\'emploi sur chantier. Équipée d\'au moins un essieu et d\'un dispositif d\'attelage homologué, elle simplifie la gestion des pièces et réduit les manutentions manuelles de chargement. Elle est proposée en standard par les fabricants d\'échafaudages MDS.',
    subvention: 'TOP_BTP',
    categorie: 'equipements-specifiques',
    secteurs: ['construction-btp'],
    icon: 'Truck',
    eligibilite: {
      conception: [
        'Rack de rangement des éléments constitutifs de l\'échafaudage intégré',
        'Coffre de rangement des accessoires de montage inclus',
        'Au moins un essieu et un dispositif d\'attelage pour tractage sur voie publique',
        'Homologation routière — permis BE potentiellement requis selon le PTAC',
        'Proposée par un fabricant d\'échafaudages MDS référencé',
      ],
      formation: [
        'Formation à l\'attelage et au transport si permis BE nécessaire',
        'Information sur les conditions de chargement et d\'arrimage',
      ],
      amenagement: [
        'Arrimage de l\'échafaudage conforme aux règles de transport',
        'Vérification de l\'état de la remorque avant chaque départ',
      ],
      exclusions: [
        'Palettes, racks et containers non associés à une remorque',
        'Remorques sans rack de rangement dédié à l\'échafaudage',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'escalier-acces-echafaudage',
    nom: 'Escalier d\'accès aux échafaudages',
    description: 'Escalier sécurisé pour l\'accès aux niveaux d\'un échafaudage MDS.',
    descriptionComplete: 'L\'escalier d\'accès aux échafaudages permet de monter et descendre entre les niveaux d\'un échafaudage en toute sécurité. Robuste et stable, il s\'intègre facilement à l\'échafaudage MDS dont il est généralement issu du même catalogue fabricant. Il remplace les échelles d\'accès classiques et réduit significativement le risque de chute.',
    subvention: 'TOP_BTP',
    categorie: 'travail-en-hauteur',
    secteurs: ['construction-btp'],
    icon: 'ArrowUpDown',
    eligibilite: {
      conception: [
        'Fabrication robuste garantissant la stabilité lors de l\'utilisation',
        'Facilité de montage et d\'intégration à l\'échafaudage MDS',
        'Généralement proposé par le fabricant de l\'échafaudage MDS',
        'Marches antidérapantes',
        'Main courante de chaque côté',
      ],
      formation: [
        'Attestation sur l\'honneur de délivrance d\'une information sur les risques',
        'Formation au montage de l\'équipement',
      ],
      amenagement: [
        'Fixation et intégration à l\'échafaudage selon les préconisations du fabricant',
        'Vérification de la stabilité avant toute utilisation',
      ],
      exclusions: [
        'Échelles simples (sans plateforme ni garde-corps)',
      ],
    },
    distributeurs: [],
  },

  // ─────────────────────────────────────────────────────────────
  // TOP BTP — PROTECTIONS TRÉMIES & ACCÈS PROVISOIRES
  // ─────────────────────────────────────────────────────────────

  {
    id: 'plancher-provisoire-tremie',
    nom: 'Plancher provisoire de protection de trémie',
    description: 'Plancher préfabriqué obturant les trémies d\'escalier et d\'ascenseur avec accès sécurisé.',
    descriptionComplete: 'Le plancher provisoire de protection de trémie est un équipement préfabriqué qui obture intégralement les ouvertures de trémie (escaliers, ascenseurs) pendant la phase chantier. Il est muni d\'un escalier ou d\'une échelle d\'accès avec trappe de fermeture. Il peut comporter en option une trappe latérale pour le passage de matériaux. Son installation prévient les chutes de hauteur sur les zones fréquemment circulées.',
    subvention: 'TOP_BTP',
    categorie: 'travail-en-hauteur',
    secteurs: ['construction-btp'],
    icon: 'Shield',
    eligibilite: {
      conception: [
        'Produit préfabriqué (manufacturé) assurant l\'obturation complète de l\'ouverture',
        'Muni d\'un escalier ou d\'une échelle d\'accès avec trappe de fermeture',
        'Surcharge admissible mentionnée sur l\'équipement ou justifiée par note de calcul',
        'Aucune charge ponctuelle autre que celle des utilisateurs autorisée',
        'Conforme par analogie à la NF EN 12811 Classe 3 (200 daN/m² minimum)',
        'Option : trappe latérale pour passage de matériaux (panneaux bois, isolants…)',
      ],
      formation: [
        'Attestation sur l\'honneur de délivrance d\'une information sur les risques',
        'Formation au montage de l\'équipement',
      ],
      amenagement: [
        'Obturation complète de la trémie sans espace résiduel',
        'Fixation stable selon les préconisations du fabricant',
        'Vérification avant chaque phase de travail',
      ],
      exclusions: [
        'Protections non préfabriquées réalisées sur chantier',
        'Planchers sans accès intégré (escalier ou échelle avec trappe)',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'escalier-provisoire-modulable',
    nom: 'Escalier provisoire modulable de chantier',
    description: 'Escalier métallique transportable pour franchissement de dénivelé sur chantier (≥ 3 m).',
    descriptionComplete: 'L\'escalier provisoire modulable permet de franchir des dénivelés importants (hauteur minimale de franchissement de 3 m environ) sur les chantiers de construction. En aluminium ou acier galvanisé, il s\'adapte aux configurations variables de chantier grâce à son inclinaison réglable et ses marches restant horizontales en toute position. Il garantit un accès sécurisé entre niveaux dès la phase gros œuvre.',
    subvention: 'TOP_BTP',
    categorie: 'travail-en-hauteur',
    secteurs: ['construction-btp'],
    icon: 'ArrowUpDown',
    eligibilite: {
      conception: [
        'Hauteur de franchissement minimale de 3 m (environ un niveau d\'habitation)',
        'Droit ou hélicoïdal MDS',
        'Matériau : aluminium ou acier à finition galvanisée',
        'Installation rapide et adaptable aux configurations de chantier',
        'Inclinaison variable avec maintien des marches horizontales en toute configuration',
        'Marches antidérapantes',
        'Mains courantes des deux côtés et attaches sur dalles',
        'Surcharge admissible mentionnée sur l\'équipement',
        'Conforme NF P 93-521, NF P 93-522 ou NF P 93-523 selon usage',
      ],
      formation: [
        'Attestation sur l\'honneur de délivrance d\'une information sur les risques',
        'Formation au montage de l\'équipement',
      ],
      amenagement: [
        'Fixation sur dalle selon les préconisations du fabricant',
        'Vérification de la stabilité avant toute utilisation',
      ],
      exclusions: [
        'Escaliers fixes permanents',
        'Échelles simples',
      ],
    },
    distributeurs: [],
  },

  // ─────────────────────────────────────────────────────────────
  // TOP BTP — PASSERELLES & QUAIS
  // ─────────────────────────────────────────────────────────────

  {
    id: 'passerelle-acces-garde-corps',
    nom: 'Passerelle d\'accès avec garde-corps',
    description: 'Passerelle sécurisée pour franchissement, accès ou chargement/déchargement sur chantier.',
    descriptionComplete: 'La passerelle d\'accès avec garde-corps permet le cheminement sécurisé entre deux zones à dénivelé sur chantier, que ce soit pour l\'accès, le franchissement ou les opérations de chargement/déchargement. Sa largeur d\'environ 800 mm lui permet d\'être placée dans l\'encadrement d\'une porte standard. Elle est équipée de garde-corps latéraux complets et d\'un plancher antidérapant.',
    subvention: 'TOP_BTP',
    categorie: 'travail-en-hauteur',
    secteurs: ['construction-btp'],
    icon: 'ArrowRight',
    eligibilite: {
      conception: [
        'Largeur d\'environ 800 mm pour mise en place dans l\'encadrement d\'une porte',
        'Rampe inclinable aux extrémités pour récupérer le dénivelé éventuel',
        'Plancher antidérapant',
        'Garde-corps latéraux avec lisse, sous-lisse et plinthes',
        'Dispositif de brochage ou similaire empêchant le glissement de la passerelle',
        'Panneau indiquant la charge admissible',
        'Conforme par analogie à la NF EN 12811 Classe 3 (200 daN/m² minimum)',
      ],
      formation: [
        'Attestation sur l\'honneur de délivrance d\'une information sur les risques',
        'Formation au montage de l\'équipement',
      ],
      amenagement: [
        'Stabilisation par dispositif de brochage avant toute utilisation',
        'Vérification de la charge admissible avant chaque utilisation',
      ],
      exclusions: [
        'Passerelles sans garde-corps',
        'Planches ou éléments non préfabriqués',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'quai-mobile-chargement-chantier',
    nom: 'Quai mobile de chargement/déchargement de chantier',
    description: 'Quai mobile sécurisé pour accéder aux plateaux de camions lors des livraisons sur chantier.',
    descriptionComplete: 'Le quai mobile de chargement/déchargement de chantier permet d\'accéder aux plateaux des camions de livraison et de travailler en sécurité lors des opérations de chargement/déchargement. Monté sur roues orientables, il est facilement repositionnable sur le chantier. Il est équipé de garde-corps complets et d\'un portillon d\'accès au palier.',
    subvention: 'TOP_BTP',
    categorie: 'securite-quais',
    secteurs: ['construction-btp'],
    icon: 'Truck',
    eligibilite: {
      conception: [
        'Quai mobile sur roues orientables',
        'Garde-corps avec lisse, sous-lisse et plinthes',
        'Portillon d\'accès au palier',
        'Garde-corps conforme NF EN 13374 classe A (sans pente)',
        'Conforme par analogie à la NF EN 12811 Classe 3 (200 daN/m² minimum)',
      ],
      formation: [
        'Attestation sur l\'honneur de délivrance d\'une information sur les risques',
        'Formation au montage de l\'équipement',
      ],
      amenagement: [
        'Sol stable et plan lors de chaque utilisation',
        'Blocage des roues obligatoire lors du stationnement',
      ],
      exclusions: [
        'Quais fixes non mobiles',
        'Quais sans garde-corps conformes',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'podium-lavage-benne-beton',
    nom: 'Podium de lavage pour benne à béton',
    description: 'Plateforme sécurisée pour le lavage des bennes à béton en hauteur après usage.',
    descriptionComplete: 'Le podium de lavage pour benne à béton permet aux opérateurs d\'accéder en hauteur pour laver les bennes après déversement du béton, sans risque de chute. Équipé d\'anneaux de grutage pour la manutention par engin, il dispose de garde-corps complets et d\'un portillon d\'accès. Il sécurise une opération récurrente à fort risque de chute dans le secteur du BTP.',
    subvention: 'TOP_BTP',
    categorie: 'equipements-specifiques',
    secteurs: ['construction-btp'],
    icon: 'Droplets',
    eligibilite: {
      conception: [
        'Anneaux de grutage pour manutention par engin de levage',
        'Garde-corps avec lisse, sous-lisse et plinthes',
        'Portillon d\'accès au palier',
        'Garde-corps conforme NF EN 13374',
        'Conforme par analogie à la NF EN 12811 Classe 3 (200 daN/m² minimum)',
      ],
      formation: [
        'Attestation sur l\'honneur de délivrance d\'une information sur les risques',
        'Formation au montage et à l\'utilisation de l\'équipement',
      ],
      amenagement: [
        'Grutage par personnel habilité',
        'Vérification de la stabilité et du verrouillage du portillon avant utilisation',
      ],
      exclusions: [
        'Podiums sans anneaux de grutage',
        'Accès par échelle sans plateforme protégée',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'plateforme-acces-premurs',
    nom: 'Plateforme d\'accès aux prémurs et fonds de fouille',
    description: 'Plateforme sur échelle sécurisée pour accès aux prémurs ou fonds de fouille.',
    descriptionComplete: 'La plateforme d\'accès aux prémurs et fonds de fouille est un équipement combinant une échelle portative et une plateforme de travail protégée en partie haute. Elle permet d\'intervenir en sécurité pour les travaux sur prémurs (voiles préfabriqués) ou pour descendre en fond de fouille. Sa charge maximale est de 150 kg et elle est conforme à la norme NF EN 131-7 sur les échelles portables.',
    subvention: 'TOP_BTP',
    categorie: 'travail-en-hauteur',
    secteurs: ['construction-btp'],
    icon: 'MountainSnow',
    eligibilite: {
      conception: [
        'Échelle munie d\'une plateforme de travail en partie haute',
        'Protection périphérique complète de la plateforme de travail',
        'Système d\'accrochage en haut d\'échelle',
        'Charge maximale : 150 kg',
        'Conforme NF EN 131-7 (échelles portables)',
      ],
      formation: [
        'Attestation sur l\'honneur de délivrance d\'une information sur les risques',
        'Formation au montage et à l\'utilisation de l\'équipement',
      ],
      amenagement: [
        'Accrochage en haut d\'échelle vérifié avant utilisation',
        'Sol d\'appui stable et dégagé',
      ],
      exclusions: [
        'Échelles simples sans plateforme intégrée',
        'Charges supérieures à 150 kg',
      ],
    },
    distributeurs: [],
  },

  // ─────────────────────────────────────────────────────────────
  // TOP BTP — PROTECTION CONTRE L'ENSEVELISSEMENT
  // ─────────────────────────────────────────────────────────────

  {
    id: 'blindage-leger-manuportable',
    nom: 'Blindage léger manuportable de tranchée',
    description: 'Blindage aluminium ou composite manuportable pour sécurisation des travaux en tranchée.',
    descriptionComplete: 'Le blindage léger manuportable est conçu pour sécuriser les travailleurs lors des travaux en tranchées contre les risques d\'ensevelissement. Fabriqué en aluminium, composite ou plastique, chaque élément pèse 25 kg maximum pour être manuporté par une seule personne. Il comporte obligatoirement une rehausse constituant un garde-corps ou est complété par un garde-corps à pinces.',
    subvention: 'TOP_BTP',
    categorie: 'equipements-specifiques',
    secteurs: ['construction-btp'],
    icon: 'ShieldCheck',
    eligibilite: {
      conception: [
        'Matériau : aluminium, composite ou plastique — hors bois et acier',
        'Poids par élément inférieur ou égal à 25 kg (manuportable à 1 personne)',
        'Conforme NF EN 13331-1 « Dispositifs de blindage de tranchées »',
        'Rehausse constituant un garde-corps intégrée OU garde-corps à pinces en complément',
        'À l\'exclusion des blindages gonflables',
        'À l\'exclusion des blindages sans rehausse garde-corps',
      ],
      formation: [
        'Attestation sur l\'honneur de délivrance d\'une information sur les risques',
        'Formation au montage de l\'équipement en tranchée',
      ],
      amenagement: [
        'Mise en place par personnel formé à la sécurité des travaux en tranchée',
        'Vérification de l\'intégrité du blindage avant chaque utilisation',
      ],
      exclusions: [
        'Blindages gonflables',
        'Blindages en bois ou en acier',
        'Éléments de plus de 25 kg par pièce (non manuportables à 1 personne)',
        'Blindages sans rehausse garde-corps ni garde-corps à pinces',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'garde-corps-blindage',
    nom: 'Garde-corps de blindage avec pinces',
    description: 'Garde-corps amovible fixé par pinces sur blindage de tranchée.',
    descriptionComplete: 'Le garde-corps de blindage avec pinces complète les blindages légers de tranchée qui ne disposent pas de rehausse intégrée. Il se fixe par pinces sur les montants du blindage et assure la protection collective contre les chutes en bord de tranchée. Conforme à la norme NF EN 13374, il est un équipement à part entière éligible à la Subvention Prévention TOP BTP.',
    subvention: 'TOP_BTP',
    categorie: 'equipements-specifiques',
    secteurs: ['construction-btp'],
    icon: 'ShieldAlert',
    eligibilite: {
      conception: [
        'Conforme NF EN 13374 (garde-corps)',
        'Système de fixation par pinces adapté aux montants du blindage',
        'Résistance mécanique conforme aux normes de garde-corps de chantier',
      ],
      formation: [
        'Attestation sur l\'honneur de délivrance d\'une information sur les risques',
        'Formation au montage de l\'équipement',
      ],
      amenagement: [
        'Vérification du serrage des pinces avant utilisation',
        'Compatibilité avec le blindage associé vérifiée avant achat',
      ],
      exclusions: [
        'Garde-corps non conformes NF EN 13374',
        'Systèmes de fixation sans pinces certifiés',
      ],
    },
    distributeurs: [],
  },

  // ─────────────────────────────────────────────────────────────
  // TOP BTP — ORGANISATION & CONDITIONS DE TRAVAIL
  // ─────────────────────────────────────────────────────────────

  {
    id: 'bungalow-chantier-mobile',
    nom: 'Bungalow de chantier mobile autonome',
    description: 'Base vie mobile autonome pour hébergement du personnel de chantier (4 personnes min.).',
    descriptionComplete: 'Le bungalow de chantier mobile autonome fournit aux travailleurs du BTP des conditions de repos et d\'hygiène conformes à la réglementation sur les chantiers éloignés. Mobile sur berces ou roulant, il accueille 4 personnes minimum et intègre l\'ensemble des équipements obligatoires : vestiaires, réfectoire, chauffage, réfrigérateur, sanitaires autonomes et lave-mains. Son déploiement améliore directement les conditions de travail et réduit la fatigue des opérateurs.',
    subvention: 'TOP_BTP',
    categorie: 'equipements-specifiques',
    secteurs: ['construction-btp'],
    icon: 'Home',
    eligibilite: {
      conception: [
        'Équipement mobile sur berces ou roulant',
        'Capacité minimale : 4 personnes',
        'Module complet : armoires vestiaires, sièges, réfectoire, réfrigérateur',
        'Moyen de réchauffage des repas et appareil de chauffage inclus',
        'Isolation thermique',
        'Sanitaire autonome avec dispositif de vidange ou raccordable',
        'Lave-mains intégré',
        'Options possibles : auvent démontable, climatisation, ventilation',
      ],
      formation: [],
      amenagement: [
        'Raccordements (eau, électricité, évacuation) sous la responsabilité de l\'utilisateur',
        'Mise de niveau sur le sol de chantier',
      ],
      exclusions: [
        'Bungalows de décontamination pour travaux de retrait ou de confinement d\'amiante',
        'Bungalows fixes non mobiles hors contexte lotissement maisons individuelles',
      ],
      precisions: [
        'Les promoteurs, aménageurs et constructeurs pour lotissements de maisons individuelles sur terrains libres peuvent acquérir des bungalows transportables',
      ],
    },
    distributeurs: [],
  },

  // ─────────────────────────────────────────────────────────────
  // POUSSIÈRES DE FARINE — ÉQUIPEMENTS À FAIBLE ÉMISSION
  // ─────────────────────────────────────────────────────────────

  {
    id: 'petrin-capot-plein',
    nom: 'Pétrin à capot plein transparent',
    description: 'Pétrin neuf équipé d\'un capot plein verrouillé limitant les émissions de poussières de farine.',
    descriptionComplete: 'Le pétrin à capot plein transparent est la solution de référence pour réduire l\'exposition des boulangers aux poussières de farine. Son protecteur verrouillé de type capot plein empêche les émissions de farine pendant le pétrissage. Conforme à la norme NF EN 453 : 2015, il contribue à prévenir les rhinites, asthmes professionnels et dermatites allergiques liés aux farines.',
    subvention: 'POUSSIERE_FARINE',
    categorie: 'equipements-specifiques',
    secteurs: ['restauration-metiers-bouche'],
    icon: 'ChefHat',
    eligibilite: {
      conception: [
        'Équipement neuf obligatoirement',
        'Conforme Directive Machines 2006/42/CE',
        'Conforme norme NF EN 453 : 2015',
        'Protecteur verrouillé de type capot plein transparent (§ 5.2.2 et 5.7 de la NF EN 453 : 2015)',
        'Livré avec notice d\'instructions et déclaration CE de conformité en français',
        'Déclaration CE mentionnant la directive 2006/42/CE et la norme NF EN 453 : 2015',
      ],
      formation: [
        'Formation à l\'utilisation et à la maintenance incluse dans la prestation du fournisseur (art. R4323-1 CT)',
        'Attestation de formation tracée pour chaque salarié utilisateur',
        'Attestation sur l\'honneur de délivrance d\'une information sur les risques',
      ],
      amenagement: [],
      exclusions: [
        'Pétrins d\'occasion',
        'Pétrins sans capot plein transparent verrouillé',
      ],
      precisions: [
        'La dénomination « capot plein transparent » doit figurer dans la facture ou le devis',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'batteur-melangeur-capot-plein',
    nom: 'Batteur / Mélangeur à capot plein transparent',
    description: 'Batteur ou mélangeur neuf à capot plein verrouillé pour limiter les émissions de farine.',
    descriptionComplete: 'Le batteur ou mélangeur à capot plein transparent est conçu pour réduire les émissions de poussières de farine lors des opérations de mélange en boulangerie-pâtisserie. Son protecteur verrouillé conforme à la norme NF EN 454 : 2015 contient les particules en suspension pendant le fonctionnement. Il protège les salariés contre les risques d\'allergie respiratoire et de dermatite professionnelle.',
    subvention: 'POUSSIERE_FARINE',
    categorie: 'equipements-specifiques',
    secteurs: ['restauration-metiers-bouche'],
    icon: 'ChefHat',
    eligibilite: {
      conception: [
        'Équipement neuf obligatoirement',
        'Conforme Directive Machines 2006/42/CE',
        'Conforme norme NF EN 454 : 2015',
        'Protecteur verrouillé de type capot plein transparent (§ 5.2.2 et 5.9 de la NF EN 454 : 2015)',
        'Livré avec notice d\'instructions et déclaration CE de conformité en français',
        'Déclaration CE mentionnant la directive 2006/42/CE et la norme NF EN 454 : 2015',
      ],
      formation: [
        'Formation à l\'utilisation et à la maintenance incluse dans la prestation du fournisseur (art. R4323-1 CT)',
        'Attestation de formation tracée pour chaque salarié utilisateur',
        'Attestation sur l\'honneur de délivrance d\'une information sur les risques',
      ],
      amenagement: [],
      exclusions: [
        'Batteurs et mélangeurs d\'occasion',
        'Modèles sans capot plein transparent verrouillé',
      ],
      precisions: [
        'La dénomination « capot plein transparent » doit figurer dans la facture ou le devis',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'diviseuse-faible-emission',
    nom: 'Diviseuse à faible émission de farine',
    description: 'Diviseuse, diviseuse-formeuse ou diviseuse-bouleuse neuve équipée d\'un système anti-émission de farine de fleurage.',
    descriptionComplete: 'La diviseuse à faible émission de farine limite la dispersion de farine de fleurage lors des opérations de division de pâton. Elle est équipée d\'un dispositif joint torique et gouttière qui empêche les émissions lors de la fermeture et de la compression, et les canalise vers un système de récupération étanche. Un revêtement anti-adhérent réduit également le besoin de fleurage.',
    subvention: 'POUSSIERE_FARINE',
    categorie: 'equipements-specifiques',
    secteurs: ['restauration-metiers-bouche'],
    icon: 'SlidersHorizontal',
    eligibilite: {
      conception: [
        'Équipement neuf obligatoirement (diviseuse, diviseuse-formeuse ou diviseuse-bouleuse)',
        'Conforme Directive Machines 2006/42/CE',
        'Dispositif joint torique et gouttière empêchant l\'émission de farine de fleurage à l\'extérieur',
        'Système de récupération étanche de la farine de fleurage',
        'Revêtement anti-adhérent limitant le besoin de fleurage',
        'Livré avec notice d\'instructions et déclaration CE de conformité en français',
      ],
      formation: [
        'Formation à l\'utilisation et à la maintenance incluse dans la prestation du fournisseur (art. R4323-1 CT)',
        'Attestation de formation tracée pour chaque salarié utilisateur',
        'Attestation sur l\'honneur de délivrance d\'une information sur les risques',
      ],
      amenagement: [],
      exclusions: [
        'Diviseuses d\'occasion',
        'Modèles sans dispositif anti-émission (joint torique + gouttière)',
      ],
      precisions: [
        'La facture ou le devis doit mentionner les dispositifs empêchant l\'émission de farine',
        'Liste de diviseuses conformes disponible sur le site du Lempa : https://www.lempa.org/la-marque/',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'farineur',
    nom: 'Farineur (énergisé ou non)',
    description: 'Farineur neuf pour dosage contrôlé de la farine de fleurage, limitant les émissions en suspension.',
    descriptionComplete: 'Le farineur permet de doser et distribuer la farine de fleurage de façon contrôlée, réduisant ainsi les émissions de poussières dans l\'air ambiant en boulangerie. Il existe en version manuelle (non énergisée) ou motorisée (énergisée), cette dernière devant être conforme à la Directive Machines. Son utilisation en remplacement du farinage manuel à la main diminue significativement la concentration de poussières inhalées.',
    subvention: 'POUSSIERE_FARINE',
    categorie: 'equipements-specifiques',
    secteurs: ['restauration-metiers-bouche'],
    icon: 'Wind',
    eligibilite: {
      conception: [
        'Équipement neuf obligatoirement',
        'Version énergisée : conforme Directive Machines 2006/42/CE',
        'Version énergisée : livré avec notice d\'instructions et déclaration CE de conformité en français',
        'Déclaration CE mentionnant la directive 2006/42/CE (version énergisée uniquement)',
      ],
      formation: [
        'Formation à l\'utilisation et à la maintenance incluse dans la prestation du fournisseur — version énergisée (art. R4323-1 CT)',
        'Attestation de formation tracée pour chaque salarié utilisateur',
        'Attestation sur l\'honneur de délivrance d\'une information sur les risques',
      ],
      amenagement: [],
      exclusions: [
        'Farineurs d\'occasion',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'aspirateur-poussiere-farine',
    nom: 'Aspirateur mobile boulangerie/pâtisserie — poussières de farine',
    description: 'Aspirateur neuf classe M ou H spécialement conçu pour les poussières de farine combustibles.',
    descriptionComplete: 'L\'aspirateur mobile boulangerie/pâtisserie est conçu spécifiquement pour capter les poussières de farine combustibles dans les laboratoires de boulangerie et pâtisserie. De classe M ou H selon la norme NF EN 60335-2-69, il est équipé de filtres et accessoires antistatiques, d\'un système de décolmatage automatique en cuve fermée et de poches de vidage antistatiques. Il peut être adapté aux zones ATEX et à l\'usage dans les fours.',
    subvention: 'POUSSIERE_FARINE',
    categorie: 'equipements-specifiques',
    secteurs: ['restauration-metiers-bouche'],
    icon: 'Filter',
    eligibilite: {
      conception: [
        'Équipement neuf obligatoirement',
        'Conforme Directive Machines 2006/42/CE et norme NF EN 60335-2-69 : 2012',
        'Destiné à l\'aspiration de poussières de farine',
        'Classe M ou H (NF EN 60335-2-69 : 2012)',
        'Système de décolmatage automatique cuve fermée sans émission OU manuel avec indicateur de colmatage',
        'Changement des filtres et vidage de cuve facilité — poches en matériaux antistatiques',
        'Conçu pour poussières combustibles',
        'Filtres et accessoires (flexible, canne…) antistatiques',
        'Si usage zone ATEX : adapté à la zone concernée',
        'Si usage four : tuyau et filtre résistant 180°C, débit ≥ 300 m³/h',
        'Livré avec notice d\'instructions et déclaration CE de conformité en français',
      ],
      formation: [
        'Formation à l\'utilisation et à la maintenance incluse dans la prestation du fournisseur (art. R4323-1 CT)',
        'Attestation de formation tracée pour chaque salarié utilisateur',
        'Attestation sur l\'honneur de délivrance d\'une information sur les risques',
      ],
      amenagement: [],
      exclusions: [
        'Aspirateurs d\'occasion',
        'Aspirateurs non classés M ou H',
        'Aspirateurs non conçus pour poussières combustibles',
      ],
      precisions: [
        'La facture ou le devis doit mentionner : classe de l\'aspirateur, système de décolmatage, destination (poussières de farines combustibles)',
        'Liste de modèles conformes disponible sur le site du Lempa : https://www.lempa.org/la-marque/',
      ],
    },
    distributeurs: [],
  },

  {
    id: 'coffret-electrique-chantier',
    nom: 'Coffret électrique temporaire de chantier',
    description: 'Armoire électrique monophasée conforme NF C15-100 pour alimentation sécurisée sur chantier.',
    descriptionComplete: 'Le coffret électrique temporaire de chantier fournit une alimentation électrique sécurisée et conforme aux chantiers du BTP. Il comprend une prise triphasée CEE 16A, deux prises monophasées 16A, une protection différentielle 30 mA et une mise à la terre 25 mm². La protection différentielle est contrôlée avant fourniture. Son installation doit être confiée à une personne compétente et habilitée (UTE C 18-510). Limité à 3 coffrets par entreprise.',
    subvention: 'TOP_BTP',
    categorie: 'equipements-specifiques',
    secteurs: ['construction-btp'],
    icon: 'Zap',
    eligibilite: {
      conception: [
        'Bornier IP2X',
        '1 prise de courant triphasé 16A à brochage européen / standard CEE',
        '2 prises de courant monophasés 16A à brochage domestique',
        'Prise de terre pour câble cuivre 25 mm²',
        'Protection différentielle 30 mA contrôlée avant fourniture',
        'Tension d\'utilisation : 230V – 400V',
        'Conforme NF C15-100 et NF C 14-100',
      ],
      formation: [
        'Installation confiée à une personne compétente et habilitée selon UTE C 18-510',
        'Mise à la terre et raccordements sous la responsabilité technique de l\'utilisateur',
      ],
      amenagement: [
        'Raccordement par un électricien habilité',
        'Mise à la terre réalisée avant toute mise sous tension',
      ],
      exclusions: [
        'Coffrets triphasés seuls',
        'Armoires électriques de chantier non conformes NF C15-100',
      ],
      precisions: [
        'Limitation à 3 coffrets maximum par entreprise dans le cadre de la subvention',
      ],
    },
    distributeurs: [],
  },
]

export function filterCatalogue(
  catalogue: Materiel[],
  {
    search = '',
    subventions = [],
    categories = [],
    secteurs = [],
  }: {
    search?: string
    subventions?: string[]
    categories?: string[]
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
    if (subventions.length > 0 && !subventions.includes(item.subvention)) return false
    if (categories.length > 0 && !categories.includes(item.categorie)) return false
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
