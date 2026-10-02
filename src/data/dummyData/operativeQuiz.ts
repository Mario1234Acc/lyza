import type { QuizQuestion } from './types';

export const operativeQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    category: 'Diagnosis & Anatomy',
    question: 'All of the following lymphnode are found in head and neck area except',
    options: [
      { id: 'a', text: 'preauricular' },
      { id: 'b', text: 'supraclavicular' },
      { id: 'c', text: 'deep cervical' },
      { id: 'd', text: 'axillary' }
    ],
    correctAnswer: 'd',
    explanation:
      'Axillary lymph nodes are located in the armpit region, whereas preauricular, supraclavicular, and deep cervical lymph nodes are located in the head and neck region.'
  },
  {
    id: 2,
    category: 'Dental Charting & Symbols',
    question: 'Please chose a correct meaning for symbol in the picture?',
    options: [
      { id: 'a', text: 'Composite filling' },
      { id: 'b', text: 'Metal crown' },
      { id: 'c', text: 'Tooth color crown' },
      { id: 'd', text: 'Amalgam filling' }
    ],
    correctAnswer: 'c',
    explanation:
      'In standard dental charting, green diagonal lines covering the full crown represent a tooth-colored crown restoration.'
  },
  {
    id: 3,
    category: 'Caries Diagnosis & Charting',
    question: 'If tooth present with ICDAS code 5-6, what should be written on dental chart?',
    options: [
      { id: 'a', text: 'A (blue)' },
      { id: 'b', text: 'B (red)' },
      { id: 'c', text: 'C (blue)' },
      { id: 'd', text: 'B (blue)' }
    ],
    correctAnswer: 'd',
    explanation:
      'ICDAS code 5-6 represents distinct or extensive cavities with visible dentine, charted under symbol B in blue for definitive treatment planning.'
  },
  {
    id: 4,
    category: 'Diagnosis & Treatment Planning',
    question: 'Surgical crown lengthening sometime is needed in order to manage subgingival caries',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' }
    ],
    correctAnswer: 'a',
    explanation:
      'Surgical crown lengthening exposes sound tooth structure apical to subgingival caries margins to allow proper isolation and restoration.'
  },
  {
    id: 5,
    category: 'Cavity Preparation & Classification',
    question: 'Bevel are the variation which are created during cavity preparation to help:',
    options: [
      { id: 'a', text: 'prevent marginal leakage' },
      { id: 'b', text: 'Increasing retention' },
      { id: 'c', text: 'Make restoration stronger' },
      { id: 'd', text: 'A and B are correct' },
      { id: 'e', text: 'A, B, and C are correct' }
    ],
    correctAnswer: 'd',
    explanation:
      'Bevels increase bonding surface area, improving retention and reducing marginal leakage in adhesive restorations.'
  },
  {
    id: 6,
    category: 'Diagnosis & Treatment Planning',
    question: 'All these are examples of NCCL except',
    options: [
      { id: 'a', text: 'Dental caries' },
      { id: 'b', text: 'Enamel hypoplasia' },
      { id: 'c', text: 'Tooth wear' },
      { id: 'd', text: 'Trauma' }
    ],
    correctAnswer: 'a',
    explanation:
      'NCCL stands for Non-Carious Cervical Lesions (e.g., abrasion, erosion, abfraction). Dental caries is a carious lesion.'
  },
  {
    id: 7,
    category: 'Restorative Materials & Isolation',
    question: 'Which clamp use for molar quadrant I and III',
    options: [
      { id: 'a', text: '12A' },
      { id: 'b', text: '13A' },
      { id: 'c', text: '#9' }
    ],
    correctAnswer: 'a',
    explanation:
      'Rubber dam clamp 12A is specifically designed with serrated jaws for upper right (Quadrant I) and lower left (Quadrant III) molars.'
  },
  {
    id: 8,
    category: 'Restorative Materials & Isolation',
    question: 'Which of the following materials has the best esthetic outcome?',
    options: [
      { id: 'a', text: 'Composite' },
      { id: 'b', text: 'Amalgam' },
      { id: 'c', text: 'GIC' }
    ],
    correctAnswer: 'a',
    explanation:
      'Composite resins match natural tooth shades, translucency, and polishability better than GIC or metallic amalgam.'
  },
  {
    id: 9,
    category: 'Cavity Preparation & Classification',
    question: 'Unsupported enamel should be removed during cavity preparation',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' }
    ],
    correctAnswer: 'a',
    explanation:
      'Unsupported enamel prisms are prone to fracture under occlusal forces and should be removed or supported by adhesive materials.'
  },
  {
    id: 10,
    category: 'Diagnosis & Treatment Planning',
    question: 'Interdental papilla and Gingival/Cervical embrasure are exactly the same thing',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' }
    ],
    correctAnswer: 'b',
    explanation:
      'The cervical embrasure is the anatomical interproximal space apical to the contact point, whereas the interdental papilla is the soft tissue occupant of that space.'
  },
  {
    id: 11,
    category: 'Restorative Materials & Isolation',
    question:
      'Flowable composite restorations can be easy to use and enhance esthetics, however they are weaker than condensable composite restorations',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' }
    ],
    correctAnswer: 'a',
    explanation:
      'Flowable composites have lower filler content, resulting in lower mechanical strength and higher polymerization shrinkage than packable composites.'
  },
  {
    id: 12,
    category: 'Dental Ergonomics & General',
    question: 'The best position for patient during dental treatment is',
    options: [
      { id: 'a', text: 'Supine (flat)' },
      { id: 'b', text: 'Upright' },
      { id: 'c', text: '45% semi supine' }
    ],
    correctAnswer: 'a',
    explanation:
      'Supine position is generally recommended for operating on the maxillary arch and standard ergonomic positioning.'
  },
  {
    id: 13,
    category: 'Restorative Materials & Isolation',
    question: 'A prepared cavity is best protected from moisture during restoration placement by',
    options: [
      { id: 'a', text: 'Cotton rolls' },
      { id: 'b', text: 'Saliva Ejector' },
      { id: 'c', text: 'Rubber dam' },
      { id: 'd', text: 'Paper napkin' },
      { id: 'e', text: 'All of the above' }
    ],
    correctAnswer: 'c',
    explanation:
      'Rubber dam is the gold standard for absolute isolation, preventing saliva, moisture, and breath humidity from contaminating the cavity.'
  },
  {
    id: 14,
    category: 'Restorative Materials & Isolation',
    question: 'Bulk Fill composite can be cured up to __mm per increment',
    options: [
      { id: 'a', text: '3' },
      { id: 'b', text: '2' },
      { id: 'c', text: '1' },
      { id: 'd', text: '4' }
    ],
    correctAnswer: 'd',
    explanation:
      'Bulk fill composite resins are specially formulated with higher translucency and photo-initiators allowing incremental curing up to 4 mm.'
  },
  {
    id: 15,
    category: 'Cavity Preparation & Classification',
    question: 'How many walls of the cavity class I?',
    options: [
      { id: 'a', text: '3' },
      { id: 'b', text: '4' },
      { id: 'c', text: '5' },
      { id: 'd', text: '6' }
    ],
    correctAnswer: 'c',
    explanation:
      'A standard simple Class I occlusal cavity preparation has 5 walls: Mesial, Distal, Buccal, Lingual, and Pulpal floor.'
  },
  {
    id: 16,
    category: 'Restorative Materials & Isolation',
    question: 'What is the aim of Isolation?',
    options: [
      { id: 'a', text: 'Moisture control' },
      { id: 'b', text: 'Retraction' },
      { id: 'c', text: 'Prevent swallowing material and instrument' },
      { id: 'd', text: 'All of the above' }
    ],
    correctAnswer: 'd',
    explanation:
      'Isolation achieves moisture control, soft tissue retraction, visual clarity, and patient safety from accidental aspiration.'
  },
  {
    id: 17,
    category: 'Restorative Materials & Isolation',
    question:
      'Which of the following restorations require mechanical retention (undercut) preparation to lock the restoration in the cavity?',
    options: [
      { id: 'a', text: 'Composite' },
      { id: 'b', text: 'Amalgam' },
      { id: 'c', text: 'GIC' }
    ],
    correctAnswer: 'b',
    explanation:
      'Amalgam does not bond adhesively to tooth structure and relies strictly on mechanical retention features like undercuts.'
  },
  {
    id: 18,
    category: 'Cavity Preparation & Classification',
    question: 'The high speed round bur is best for removing soft caries in the dentin',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' }
    ],
    correctAnswer: 'b',
    explanation:
      'Low speed round burs or hand excavators are preferred for soft dentine caries removal to prevent over-preparation and pulpal exposure.'
  },
  {
    id: 19,
    category: 'Cavity Preparation & Classification',
    question: 'Carious process effected proximal (Mesial and Distal) surfaces of the posterior teeth',
    options: [
      { id: 'a', text: 'Class I' },
      { id: 'b', text: 'Class II' },
      { id: 'c', text: 'Class III' },
      { id: 'd', text: 'Class IV' },
      { id: 'e', text: 'Class V' }
    ],
    correctAnswer: 'b',
    explanation:
      "Black's Class II cavities involve the proximal surfaces (mesial/distal) of posterior teeth (premolars and molars)."
  },
  {
    id: 20,
    category: 'Restorative Materials & Isolation',
    question: 'Which of the following material has a fluoride releasing property?',
    options: [
      { id: 'a', text: 'Composite' },
      { id: 'b', text: 'Amalgam' },
      { id: 'c', text: 'GIC' }
    ],
    correctAnswer: 'c',
    explanation:
      'Glass Ionomer Cement (GIC) releases fluoride over time, aiding in remineralization and preventing secondary caries.'
  },
  {
    id: 21,
    category: 'Cavity Preparation & Classification',
    question: 'A tunnel preparation is suitable for which situation?',
    options: [
      { id: 'a', text: 'Occlusal caries' },
      { id: 'b', text: 'Proximal caries on an incisor' },
      { id: 'c', text: 'Deep proximal caries (R5-6) on a molar' },
      { id: 'd', text: 'Shallow proximal caries (R4) on a premolar' },
      { id: 'e', text: 'All of the above' }
    ],
    correctAnswer: 'd',
    explanation:
      'Tunnel preparation is a conservative approach intended for small, shallow proximal lesions in posterior teeth while preserving the marginal ridge.'
  },
  {
    id: 22,
    category: 'Diagnosis & Treatment Planning',
    question: 'Enamel is more resistant to the progress of dental caries than dentine',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' }
    ],
    correctAnswer: 'a',
    explanation:
      'Enamel is 96% mineralized hydroxyapatite and resists acid dissolution much longer than organic-rich dentine (70% mineralized).'
  },
  {
    id: 23,
    category: 'Diagnosis & Treatment Planning',
    question: 'Subgingival caries and root caries are the same thing',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' }
    ],
    correctAnswer: 'b',
    explanation:
      'Subgingival caries refers to location below the free gingival margin, while root caries refers specifically to lesions originating on root surface.'
  },
  {
    id: 24,
    category: 'Restorative Materials & Isolation',
    question: 'Which of the following is/are an indication for GIC usage?',
    options: [
      { id: 'a', text: 'Class I, III and Class V restorations' },
      { id: 'b', text: 'Indirect restoration cementation' },
      { id: 'c', text: 'Fissure Sealing' },
      { id: 'd', text: 'Pulp protection' },
      { id: 'e', text: 'Community school programs' },
      { id: 'f', text: 'All of the above' }
    ],
    correctAnswer: 'f',
    explanation:
      'GIC is versatile and used for restorative fillings, luting cement, sealants, liners/bases, and ART in community health.'
  },
  {
    id: 25,
    category: 'Restorative Materials & Isolation',
    question: 'To minimize composite shrinkage during light curing, which of the following methods is not effective?',
    options: [
      { id: 'a', text: 'Incremental placement' },
      { id: 'b', text: 'maximum 2mm of each incremental layer' },
      { id: 'c', text: 'increase light cure duration' }
    ],
    correctAnswer: 'c',
    explanation:
      'Increasing cure duration increases total conversion but does not reduce volumetric shrinkage; incremental layering reduces shrinkage stress.'
  },
  {
    id: 26,
    category: 'Cavity Preparation & Classification',
    question: 'To make a good shape of cavity preparation requires:',
    options: [
      { id: 'a', text: 'Knowledge of anatomy' },
      { id: 'b', text: 'Depth control' },
      { id: 'c', text: 'Angulation control' },
      { id: 'd', text: 'A and B are correct' },
      { id: 'e', text: 'A, B, and C are correct' }
    ],
    correctAnswer: 'e',
    explanation:
      'Proper cavity preparation requires understanding tooth anatomy, precise depth control, and bur angulation to preserve tooth structure.'
  },
  {
    id: 27,
    category: 'Restorative Materials & Isolation',
    question: 'A contraindication for placing a GIC pit and fissure sealant is',
    options: [
      { id: 'a', text: 'Caries code 1' },
      { id: 'b', text: 'Sound Tooth' },
      { id: 'c', text: 'Caries code 4' }
    ],
    correctAnswer: 'c',
    explanation:
      'ICDAS Code 4 indicates underlying dark shadow from dentine with or without localized enamel breakdown, requiring operative restoration rather than a sealant.'
  },
  {
    id: 28,
    category: 'Dental Ergonomics & General',
    question: 'Good posture during dental treatment can minimize fatigue for dentist',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' }
    ],
    correctAnswer: 'a',
    explanation:
      'Ergonomic neutral positioning reduces musculoskeletal strain, stress, and chronic fatigue for clinicians.'
  },
  {
    id: 29,
    category: 'Restorative Materials & Isolation',
    question: 'Advantages of rubber dam include:',
    options: [
      { id: 'a', text: 'good isolation' },
      { id: 'b', text: 'cross infection control' },
      { id: 'c', text: 'prevent contamination' },
      { id: 'd', text: 'prevent instrument swallowed' },
      { id: 'e', text: 'all above' }
    ],
    correctAnswer: 'e',
    explanation:
      'Rubber dam isolation protects the operating field, reduces aerosol cross-infection, and prevents foreign body ingestion.'
  },
  {
    id: 30,
    category: 'Cavity Preparation & Classification',
    question: 'A full coverage restoration is also called a:',
    options: [
      { id: 'a', text: 'Crown' },
      { id: 'b', text: '1 surface restoration' },
      { id: 'c', text: '3 surface restoration' },
      { id: 'd', text: '2 surface restoration' },
      { id: 'e', text: 'Complex restoration' }
    ],
    correctAnswer: 'a',
    explanation:
      'A dental crown encases the entire visible coronal portion of a tooth, making it a full coverage restoration.'
  },
  {
    id: 31,
    category: 'Dental Ergonomics & General',
    question: 'Which of the following is NOT an Operative Dentistry Objective?',
    options: [
      { id: 'a', text: 'Alteration' },
      { id: 'b', text: 'Prevent' },
      { id: 'c', text: 'Identify' },
      { id: 'd', text: 'Restore' }
    ],
    correctAnswer: 'a',
    explanation:
      'The primary objectives of operative dentistry are Prevention, Diagnosis/Identification, and Restoration of teeth.'
  },
  {
    id: 32,
    category: 'Dental Ergonomics & General',
    question: 'The name of the LMS we use at UP is:',
    options: [
      { id: 'a', text: 'Noodle' },
      { id: 'b', text: 'Moodle' },
      { id: 'c', text: 'Google' }
    ],
    correctAnswer: 'b',
    explanation:
      'Moodle is the open-source Learning Management System used by University of Puthisastra.'
  },
  {
    id: 33,
    category: 'Cavity Preparation & Classification',
    question: 'A cavity on the proximal surface of incisor or canine that involves the incisal angle is:',
    options: [
      { id: 'a', text: 'Class I' },
      { id: 'b', text: 'Class II' },
      { id: 'c', text: 'Class III' },
      { id: 'd', text: 'Class IV' },
      { id: 'e', text: 'Class V' }
    ],
    correctAnswer: 'd',
    explanation:
      'Class IV cavities involve proximal surfaces of anterior teeth including the incisal edge or angle.'
  },
  {
    id: 34,
    category: 'Diagnosis & Treatment Planning',
    question: 'Patient with a lack of saliva is at higher risk of dental caries',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' }
    ],
    correctAnswer: 'a',
    explanation:
      'Saliva provides buffering capacity, remineralizing ions, and antimicrobial clearance; xerostomia dramatically increases caries risk.'
  },
  {
    id: 35,
    category: 'Diagnosis & Treatment Planning',
    question: 'Which of the following is the most suitable criteria for pulp capping?',
    options: [
      { id: 'a', text: 'Reversible pulpitis' },
      { id: 'b', text: 'Irreversible pulpitis' },
      { id: 'c', text: 'Pulp Necrosis' },
      { id: 'd', text: 'Periapical infected teeth' }
    ],
    correctAnswer: 'a',
    explanation:
      'Pulp capping is indicated only for vital pulps with reversible pulpitis where inflammation is localized and repairable.'
  },
  {
    id: 36,
    category: 'Cavity Preparation & Classification',
    question: 'Which of the following restorations require a bevel preparation for restoration?',
    options: [
      { id: 'a', text: 'Composite' },
      { id: 'b', text: 'Amalgam' },
      { id: 'c', text: 'GIC' },
      { id: 'd', text: 'A and B are correct' },
      { id: 'e', text: 'A, B, and C are correct' }
    ],
    correctAnswer: 'a',
    explanation:
      'Bevels are prepared in enamel for direct composite restorations to expose enamel rod ends for acid etching and blend color margins.'
  },
  {
    id: 37,
    category: 'Diagnosis & Treatment Planning',
    question: 'Instructions after fluoride application',
    options: [
      { id: 'a', text: 'Do not drink or eat for at least 30 min after application' },
      { id: 'b', text: 'Brush after application' },
      { id: 'c', text: 'Flossing after application' },
      { id: 'd', text: 'Rinse after application' }
    ],
    correctAnswer: 'a',
    explanation:
      'Patients should avoid eating, drinking, or rinsing for 30 minutes to maximize topical fluoride uptake into enamel.'
  },
  {
    id: 38,
    category: 'Restorative Materials & Isolation',
    question: 'Minor defects in a direct restoration always requires total replacement of the material',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' }
    ],
    correctAnswer: 'b',
    explanation:
      'Minor localized defects can often be repaired conservatively rather than replacing the entire restoration, preserving natural tooth structure.'
  },
  {
    id: 39,
    category: 'Restorative Materials & Isolation',
    question: 'Which of the following is not a suitable material for pulp capping?',
    options: [
      { id: 'a', text: 'MTA' },
      { id: 'b', text: 'Biodentine' },
      { id: 'c', text: 'Calcium Hydroxide (hard setting)' },
      { id: 'd', text: 'Composite' }
    ],
    correctAnswer: 'd',
    explanation:
      'Uncured resin monomers in composite are cytotoxic to dental pulp tissue and should never be placed directly onto exposed pulp.'
  },
  {
    id: 40,
    category: 'Diagnosis & Treatment Planning',
    question: 'Which of the following is the BEST and most convenient approach to manage a deep carious lesion in a tooth with reversible pulpitis?',
    options: [
      { id: 'a', text: 'Stepwise excavation' },
      { id: 'b', text: 'Indirect pulp capping' },
      { id: 'c', text: 'Pulpotomy' },
      { id: 'd', text: 'Direct Pulp Capping' },
      { id: 'e', text: 'Root canal treatment' }
    ],
    correctAnswer: 'a',
    explanation:
      'Stepwise excavation or selective removal reduces the risk of accidental pulp exposure in extremely deep carious lesions.'
  },
  {
    id: 41,
    category: 'Cavity Preparation & Classification',
    question: 'Caries located on the proximal surface (without affecting the incisor edge) of an anterior tooth is',
    options: [
      { id: 'a', text: 'Class I' },
      { id: 'b', text: 'Class II' },
      { id: 'c', text: 'Class III' },
      { id: 'd', text: 'Class IV' }
    ],
    correctAnswer: 'c',
    explanation:
      'Class III cavities affect the proximal surfaces of anterior teeth (incisors and canines) without involving the incisal edge.'
  },
  {
    id: 42,
    category: 'Diagnosis & Treatment Planning',
    question: 'What is the best method to detect proximal decay?',
    options: [
      { id: 'a', text: 'bitewing X ray' },
      { id: 'b', text: 'probing' },
      { id: 'c', text: 'visual inspection' },
      { id: 'd', text: 'percussion' },
      { id: 'e', text: 'PA Xray' }
    ],
    correctAnswer: 'a',
    explanation:
      'Bitewing radiographs are the gold standard for detecting interproximal carious lesions hidden below the contact point.'
  },
  {
    id: 43,
    category: 'Cavity Preparation & Classification',
    question: 'When removing caries with a round low speed bur, the smallest size possible should be used',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' }
    ],
    correctAnswer: 'b',
    explanation:
      'Using the largest comfortable round bur reduces the risk of pinpoint pulpal perforation compared to a small bur.'
  },
  {
    id: 44,
    category: 'Cavity Preparation & Classification',
    question: 'Which of the following are Principles of cavity preparation?',
    options: [
      { id: 'a', text: 'Gain access to caries' },
      { id: 'b', text: 'Removal caries' },
      { id: 'c', text: 'Cut away all significantly unsupported enamel' },
      { id: 'd', text: 'Extended margins so that they are accessible for instrumentation and cleaning' },
      { id: 'e', text: 'All of the above' }
    ],
    correctAnswer: 'e',
    explanation:
      'Principles of cavity preparation encompass gaining access, removing caries, supporting enamel, and extending margins appropriately.'
  },
  {
    id: 45,
    category: 'Restorative Materials & Isolation',
    question: 'Rubber dam application technique may include:',
    options: [
      { id: 'a', text: 'Latex first' },
      { id: 'b', text: 'Clamp first' },
      { id: 'c', text: 'Rubber dam and clamp at the same time' },
      { id: 'd', text: 'floss first' },
      { id: 'e', text: 'A, B, and C are correct' },
      { id: 'f', text: 'All of the above' }
    ],
    correctAnswer: 'e',
    explanation:
      'Standard techniques for placing a rubber dam include clamp first, dam first, or dam and clamp simultaneously.'
  },
  {
    id: 46,
    category: 'Restorative Materials & Isolation',
    question: 'Pit and fissure sealant is an effective method for preventing occlusal caries',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' }
    ],
    correctAnswer: 'a',
    explanation:
      'Pit and fissure sealants create a physical barrier preventing food debris and plaque entrapment in deep anatomical grooves.'
  },
  {
    id: 47,
    category: 'Restorative Materials & Isolation',
    question: 'One disadvantage of Cention-N is that it requires addition tooth preparation to provide retention for material',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' }
    ],
    correctAnswer: 'b',
    explanation:
      'Cention-N does not strictly require additional aggressive mechanical retentive tooth preparation compared to traditional materials.'
  },
  {
    id: 48,
    category: 'Diagnosis & Treatment Planning',
    question: 'The deep caries on the floor of the lesion can sometime left behind in order to prevent mechanical exposure of the pulp',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' }
    ],
    correctAnswer: 'a',
    explanation:
      'Selective caries removal allows leaving affected dentine over the pulp floor to prevent iatrogenic pulp exposure.'
  },
  {
    id: 49,
    category: 'Restorative Materials & Isolation',
    question: 'Rubber dam set includes all of the following except:',
    options: [
      { id: 'a', text: 'Rubber dam punch' },
      { id: 'b', text: 'Rubber dam frame' },
      { id: 'c', text: 'Rubber dam clamp' },
      { id: 'd', text: 'Rubber dam clamp holder' },
      { id: 'e', text: 'Matrix band' }
    ],
    correctAnswer: 'e',
    explanation:
      'A matrix band is used for restoring proximal walls during cavity filling, not as part of the rubber dam isolation kit.'
  },
  {
    id: 50,
    category: 'Diagnosis & Treatment Planning',
    question: 'The most accurate way to detect proximal caries in posterior teeth is with:',
    options: [
      { id: 'a', text: 'Occlusal Radiograph' },
      { id: 'b', text: 'Bitewing radiograph' },
      { id: 'c', text: 'Panoramic radiograph' },
      { id: 'd', text: 'A and B are correct' },
      { id: 'e', text: 'A, B, and C are correct' }
    ],
    correctAnswer: 'b',
    explanation:
      'Bitewing radiographs provide minimal overlap and optimal geometry for identifying proximal enamel and dentine caries.'
  },
  {
    id: 51,
    category: 'Restorative Materials & Isolation',
    question: 'What types of burs are best for polishing composite?',
    options: [
      { id: 'a', text: 'Diamond bur' },
      { id: 'b', text: 'Silicone bur' },
      { id: 'c', text: 'Carbide bur' }
    ],
    correctAnswer: 'b',
    explanation:
      'Silicone rubber polishers produce a smooth, high-luster surface on composite restorations.'
  },
  {
    id: 52,
    category: 'Dental Ergonomics & General',
    question: 'Which of the following is not one of the international tooth notation systems?',
    options: [
      { id: 'a', text: 'FDI' },
      { id: 'b', text: 'ADA' },
      { id: 'c', text: 'Palmer' },
      { id: 'd', text: 'ICDAS' }
    ],
    correctAnswer: 'd',
    explanation:
      'ICDAS (International Caries Detection and Assessment System) is a caries scoring system, not a tooth notation system.'
  },
  {
    id: 53,
    category: 'Dental Ergonomics & General',
    question: 'Maxillofacial trauma that requires open fixation and closed reduction is in the scope of Operative Dentistry.',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' }
    ],
    correctAnswer: 'b',
    explanation:
      'Surgical management of maxillofacial fractures falls under Oral and Maxillofacial Surgery (OMFS), not Operative Dentistry.'
  },
  {
    id: 54,
    category: 'Restorative Materials & Isolation',
    question: 'Which of the following materials is not recommended for a large Class II restoration in a permanent tooth?',
    options: [
      { id: 'a', text: 'Composite' },
      { id: 'b', text: 'Amalgam' },
      { id: 'c', text: 'GIC' },
      { id: 'd', text: 'Cention N' }
    ],
    correctAnswer: 'c',
    explanation:
      'Conventional GIC lacks sufficient fracture toughness and flexural strength for high stress-bearing, large Class II load-bearing restorations.'
  }
];
