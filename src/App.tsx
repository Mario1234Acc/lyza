import { useState, useEffect, useMemo } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  BookOpen, 
  Sparkles, 
  Clock, 
  Flag, 
  Filter, 
  Layers, 
  ListCheck, 
  HelpCircle,
  RefreshCw
} from 'lucide-react';

const QUESTIONS_DATA = [
  {
    id: 1,
    question: "សំរាប់ការចាក់ Inferior Alveolar Nerve Block ត្រូវបានសំគាល់ដោយពាក្យ",
    options: [
      { id: 'a', text: "No Bone, No Injection" },
      { id: 'b', text: "Aspiration" },
      { id: 'c', text: "Inject Slowly" },
      { id: 'd', text: "All of above" }
    ],
    correctAnswer: 'd',
    explanation: "ការចាក់ IANB ត្រូវតែប៉ះឆ្អឹងមុននឹងចាក់ថ្នាំស្ពឹក (No Bone, No Injection) ដើម្បីចៀសវាងការចាក់ចូល Parotid Gland, ត្រូវ Aspirate បង្ការ intravascular injection, និងត្រូវ Inject slowly ដើម្បីកាត់បន្ថយការឈឺចាប់។"
  },
  {
    id: 2,
    question: "Management for poorly uncontrolled hyperthyroidism is",
    options: [
      { id: 'a', text: "Avoid Surgical procedure" },
      { id: 'b', text: "Refer to medical doctor" },
      { id: 'c', text: "Treat any acute infection" },
      { id: 'd', text: "All of above" }
    ],
    correctAnswer: 'd',
    explanation: "អ្នកជំងឺ Poorly controlled hyperthyroidism អាចប្រឈមនឹង Thyroid Storm។ ដូច្នេះត្រូវចៀសវាងការវះកាត់, បញ្ជូនទៅគ្រូពេទ្យឯកទេស, និងព្យាបាលការឆ្លងរោគស្រួចស្រាវភ្លាមៗ។"
  },
  {
    id: 3,
    question: "Pulpal injection can be used as a sole injection technique",
    options: [
      { id: 'a', text: "True" },
      { id: 'b', text: "False" }
    ],
    correctAnswer: 'b',
    explanation: "False: Pulpal injection ជាSupplemental/Adjunctive technique ប៉ុណ្ណោះ នៅពេលដែលចាក់ស្ពឹកតាមវិធីធម្មតាមិនទាន់ស្ពឹកល្អ ហើយទាមទារអោយមាន Exposure នៃ Pulpal chamber។"
  },
  {
    id: 4,
    question: "Maximum dose recommended for Articaine is",
    options: [
      { id: 'a', text: "7 mg/kg" },
      { id: 'b', text: "6.6 mg/kg" },
      { id: 'c', text: "6 mg/kg" },
      { id: 'd', text: "7.6 mg/kg" }
    ],
    correctAnswer: 'a',
    explanation: "តាមស្តង់ដារឱសថសាស្ត្រទន្តសាស្ត្រ (Malamed) កម្រិតអតិបរមា (Max dose) របស់ Articaine គឺ 7.0 mg/kg។"
  },
  {
    id: 5,
    question: "Mepivacaine អាចប្រើប្រាស់បានសំរាប់ស្ត្រីមានផ្ទៃពោះ",
    options: [
      { id: 'a', text: "True" },
      { id: 'b', text: "False" }
    ],
    correctAnswer: 'b',
    explanation: "False: Mepivacaine ស្ថិតក្នុង FDA Category C។ Lidocaine និង Prilocaine ស្ថិតក្នុង FDA Category B ដែលសុវត្ថិភាពជាងសម្រាប់ស្ត្រីមានផ្ទៃពោះ។"
  },
  {
    id: 6,
    question: "គុណសម្បត្តិរបស់ monofilament suture",
    options: [
      { id: 'a', text: "smooth surface" },
      { id: 'b', text: "no bacterial harbors" },
      { id: 'c', text: "stretch easily" },
      { id: 'd', text: "A and B" },
      { id: 'e', text: "A and C" }
    ],
    correctAnswer: 'd',
    explanation: "Monofilament suture មានផ្ទៃរលោង (smooth surface) និងមិនងាយទាក់ទាញបាក់តេរីឱ្យតោងទុំ (no/low bacterial harboring or wicking)។"
  },
  {
    id: 7,
    question: "តើការប្រើប្រាស់ថ្នាំស្ពឹក មានគោលបំណងអ្វី?",
    options: [
      { id: 'a', text: "Pain control" },
      { id: 'b', text: "Diagnosis" },
      { id: 'c', text: "Blood control" },
      { id: 'd', text: "All of above" }
    ],
    correctAnswer: 'd',
    explanation: "ថ្នាំស្ពឹកប្រើសម្រាប់៖ Pain control (បំបាត់ការឈឺចាប់), Diagnosis ( diagnostic block ដើម្បីកំណត់ប្រភពឈឺចាប់), និង Blood control (តាមរយៈ vasoconstrictor)។"
  },
  {
    id: 8,
    question: "The most use and frequent suturing technique is",
    options: [
      { id: 'a', text: "Interrupted suture" },
      { id: 'b', text: "Figure of Eight" },
      { id: 'c', text: "Continued suture" },
      { id: 'd', text: "Horizontal mattress suture" }
    ],
    correctAnswer: 'a',
    explanation: "Simple Interrupted Suture គឺជាបច្ចេកទេសដេរមុខរបួសដែលគេប្រើយ៉ាងទូលំទូលាយ និងញឹកញាប់បំផុតក្នុង Oral Surgery។"
  },
  {
    id: 9,
    question: "ប្រសិនបើមានអាឡែហ្ស៊ីពេលដែលក្មេងកំពុងចាក់ បង្ការពីការប្រើប្រាស់ថ្នាំស្ពឹក",
    options: [
      { id: 'a', text: "True" },
      { id: 'b', text: "False" }
    ],
    correctAnswer: 'a',
    explanation: "True: ប្រសិនបើមានសញ្ញា Allergic reaction ត្រូវបញ្ឈប់ការចាក់ និងចាត់វិធានការសង្គ្រោះបន្ទាន់ភ្លាមៗ។"
  },
  {
    id: 10,
    question: "ចំនួនថ្នាំស្ពឹកដែលអាចប្រើប្រាស់លើក្មេងទំងន់ 20kg ដោយចាក់ 1.8ml Cartridge of lidocaine 2% With Adrenaline 1: 100,000",
    options: [
      { id: 'a', text: "2 Cartridges" },
      { id: 'b', text: "3 Cartridges" },
      { id: 'c', text: "4 Cartridges" }
    ],
    correctAnswer: 'a',
    explanation: "កម្រិត Lidocaine សុវត្ថិភាពសម្រាប់កុមារ គឺ ~4.4 mg/kg។ 20 kg x 4.4 mg/kg = 88 mg។ 1 Cartridge (1.8ml 2%) មាន 36 mg។ 88 mg / 36 mg = 2.44 កែវ -> ចំនួនសុវត្ថិភាពអតិបរមាគឺ 2 Cartridges។"
  },
  {
    id: 11,
    question: "Articaine is recommended for Hypertensive patient",
    options: [
      { id: 'a', text: "True" },
      { id: 'b', text: "False" }
    ],
    correctAnswer: 'b',
    explanation: "False: Articaine ដែលមាន vasoconstrictor (Epinephrine 1:100k or 1:200k) ត្រូវប្រុងប្រយ័ត្នខ្ពស់ ឬចៀសវាងលើអ្នកជំងឺ Hypertensive ដែលមិនបានគ្រប់គ្រងសម្ពាធឈាមបានល្អ។"
  },
  {
    id: 12,
    question: "សំរាប់ការដកធ្មេញ Upper 1st Premolar យើងអាចប្រើប្រាស់បានចលនាទាំងអស់លើកលែងតែ",
    options: [
      { id: 'a', text: "Apical Pressure" },
      { id: 'b', text: "Buccal Pressure" },
      { id: 'c', text: "Palatal Pressure" },
      { id: 'd', text: "Rotational Pressure" },
      { id: 'e', text: "Tractional Force" }
    ],
    correctAnswer: 'd',
    explanation: "Upper 1st Premolar ជាទូទៅមាន ឬស២ (Buccal & Palatal) និងមានចុងឬសតូចស្រួច ការប្រើ Rotational Pressure (ចលនាបង្វិល) នឹងធ្វើឱ្យបាក់ឬសធ្មេញ! ដូច្នេះត្រូវហាមឃាត់។"
  },

  {
    id: 13,
    question: "Candidiasis is a disease which is possible caused from",
    options: [
      { id: 'a', text: "Well controlled diabetes" },
      { id: 'b', text: "Hypertension" },
      { id: 'c', text: "Human Immunodeficiency Virus" },
      { id: 'd', text: "Angina Pectoris" }
    ],
    correctAnswer: 'c',
    explanation: "Oral Candidiasis ញឹកញាប់កើតឡើងលើអ្នកជំងឺ Immunocompromised ដូចជាអ្នកឆ្លង HIV/AIDS។"
  },
  {
    id: 14,
    question: "Maximum dose recommended for Lidocaine is",
    options: [
      { id: 'a', text: "7 mg/kg" },
      { id: 'b', text: "6.6 mg/kg" },
      { id: 'c', text: "6 mg/kg" },
      { id: 'd', text: "7.6 mg/kg" }
    ],
    correctAnswer: 'a',
    explanation: "កម្រិតអតិបរមា (Max dose) Recommended របស់ Lidocaine with epinephrine គឺ 7.0 mg/kg (មិនឱ្យលើសពី 500mg)។"
  },
  {
    id: 15,
    question: "Upper Molar Extraction Forcep មានទ្រង់ទ្រាយសំប៉ែត និងមានធ្មេញពីរក្នុង ចំពុះវា",
    options: [
      { id: 'a', text: "True" },
      { id: 'b', text: "False" }
    ],
    correctAnswer: 'b',
    explanation: "False: Upper Molar forceps មានចំពុះខាង Buccal ស្រួចមួយសម្រាប់ចូល Bifurcation និងខាង Palatal រលោង (មិនមែនមានធ្មេញពីរ ឬសំប៉ែតទាំងសងខាងទេ)។"
  },
  {
    id: 16,
    question: "Dental Extraction is contra-indicated except",
    options: [
      { id: 'a', text: "Recent Myocardial Infarction" },
      { id: 'b', text: "Recent Angina Pectoris" },
      { id: 'c', text: "Blood related diseases" },
      { id: 'd', text: "Well control hypertension" },
      { id: 'e', text: "All of above" }
    ],
    correctAnswer: 'd',
    explanation: "Well-controlled hypertension មិនមែនជា Contraindication ក្នុងការដកធ្មេញនោះទេ (អាចដកធ្មេញបានដោយសុវត្ថិភាព)។"
  },
  {
    id: 17,
    question: "វិធីសាស្ត្រក្នុងការឃាត់ឈាម កំឡុងពេលដកធ្មេញ",
    options: [
      { id: 'a', text: "Pressure gauze" },
      { id: 'b', text: "collagen sponge" },
      { id: 'c', text: "Tranexamic acid solution" },
      { id: 'd', text: "Suture" },
      { id: 'e', text: "All of above" }
    ],
    correctAnswer: 'e',
    explanation: "វិធីឃាត់ឈាមក្រោយដកធ្មេញរួមមាន៖ សង្កត់ប្រឡោះដកធ្មេញដោយ Gauze, ដាក់ Collagen sponge/Gelatamp, ប្រើ Tranexamic acid, និងការដេរភ្ជិត (Suture)។"
  },
  {
    id: 18,
    question: "Nasopalatine nerve block គឺចាក់សំរាប់ Anesthetize",
    options: [
      { id: 'a', text: "Buccal Tissue របស់ធ្មេញ anterior" },
      { id: 'b', text: "Palatal Tissue របស់ធ្មេញ anterior" },
      { id: 'c', text: "ធ្មេញ Premolars និង Molars" }
    ],
    correctAnswer: 'b',
    explanation: "Nasopalatine nerve block ធ្វើឱ្យស្ពឹក Palatal mucoperiosteum និង soft tissue នៃធ្មេញមុខ (ពី Canine ម្ខាងទៅ Canine ម្ខាងទៀត)។"
  },
  {
    id: 19,
    question: "Universal forcep N150 ត្រូវបានប្រើសំរាប់ដកធ្មេញ",
    options: [
      { id: 'a', text: "Maxilla incisors and Premolars" },
      { id: 'b', text: "All maxillary teeth" },
      { id: 'c', text: "Mandibular incisors and premolars" },
      { id: 'd', text: "All mandibular teeth" }
    ],
    correctAnswer: 'a',
    explanation: "Cryer / Universal Forcep #150 ប្រើប្រាស់សម្រាប់ដកធ្មេញលើ (Maxillary Incisors, Canines & Premolars)។ ចំណែក #151 ប្រើសម្រាប់ធ្មេញក្រោម។"
  },
  {
    id: 20,
    question: "ទោះបីជា អ្នកជំងឺធ្លាប់មានប្រវត្តិកើតជំងឺ Myocardial Infarction ក្នុងរយៈពេល 6 ខែមុនប្រវត្តិក៏ដោយ ការព្យាបាលធ្មេញនៅតែអាចធ្វើធម្មតា",
    options: [
      { id: 'a', text: "True" },
      { id: 'b', text: "False" }
    ],
    correctAnswer: 'b',
    explanation: "False: អ្នកជំងឺដែលទើបតែកើត Myocardial Infarction ក្នុងអំឡុង ៦ខែចុងក្រោយ ត្រូវពន្យារពេលព្យាបាលធ្មេញមិនបន្ទាន់ (Elective procedures) ជាដាច់ខាត។"
  },
  {
    id: 21,
    question: "គ្រប់ Nerve block injection គប្បីត្រូវធ្វើ aspiration",
    options: [
      { id: 'a', text: "True" },
      { id: 'b', text: "False" }
    ],
    correctAnswer: 'a',
    explanation: "True: ការ Aspirate មុនពេល Inject ថ្នាំស្ពឹកជាវិធានការចាំបាច់បំផុត ដើម្បីការពារកុំឱ្យចាក់ថ្នាំស្ពឹកចូលក្នុងសរសៃឈាម (Intravascular injection)។"
  },
  {
    id: 22,
    question: "Greater palatine nerve block គឺចាក់សំរាប់ Anesthetize",
    options: [
      { id: 'a', text: "Palatal tissue របស់ធ្មេញ Molars" },
      { id: 'b', text: "Buccal tissue របស់ធ្មេញ Molars" },
      { id: 'c', text: "ធ្មេញ Molars" }
    ],
    correctAnswer: 'a',
    explanation: "Greater Palatine Nerve Block ធ្វើឱ្យស្ពឹក Palatal soft tissue និងឆ្អឹងនៃធ្មេញ Molar & Premolar (មិនបានធ្វើឱ្យស្ពឹកតួធ្មេញ molar ទេ)។"
  },
  {
    id: 23,
    question: "Lidocaine ធ្វើ Metabolism នៅក្នុង",
    options: [
      { id: 'a', text: "ថ្លើម" },
      { id: 'b', text: "តម្រងនោម" },
      { id: 'c', text: "ឈាម" },
      { id: 'd', text: "All of above" }
    ],
    correctAnswer: 'a',
    explanation: "Lidocaine ជាប្រភេទ Amide local anesthetic ដែលត្រូវធ្វើ Metabolism ជាចម្បងនៅក្នុងថ្លើម (Liver) ដោយអង់ស៊ីម Hepatic microsomal enzymes។"
  },
  {
    id: 24,
    question: "If the root fractured is not infected and it is longer than 2mm, we can keep it the socket",
    options: [
      { id: 'a', text: "True" },
      { id: 'b', text: "False" }
    ],
    correctAnswer: 'b',
    explanation: "False: លក្ខខណ្ឌទុកចុងឬសបាក់ក្នុង socket បាន លុះត្រាតែវាមានទំហំតូចខ្លាំង (<2-3mm), មិនឆ្លងរោគ, និងស្ថិតជ្រៅក្នុងឆ្អឹង។ បើវែងជាង 2mm (longer than 2mm) ត្រូវតែប្រឹងប្រែងយកចេញ។"
  },
  {
    id: 25,
    question: "Tongue can also be anesthetized by Vazirani-Akinosi nerve block injection",
    options: [
      { id: 'a', text: "True" },
      { id: 'b', text: "False" }
    ],
    correctAnswer: 'a',
    explanation: "True: Vazirani-Akinosi (Closed-mouth) technique ធ្វើឱ្យស្ពឹក Inferior Alveolar, Lingual, និង Mylohyoid nerves ដូច្នេះអណ្តាត (Lingual nerve) នឹងស្ពឹកដែរ។"
  },

  {
    id: 26,
    question: "សំរាប់ការដកធ្មេញ Upper Anterior តើអ្នកជំងឺ Position របស់គាត់ប្រែមកខាងណា?",
    options: [
      { id: 'a', text: "Looking straight ahead" },
      { id: 'b', text: "Looking slightly turn to the operator" },
      { id: 'c', text: "Looking slightly turn to the left" }
    ],
    correctAnswer: 'a',
    explanation: "សម្រាប់ការដកធ្មេញមុខលើ (Upper Anterior teeth), ក្បាលរបស់អ្នកជំងឺត្រូវស្ថិតក្នុងទម្រង់ Straight ahead (មើលត្រង់ទៅមុខ)។"
  },
  {
    id: 27,
    question: "Lower premolar can also be anesthetized by long buccal nerve block injection",
    options: [
      { id: 'a', text: "True" },
      { id: 'b', text: "False" }
    ],
    correctAnswer: 'b',
    explanation: "False: Long Buccal Nerve ផ្គត់ផ្គង់តែ Buccal soft tissue របស់ Mandibular Molars ប៉ុណ្ណោះ។ Buccal tissue របស់ Premolars ត្រូវផ្គត់ផ្គង់ដោយ Mental Nerve។"
  },
  {
    id: 28,
    question: "LA Overdose អាចបង្កអោយមានគ្រោះថ្នាក់ដល់ជីវិតបាន",
    options: [
      { id: 'a', text: "True" },
      { id: 'b', text: "False" }
    ],
    correctAnswer: 'a',
    explanation: "True: Local Anesthetic Systemic Toxicity (LAST) អាចបង្កឱ្យមានការប្រកាច់ (Seizures), គាំងបេះដូង និងដង្ហើម ហើយអាចគ្រោះថ្នាក់ដល់ជីវិត។"
  },
  {
    id: 29,
    question: "សំរាប់ការយកចេញ Root fragment ដែលបានបាក់យើងអាចប្រើ",
    options: [
      { id: 'a', text: "Root tip picks" },
      { id: 'b', text: "Endodontic H file" },
      { id: 'c', text: "All of above" }
    ],
    correctAnswer: 'c',
    explanation: "ការយកចុងឬសបាក់តូចៗចេញ អាចប្រើប្រាស់ Root tip picks ឬ Endodontic Hedstrom (H) file ដោយរន្ធត់ចូលក្នុង Root canal ដើម្បីទាញចេញ។"
  },
  {
    id: 30,
    question: "1/100,000 Anesthetic agent (Slight Lidocaine 1.8ml) បើប្រើ Epinephrine 1:100,000 មានចំនួន",
    options: [
      { id: 'a', text: "34 mg" },
      { id: 'b', text: "36 mg" },
      { id: 'c', text: "68 mg" },
      { id: 'd', text: "54 mg" }
    ],
    correctAnswer: 'b',
    explanation: "ក្នុង 1.8ml Cartridge នៃ 2% Lidocaine មានបញ្រ្ចៀសជាតិ Lidocaine ចំនួន 20 mg/ml x 1.8 ml = 36 mg។"
  },
  {
    id: 31,
    question: "Caldwell-luc technique is to remove root/teeth in the sinus",
    options: [
      { id: 'a', text: "True" },
      { id: 'b', text: "False" }
    ],
    correctAnswer: 'a',
    explanation: "True: Caldwell-Luc procedure គឺជាវិធីសាស្ត្រវះកាត់បើក Maxillary sinus តាមខាង Anterior wall ដើម្បីយកឬសធ្មេញ ឬធ្មេញដែលជ្រោះចូលក្នុង Maxillary sinus មកក្រៅ។"
  },
  {
    id: 32,
    question: "សំរាប់ Pain and Anxiety control យើងអាចប្រើ",
    options: [
      { id: 'a', text: "General Anesthesia" },
      { id: 'b', text: "Local Anesthesia" },
      { id: 'c', text: "Sedation" },
      { id: 'd', text: "All of above" }
    ],
    correctAnswer: 'd',
    explanation: "គ្រប់វិធីទាំងអស់ (LA, Sedation, GA) សុទ្ធតែអាចប្រើសម្រាប់គ្រប់គ្រងការឈឺចាប់ និងការភ័យខ្លាច (Pain and Anxiety control) ក្នុងទន្តសាស្ត្រ។"
  },
  {
    id: 33,
    question: "សំរាប់ការចាក់ Long buccal nerve block យើងប្រើប្រាស់ LA ចំនួន",
    options: [
      { id: 'a', text: "0.2ml-0.5ml" },
      { id: 'b', text: "0.5ml-1ml" },
      { id: 'c', text: "1ml-1.5ml" },
      { id: 'd', text: "1 cartridge" }
    ],
    correctAnswer: 'a',
    explanation: "Long Buccal Nerve Block ត្រូវការថ្នាំស្ពឹកបរិមាណតិចតួចបំផុត គឺប្រមាណ 0.2 ml ទៅ 0.4 ml/0.5 ml (ប្រហែល 1/8 នៃ Cartridge)។"
  },
  {
    id: 34,
    question: "អ្នកជំងឺម្នាក់មានជំងឺលើសឈាម (Hypertension) តែគាត់មិនបានលាបថ្នាំតាមវេជ្ជបញ្ជា គាត់ត្រូវបានចាត់ចូលក្រុម ASA",
    options: [
      { id: 'a', text: "ASA II" },
      { id: 'b', text: "ASA III" },
      { id: 'c', text: "ASA IV" }
    ],
    correctAnswer: 'b',
    explanation: "Uncontrolled hypertension (ជំងឺលើសឈាមធ្ងន់ធ្ងរ ឬមិនបានលេបថ្នាំ) ត្រូវចាត់ថ្នាក់ចូលក្នុង ASA Physical Status III (Severe systemic disease)។"
  },
  {
    id: 35,
    question: "ស្រ្តីមានគភ៌ខែពោះនៅខែទី3អាចធ្វើការដកធ្មេញបានដូច អ្នកជំងឺទូទៅដែរ",
    options: [
      { id: 'a', text: "True" },
      { id: 'b', text: "False" }
    ],
    correctAnswer: 'b',
    explanation: "False: ត្រីមាសទី ១ (ខែទី៣) ជាកំឡុងពេល Organogenesis ងាយរងគ្រោះថ្នាក់បំផុត។ មិនត្រូវដកធ្មេញធម្មតាដូចទូទៅទេ គួរពន្យារពេលទៅត្រីមាសទី២ ឬក្រោយសម្រាល។"
  },
  {
    id: 36,
    question: "Surgical procedure can be performed in patient with poorly controlled diabetes",
    options: [
      { id: 'a', text: "True" },
      { id: 'b', text: "False" }
    ],
    correctAnswer: 'b',
    explanation: "False: ការវះកាត់ចំពោះ Poorly controlled diabetes ត្រូវបានហាមឃាត់ជាបណ្តោះអាសន្ន ដោយសារប្រឈមនឹងការឆ្លងរោគធ្ងន់ធ្ងរ និងរបួសមិនងាយជា។"
  },
  {
    id: 37,
    question: "សំរាប់ការចាក់ Inferior Alveolar Nerve Block វាអាចអោយស្ពឹក Tissueទាំងអស់លើកលែងតែ",
    options: [
      { id: 'a', text: "Tongue" },
      { id: 'b', text: "ធ្មេញពី Central Incisor ទៅ Molar" },
      { id: 'c', text: "Buccal Tissue របស់ Molar" },
      { id: 'd', text: "Mental Nerve" },
      { id: 'e', text: "None of above" }
    ],
    correctAnswer: 'c',
    explanation: "IANB មិនធ្វើឱ្យស្ពឹក Buccal Tissue របស់ Molar ទេ! ( Buccal tissue របស់ Molar ត្រូវផ្គត់ផ្គង់ដោយ Long Buccal Nerve)។"
  },
  {
    id: 38,
    question: "Buccal Advancement flap is used to",
    options: [
      { id: 'a', text: "Close Oro-antral communication" },
      { id: 'b', text: "Sinus floor augmentation" },
      { id: 'c', text: "Upper Third Molar Surgery" },
      { id: 'd', text: "All of above" }
    ],
    correctAnswer: 'a',
    explanation: "Buccal Advancement Flap គឺជាបច្ចេកទេសវះកាត់ចម្បងសម្រាប់ភ្ជិតប្រហោងតភ្ជាប់រវាងមាត់និង Sinus (Oro-Antral Communication / OAC)។"
  },
  {
    id: 39,
    question: "Maxillary tuberosity fracture is caused from",
    options: [
      { id: 'a', text: "Single and Isolated molar" },
      { id: 'b', text: "Excessive force" },
      { id: 'c', text: "Divergent root" },
      { id: 'd', text: "All of above" }
    ],
    correctAnswer: 'd',
    explanation: "កត្តាបង្កឱ្យមាន Fracture Maxillary Tuberosity រួមមាន៖ ធ្មេញ Molar នៅតែឯង (Isolated Molar), ការប្រើកម្លាំងដកខ្លាំងពេក, និងធ្មេញមានឬសកោងរីកធំ (Divergent roots)។"
  },
  {
    id: 40,
    question: "ជំងឺណាមួយដែលមិនបណ្តាលអោយមាន Xerostomia",
    options: [
      { id: 'a', text: "Diabetes" },
      { id: 'b', text: "Hypertension" },
      { id: 'c', text: "Human Immunodeficiency Virus (HIV)" },
      { id: 'd', text: "Myocardial Infarction" }
    ],
    correctAnswer: 'd',
    explanation: "Myocardial Infarction មិនមែនជាជំងឺដែលបណ្តាលឱ្យស្ងួតមាត់ (Xerostomia) ដោយផ្ទាល់នោះទេ។"
  },
  {
    id: 41,
    question: "មួយណាដែលមិនមែនជាគុណសម្បត្តិរបស់ multifilament suture",
    options: [
      { id: 'a', text: "good strength" },
      { id: 'b', text: "good handling" },
      { id: 'c', text: "bacterial harbors" },
      { id: 'd', text: "All of above" }
    ],
    correctAnswer: 'c',
    explanation: "Bacterial harbors (ការទាក់ទាញ និងផ្ដុំបាក់តេរី) គឺជា គុណវិបត្តិ (Disadvantage) របស់ Multifilament suture មិនមែនជាគុណសម្បត្តិឡើយ។"
  }
];

export default function App() {
  const [userAnswers, setUserAnswers] = useState<Record<number, string | undefined>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'step'
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [filterMode, setFilterMode] = useState('all'); // 'all', 'incorrect', 'correct', 'flagged'
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  // Timer logic
  useEffect(() => {
    let interval: number | undefined;
    if (isTimerRunning && !isSubmitted) {
      interval = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, isSubmitted]);

  // Format seconds to mm:ss
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle option selection
  const handleSelectOption = (questionId: number, optionId: string) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  // Handle toggle flag
  const toggleFlag = (questionId: number) => {
    setFlaggedQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(questionId)) {
        next.delete(questionId);
      } else {
        next.add(questionId);
      }
      return next;
    });
  };

  // Compute total answered
  const answeredCount = Object.keys(userAnswers).length;
  const totalQuestions = QUESTIONS_DATA.length;

  // Calculate score upon submission
  const scoreResults = useMemo(() => {
    let correctCount = 0;
    QUESTIONS_DATA.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    return { correctCount, percentage, total: totalQuestions };
  }, [userAnswers, isSubmitted]);

  // Handle submit
  const handleSubmit = () => {
    if (answeredCount < totalQuestions) {
      const confirmSubmit = window.confirm(
        `អ្នកបានឆ្លើយតែ ${answeredCount} ក្នុងចំណោម ${totalQuestions} សំណួរ។ តើអ្នកពិតជាចង់បញ្ជូន (Submit) ឥឡូវនេះមែនទេ?`
      );
      if (!confirmSubmit) return;
    }
    setIsSubmitted(true);
    setIsTimerRunning(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset quiz
  const handleReset = () => {
    if (window.confirm("តើអ្នកចង់ធ្វើលំហាត់សារជាថ្មីមែនទេ?")) {
      setUserAnswers({});
      setFlaggedQuestions(new Set());
      setIsSubmitted(false);
      setCurrentStepIndex(0);
      setTimeElapsed(0);
      setIsTimerRunning(true);
      setFilterMode('all');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const filteredQuestions = useMemo(() => {
    return QUESTIONS_DATA.filter((q) => {
      const isCorrect = userAnswers[q.id] === q.correctAnswer;
      const isFlagged = flaggedQuestions.has(q.id);

      if (filterMode === 'correct') return isCorrect && isSubmitted;
      if (filterMode === 'incorrect') return !isCorrect && isSubmitted;
      if (filterMode === 'flagged') return isFlagged;
      return true;
    });
  }, [userAnswers, isSubmitted, filterMode, flaggedQuestions]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased pb-12">
      {/* Header Bar */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 text-white p-2 rounded-xl shadow-md">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 leading-tight">
                Dental Surgery & Anesthesia Quiz
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                សំណួរត្រៀមប្រឡងដកធ្មេញ & ថ្នាំស្ពឹកទន្តសាស្ត្រ ({totalQuestions} សំណួរ)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Timer Badge */}
            <div className="flex items-center gap-1.5 bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-semibold">
              <Clock className="w-4 h-4 text-indigo-600" />
              <span>{formatTime(timeElapsed)}</span>
            </div>

            {/* Mode Switcher (List vs Step) */}
            {!isSubmitted && (
              <div className="hidden sm:flex bg-slate-100 p-1 rounded-lg border border-slate-200">
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all flex items-center gap-1 ${
                    viewMode === 'list'
                      ? 'bg-white text-indigo-600 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <ListCheck className="w-3.5 h-3.5" />
                  បញ្ជីទាំងអស់
                </button>
                <button
                  onClick={() => setViewMode('step')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all flex items-center gap-1 ${
                    viewMode === 'step'
                      ? 'bg-white text-indigo-600 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  ម្តងមួយសំណួរ
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-1.5">
          <div
            className="bg-indigo-600 h-full transition-all duration-300 ease-out"
            style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
          />
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 mt-6">
        {}
        {isSubmitted && (
          <div className="bg-white rounded-2xl p-6 mb-8 border border-slate-200 shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-extrabold shadow-inner ${
                    scoreResults.percentage >= 70
                      ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
                      : scoreResults.percentage >= 50
                      ? 'bg-amber-100 text-amber-700 border border-amber-300'
                      : 'bg-rose-100 text-rose-700 border border-rose-300'
                  }`}
                >
                  {scoreResults.percentage}%
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-slate-900">
                      លទ្ធផលប្រឡងរបស់អ្នក
                    </span>
                    {scoreResults.percentage >= 70 ? (
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" /> ជាប់ល្អប្រសើរ
                      </span>
                    ) : (
                      <span className="bg-rose-100 text-rose-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                        ត្រូវការខិតខំបន្ថែម
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 mt-1">
                    អ្នកឆ្លើយត្រូវ{' '}
                    <span className="font-bold text-emerald-600">
                      {scoreResults.correctCount}
                    </span>{' '}
                    ក្នុងចំណោម{' '}
                    <span className="font-bold text-slate-800">
                      {scoreResults.total}
                    </span>{' '}
                    សំណួរ (រៀបរាប់ និងបង្ហាញចម្លើយត្រឹមត្រូវខាងក្រោម)
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    រយៈពេលចំណាយ៖ {formatTime(timeElapsed)}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <button
                  onClick={handleReset}
                  className="flex-1 md:flex-initial flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all active:scale-95"
                >
                  <RefreshCw className="w-4 h-4" />
                  ធ្វើលំហាត់ឡើងវិញ
                </button>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> តម្រងមើល៖
              </span>
              {[
                { id: 'all', label: `ទាំងអស់ (${QUESTIONS_DATA.length})` },
                {
                  id: 'incorrect',
                  label: `ខុស (${
                    QUESTIONS_DATA.length - scoreResults.correctCount
                  })`
                },
                {
                  id: 'correct',
                  label: `ត្រូវ (${scoreResults.correctCount})`
                },
                {
                  id: 'flagged',
                  label: `ចំនាំទុក (${flaggedQuestions.size})`
                }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilterMode(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    filterMode === tab.id
                      ? 'bg-slate-900 text-white shadow'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Unsubmitted Top Stats & Controls */}
        {!isSubmitted && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4 text-sm text-slate-600">
              <div>
                ឆ្លើយរួច៖{' '}
                <span className="font-bold text-indigo-600">
                  {answeredCount}
                </span>{' '}
                / {totalQuestions}
              </div>
              <div className="h-4 w-px bg-slate-300" />
              <div>
                ចំណាំទុក (Flagged):{' '}
                <span className="font-bold text-amber-600">
                  {flaggedQuestions.size}
                </span>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4" />
              បញ្ជូនចម្លើយ (Submit)
            </button>
          </div>
        )}

        {}
        {!isSubmitted && viewMode === 'step' ? (
          /* STEP-BY-STEP MODE */
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
            {/* Question Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <span className="inline-block bg-indigo-50 text-indigo-700 font-bold text-xs px-3 py-1 rounded-full border border-indigo-200">
                សំណួរទី {currentStepIndex + 1} នៃ {totalQuestions}
              </span>
              <button
                onClick={() =>
                  toggleFlag(QUESTIONS_DATA[currentStepIndex].id)
                }
                className={`p-2 rounded-lg transition-all ${
                  flaggedQuestions.has(QUESTIONS_DATA[currentStepIndex].id)
                    ? 'bg-amber-100 text-amber-600'
                    : 'bg-slate-100 text-slate-400 hover:text-amber-500'
                }`}
                title="ចំណាំសំណួរនេះ"
              >
                <Flag className="w-4 h-4 fill-current" />
              </button>
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-6">
              {QUESTIONS_DATA[currentStepIndex].id}.{' '}
              {QUESTIONS_DATA[currentStepIndex].question}
            </h2>

            {/* Options List */}
            <div className="space-y-3 mb-8">
              {QUESTIONS_DATA[currentStepIndex].options.map((opt) => {
                const qId = QUESTIONS_DATA[currentStepIndex].id;
                const isSelected = userAnswers[qId] === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(qId, opt.id)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/50 text-indigo-900 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs uppercase ${
                          isSelected
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {opt.id}
                      </span>
                      <span className="text-sm sm:text-base font-medium">
                        {opt.text}
                      </span>
                    </div>
                    {isSelected && (
                      <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Step Navigation Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                disabled={currentStepIndex === 0}
                onClick={() => setCurrentStepIndex((prev) => prev - 1)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-40 disabled:pointer-events-none transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                ថយក្រោយ
              </button>

              <div className="text-xs text-slate-400 font-medium">
                {currentStepIndex + 1} / {totalQuestions}
              </div>

              {currentStepIndex < totalQuestions - 1 ? (
                <button
                  onClick={() => setCurrentStepIndex((prev) => prev + 1)}
                  className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow transition-all"
                >
                  បន្តទៅមុខ
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow transition-all"
                >
                  <Check className="w-4 h-4" />
                  បញ្ជូន
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredQuestions.length === 0 ? (
              <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 shadow-sm text-slate-500">
                <HelpCircle className="w-12 h-12 mx-auto text-slate-300 mb-3" />
                <p className="font-semibold text-lg">មិនមានសំណួរក្នុងតម្រងនេះទេ</p>
                <p className="text-xs text-slate-400 mt-1">
                  សូមជ្រើសរើសប្រភេទតម្រងផ្សេងទៀត។
                </p>
              </div>
            ) : (
              filteredQuestions.map((q) => {
                const selectedOpt = userAnswers[q.id];
                const isCorrect = selectedOpt === q.correctAnswer;
                const isFlagged = flaggedQuestions.has(q.id);

                return (
                  <div
                    key={q.id}
                    id={`q-${q.id}`}
                    className={`bg-white rounded-2xl p-6 border-2 transition-all shadow-sm ${
                      isSubmitted
                        ? isCorrect
                          ? 'border-emerald-300 bg-emerald-50/20'
                          : 'border-rose-300 bg-rose-50/20'
                        : selectedOpt
                        ? 'border-indigo-200'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {/* Header per question */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
                          សំណួរ {q.id}
                        </span>
                        {isSubmitted && (
                          <span
                            className={`text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 ${
                              isCorrect
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-rose-100 text-rose-800'
                            }`}
                          >
                            {isCorrect ? (
                              <>
                                <CheckCircle2 className="w-3.5 h-3.5" /> ត្រឹមត្រូវ
                              </>
                            ) : (
                              <>
                                <XCircle className="w-3.5 h-3.5" /> មិនត្រឹមត្រូវ
                              </>
                            )}
                          </span>
                        )}
                      </div>

                      {!isSubmitted && (
                        <button
                          onClick={() => toggleFlag(q.id)}
                          className={`p-1.5 rounded-lg transition-all ${
                            isFlagged
                              ? 'bg-amber-100 text-amber-600'
                              : 'text-slate-300 hover:text-amber-500 hover:bg-slate-100'
                          }`}
                          title="ចំណាំសំណួរនេះ"
                        >
                          <Flag className="w-4 h-4 fill-current" />
                        </button>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed mb-4">
                      {q.question}
                    </h3>

                    {/* Options list */}
                    <div className="grid grid-cols-1 gap-2.5">
                      {q.options.map((opt) => {
                        const isThisSelected = selectedOpt === opt.id;
                        const isThisCorrect = opt.id === q.correctAnswer;

                        let styleClasses =
                          'border-slate-200 hover:bg-slate-50 text-slate-700';

                        if (isSubmitted) {
                          if (isThisCorrect) {
                            styleClasses =
                              'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold ring-1 ring-emerald-400';
                          } else if (isThisSelected && !isThisCorrect) {
                            styleClasses =
                              'border-rose-400 bg-rose-50 text-rose-900 line-through opacity-80';
                          } else {
                            styleClasses =
                              'border-slate-200 opacity-60 text-slate-500';
                          }
                        } else if (isThisSelected) {
                          styleClasses =
                            'border-indigo-600 bg-indigo-50/60 text-indigo-900 font-semibold shadow-sm';
                        }

                        return (
                          <div
                            key={opt.id}
                            onClick={() => handleSelectOption(q.id, opt.id)}
                            className={`p-3.5 rounded-xl border-2 transition-all flex items-center justify-between cursor-pointer ${styleClasses}`}
                          >
                            <div className="flex items-center gap-3">
                              <span
                                className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs uppercase ${
                                  isSubmitted && isThisCorrect
                                    ? 'bg-emerald-600 text-white'
                                    : isSubmitted && isThisSelected && !isThisCorrect
                                    ? 'bg-rose-600 text-white'
                                    : isThisSelected
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-slate-100 text-slate-600'
                                }`}
                              >
                                {opt.id}
                              </span>
                              <span className="text-sm sm:text-base font-medium">
                                {opt.text}
                              </span>
                            </div>

                            {/* Status Icon */}
                            <div className="shrink-0 ml-2">
                              {isSubmitted ? (
                                isThisCorrect ? (
                                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                ) : isThisSelected ? (
                                  <XCircle className="w-5 h-5 text-rose-500" />
                                ) : null
                              ) : (
                                isThisSelected && (
                                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                                )
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation Box (Visible after submission) */}
                    {isSubmitted && q.explanation && (
                      <div className="mt-4 p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-indigo-900 block mb-0.5">
                            ពន្យល់បន្ថែម (Explanation):
                          </span>
                          {q.explanation}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        )}

        {/* Floating Bottom Action Bar for List Mode when not submitted */}
        {!isSubmitted && viewMode === 'list' && (
          <div className="fixed bottom-4 left-0 right-0 z-20 px-4">
            <div className="max-w-md mx-auto bg-slate-900/90 backdrop-blur-md text-white p-3 rounded-2xl shadow-xl flex items-center justify-between border border-slate-700">
              <div className="pl-3 text-xs">
                <span className="font-bold text-emerald-400">
                  {answeredCount}
                </span>{' '}
                នៃ {totalQuestions} ឆ្លើយរួច
              </div>
              <button
                onClick={handleSubmit}
                className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2 rounded-xl text-xs shadow transition-all active:scale-95 flex items-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                បញ្ជូនចម្លើយ
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}