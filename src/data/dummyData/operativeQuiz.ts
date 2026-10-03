import type { QuizQuestion } from './types';

export const operativeQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    category: 'Operative Dentistry',
    question: 'All of the following lymph node are found in head and neck area except',
    options: [
      { id: 'a', text: 'Submandibular' },
      { id: 'b', text: 'Cervical' },
      { id: 'c', text: 'Submental' },
      { id: 'd', text: 'axillary' }
    ],
    correctAnswer: 'd',
    explanation: 'Axillary lymph nodes are located in the armpit area, not in the head and neck[cite: 2].'
  },
  {
    id: 2,
    category: 'Operative Dentistry',
    question: 'Please choose a correct meaning for symbol in the picture?',
    options: [
      { id: 'a', text: 'Full metal crown' },
      { id: 'b', text: 'Porcelain fused to metal crown' },
      { id: 'c', text: 'Tooth color crown' },
      { id: 'd', text: 'Temporary crown' }
    ],
    correctAnswer: 'c',
    explanation: 'Green hatched circle with crown outline represents a tooth color crown[cite: 2].'
  },
  {
    id: 3,
    category: 'Operative Dentistry',
    question: 'If tooth present with ICDAS code 5-6, what should be written on dental chart?',
    options: [
      { id: 'a', text: 'A (blue)' },
      { id: 'b', text: 'A (red)' },
      { id: 'c', text: 'B (red)' },
      { id: 'd', text: 'B (blue)' }
    ],
    correctAnswer: 'd',
    explanation: 'Extensive cavities with visible dentin (ICDAS 5-6) are charted as B (blue)[cite: 2].'
  },
  {
    id: 4,
    category: 'Operative Dentistry',
    question: 'What is the purpose of percussion test?',
    options: [
      { id: 'a', text: 'Periapical condition' },
      { id: 'b', text: 'Pulpal status' },
      { id: 'c', text: 'Periodontal probing depth' },
      { id: 'd', text: 'Tooth mobility' }
    ],
    correctAnswer: 'a',
    explanation: 'Percussion test is primarily used to evaluate inflammation in the periapical tissues[cite: 2].'
  },
  {
    id: 5,
    category: 'Operative Dentistry',
    question: 'Please choose a correct meaning for symbol in the picture?',
    options: [
      { id: 'a', text: 'Root canal therapy needed' },
      { id: 'b', text: 'Root canal treated' },
      { id: 'c', text: 'Pulpotomy' },
      { id: 'd', text: 'Post and core' }
    ],
    correctAnswer: 'b',
    explanation: 'Blue filling inside the root canal indicates a completed root canal treatment[cite: 2].'
  },
  {
    id: 6,
    category: 'Operative Dentistry',
    question: 'Basic Periodontal Examination: code 0',
    options: [
      { id: 'a', text: 'No pocket>3.5mm, no calculus/overhangs, no bleeding after probing' },
      { id: 'b', text: 'No pocket>3.5mm, no calculus/overhangs, bleeding after probing' },
      { id: 'c', text: 'No pocket>3.5mm, supra or subgingival calculus/overhangs' },
      { id: 'd', text: 'Pocket depth 3.5-5.5mm' }
    ],
    correctAnswer: 'a',
    explanation: 'BPE code 0 represents healthy periodontal tissue with probing depth < 3.5mm and no bleeding or calculus[cite: 2].'
  },
  {
    id: 7,
    category: 'Operative Dentistry',
    question: "Where is the location of Stensen's duct opening?",
    options: [
      { id: 'a', text: 'Opposite to upper first molar' },
      { id: 'b', text: 'Opposite to lower second molar' },
      { id: 'c', text: 'Opposite to upper second molar' },
      { id: 'd', text: 'Sublingual caruncle' }
    ],
    correctAnswer: 'c',
    explanation: "Stensen's duct (parotid gland duct) opens into the oral cavity opposite the maxillary second molar[cite: 2]."
  },
  {
    id: 8,
    category: 'Operative Dentistry',
    question: 'ICDAS Radiograph system (proximal): code 5',
    options: [
      { id: 'a', text: 'Radiolucency limit to outer 1/3 of dentin' },
      { id: 'b', text: 'Radiolucency reaching to middle 1/3 of dentin' },
      { id: 'c', text: 'Radiolucency reaching to inner 1/3 of dentin, clinically cavitated' },
      { id: 'd', text: 'Radiolucency into pulp, clinically cavitated' }
    ],
    correctAnswer: 'c',
    explanation: 'Radiographic ICDAS code 5 indicates radiolucency extending into the inner third of dentin[cite: 2].'
  },
  {
    id: 9,
    category: 'Operative Dentistry',
    question: 'Class II malocclusion',
    options: [
      { id: 'a', text: 'Maxillary mesiobuccal cusp aligns with mandibular buccal groove' },
      { id: 'b', text: 'Maxillary mesiobuccal cusp is anterior to the buccal groove of mandibular first molar' },
      { id: 'c', text: 'Maxillary mesiobuccal cusp is posterior to the buccal groove of mandibular first molar' },
      { id: 'd', text: 'Edge-to-edge incisor relationship' }
    ],
    correctAnswer: 'b',
    explanation: 'In Class II malocclusion, the maxillary molar is positioned anteriorly relative to the mandibular molar[cite: 2].'
  },
  {
    id: 10,
    category: 'Operative Dentistry',
    question: 'Which of the following papillaes have the least amount on tongue?',
    options: [
      { id: 'a', text: 'Filiform Papillae' },
      { id: 'b', text: 'Fungiform Papillae' },
      { id: 'c', text: 'Foliate Papillae' },
      { id: 'd', text: 'Circumvallet Papillae' }
    ],
    correctAnswer: 'd',
    explanation: 'Circumvallate papillae are the largest but least numerous papillae on the tongue (usually 8-12)[cite: 2].'
  },
  {
    id: 11,
    category: 'Operative Dentistry',
    question: 'Which of the following statement are true regarding to C fiber?',
    options: [
      { id: 'a', text: 'Sharp & fast pain, low threshold' },
      { id: 'b', text: 'Sharp & fast pain, high threshold' },
      { id: 'c', text: 'Throbbing & prolong pain, high threshold' },
      { id: 'd', text: 'Throbbing & prolong pain, low threshold' }
    ],
    correctAnswer: 'c',
    explanation: 'C fibers are unmyelinated nerve fibers transmitting slow, dull, throbbing, long-lasting pain with a high threshold[cite: 2].'
  },
  {
    id: 12,
    category: 'Operative Dentistry',
    question: 'If tooth present with ICDAS code 1-2, what should be written on dental chart?',
    options: [
      { id: 'a', text: 'A (blue)' },
      { id: 'b', text: 'A (red)' },
      { id: 'c', text: 'B (blue)' },
      { id: 'd', text: 'B (red)' }
    ],
    correctAnswer: 'a',
    explanation: 'Early non-cavitated enamel lesions (ICDAS 1-2) are designated as A (blue)[cite: 2].'
  },
  {
    id: 13,
    category: 'Operative Dentistry',
    question: 'What is the average of overjet?',
    options: [
      { id: 'a', text: '0-1mm' },
      { id: 'b', text: '2-3mm' },
      { id: 'c', text: '4-5mm' },
      { id: 'd', text: '5-6mm' }
    ],
    correctAnswer: 'b',
    explanation: 'Normal ideal horizontal overlap (overjet) is between 2 to 3 mm[cite: 2].'
  },
  {
    id: 14,
    category: 'Operative Dentistry',
    question: 'ICDAS visual system (occlusal): code 5',
    options: [
      { id: 'a', text: 'Localized enamel breakdown' },
      { id: 'b', text: 'Distinct cavity with visible dentin' },
      { id: 'c', text: 'Extensive distinct cavity with visible dentin' },
      { id: 'd', text: 'Distinct visual change in enamel' }
    ],
    correctAnswer: 'b',
    explanation: 'ICDAS visual code 5 corresponds to a distinct cavity with visible dentin[cite: 2].'
  },
  {
    id: 15,
    category: 'Operative Dentistry',
    question: 'Basic Periodontal Examination: code 1',
    options: [
      { id: 'a', text: 'no pocket> 3.5mm, no calculus/overhangs, no bleeding' },
      { id: 'b', text: 'no pocket> 3.5mm, no calculus/overhangs, but bleeding after probing' },
      { id: 'c', text: 'no pocket> 3.5mm, calculus or overhang present' },
      { id: 'd', text: 'Pocket depth >5.5mm' }
    ],
    correctAnswer: 'b',
    explanation: 'BPE code 1 indicates probing depth < 3.5mm with bleeding on probing, but no calculus or overhangs[cite: 2].'
  },
  {
    id: 16,
    category: 'Operative Dentistry',
    question: 'ICDAS Radiograph system (proximal): code 2',
    options: [
      { id: 'a', text: 'Radiolucency in outer-half of enamel' },
      { id: 'b', text: 'Radiolucency in inner-half of enamel ±DEJ' },
      { id: 'c', text: 'Radiolucency limit to outer 1/3 of dentin' },
      { id: 'd', text: 'Radiolucency reaching to middle 1/3 of dentin' }
    ],
    correctAnswer: 'b',
    explanation: 'Radiographic ICDAS code 2 indicates radiolucency in the inner half of enamel up to the dentinoenamel junction[cite: 2].'
  },
  {
    id: 17,
    category: 'Operative Dentistry',
    question: 'Class III malocclusion',
    options: [
      { id: 'a', text: 'Normal molar relationship' },
      { id: 'b', text: 'Mandibular molar is distal to maxillary molar' },
      { id: 'c', text: 'Mandibular first molar positioned mesially/anteriorly relative to maxillary first molar' },
      { id: 'd', text: 'Open bite relationship' }
    ],
    correctAnswer: 'c',
    explanation: 'Class III malocclusion occurs when the mandibular molar is positioned anterior/mesial relative to the maxillary molar[cite: 2].'
  },
  {
    id: 18,
    category: 'Operative Dentistry',
    question: 'Basic Periodontal Examination: code 4',
    options: [
      { id: 'a', text: 'Pocket depth <3.5mm' },
      { id: 'b', text: 'Pocket depth 3.5-5.5mm' },
      { id: 'c', text: 'Furcation involvement' },
      { id: 'd', text: 'Pocket dept >5.5mm' }
    ],
    correctAnswer: 'd',
    explanation: 'BPE code 4 represents deep periodontal pockets exceeding 5.5mm[cite: 2].'
  },
  {
    id: 19,
    category: 'Operative Dentistry',
    question: 'ICDAS Radiograph system (proximal): code 6',
    options: [
      { id: 'a', text: 'Radiolucency in inner-half of enamel' },
      { id: 'b', text: 'Radiolucency reaching to middle 1/3 of dentin' },
      { id: 'c', text: 'Radiolucency reaching to inner 1/3 of dentin' },
      { id: 'd', text: 'Radiolucency into pulp, clinically cavitated' }
    ],
    correctAnswer: 'd',
    explanation: 'Radiographic ICDAS code 6 indicates extensive radiolucency extending into the pulp[cite: 2].'
  },
  {
    id: 20,
    category: 'Operative Dentistry',
    question: 'Patient come with pain on #21, moderate gingival swelling, poor oral hygiene, many white spots, caries #21,11,15,16. What is the appropriate treatment plan?',
    options: [
      { id: 'a', text: 'Extraction of all decayed teeth and full denture' },
      { id: 'b', text: 'Fluoride varnish only and recall in 6 months' },
      { id: 'c', text: 'Treatment plan by visit: Endo#21, Scaling & prophy, fluoride vanish, filling. Home care: OHI, Chlorhexidine mouthrise for 1 week' },
      { id: 'd', text: 'Fillings on all teeth in first visit, then endo on #21' }
    ],
    correctAnswer: 'c',
    explanation: 'Urgent pain/infection is managed first with endodontic treatment, followed by preventive care, hygiene, and restorations[cite: 2].'
  },
  {
    id: 21,
    category: 'Operative Dentistry',
    question: 'All of these can be seen on Bitewing radiograph except',
    options: [
      { id: 'a', text: 'Interproximal caries' },
      { id: 'b', text: 'Alveolar crest height' },
      { id: 'c', text: 'Crown restorations' },
      { id: 'd', text: 'Apex' }
    ],
    correctAnswer: 'd',
    explanation: 'Bitewing radiographs focus on crowns and alveolar crests; root apices are routinely visualized on periapical films[cite: 2].'
  },
  {
    id: 22,
    category: 'Operative Dentistry',
    question: 'What is the average overbite?',
    options: [
      { id: 'a', text: '0-10%' },
      { id: 'b', text: '20-30%' },
      { id: 'c', text: '50-60%' },
      { id: 'd', text: '70-80%' }
    ],
    correctAnswer: 'b',
    explanation: 'Normal ideal vertical overlap (overbite) covers approximately 20-30% of the mandibular central incisors[cite: 2].'
  },
  {
    id: 23,
    category: 'Operative Dentistry',
    question: 'Plaque index: when half of tooth surface is covered by plaque. What code do you give?',
    options: [
      { id: 'a', text: 'Code 0' },
      { id: 'b', text: 'Code 1' },
      { id: 'c', text: 'Code 2' },
      { id: 'd', text: 'Code 3' }
    ],
    correctAnswer: 'c',
    explanation: 'Plaque accumulation covering up to one-half of the tooth surface corresponds to Code 2[cite: 2].'
  },
  {
    id: 24,
    category: 'Operative Dentistry',
    question: 'Interpretation of Plaque index: Poor hygiene',
    options: [
      { id: 'a', text: 'Score 0' },
      { id: 'b', text: 'Score 2.0-3.0' },
      { id: 'c', text: 'Score 1.0-1.9' },
      { id: 'd', text: 'Score 0.1-0.9' }
    ],
    correctAnswer: 'b',
    explanation: 'A plaque index mean score between 2.0 and 3.0 indicates poor oral hygiene[cite: 2].'
  },
  {
    id: 25,
    category: 'Operative Dentistry',
    question: 'Medical history should include all the following except',
    options: [
      { id: 'a', text: 'Systemic diseases' },
      { id: 'b', text: 'Allergies' },
      { id: 'c', text: 'Job' },
      { id: 'd', text: 'Current medications' }
    ],
    correctAnswer: 'c',
    explanation: 'Occupation/Job is part of personal/demographic history, not medical history[cite: 2].'
  },
  {
    id: 26,
    category: 'Operative Dentistry',
    question: 'Please choose a correct meaning for symbol in the picture?',
    options: [
      { id: 'a', text: 'Missing tooth' },
      { id: 'b', text: 'Extracted tooth' },
      { id: 'c', text: 'Impacted tooth' },
      { id: 'd', text: 'Unerupted tooth' }
    ],
    correctAnswer: 'c',
    explanation: 'The abbreviation IMP on a charted tooth denotes an impacted tooth[cite: 2].'
  },
  {
    id: 27,
    category: 'Operative Dentistry',
    question: 'Basic Periodontal Examination: code 2',
    options: [
      { id: 'a', text: 'No pocket> 3.5mm, no calculus' },
      { id: 'b', text: 'Bleeding on probing only' },
      { id: 'c', text: 'No pocket> 3.5mm, but supra or subgingival calculus/ overhangs' },
      { id: 'd', text: 'Pocket depth > 5.5mm' }
    ],
    correctAnswer: 'c',
    explanation: 'BPE code 2 is assigned when plaque retention factors like calculus or overhangs are present without pockets >3.5mm[cite: 2].'
  },
  {
    id: 28,
    category: 'Operative Dentistry',
    question: 'If tooth present with ICDAS code 3-4, what should be written on dental chart?',
    options: [
      { id: 'a', text: 'A (blue)' },
      { id: 'b', text: 'A (red)' },
      { id: 'c', text: 'B (red)' },
      { id: 'd', text: 'B (blue)' }
    ],
    correctAnswer: 'd',
    explanation: 'Localized enamel breakdown and underlying dentin shadow (ICDAS 3-4) are charted as B (blue)[cite: 2].'
  },
  {
    id: 29,
    category: 'Operative Dentistry',
    question: 'Diagnosis of fracture: what special test is used?',
    options: [
      { id: 'a', text: 'Thermal test' },
      { id: 'b', text: 'Electric pulp test' },
      { id: 'c', text: 'Transillumination' },
      { id: 'd', text: 'tooth biting sloot' }
    ],
    correctAnswer: 'd',
    explanation: 'A Tooth Slooth (biting test device) is specifically designed to reproduce pain and locate tooth fractures[cite: 2].'
  },
  {
    id: 30,
    category: 'Operative Dentistry',
    question: 'ICDAS Radiograph system (proximal): code 1',
    options: [
      { id: 'a', text: 'Radiolucency in outer-half of enamel' },
      { id: 'b', text: 'Radiolucency in inner-half of enamel' },
      { id: 'c', text: 'Radiolucency into dentin' },
      { id: 'd', text: 'No radiolucency' }
    ],
    correctAnswer: 'a',
    explanation: 'Radiographic ICDAS code 1 is defined as radiolucency confined to the outer half of enamel[cite: 2].'
  },
  {
    id: 31,
    category: 'Operative Dentistry',
    question: 'What is the most common oral cancer?',
    options: [
      { id: 'a', text: 'Adenocarcinoma' },
      { id: 'b', text: 'Squamous cell carcinoma' },
      { id: 'c', text: 'Melanoma' },
      { id: 'd', text: 'Lymphoma' }
    ],
    correctAnswer: 'b',
    explanation: 'Squamous cell carcinoma accounts for over 90% of all oral malignancies[cite: 2].'
  },
  {
    id: 32,
    category: 'Operative Dentistry',
    question: 'Please choose a correct meaning for symbol in the picture?',
    options: [
      { id: 'a', text: 'Amalgam restoration' },
      { id: 'b', text: 'Composite restoration' },
      { id: 'c', text: 'Recurrent caries only' },
      { id: 'd', text: 'Composite Filling with recurrent caries' }
    ],
    correctAnswer: 'd',
    explanation: 'Green outline with red cross-hatching symbolizes an existing composite restoration with recurrent caries[cite: 2].'
  },
  {
    id: 33,
    category: 'Operative Dentistry',
    question: 'Basic Periodontal Examination: code 3',
    options: [
      { id: 'a', text: 'Pocket depth < 3.5mm' },
      { id: 'b', text: 'Pocket depth > 5.5mm' },
      { id: 'c', text: 'Furcation involvement' },
      { id: 'd', text: 'Pocket dept 3.5-5.5mm' }
    ],
    correctAnswer: 'd',
    explanation: 'BPE code 3 indicates shallow periodontal pockets measuring 3.5 to 5.5 mm[cite: 2].'
  },
  {
    id: 34,
    category: 'Operative Dentistry',
    question: "Stensen's duct is",
    options: [
      { id: 'a', text: 'Duct of parotid gland' },
      { id: 'b', text: 'Duct of submandibular gland' },
      { id: 'c', text: 'Duct of sublingual gland' },
      { id: 'd', text: 'Minor salivary gland duct' }
    ],
    correctAnswer: 'a',
    explanation: "Stensen's duct is the major excretory duct of the parotid salivary gland[cite: 2]."
  },
  {
    id: 35,
    category: 'Operative Dentistry',
    question: 'What is the purpose of using cold test?',
    options: [
      { id: 'a', text: 'Periapical status' },
      { id: 'b', text: 'pulpal status' },
      { id: 'c', text: 'Crack line presence' },
      { id: 'd', text: 'Periodontal ligament health' }
    ],
    correctAnswer: 'b',
    explanation: 'Cold testing evaluates pulpal sensory response and vitality[cite: 2].'
  },
  {
    id: 36,
    category: 'Operative Dentistry',
    question: 'Why is care plan necessary? All are true except one.',
    options: [
      { id: 'a', text: 'To prioritize treatment sequence' },
      { id: 'b', text: 'to make it easy for collect payment' },
      { id: 'c', text: 'To organize comprehensive care' },
      { id: 'd', text: 'To improve patient communication' }
    ],
    correctAnswer: 'b',
    explanation: 'Care planning serves clinical and patient management goals, not financial payment collection convenience[cite: 2].'
  },
  {
    id: 37,
    category: 'Operative Dentistry',
    question: 'Basic Periodontal Examination: furcation involvement Symbol',
    options: [
      { id: 'a', text: 'C' },
      { id: 'b', text: 'F' },
      { id: 'c', text: '#' },
      { id: 'd', text: '*' }
    ],
    correctAnswer: 'd',
    explanation: 'An asterisk (*) symbol in BPE indicates furcation involvement or a pocket depth >= 6mm[cite: 2].'
  },
  {
    id: 38,
    category: 'Operative Dentistry',
    question: 'What is the treatment for White spots?',
    options: [
      { id: 'a', text: 'Class I Composite' },
      { id: 'b', text: 'Crown' },
      { id: 'c', text: 'Amalgam restoration' },
      { id: 'd', text: 'Apply tooth mouse' }
    ],
    correctAnswer: 'd',
    explanation: 'Non-cavitated white spot lesions are treated non-invasively using remineralizing agents like Tooth Mousse (CPP-ACP)[cite: 2].'
  },
  {
    id: 39,
    category: 'Operative Dentistry',
    question: 'Caries risk assessment: Extreme risk mean',
    options: [
      { id: 'a', text: 'Low risk + 1 active cavity' },
      { id: 'b', text: 'Moderate risk + dry mouth' },
      { id: 'c', text: 'High risk+ Severe salivary gland hypofunction' },
      { id: 'd', text: 'Multiple cavities without dry mouth' }
    ],
    correctAnswer: 'c',
    explanation: 'Extreme caries risk classification combines high caries risk with severe salivary gland hypofunction (hyposalivation)[cite: 2].'
  },
  {
    id: 40,
    category: 'Operative Dentistry',
    question: 'ICDAS visual system (occlusal): code 2',
    options: [
      { id: 'a', text: 'First visual change in enamel' },
      { id: 'b', text: 'Distinct visual change in enamel' },
      { id: 'c', text: 'Localized enamel breakdown' },
      { id: 'd', text: 'Underlying dark shadow' }
    ],
    correctAnswer: 'b',
    explanation: 'ICDAS visual code 2 corresponds to a distinct visual change visible on a wet and dry tooth surface[cite: 2].'
  },
  {
    id: 41,
    category: 'Operative Dentistry',
    question: 'Interpretation of Plaque index: Fair hygiene',
    options: [
      { id: 'a', text: 'Score 0' },
      { id: 'b', text: 'Score 0.1-0.9' },
      { id: 'c', text: 'Score 2.0-3.0' },
      { id: 'd', text: 'Score 1.0-1.9' }
    ],
    correctAnswer: 'd',
    explanation: 'A plaque index mean score ranging from 1.0 to 1.9 indicates fair oral hygiene[cite: 2].'
  },
  {
    id: 42,
    category: 'Operative Dentistry',
    question: 'Oral cancer screening should include in periodic examination. True or False?',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' }
    ],
    correctAnswer: 'a',
    explanation: 'Oral cancer screening is an essential routine component of periodic dental examinations[cite: 2].'
  },
  {
    id: 43,
    category: 'Operative Dentistry',
    question: 'Please choose a correct meaning for symbol in the picture?',
    options: [
      { id: 'a', text: 'Surfacing' },
      { id: 'b', text: 'Sealant' },
      { id: 'c', text: 'Sensitivity' },
      { id: 'd', text: 'Scaling' }
    ],
    correctAnswer: 'b',
    explanation: 'The letter S charted on the occlusal surface represents a pit and fissure sealant[cite: 2].'
  },
  {
    id: 44,
    category: 'Operative Dentistry',
    question: 'ICDAS Radiograph system (proximal): code 3',
    options: [
      { id: 'a', text: 'Radiolucency in enamel' },
      { id: 'b', text: 'Radiolucency reaching middle 1/3 dentin' },
      { id: 'c', text: 'Radiolucency into pulp' },
      { id: 'd', text: 'Radiolucency limit to outer 1/3 of dentin' }
    ],
    correctAnswer: 'd',
    explanation: 'Radiographic ICDAS code 3 indicates radiolucency penetrating into the outer third of dentin[cite: 2].'
  },
  {
    id: 45,
    category: 'Operative Dentistry',
    question: 'ICDAS visual system (occlusal): code 6',
    options: [
      { id: 'a', text: 'Distinct cavity with visible dentin' },
      { id: 'b', text: 'Extensive distinct cavity with visible dentin' },
      { id: 'c', text: 'Localized enamel breakdown' },
      { id: 'd', text: 'First visual change' }
    ],
    correctAnswer: 'b',
    explanation: 'ICDAS visual code 6 represents an extensive distinct cavity involving more than half of the tooth surface[cite: 2].'
  },
  {
    id: 46,
    category: 'Operative Dentistry',
    question: "British standard institute's classification is used for identify molar relationship. True or false?",
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' }
    ],
    correctAnswer: 'b',
    explanation: 'British Standards Institute classification classifies incisor relationships, not molar relationships[cite: 2].'
  },
  {
    id: 47,
    category: 'Operative Dentistry',
    question: 'ICDAS visual system (occlusal): code 3',
    options: [
      { id: 'a', text: 'First visual change' },
      { id: 'b', text: 'Distinct visual change' },
      { id: 'c', text: 'Underlying dentin shadow' },
      { id: 'd', text: 'Localized enamel breakdown (Without clinical sign of dentinal involvement)' }
    ],
    correctAnswer: 'd',
    explanation: 'ICDAS visual code 3 denotes localized micro-cavitation/enamel breakdown without visible dentin[cite: 2].'
  },
  {
    id: 48,
    category: 'Operative Dentistry',
    question: 'ICDAS Radiograph system (proximal): code 4',
    options: [
      { id: 'a', text: 'Radiolucency in inner enamel' },
      { id: 'b', text: 'Radiolucency in outer 1/3 dentin' },
      { id: 'c', text: 'Radiolucency reaching to middle 1/3 of dentin' },
      { id: 'd', text: 'Radiolucency into pulp' }
    ],
    correctAnswer: 'c',
    explanation: 'Radiographic ICDAS code 4 represents radiolucency extending into the middle third of dentin[cite: 2].'
  },
  {
    id: 49,
    category: 'Operative Dentistry',
    question: 'Which of the following papillae specifically only found on lateral border of the tongue?',
    options: [
      { id: 'a', text: 'Filiform papillae' },
      { id: 'b', text: 'Fungiform papillae' },
      { id: 'c', text: 'foliate papillae' },
      { id: 'd', text: 'Circumvallate papillae' }
    ],
    correctAnswer: 'c',
    explanation: 'Foliate papillae exist as vertical folds restricted to the posterolateral margins of the tongue[cite: 2].'
  },
  {
    id: 50,
    category: 'Operative Dentistry',
    question: 'Please choose a correct meaning for symbol in the picture?',
    options: [
      { id: 'a', text: 'Post and core' },
      { id: 'b', text: 'Root canal treatment' },
      { id: 'c', text: 'Crown filling' },
      { id: 'd', text: 'Implant post' }
    ],
    correctAnswer: 'a',
    explanation: 'A crown outline connected to a post inside the root space symbolizes a post and core restoration[cite: 2].'
  },
  {
    id: 51,
    category: 'Operative Dentistry',
    question: 'Most common nerve found in dental pulp',
    options: [
      { id: 'a', text: 'A-beta fiber' },
      { id: 'b', text: 'A-delta fiber' },
      { id: 'c', text: 'C-fiber' },
      { id: 'd', text: 'Sympathetic fiber' }
    ],
    correctAnswer: 'b',
    explanation: 'A-delta fibers are the primary myelinated sensory nerve fibers located at the pulp-dentin border[cite: 2].'
  },
  {
    id: 52,
    category: 'Operative Dentistry',
    question: 'Interpretation of Plaque index: Good hygiene',
    options: [
      { id: 'a', text: 'score 0' },
      { id: 'b', text: 'score 1.0-1.9' },
      { id: 'c', text: 'score 0.1-0.9' },
      { id: 'd', text: 'score 2.0-3.0' }
    ],
    correctAnswer: 'c',
    explanation: 'A plaque index mean score from 0.1 to 0.9 indicates good oral hygiene[cite: 2].'
  },
  {
    id: 53,
    category: 'Operative Dentistry',
    question: 'ICDAS visual system (occlusal): code 1',
    options: [
      { id: 'a', text: 'first visual change in enamel' },
      { id: 'b', text: 'Distinct visual change in enamel' },
      { id: 'c', text: 'Enamel breakdown' },
      { id: 'd', text: 'Dentin cavity' }
    ],
    correctAnswer: 'a',
    explanation: 'ICDAS visual code 1 is characterized as the first visual change in enamel visible only after prolonged air drying[cite: 2].'
  },
  {
    id: 54,
    category: 'Operative Dentistry',
    question: 'Present of white spots, bottle feeding, visible caries are the risk factor and indicators for caries risk assessment. True or False?',
    options: [
      { id: 'a', text: 'True' },
      { id: 'b', text: 'False' }
    ],
    correctAnswer: 'a',
    explanation: 'White spots, early childhood bottle feeding, and clinical caries are primary indicators used in caries risk assessment[cite: 2].'
  }
];
